import { callAPI } from "config/api"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const API_VERSION = 'api/v1'

export const setSignUp = async (data: Object) => {
  const ENDPOINT = 'auth/signup'
  const config = {
    method: 'POST',
    url: `${BASE_URL}/${API_VERSION}/${ENDPOINT}`,
    data
  }

  return callAPI(config)
}

export const setSignIn = async (data: Object) => {
  const ENDPOINT = 'auth/signin'
  const config = {
    method: 'POST',
    url: `${BASE_URL}/${API_VERSION}/${ENDPOINT}`,
    data
  }

  return callAPI(config)
}