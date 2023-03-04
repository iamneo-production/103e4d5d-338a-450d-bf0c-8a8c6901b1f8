import React from "react"

interface WeatherCardProps extends React.HTMLAttributes<HTMLDivElement> {
  weather: {
    location: string
    lat: string | number
    lon: string | number
    temp_c: number
    is_day: 0 | 1
    condition: {
      text: string
      icon: string
    }
    wind_kph: number
    wind_degree: number
    wind_dir: "N" | "S" | "E" | "W"
    feelslike_c: number
    uv: number
    air_quality: {
      co: number
      no2: number
      o3: number
      so2: number
      pm2_5: number
      pm10: number
    }
  }
}

const WeatherCard = ({ className, weather }: WeatherCardProps) => {
  return (
    <div
      className={
        "mx-auto max-w-md rounded-lg p-2 dark:bg-gray-900/25 dark:text-gray-100 md:p-8 " + className
      }
    >
      <div className="flex justify-between space-x-8">
        <div className="flex flex-col items-center">
          <img
            src={weather.condition.icon || "//cdn.weatherapi.com/weather/64x64/day/116.png"}
            alt={weather.condition.text}
          />
          <h1 className="text-xl font-semibold">{weather.location || "Bangalore"}</h1>
        </div>
        <span className="text-8xl font-bold">{weather.temp_c || 28}°</span>
      </div>
      <div className="mt-8 flex justify-between space-x-4 dark:text-gray-400">
        <div className="flex flex-col items-center space-y-1">
          <span>
            CO<sub>2</sub>
          </span>
          <span>{weather.air_quality.co.toFixed(2) || ""}</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <span>
            NO<sub>2</sub>
          </span>
          <span>{weather.air_quality.no2.toFixed(2) || ""}</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <span>
            O<sub>3</sub>
          </span>
          <span>{weather.air_quality.o3.toFixed(2) || ""}</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <span>
            SO<sub>2</sub>
          </span>
          <span>{weather.air_quality.so2.toFixed(2) || ""}</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <span>
            PM<sub>25</sub>
          </span>
          <span>{weather.air_quality.pm2_5.toFixed(2) || ""}</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <span>
            PM<sub>10</sub>
          </span>
          <span>{weather.air_quality.pm10.toFixed(2) || ""}</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
