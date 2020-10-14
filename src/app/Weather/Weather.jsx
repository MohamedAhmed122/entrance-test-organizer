import React, { useState } from 'react'
import SearchInput from '../Component/SearchInput/SearchInput.jsx';

import { fetchWeather } from './FetchAPI.js'

import './StyleWeather.css'

export default function Weather() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        }
    }


    return (
        <div>
           
            <div className="main-container">
                <h1>Search For Weather </h1>
                <SearchInput 
                placeholder='search...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
                />
                {weather.main && (
                    <div className="city">
                        <h2 className="city-name">
                            <span>{weather.name}</span>
                            <sup>{weather.sys.country}</sup>
                        </h2>
                        <div className="city-temp">
                            {Math.round(weather.main.temp)}
                            <sup>&deg;C</sup>
                        </div>
                        <div className="info">
                            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                            <p>{weather.weather[0].description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
