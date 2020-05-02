import React from 'react'

import Header from "./Layout/Header"
import Content from "./Layout/Content"
import DateTime from "./DateTime"
import Tagline from "./Tagline"
import WeatherSearch from "./WeatherSearch"
import WeatherData from "./WeatherData"
import Footer from "./Layout/Footer"

const Main = () => {
  return (
    <div className="main">
      <Header/>
      <Content>
        <DateTime/>
        <Tagline/>
        <WeatherSearch/>
        <WeatherData/>
        <Footer/>
      </Content>
    </div>
  )
}

export default Main