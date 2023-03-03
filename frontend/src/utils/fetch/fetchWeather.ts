import axios from "axios"

import { WEATHER_API_KEY } from "../constants/variables"

const fetchWeather = async (location = "hyderabad") => {
  return axios
    .get(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}&aqi=yes`)
    .then((res) => {
      console.log(res)
      return res.data
    })
    .catch((err) => {
      console.clear()
      console.log(err)
    })
}

export default fetchWeather
