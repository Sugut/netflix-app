import '../App.css';
import React,{useEffect, useState} from "react";
import { Route, Routes} from "react-router-dom";
import { Navbar } from "./Navbar";
import { data } from 'autoprefixer';
import Search from './Search';
import MovieList from './MovieList';
import TvShows from './TvShowList';
import Cast from "./Cast"
import Home from "./Home"
import Trending from './Trending';
import MovieSearch from './MovieSearch';
import TvSearch from './TvSearch';
import TrendSearch from './TrendSearch'
import Login from './Login';
import Signup from './Signup';

function App() {
  const[movies, setMovies]=useState([])
  const [search, setSearch]= useState("")
  const [shows, setShows]= useState([])
  const [casts, setCasts]= useState([])
  const [trends, setTrends]=useState([])
  const [user, setUser] = useState(null)
 

  const searchApi="https://api.themoviedb.org/3/search/movie?api_key=1bb8166c24cb38120e165753855c0acc&query="
   useEffect(()=>{
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=1bb8166c24cb38120e165753855c0acc")
      .then(r=>  r.json())
      .then(data=> setMovies(data.results))
   },[])
   function handleChange(e){
        setSearch(e.target.value)
   }
   function handleSubmit(e){
        e.preventDefault()

        if(search){
        fetch(searchApi + search)
        .then(r=>  r.json())
        .then(data=> setMovies(data.results))
        }
        setSearch("")
   }
   useEffect(()=>{
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=1bb8166c24cb38120e165753855c0acc")
    .then(r=>r.json())
    .then(data=> setShows(data.results))
        console.log(data)
   },[])
   useEffect(()=>{
     fetch("https://api.themoviedb.org/3/person/popular?api_key=1bb8166c24cb38120e165753855c0acc")
     .then(r=>r.json())
     .then(data=> setCasts(data.results))
   },[])
   useEffect(()=>{
    fetch("https://api.themoviedb.org/3/trending/all/day?api_key=1bb8166c24cb38120e165753855c0acc")
    .then(r=>r.json())
    .then(data=> setTrends(data.results))
  },[])
   
  return (
    <div className="app">    
      <Navbar />
      <Search search={search} handleSubmit={handleSubmit} handleChange={handleChange} setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/movies" element={<MovieList movies={movies} setMovies={setMovies}/> } />
        <Route path="/movies/:movieSearch" element={<MovieSearch movies={movies}/>}/>
        <Route path="/tvShows/:tvSearch" element={<TvSearch shows={shows}/>}/>
        <Route path="/trending/:trendSearch" element={<TrendSearch trends={trends} />}/>
        <Route path="/tvshows" element={<TvShows shows={shows}/>} />
        <Route path="/casts" element={<Cast casts={casts}/>} /> 
        <Route path="/trending" element={<Trending trends={trends}/>}/>
        <Route path='/login' element={<Login onLogin={setUser}/>} />
         <Route path='/signup' element={<Signup onLogin={setUser}/>} />
      </Routes>
    </div>  
  );
}

export default App;
