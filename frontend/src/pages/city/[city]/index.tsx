import React, { useEffect, useState } from "react"
import { StaticImageData } from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

/* Predictons */
import Adilabad from "../../../assets/predictions/Adilabad.png"
import Karimnagar from "../../../assets/predictions/Karimnagar.png"
import Khamman from "../../../assets/predictions/Khamman.png"
import Nizamabad from "../../../assets/predictions/Nizamabad.png"
import Waarangal from "../../../assets/predictions/Warangal.png"
/* Components */
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
  const [aqiData, setAqiData] = useState([])
  const [predictionPreview, setPredictionPreview] = useState<StaticImageData | null>(null)

  const mapping: { [key: string]: StaticImageData } = {
    adilabad: Adilabad,
    karimnagar: Karimnagar,
    khamman: Khamman,
    nizamabad: Nizamabad,
    warangal: Waarangal,
  }

  const [month, setMonth] = useState(1)

  useEffect(() => {
    if (current) {
      axios
        .get(`getAQI?q=${current}`)
        .then((res) => {
          setAqiData(res.data.data.distribution.data)
          console.log(res.data.data)
          setComment(res.data.data.comment)
        })
        .catch((err) => {
          console.warn(err)
        })

      setPredictionPreview(mapping[city as string])
    }
  }, [current])

  useEffect(() => {
    if (aqiData.length <= 0) return

    const temp = aqiData.filter((d: any) => {
      return d.abbr === month
    })[0]

    if (!temp) return

    // @ts-ignore
    setAqiResult({ content: temp.context, value: temp.prediction })
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
                  <option>---Select Month---</option>
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
                  hash ? (
                    <Link href={"#"}>View less...</Link>
                  ) : (
                    <Link href={"#aqi"}>View more...</Link>
                  )
                }
              />
              <Visualization
                data={{
                  value: "",
                  content: "",
                }}
                head="Monthly Heat wave"
                footer=""
              />
            </div>
            {hash === "aqi" && (
              <div className="my-4">
                <DistributionCard data={aqiData} heading={"Monthly Average AQI Distribution"} />
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
