import axios, { AxiosRequestConfig } from "axios"

export const callAPI = async (config: AxiosRequestConfig) => {
  const response = await axios({
    method: config.method,
    url: config.url,
    data: config.data
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