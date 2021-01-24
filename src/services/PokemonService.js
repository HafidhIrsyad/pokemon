import axios from "axios";

export const getDetails = async (url) => {
  const response = await axios.get(url)
  return response
}