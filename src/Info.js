import React from "react";
import DateFormat from "./DateFormat";

export default function Info(props){
    return(
    <div className="Info">
           <h1>{props.dataInfo.city}</h1>
            <ul>
                <li><DateFormat date={props.dataInfo.date} /></li>
                <li className="text-capitalize">{props.dataInfo.description}</li>
            </ul>
            <div className="row mt-4">
                <div className="col-6">
                    <img src={props.dataInfo.icon} alt={props.dataInfo.description}></img>
               <span className="temperature">{Math.round(props.dataInfo.temperature)}</span><span className="unit">℃</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {props.dataInfo.humidity}%</li>
                        <li>Wind: {props.dataInfo.wind} m/s</li>
                    </ul>
                </div>
            </div>
     </div>
    );
}