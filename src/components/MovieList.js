import React from "react";
import { useNavigate } from "react-router-dom";


function MovieList({movies}){
   const imgApi="https://image.tmdb.org/t/p/w500/"
   const movieNav= useNavigate()
   
      return(
        <div className="movies">
        {movies.map(movie=>{
        return (
            <div className="movieList" key ={movie.id}>
                <img className="moviesImage" src ={imgApi+movie.poster_path} alt="movie" onClick={()=>{movieNav("./" + movie.title)}}/> 
                <div className="movie-info">
                    <h1>{movie.title}</h1> 
                    <p>{movie.release_date}</p>
                </div>   
                <div className="overlay d-flex align-items-center 
                justify-content-center">
                    <h1>Overview</h1>
                    <p>{movie.overview}</p>
                </div>            
            </div>
        )
        })};   
    </div>
    )
}

export default MovieList;