import axios from "axios"

export const getFeaturedGame = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  const API_VERSION = 'api/v1'
  const ENDPOINT = 'players/landingpage'

  const result = await axios.get(`${BASE_URL}/${API_VERSION}/${ENDPOINT}`)
  const data = result.data.data

  return data
}

export const getDetailVoucher = async () => {
  return null
}