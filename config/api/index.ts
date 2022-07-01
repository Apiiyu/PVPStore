import axios, { AxiosRequestConfig } from "axios"
import Cookies from 'js-cookie'
import jwtDecode from "jwt-decode"
import { JWTPayloadTypes } from "services/players/data-types"

interface CallAPIProps extends AxiosRequestConfig {
  access_token?: boolean
}

export const callAPI = async (config: CallAPIProps) => {
  let headers = {}
  
  if(config.access_token) {
    const token = Cookies.get('access_token')
    if(token) {
      const jwtToken = atob(token)
      headers = {
        Authorization: `Bearer ${jwtToken}`
      }
    }
  }
  
  const response = await axios({
    method: config.method,
    url: config.url,
    data: config.data,
    headers,
  }).catch((error) => error.response )

  if(response.status > 300 ) {
    return {
      error: true,
      message: response.data.message,
      data: null
    }

  } else {
    return {
      error: false,
      message: response.data.message,
      data: response.data.data
    }
  }
}