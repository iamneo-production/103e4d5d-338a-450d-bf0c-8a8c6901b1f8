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
  console.log(data.data)
  const average =
    data.data.reduce(
      (
        accumulator: number,
        current: { id: number; month: string; abbr: number; prediction: number; context: string }
      ) => {
        return current.prediction + accumulator
      },
      0
    ) / data.data.length

  /* Generate a comment based on averge */
  const comment = "lorem ipsum"

  return res.status(200).send({
    data: {
      distribution: data,
      average: average,
      comment: comment,
    },
    error: null,
    message: "Fetch successful",
  })
}

export default handler
