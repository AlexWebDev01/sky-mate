import { Coordinates } from '@api/fetchWeatherData/fetchWeatherData.interface';

export interface LocationData extends Coordinates {
  name: string;
}

export interface LocationGeocodeData {
  country: string;
  lat: number;
  lon: number;
  local_names: LocalNames;
  name: string;
  state?: string;
}

interface LocalNames {
  [key: string]: string;
}
