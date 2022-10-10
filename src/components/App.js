import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from "react";
import { Route, Routes} from "react-router-dom";

function App() {
  const[movies, setMovies]=useState([])
  const [search, setSearch]= useState("")

  const searchApi="https://api.themoviedb.org/3/search/movie?api_key=1bb8166c24cb38120e165753855c0acc&query="

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=1bb8166c24cb38120e165753855c0acc")
    .then(r=>  r.json())
    .then(data=> setMovies(data.results))
 },[])
 function handleChange(e){
  setSearch(e.target.value)
}
  return (
    <div className="App">
      <Navbar />
      <Search search={search} handleSubmit={handleSubmit} handleChange={handleChange} setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/movies" element={<MovieList movies={movies} setMovies={setMovies}/> } />
        <Route path="/tvshows" element={<TvShows shows={shows}/>} />
        <Route path="/casts" element={<Cast casts={casts}/>} /> 
        <Route path="/trending" element={<Trending trends={trends}/>}/>
      </Routes>
    </div>
  );
}

export default App;
