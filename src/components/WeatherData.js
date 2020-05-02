import React from "react"

const WeatherData = () => {
  return (
    <div className="weather-data">
      <p className="weather__tagline">Weather forecast for <span className="weather-data__city">Manchester, United Kingdom</span></p>
      <div className="weather-data__box">
        <span className="weather-data__property">
          <p className="weather-data__title">Temperature</p>
          <p className="weather-data__value">10°C</p>
        </span>
        <span className="weather-data__property">
          <p className="weather-data__title">Rain</p>
          <p className="weather-data__value">33%</p>
        </span>
        <span className="weather-data__property">
          <p className="weather-data__title">Wind</p>
          <p className="weather-data__value">4M/h</p>
        </span>
      </div>
    </div>
  )
}

export default WeatherData