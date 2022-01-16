import axios from "axios";
export const MoviesService = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
