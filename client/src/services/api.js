
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const analyzeWebsite = async (url) => {
  const response = await api.post("/api/analyze", {
    url,
  });

  return response.data;
};

export default api;

