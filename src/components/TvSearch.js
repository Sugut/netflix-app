import React from 'react'
import{useParams} from "react-router-dom"

function TvSearch({shows}) {
    const{tvSearch}=useParams()
    const imgApi="https://image.tmdb.org/t/p/w500/"
    const movieShow=shows.find(object=>tvSearch===object.name)
     console.log(movieShow)
  return (
    <div className="movieImages">{tvSearch}
    <img src={imgApi+ movieShow.poster_path} alt="movie"/>
    <p>overview:{movieShow.overview}</p>
    <p>popularity:{movieShow.popularity}</p>
    <p>votes:{movieShow.vote_average}</p>
    <p>language:{movieShow.original_language}</p>
    </div>
  )
}

export default TvSearch