import type { NextApiRequest, NextApiResponse } from "next"

import Alidabad from "../../../data/adilabad.json"
import Karimnagar from "../../../data/karimnagar.json"
import Khammam from "../../../data/khammam.json"
import Nizamabad from "../../../data/nizamabad.json"
import Warangal from "../../../data/warangal.json"
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
    khammam: Khammam,
    nizamabad: Nizamabad,
    warangal: Warangal,
  }

  const data = dataMap[query]
  const avg =
    data.data.reduce(
      (
        acc: number,
        current: { id: number; month: string; abbr: string; prediction: number; context: string }
      ) => {
        return current.prediction + acc
      },
      0
    ) / data.data.length

  let comment = ""
  if (avg < 50) {
    comment = "<strong style=color:green>Good</strong>: Minimal Impact"
  } else if (50 < avg && avg < 100) {
    comment =
      "<strong style=color:lightgreen>Satisifactory</strong>: Minor breathing discomfort to sensitive people"
  } else if (100 < avg && avg < 200) {
    comment =
      "<strong style=color:yellow>Moderate</strong>: Breathing discomfort to people with lungs, asthma and heart diseases"
  } else if (200 < avg && avg < 300) {
    comment =
      "<strong style=color:lightyellow>Poor</strong>: Breathing discomfort to most people on prolonged exposure"
  } else if (300 < avg && avg < 400) {
    comment =
      "<strong style=color:red>Very poor</strong>: Respiratory illeness to people on prolonged exposure"
  } else {
    comment =
      "<strong style=color:darkred>Severe</strong>: Affects healthy people and seriously impact those with existing disease"
  }

  return res.status(200).send({
    data: {
      distribution: data,
      comment: comment,
    },
    error: null,
    message: "Fetch successful",
  })
}

export default handler
