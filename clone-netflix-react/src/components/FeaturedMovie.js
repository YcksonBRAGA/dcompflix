import React from "react";
import './FeaturedMovie.css';

const FeaturedMovie = ({item, setShowMovie}) =>{
    const show  = () =>{
        setShowMovie(true);


    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://i.imgur.com/Pxmitul.png)`
        }}>

            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">Computação em Nuvem</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{2023}</div>
                        <div className="featured--seasons">1 temporada</div>
                        <div className="featured--description">Neste episódio empolgante do documentário, o Grupo 3 explora o mundo da computação em nuvem, revelando sua evolução desde os primórdios até sua crescente relevância nos dias de hoje. Com histórias de sucesso de empresas brasileiras, análises das principais plataformas como Amazon Web Services, Google Cloud e Microsoft Azure, e...</div>
                        <div className="featured--buttons">
                            <a href="#1" className="featured--watchButton" id="playButton" onClick={show}>⏵ Assistir</a>    
                            <a href="#1" className="featured--myListButton">+ Minha Lista</a>
                        </div>
                        <div className="featured--genres"><strong>Gêneros:</strong> Documentário</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedMovie;