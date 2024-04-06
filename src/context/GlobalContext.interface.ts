import { ReactNode } from "react";
import { ClothesAdviceWithTemp } from "../shared/constants/clothesAlgorithm/clothesAlgorithm.interface";

export interface GlobalContext {
  state: GlobalState;
  fetchData: () => Promise<void>;
  handleSearch: (location: string) => Promise<void>;
}

export interface GlobalState {
  isLoading: boolean;
  coordinates: Coordinates | null;
  location: string | null;
  weatherData: WeatherData | null;
  pageStyle: string;
  clothesAdvice: ClothesAdviceWithTemp | null;
}

export interface GlobalProviderProps {
  children: ReactNode;
}

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface LocationData extends Coordinates {
  name: string;
}

export interface WeatherData {
  current: CurrentWeatherData;
  daily: DailyWeatherData[];
  hourly: HourlyWeatherData[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}

export interface CurrentWeatherData extends BaseWeatherData {
  sunrise: number;
  sunset: number;
  visibility: number;
  temp: number;
  feels_like: number;
}

export interface HourlyWeatherData extends BaseWeatherData {
  pop: number;
  wind_gust: number;
  visibility: number;
  temp: number;
  feels_like: number;
}

export interface DailyWeatherData extends BaseWeatherData {
  feels_like: { day: number; night: number; eve: number; morn: number };
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  rain: number;
  summary: string;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    eve: number;
    max: number;
    min: number;
    morn: number;
    night: number;
  };
  wind_gust: number;
}

interface BaseWeatherData {
  clouds: number;
  dew_point: number;
  dt: number;
  humidity: number;
  pressure: number;
  uvi: number;
  weather: Weather[];
  wind_deg: number;
  wind_speed: number;
}

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}
