import React from "react";
import "./WeatherForecast.css";
import axios from "axios";
import Info from "./Info";

export default function WeatherForecast(props) {

function handleResponse(response) {
console.log(response);
}


let lat = props.coord.lat;
let lon = props.coord.lon;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=50fa4024e3b1d5eac2f51ab18a47e997&units=metric`;

axios.get(apiUrl).then(handleResponse);

return (
        <div className="WeatherForecast">
            <br /><br /><br /><br /><br /><br />
            <div className="row">
            <div className="col-2">
                <div className="forecastday">WED</div>
                <div className="forecasticon">icon</div>
                <div className="forecasttemp"><span className="tempmax">19° |</span><span className="tempmin"> 5°</span></div>
            </div>
            <div className="col-2">
                <div className="forecastday">THU</div>
                <div className="forecasticon">icon</div>
                <div className="forecasttemp"><span className="tempmax">19° |</span><span className="tempmin"> 5°</span></div>
            </div>
            <div className="col-2">
                <div className="forecastday">FRI</div>
                <div className="forecasticon">icon</div>
                <div className="forecasttemp"><span className="tempmax">19° |</span><span className="tempmin"> 5°</span></div>
            </div>
            <div className="col-2">
                <div className="forecastday">SAT</div>
                <div className="forecasticon">icon</div>
                <div className="forecasttemp"><span className="tempmax">19° |</span><span className="tempmin"> 5°</span></div>
            </div>
            <div className="col-2">
                <div className="forecastday">SUN</div>
                <div className="forecasticon">icon</div>
                <div className="forecasttemp"><span className="tempmax">19° |</span><span className="tempmin"> 5°</span></div>
            </div>
            <div className="col-2">
                <div className="forecastday">MON</div>
                <div className="forecasticon">icon</div>
                <div className="forecasttemp"><span className="tempmax">19° |</span><span className="tempmin"> 5°</span></div>
            </div>
        
            </div>    
        </div>
    );
}