import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const API_VERSION = 'api/v1'

export const getFeaturedGame = async () => {
  const ENDPOINT = 'players/landingpage'

  const result = await axios.get(`${BASE_URL}/${API_VERSION}/${ENDPOINT}`)
  
  return result.data.data
}

export const getDetailVoucher = async (id: string) => {
  const ENDPOINT = `players/${id}/detail`

  const result = await axios.get(`${BASE_URL}/${API_VERSION}/${ENDPOINT}`)
  
  return result.data.data
}

export const getGameCategory = async () => {
const ENDPOINT = 'players/category'

  const result = await axios.get(`${BASE_URL}/${API_VERSION}/${ENDPOINT}`)

  return result.data.data
}