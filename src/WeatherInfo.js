import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";



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
                        <div className="float-left">
                            <WeatherIcon code={props.data.iconUrl} />
                        </div>
                        <div className="float-left">
                            <Temperature celcius={props.data.temperature} />
                        </div>
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