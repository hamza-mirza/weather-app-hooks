import React, {useContext} from "react"

import Context from "../Context"

import Weather from "./Weather"

const WeatherData = () => {
  const {weather, city} = useContext(Context)
  const {temp, humidity, pressure} = weather
  return (
    <Weather temp={temp} humidity={humidity} pressure={pressure} city={city}/>
  )
}

export default WeatherData