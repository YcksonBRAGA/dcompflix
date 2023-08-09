import { useEffect, useState } from "react";
import React from 'react';
import tmdb from './tmdb';
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";

import './App.css';


const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

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
  return (<div className="page">

      {featuredData && <FeaturedMovie item={featuredData}/>}
      
      <section className="lists">
        {movieList.map((item, key)=>{
          return (
            <MovieRow key={key} title={item.title} items={item.items}/>
          )
        })}
      </section>
  </div>);
}



export default App;