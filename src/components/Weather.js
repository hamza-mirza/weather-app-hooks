import React from "react"

const Weather = ({city, temp, humidity, pressure}) => {
  return (
    <div className="weather-data">
      <p className="weather__tagline">Weather forecast for <span className="weather-data__city">{city}</span></p>
      <div className="weather-data__box">
        <span className="weather-data__property">
          <p className="weather-data__title">Temperature</p>
          <p className="weather-data__value">{temp}</p>
        </span>
        <span className="weather-data__property">
          <p className="weather-data__title">Humidity</p>
          <p className="weather-data__value">{humidity}</p>
        </span>
        <span className="weather-data__property">
          <p className="weather-data__title">Pressure</p>
          <p className="weather-data__value">{pressure}</p>
        </span>
      </div>
    </div>
  )
}

export default Weather