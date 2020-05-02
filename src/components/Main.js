import React, {useState} from "react"
import axios from "axios";

import Context from "../Context"

import Header from "./Layout/Header"
import Content from "./Layout/Content"
import DateTime from "./DateTime"
import Tagline from "./Tagline"
import WeatherSearch from "./WeatherSearch"
import WeatherData from "./WeatherData"
import Error from "./Error"
import Footer from "./Layout/Footer"

const API_KEY = ""

const Main = () => {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState(null) 
  const [error, setError] = useState(null)
  const api_call = async e => {
    e.preventDefault()
    const location = e.target.elements.city.value
    if (!location) {
      return setError("Please enter the name of the city"), setWeather(null)
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
    const request = axios.get(url)
    const response = await request
    setError(null)
    setWeather(response.data.main)
    setCity(response.data.name)
  }
  return (
    <div className="main">
      <Header/>
      <Content>
        <Context.Provider value={{api_call, weather, city}}>
          <DateTime/>
          <Tagline/>
          <WeatherSearch/>
          { error !== null && <p>{<Error error={error}/>}</p> }
          { weather !== null && <WeatherData/> }
        </Context.Provider>
        <Footer/>
      </Content>
    </div>
  )
}

export default Main
