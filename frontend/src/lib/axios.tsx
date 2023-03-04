import axios from "axios"

import { PUBLIC_URL } from "../utils/constants/variables"

const instance = axios.create({
  baseURL: `${PUBLIC_URL}/api/v1/`,
  timeout: 3000,
})

export default instance
