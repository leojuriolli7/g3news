import axios from "axios";

export const api = axios.create({
  baseURL: "https://mmobomb.com/api1/",
});

export const apiJson = axios.create({
  baseURL: "http://localhost:4000/",
});
