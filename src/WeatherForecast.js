import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import Info from "./Info";
import Weather from "./Weather";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);
function handleResponse(response) {
console.log(response);
setForecast(response.data.daily);
setLoaded(true);
}

if (loaded) {
    console.log(forecast);
return (
        <div className="WeatherForecast">
            <br /><br /><br /><br /><br /><br />
            <div className="row">
            <div className="col-2">
            <ForecastDay data={forecast[1]} /></div>
            <div className="col-2">
            <ForecastDay data={forecast[2]} /></div>
            <div className="col-2">
            <ForecastDay data={forecast[3]} /></div>
            <div className="col-2">
            <ForecastDay data={forecast[4]} /></div>  
            <div className="col-2">
            <ForecastDay data={forecast[5]} /></div>
            <div className="col-2">
            <ForecastDay data={forecast[6]} /></div>         
            </div>
        </div>    
    );
} else {
   
let lat = props.coord.lat;
let lon = props.coord.lon;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=3499ef150985eccadd080ff408a018df&units=metric`;

axios.get(apiUrl).then(handleResponse);
return "Loading...";
}
}