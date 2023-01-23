import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather(){
    return (
        <div className="Weather">
            <form>
             <div className="row">
                <div className="col-9">
                <input type="search" placeholder="Search for a city..." classname="form-control" />
                </div> 
                <div className="col-3>">
                <input type="submit" value="Search" className="btn btn-primary" /></div>
             </div>
            </form>
            <h1>Kraków</h1>
            <ul>
                <li>Monday 11:40</li>
                <li>Mostly cloudly</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="weather-icon"></img>
               -5℃
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
    )
}