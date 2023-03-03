import React, { useEffect, useState } from "react"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"

import SearchBar from "../components/general/search-bar"
import Hero from "../components/home/hero"
import WeatherCard from "../components/weather/weather-card"
import fetchWeather from "../utils/fetch/fetchWeather"
import getGeoLocation from "../utils/functions/getGeoLocation"

interface HomePageProps
  extends InferGetServerSidePropsType<typeof getServerSideProps>,
    InferGetServerSidePropsType<typeof getServerSideProps> {
  weatherData: any
}

const HomePage: React.FC<HomePageProps> = ({ weatherData }) => {
  const [weather, setWeather] = useState(weatherData)
  useEffect(() => {
    getGeoLocation((data) => {
      fetchWeather(`${data.coords.latitude},${data.coords.longitude}`)
        .then((res) => {
          console.log(res)
          setWeather(res)
        })
        .catch((err) => console.log(err))
    })
  })

  return (
    <>
      <div className="absolute z-10 h-screen w-screen">
        <WeatherCard
          className="absolute top-2 right-[50%] translate-x-[50%] md:right-8 md:translate-x-0"
          weather={{
            location: weather.location.name,
            lat: weather.location.lat,
            lon: weather.location.lon,
            temp_c: weather.current.temp_c,
            is_day: weather.current.is_day,
            condition: {
              text: weather.current.condition.text,
              icon: weather.current.condition.icon,
            },
            wind_kph: weather.current.wind_kph,
            wind_degree: weather.current.wind_degree,
            wind_dir: weather.current.wind_dir,
            feelslike_c: weather.current.feelslike_c,
            uv: weather.current.uv,
            air_quality: {
              co: weather.current.air_quality.co,
              no2: weather.current.air_quality.no2,
              o3: weather.current.air_quality.o3,
              so2: weather.current.air_quality.so2,
              pm2_5: weather.current.air_quality.pm2_5,
              pm10: weather.current.air_quality.pm10,
            },
          }}
        />
        <SearchBar
          placeholder="Search"
          className="absolute bottom-12 left-[50%] -translate-x-[50%]"
          onChange={(e) => {
            console.log(e.target.value)
          }}
        />
      </div>
      <Hero />
    </>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async () => {
  const weatherData = {
    location: {
      name: "Hyderabad",
      region: "Telangana",
      country: "India",
      lat: 18,
      lon: 79.61,
      tz_id: "Asia/Kolkata",
    },
    current: {
      temp_c: 29,
      is_day: 1,
      condition: {
        text: "Partly cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
      },
      wind_kph: 16.9,
      wind_degree: 80,
      wind_dir: "E",
      feelslike_c: 28.1,
      uv: 7,
      air_quality: {
        co: 357.20001220703125,
        no2: 5.300000190734863,
        o3: 114.4000015258789,
        so2: 4.800000190734863,
        pm2_5: 13.600000381469727,
        pm10: 15.899999618530273,
        "us-epa-index": 1,
        "gb-defra-index": 2,
      },
    },
  }

  return {
    props: {
      weatherData: weatherData,
    },
  }
}
