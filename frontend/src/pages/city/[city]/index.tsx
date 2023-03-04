import React, { useEffect, useState } from "react"
import { StaticImageData } from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

/* Predictons */
import Adilabad from "../../../assets/predictions/Adilabad.png"
import Karimnagar from "../../../assets/predictions/Karimnagar.png"
import Khammam from "../../../assets/predictions/Khammam.png"
import Nizamabad from "../../../assets/predictions/Nizamabad.png"
import Waarangal from "../../../assets/predictions/Warangal.png"
/* Components */
import DailyDistributionCard from "../../../components/city/daily-distribution"
import DataCard from "../../../components/city/data"
import DistributionCard from "../../../components/city/distribution"
import Visualization from "../../../components/city/visualization"
import axios from "../../../lib/axios"
import { cityData } from "../../../utils/constants/cities"

const City = ({ className }: any) => {
  const router = useRouter()
  const hash = router.asPath.split("#")[1] || ""
  const { city } = router.query

  const [current, setCurrent] = useState<keyof typeof cityData | null>(null)
  const [comment, setComment] = useState("")
  const [aqiResult, setAqiResult] = useState({
    value: 0,
    content: "",
  })
  const [heatWaveResult, setHeatWaveResult] = useState({
    value: 0,
    content: "",
  })
  const [aqiData, setAqiData] = useState([])
  const [heatWaveData, setHeatWaveData] = useState([])
  const [predictionPreview, setPredictionPreview] = useState<StaticImageData | null>(null)
  const [heatWaveMonthly, setHeatWaveMonthly] = useState<{ [key: string]: number } | undefined>()

  const mapping: { [key: string]: StaticImageData } = {
    adilabad: Adilabad,
    karimnagar: Karimnagar,
    khammam: Khammam,
    nizamabad: Nizamabad,
    warangal: Waarangal,
  }

  const monthToAbbrMapping: { [key: number]: string } = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  }

  const [month, setMonth] = useState(0)

  useEffect(() => {
    if (current) {
      axios
        .get(`getAQI?q=${current}`)
        .then((res) => {
          setAqiData(res.data.data.distribution.data)
        })
        .catch((err) => {
          console.warn(err)
        })

      axios
        .get(`get-heat-wave?q=${current}`)
        .then((res) => {
          setHeatWaveMonthly(res.data.data.average)
          setHeatWaveData(res.data.data.distribution.data)
        })
        .catch((err) => {
          console.warn(err)
        })

      setPredictionPreview(mapping[current])
    }
  }, [current])

  useEffect(() => {
    if (aqiData?.length <= 0) return

    const temp: { context: string; prediction: number } = aqiData.filter((d: any) => {
      return d.abbr === month
    })[0]

    if (!temp) return

    let _comment = ""
    console.log(temp)
    if (temp.context === "Good") {
      _comment = "<strong style=color:green>Good</strong>: Minimal Impact"
    } else if (temp.context === "Satisfactory") {
      _comment =
        "<strong style=color:lightgreen>Satisifactory</strong>: Minor breathing discomfort to sensitive people"
    } else if (temp.context === "Moderate") {
      _comment =
        "<strong style=color:yellow>Moderate</strong>: Breathing discomfort to people with lungs, asthma and heart diseases"
    } else if (temp.context === "Poor") {
      _comment =
        "<strong style=color:lightyellow>Poor</strong>: Breathing discomfort to most people on prolonged exposure"
    } else if (temp.context === "Very poor") {
      _comment =
        "<strong style=color:red>Very poor</strong>: Respiratory illeness to people on prolonged exposure"
    } else {
      _comment =
        "<strong style=color:darkred>Severe</strong>: Affects healthy people and seriously impact those with existing disease"
    }

    setComment(_comment)

    setAqiResult({ content: temp.context, value: temp.prediction })
  }, [month, current])

  useEffect(() => {
    if (!heatWaveMonthly) return

    const m = monthToAbbrMapping[month]

    setHeatWaveResult({
      value: heatWaveMonthly[m],
      content: "",
    })
  }, [month, current])

  useEffect(() => {
    if (month === 0) {
      setAqiResult({
        value: 0,
        content: "",
      })
      setHeatWaveResult({ value: 0, content: "" })
      router.push("#")
    }
  }, [month])

  useEffect(() => {
    if (!city) return

    setCurrent(city as string)
  }, [city])

  return (
    <div className="center min-h-screen bg-black/75">
      {current ? (
        <>
          <div className="my-12 flex w-11/12 flex-col rounded bg-white/10 py-2 px-2 shadow-md md:w-2/3 md:px-4 md:py-6">
            <div className="flex w-full justify-center">
              <div className="mb-3 flex w-full flex-col gap-1 md:flex-row">
                <select
                  data-te-select-init
                  className="w-full grow rounded bg-white/50 px-4 py-2 outline-none"
                  onChange={(e) => setCurrent(e.target.value)}
                  value={current}
                >
                  {Object.keys(cityData).map((city, index) => {
                    const current = cityData[city]
                    if (!current) return <></>
                    return (
                      <option
                        key={current.id}
                        value={current.name}
                        className="capitalize text-black/50"
                      >
                        {current.name}
                      </option>
                    )
                  })}
                </select>
                <select
                  data-te-select-init
                  className="shrink rounded bg-white/50 px-4 py-2 outline-none"
                  onChange={(e) => setMonth(parseInt(e.target.value))}
                >
                  <option value={0}>---Select Month---</option>
                  {aqiData?.map((itr: any, index) => {
                    return (
                      <option key={itr.abbr} value={itr.abbr} className="capitalize text-black/50">
                        {itr.month}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <Visualization
                data={{
                  value: aqiResult.value?.toString(),
                  content: aqiResult.content,
                }}
                head="Monthly AQI"
                footer={
                  hash === "aqi" ? (
                    <Link href={"#"}>View less...</Link>
                  ) : (
                    <Link href={"#aqi"}>View more...</Link>
                  )
                }
              />
              <Visualization
                data={{
                  value: heatWaveResult.value?.toFixed(2).toString(),
                  content: "",
                }}
                head="Monthly Heat wave"
                footer={
                  hash === "heat-wave" ? (
                    <Link href={"#"}>View less...</Link>
                  ) : (
                    <Link href={"#heat-wave"}>View more...</Link>
                  )
                }
              />
            </div>
            {month !== 0 && hash === "aqi" && (
              <div className="my-4">
                <DistributionCard data={aqiData} heading={"Monthly Average AQI Distribution"} />
              </div>
            )}
            {month !== 0 && hash === "heat-wave" && (
              <div className="my-4">
                <DailyDistributionCard
                  data={
                    heatWaveData.filter(
                      (item: { month: string }) => item.month === monthToAbbrMapping[month]
                    )[0]
                  }
                  heading={"Daily Heat Wave Distribution " + monthToAbbrMapping[month]}
                />
              </div>
            )}
            <div className="mb-6 grid w-full">
              <DataCard
                city={current as string}
                content={month ? comment : ""}
                preview={predictionPreview}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="center text-white">Loading...</div>
      )}
    </div>
  )
}

export default City
