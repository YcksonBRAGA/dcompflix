import React from "react";
import './Video.css';

const Video = ({showVideo}) => {
    return (
        <div className="ytVideo" style={{display: showVideo ? 'block' : 'none'}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OrDaNtpHqak" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    );
}

export default Video;