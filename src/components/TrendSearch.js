import React from 'react'
import{useParams} from "react-router-dom"

function MovieSearch({trends}) {
    const{trendSearch}=useParams()
    const imgApi="https://image.tmdb.org/t/p/w500/"
    const trendMov=trends.find(object=>trendSearch===object.title)
     
  return (
    <div className="movieImages">{trendSearch}
    <img src={imgApi+ trendMov.poster_path} alt="movie"/>
    <p>overview:{trendMov.overview}</p>
    <p>popularity:{trendMov.popularity}</p>
    <p>votes:{trendMov.vote_average}</p>
    <p>language:{trendMov.original_language}</p>
    </div>
  )
}

export default MovieSearch