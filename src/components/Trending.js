import React from 'react'

function Trending({trends}) {
 
    const imgTrend="https://image.tmdb.org/t/p/w500"
      return(
        
        <div className="movies">
        {trends.map(trend=>{
        return (
            <div className="movieList" key ={trend.id}>
                <img className="movieImage" src ={imgTrend+trend.poster_path} alt="trend" /> 
                <div className="movie-info">
                    <h1>{trend.title}</h1> 
                    <p>{trend.release_date}</p>
                </div>
                <div className="overlay d-flex align-items-center 
                justify-content-center">
                    <h1>Overview</h1>
                    <p>{trend.overview}</p>
                </div>  
            </div>
        )
        })};  
        </div>
      )
        }


export default Trending