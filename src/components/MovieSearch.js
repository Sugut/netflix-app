import React from 'react'
import{useParams} from "react-router-dom"

function MovieSearch({movies}) {
    const{movieSearch}=useParams()
    const imgApi="https://image.tmdb.org/t/p/w500/"
    const movie=movies.find(object=>movieSearch===object.title)
     console.log(movie)
  return (
    <div className="movieImages">{movieSearch}
    <img src={imgApi+ movie.poster_path} alt="movie"/>
    <p>overview:{movie.overview}</p>
    <p>popularity:{movie.popularity}</p>
    <p>votes:{movie.vote_average}</p>
    <p>language:{movie.original_language}</p>
    </div>
  )
}

export default MovieSearch