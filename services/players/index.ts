import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const API_VERSION = 'api/v1'

export const getFeaturedGame = async () => {
  const ENDPOINT = 'players/landingpage'

  const result = await axios.get(`${BASE_URL}/${API_VERSION}/${ENDPOINT}`)
  const data = result.data.data

  return data
}

export const getDetailVoucher = async (id) => {
  const ENDPOINT = `players/${id}/detail`

  const result = await axios.get(`${BASE_URL}/${API_VERSION}/${ENDPOINT}`)
  const data = result.data.data

  return data
}