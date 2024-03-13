import {
  CurrentWeatherFilter,
  CurrentWeatherDTO,
  ForecastDTO,
  ForecastFilter,
  HistoryDTO,
  HistoryFilter,
} from "./dto";
import { WeatherService } from "./service";
import axios from "axios";

// to move in a .env file soon
const API_KEY = "your_secret_key";
const BASE_URL = "http://api.weatherapi.com/";

interface AXIOSConfig {
  url: string;
  method: string;
  headers: {
    Accept: string;
    ContentType: string;
    "Access-Control-Allow-Headers": string;
    "Access-Control-Allow-Origin": string;
    "Access-Control-Allow-Methods": string;
  };
}

export class WeatherServiceImpl implements WeatherService {
  private config = (url: string): AXIOSConfig => {
    return {
      url: url,
      method: "GET",
      headers: {
        Accept: "*/*",
        ContentType: "application/json",
        "Access-Control-Allow-Headers":
          "accept, content-type, x-requested-with",
        "Access-Control-Allow-Origin": `*`,
        "Access-Control-Allow-Methods": "GET",
      },
    };
  };

  public getCurrentWeather(
    request: CurrentWeatherFilter
  ): Promise<CurrentWeatherDTO> {
    let url: string =
      `${BASE_URL}` +
      `v1` +
      `/current.json?key=${API_KEY}` +
      `&q=${request.location}` +
      `&aqi=no`;
    return axios(this.config(url)).then((response) => response.data);
  }

  public getForecast(request: ForecastFilter): Promise<ForecastDTO> {
    let url: string =
      BASE_URL +
      `v1` +
      `/forecast.json?key=${API_KEY}` +
      `&q=${request.location}` +
      `&days=${request.days}` +
      `&aqi=no` +
      `&alerts=no`;
    return axios(this.config(url)).then((response) => response.data);
  }

  public getHistory(request: HistoryFilter): Promise<HistoryDTO> {
    let url: string =
      BASE_URL +
      `v1` +
      `/history.json?key=${API_KEY}` +
      `&q=${request.location}` +
      `&dt=${request.date}` +
      `&aqi=no` +
      `&alerts=no`;
    return axios(this.config(url)).then((response) => response.data);
  }
}
