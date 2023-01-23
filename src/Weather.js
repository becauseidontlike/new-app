import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "./Weather.css";

export default function Weather(){
const [weather, setWeather] = useState({ready: false});

function handleResponse(response) {
console.log(response.data);
setWeather({
    ready: true,
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    city: response.data.name,
    icon: response.data.weather[0].icon,
    description: response.data.weather[0].description,
    date: "MONDAY",
});
}

    
if (weather.ready) {
    return (
    <div className="Weather">
        <div className="container">
            <form>
             <div className="row">
                <div className="col-8">
                <input type="search" placeholder="Search for a city..." className="form-control" autoFocus="on" />
                </div> 
                <div className="col-2">
                <input type="submit" value="Search" className="btn btn-outline-secondary w-100" />
                </div>
                <div className="col-2">
                <input type="submit" value="Current" className="btn btn-outline-secondary  w-100" />
                </div>
             </div>
            </form>
            <h1>{weather.city}</h1>
            <ul>
                <li>{weather.date}</li>
                <li className="text-capitalize">{weather.description}</li>
            </ul>
            <div className="row mt-4">
                <div className="col-6">
                    <img src="http://openweathermap.org/img/wn/${weather.icon}@2x.png" alt={weather.description}></img>
               <span className="temperature">{Math.round(weather.temperature)}</span><span className="unit">℃</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {weather.humidity}%</li>
                        <li>Wind: {weather.wind} m/s</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
} else {
    let city = "Krakow";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c8161756616103589832909859e4f86&units=metric`
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
}
}