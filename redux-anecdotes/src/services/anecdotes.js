import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'
export const getAll = async () => {
  const request = await axios.get(baseUrl)
  return await request.data
}
