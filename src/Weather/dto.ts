///////////////LOCATION////////////////

export interface Location {
  name: string;
  region: string;
  country: string;
  timezone: string;
  localtime: string;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

interface CurrentData {
  last_updated: string;
  temp_c: number;
  condition: Condition;
  wind_mph: number;
  wind_dir: string;
  feelslike_c: number;
  uv: number;
}

export interface CurrentWeatherDTO {
  location: Location;
  current: CurrentData;
}

///////////////FORECAST/////////////////

export interface Day {
  maxtemp_c: number;
  mintemp_c: number;
  maxwind_mph: number;
  totalprecip_mm: number;
  condition: Condition;
  uv: number;
}

export interface Astro {
  sunrise: string;
  sunset: string;
}

export interface Hour {
  time: string;
  temp_c: number;
  condition: Condition;
}

export interface ForecastDay {
  date: string;
  day: Day;
  astro: Astro;
  hour: Hour[];
}

interface ForecastData {
  forecastday: ForecastDay[];
}

export interface ForecastDTO {
  location: Location;
  current: CurrentData;
  forecast: ForecastData;
}

////////////////HISTORY////////////////

export interface HistoryDTO {
  location: Location;
  forecast: ForecastData;
}

////////////////FILTERS/////////////////

/*
 * [CURRENT WEATHER] Pass US Zipcode, UK Postcode, Canada Postalcode,
 * IP address, Latitude/Longitude (decimal degree) or city name.
 */

export interface CurrentWeatherFilter {
  location: string;
}

/*
 * [FORECAST] From 1 to 3 days
 */

export interface ForecastFilter {
  location: string;
  days: number;
}

/*
 * [HISTORY] Date string must be in the following format:
 * YYYY-MM-DD. You can only view history of the last 7 days.
 */

export interface HistoryFilter {
  location: string;
  date: string;
}

////////////////PROMISE STATUS/////////////////

export type PromiseStatus = "idle" | "loading" | "successfully" | "failed";

