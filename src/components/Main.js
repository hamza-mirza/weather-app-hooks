import React from 'react'

import Header from "./Header"
import WeatherSearch from "./WeatherSearch"

const Main = () => {
  return (
    <div className="main">
      <Header/>
      <WeatherSearch/>
    </div>
  )
}

export default Main