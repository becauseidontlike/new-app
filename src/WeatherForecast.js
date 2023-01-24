import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);
function handleResponse(response) {

setForecast(response.data.daily);
setLoaded(true);
}

if (loaded) {
return (
        <div className="WeatherForecast">
            <br /><br /><br /><br /><br /><br />
            <div className="row">
         {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
            return(
                <div className="col-2" key={index}>
                <ForecastDay data={dailyForecast} /></div>
            );}
         })}
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