import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const getAllDevices = () => {
  const GET_DEVICES = `${API_URL}/devices/?page_size=0&page=0`

  return axios.get(GET_DEVICES)
}

