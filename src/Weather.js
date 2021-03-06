import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            iconUrl: response.data.weather[0].icon,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
        });

    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function handleCityChange(event) {
        setCity(event.target.value);

    }
    function search() {
        const apiKey = "667b3c2d5276fd8b0274db2abae287d7";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit} className="search-form">
                    <div className="row">
                        <div className="col-9">
                            <input
                                type="search"
                                placeholder="Enter a city"
                                className="form-control"
                                autoFocus="on"
                                onChange={handleCityChange} />

                        </div>
                        <div className="col-3">
                            <input
                                type="submit"
                                value="Search"
                                className="btn btn-secondary w-100"
                            />

                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
                <Forecast city={weatherData.city} />

            </div >
        )
    } else {
        search();
        return "Loading...";
    }



}