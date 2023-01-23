import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

export default function Weather(){
    return (
    <div className="Weather">
        <div className="container">
            <form>
             <div className="row">
                <div className="col-8">
                <input type="search" placeholder="Search for a city..." className="form-control" autoFocus="on" />
                </div> 
                <div className="col-2">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                <div className="col-2">
                <input type="submit" value="Current" className="btn btn-primary w-100" />
                </div>
             </div>
            </form>
            <h1>Kraków</h1>
            <ul>
                <li>Monday 11:40</li>
                <li>Mostly cloudly</li>
            </ul>
            <div className="row mt-4">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="weather-icon"></img>
               <span className="temperature">-5</span><span className="unit">℃</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 15%</li>
                        <li>Humidity: 30%</li>
                        <li>Wind: 3 m/s</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}