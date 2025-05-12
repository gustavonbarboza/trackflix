import axios from "axios";

const apiKey = "17a7cc7f6c8a2a9a556ec8e98687a5b4";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apiKey,
    language: "pt-br",
  },
});

export default api;