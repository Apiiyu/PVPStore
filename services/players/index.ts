import axios from "axios"
import { callAPI } from "config/api"
import { CheckoutTypes } from "data-types"

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

export const setCheckout = (data: CheckoutTypes) => {
  const ENDPOINT = 'players/checkout'
  const config = {
    method: 'POST',
    url: `${BASE_URL}/${API_VERSION}/${ENDPOINT}`,
    data,
    access_token: true
  }

  return callAPI(config)
}
