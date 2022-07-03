import { callAPI } from "config/api"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const API_VERSION = 'api/v1'

export const getMemberOverview = () => {
  const ENDPOINT = 'players/dashboard'
  const config = {
    method: 'GET',
    url: `${BASE_URL}/${API_VERSION}/${ENDPOINT}`,
    access_token: true
  }

  return callAPI(config)
}

export const getMemberTransactions = (params: string) => {
  const ENDPOINT = `players/history?status=${params === 'all' ? '' : params}`
  const config = {
    method: 'GET',
    url: `${BASE_URL}/${API_VERSION}/${ENDPOINT}`,
    access_token: true
  }

  return callAPI(config)
}

export const getTransactionDetail = (trxID: string, token: string) => {
  const ENDPOINT = `players/history/${trxID}/detail`
  const config = {
    method: 'GET',
    url: `${BASE_URL}/${API_VERSION}/${ENDPOINT}`,
    serverToken: token // --> Use token in SSR
  }

  return callAPI(config)
}

export const updateProfile = (id: string, data: FormData) => {
  const ENDPOINT = `players/profile/${id}/update`
  const config = {
    method: 'PUT',
    url: `${BASE_URL}/${API_VERSION}/${ENDPOINT}`,
    data,
    access_token: true
  }

  return callAPI(config)
}