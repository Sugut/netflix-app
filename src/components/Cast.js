import React from "react"

function Cast({casts}){
    const castImg="https://image.tmdb.org/t/p/w500"
    return(
        <div className="movies">
        {casts.map(cast=>{
        return (
            <div className="movieList" key ={cast.id}>
                <img className="moviesImage" src ={castImg + cast.profile_path} alt="cast" /> 
                <div className="movie-info">
                    <h1>name:  {cast.name}</h1> 
                    <p>popularity:  {cast.popularity}</p>
                </div>
            </div>
        )
        })};   
    </div>
    )
 }
 
 export default Cast;