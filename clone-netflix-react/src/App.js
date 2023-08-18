import { useEffect, useState } from "react";
import React from 'react';
import tmdb from './tmdb';
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import Video from "./components/Video";
import './App.css';




const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  const [showVideo, setShowVideo] = useState(false);



 useEffect(()=>{
    const loadAll = async () => {
      //Pegando a lista total;
      const list = await tmdb.getHomeList();

      setMovieList(list);

      const chosenMovie = await tmdb.getBrend(list);
      const chosenMovieInfo = await tmdb.getMovieInfo(chosenMovie.id, 'tv');

      setFeaturedData(chosenMovieInfo);
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10){
        setBlackHeader(true);
      }
      else{
        setBlackHeader(false);
      }
    }

    document.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  } ,[]);


  return (
  <div className="page">
      <Video showVideo={showVideo} />
      <Header black={blackHeader} />


      {featuredData && <FeaturedMovie item={featuredData} setShowMovie={setShowVideo}/>}
      
      <section className="lists">
        {movieList.map((item, key)=>{
          return (
            <MovieRow key={key} title={item.title} items={item.items}/>
          )
        })}
      </section>
      <footer>
        Direitos de imagem para Netflix<br/>
        Informações do The Movie DB
      </footer>
  </div>);
}



export default App;