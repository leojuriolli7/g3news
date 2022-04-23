import axios from "axios";

export const api = axios.create({
  headers: {
    "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    "X-RapidAPI-Key": "ca891993f7msh895de64552ef201p1b4377jsn666d08989200",
  },
  baseURL: "https://mmo-games.p.rapidapi.com/",
});

export const apiJson = axios.create({
  baseURL: "http://localhost:4000/",
});
