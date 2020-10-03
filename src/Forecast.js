import React, { useState } from "react";
import ForecastPreview from "./ForecastPreview";
import axios from "axios";
import './Forecast.css';

export default function Forecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecastResponde(response) {
        setForecast(response.data);
        setLoaded(true);
    }

    if (loaded && props.city === forecast.city.name) {
        return (
            <div className="Forescast row">
                {forecast.list.slice(0, 5).map(function (forecastItem) {
                    return <ForecastPreview data={forecastItem} />
                })}


            </div >
        )
    } else {
        const apiKey = "667b3c2d5276fd8b0274db2abae287d7";
        let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleForecastResponde)
        return null;
    }


}