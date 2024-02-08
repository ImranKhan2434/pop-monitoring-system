import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL

export const getAllPops = () => {
  const GET_TOTAL_POPS = `${API_URL}/pop/popes`

  return axios.get(GET_TOTAL_POPS)
}

