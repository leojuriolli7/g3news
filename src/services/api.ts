import axios from "axios";

export const api = axios.create({
  baseURL: "https://mmobomb.com/api1/",
});

export const jsonServer = axios.create({
  baseURL: "https://localhost:3000/",
});
