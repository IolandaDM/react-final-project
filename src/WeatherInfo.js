import React from "react";
import FormatedDate from "./FormatedDate";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <ul className="weather-today">
                <li>
                    <FormatedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">
                    {props.data.description}
                </li>
            </ul>
            <div className="today-weather-specs">

                <div className="row">
                    <div className="col-6">
                        <img
                            src={props.data.iconUrl}
                            alt={props.data.description} className="today-icon"
                        />
                        <span className="temperature">{Math.round(props.data.temperature)}
                        </span><span className="unit">°C</span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>
                                Humidity: {props.data.humidity}%
    </li>
                            <li>
                                Wind: {props.data.wind} km/h
    </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )


}