import type { NextApiRequest, NextApiResponse } from "next"

const handler = (req: NextApiRequest, res: NextApiResponse<API>) => {
  return res.status(200).send({
    data: null,
    error: null,
    message: "Connection Successful",
  })
}

export default handler
