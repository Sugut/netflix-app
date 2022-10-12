import React from "react";
import { useNavigate } from "react-router-dom";

function TvShows({shows}){
    
    const imgUrl="https://image.tmdb.org/t/p/w500"
    const tvNav= useNavigate()
      return(
        <div className="movies">
        {shows.map(show=>{
        return (
            <div className="movieList" key ={show.id}>
                <img className="movieImage" src ={imgUrl+show.poster_path} alt="show" onClick={()=>{tvNav("./" + show.name)}}/> 
                <div className="movie-info">
                    <h1>{show.name}</h1> 
                    <p>{show.first_air_date}</p>
                </div>
                <div className="overlay d-flex align-items-center 
                justify-content-center">
                    <h1>Overview</h1>
                    <p>{show.overview}</p>
                </div>  
            </div>
        )
        })};   
    </div>
    )
}

export default TvShows;