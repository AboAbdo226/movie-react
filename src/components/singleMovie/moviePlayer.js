import React from 'react'
import { useParams } from 'react-router'
import "../../style/css/singleMovie.css";
export default function MoviePlayer() {
    const {movieName}=useParams();
    return (
        <div className="movie_player">
            <h1>{movieName}</h1>
            <video src={require("../../style/imgs/yt1s.com - Stay High  Tove Lo  Against The Current Cover_480p.mp4").default}
            type="video/mp4" controls width="772px"></video>
        </div>
    )
}
