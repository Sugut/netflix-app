import React from "react";

function TvShows({shows}){
    
    const imgUrl="https://image.tmdb.org/t/p/w500"
      return(
        <div className="movies">
        {shows.map(show=>{
        return (
            <div className="movieList" key ={show.id}>
                <img className="movieImage" src ={imgUrl+show.poster_path} alt="show" /> 
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