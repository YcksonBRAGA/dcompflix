import React from "react";
import './FeaturedMovie.css';

const FeaturedMovie = ({item}) =>{
    const firstDate = new Date(item.first_air_date);
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>

            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons > 1 ? 's' : ''}</div>
                        <div className="featured--description">{item.overview}</div>
                        <div className="featured--buttons">
                            <a href="https://google.com" className="featured--watchButton">⏵ Assistir</a>    
                            <a href="http://google.com" className="featured--myListButton">+ Minha Lista</a>
                        </div>
                        <div className="featured--genres"><strong>Gêneros:</strong> {item.genres.map((now)=>now.name).join(', ')}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedMovie;