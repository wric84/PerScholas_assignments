import React, {useState, useEffect} from 'react'
import Nav from './Nav'
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom'
import Flashcard from './flashcardList'
import Translate from './translate'
import Logout from './logout'
import FlashcardCategory from './flashcardList'
import Login from './Login'
import './App.css';

const PageNotFound =()=>(
  <div>404! - <Link to='/'></Link></div>
)

const api = {
	key: 'c79a28cc980380375d07d04be4842640',
	base: 'http://api.openweathermap.org/data/2.5/'
}
function Home() {
	const [query, setQuery] = useState('');
	const [weather, setWeather] = useState({});
  
	const search = evt => {
	  if (evt.key === "Enter") {
		fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
		  .then(res => res.json())
		  .then(result => {
			setWeather(result);
			setQuery('');
			console.log(result);
		  });
	  }
	}
	useEffect(() =>{
		fetch(`${api.base}weather?q=Leeuwarden&units=metric&APPID=${api.key}`)
		  .then(res => res.json())
		  .then(result => {
			setWeather(result);
			setQuery('');
			console.log(result);
		  });
	},[])
  
	const dateBuilder = (d) => {
	  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
	  let day = days[d.getDay()];
	  let date = d.getDate();
	  let month = months[d.getMonth()];
	  let year = d.getFullYear();
  
	  return `${day} ${date} ${month} ${year}`
	}
  
	return (
	  <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'home' : 'home rain') : 'home rain'}>
		<main>
		  <div className="search-box">
			<input 
			  type="text"
			  className="search-bar"
			  placeholder="Search..."
			  onChange={e => setQuery(e.target.value)}
			  value={query}
			  onKeyPress={search}
			/>
		  </div>
		  {(typeof weather.main != "undefined") ? (
		  <div>
			<div className="location-box">
			  <div className="location">{weather.name}, {weather.sys.country}</div>
			  <div className="date">{dateBuilder(new Date())}</div>
			</div>
			<div className="weather-box">
			  <div className="temp">
				{Math.round(weather.main.temp)}°c
			  </div>
			  <div className="weather">{weather.weather[0].main}</div>
			</div>
		  </div>
		  ) : ('')}
		</main>
	  </div>
	);
  }

  export default Home
