import React, { useState } from "react";
import './MovieRow.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const MovieRow = ({title, items}) => {

    const [scrollX, setScrollX] = useState(0);

    const leftArrow = () => {
        const x = scrollX + Math.round(window.innerWidth / 2);
        setScrollX(x > 0 ? 0 : x);
    }

    const rightArrow = () => {
        const listWidth = items.results.length * 150;
        const x = scrollX - Math.round(window.innerWidth / 2);;
        setScrollX((window.innerWidth - listWidth) > x ? (window.innerWidth - listWidth - 60) : x);
    }


    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left">
                <FontAwesomeIcon icon={faChevronLeft} style={{fontSize: '50px'}} onClick={leftArrow}/>
            </div>
            <div className="movieRow--right">
                <FontAwesomeIcon icon={faChevronRight} style={{fontSize: '50px'}} onClick={rightArrow}/>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=>{
                        return (
                            <div key={key} className="movieRow--item">
                                <img key={key} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title}></img>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


export default MovieRow;