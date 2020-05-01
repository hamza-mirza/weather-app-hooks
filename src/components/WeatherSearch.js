import React from "react"

const WeatherSearch = () => (
  <div className="weather-search">
    <form className="weather-search__form">
      <input className="weather-search__input" type="text"/>
      <button className="weather-search__submit">Search</button>
    </form>
  </div>
)

export default WeatherSearch