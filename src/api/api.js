import axios from "axios";

const API_BASE_URL = "https://catfact.ninja";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchSomeData = async () => {
  const response = await axiosInstance.get("/fact");
  return response.data;
};
