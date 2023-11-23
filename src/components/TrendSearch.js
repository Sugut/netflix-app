import React from 'react'
import{useParams} from "react-router-dom"

function MovieSearch({trends}) {
    const{trendSearch}=useParams()
    const imgTrend="https://image.tmdb.org/t/p/w500"
    const trendMov=trends.find(object=>trendSearch===object.title)
      console.log(trendMov)
  return (
    <div className="movieImages">{trendSearch}
    <img src={imgTrend + trendMov.poster_path} alt="shows"/>
    <p>overview:{trendMov.overview}</p>
    <p>popularity:{trendMov.popularity}</p>
    <p>votes:{trendMov.vote_average}</p>
    <p>language:{trendMov.original_language}</p>
    </div>
  )
}

export default MovieSearch