import type { NextApiRequest, NextApiResponse } from "next"

import Alidabad from "../../../data/hw-adilabad.json"
import Karimnagar from "../../../data/hw-karimnagar.json"
import Khamman from "../../../data/hw-khamman.json"
import Nizamabad from "../../../data/hw-nizamabad.json"
import Warangal from "../../../data/hw-warangal.json"
import cities, { cityData } from "../../../utils/constants/cities"

const handler = (req: NextApiRequest, res: NextApiResponse<API>) => {
  const { q } = req.query

  if (typeof q !== "string") {
    const error = new Error("Invalid Query")
    res.status(400).send({
      data: null,
      error,
      message: "Invalid query type, query `q` should be of type `string`",
    })
  }

  const query = (q as string).toLowerCase() || ""

  if (!cities.includes(query)) {
    res.send({
      data: [],
      error: "ok",
      message: `Please enter a correct city, ${q} does not belong to current list of cities`,
    })
  }

  const dataMap: { [key: string]: any } = {
    adilabad: Alidabad,
    karimnagar: Karimnagar,
    khamman: Khamman,
    nizamabad: Nizamabad,
    warangal: Warangal,
  }

  const monthlyAverage: { [key: string]: any } = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  }

  const data = dataMap[query]

  data.data.map((d: { id: number; month: string; predictions: Array<number> }) => {
    let average =
      d.predictions.reduce((accumulator: number, current: number) => current + accumulator, 0) /
      d.predictions.length

    if (isNaN(average)) {
      average = 0
    }

    monthlyAverage[d.month] = average
  })

  return res.status(200).send({
    data: {
      distribution: data,
      average: monthlyAverage,
    },
    error: null,
    message: "Fetch successful",
  })
}

export default handler
