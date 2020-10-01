import React, { useState } from "react"
import FormatedDate from "./FormatedDate"
import axios from "axios";
import "./Weather.css"


export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {


        setWeatherData({
            ready: true,
            city: props.defaultCity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
        });

    }
    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form className="search-form">
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" />

                        </div>
                        <div className="col-3">
                            <input input="submit" value="Search" className="btn btn-secondary w-100" />

                        </div>
                    </div>
                </form>

                <h1>{weatherData.city}</h1>
                <ul className="weather-today">
                    <li>
                        <FormatedDate date={weatherData.date} />
                    </li>
                    <li className="text-capitalize">
                        {weatherData.description}
                    </li>
                </ul>
                <div className="today-weather-specs">

                    <div className="row">
                        <div className="col-6">
                            <img
                                src={weatherData.iconUrl}
                                alt={weatherData.description} className="today-icon"
                            />
                            <span className="temperature">{Math.round(weatherData.temperature)}
                            </span><span className="unit">°C</span>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    Humidity: {weatherData.humidity}%
    </li>
                                <li>
                                    Wind: {weatherData.wind} km/h
    </li>
                            </ul>
                        </div>
                    </div>
                </div>



            </div >
        )
    } else {
        const apiKey = "667b3c2d5276fd8b0274db2abae287d7";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return "Loading..."
    }



}