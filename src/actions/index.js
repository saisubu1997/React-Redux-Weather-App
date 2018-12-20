import axios from "axios";
const API_KEY = "4fa1fcef597ea82e3549bea9f17c32bc";
const ROOT_URL =
  "http://api.openweathermap.org/data/2.5/forecast?appid=" + API_KEY;

export const Fetch_Weather = "Fetch_Weather";
export default function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},IN`;
  //axios is a library for using async request
  const request = axios.get(URL);

  return {
    type: Fetch_Weather,
    payload: request
  };
}
