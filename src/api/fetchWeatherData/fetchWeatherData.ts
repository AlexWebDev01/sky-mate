import { Units, Coordinates, WeatherData } from './fetchWeatherData.interface';

export const fetchWeatherData = async (
  coordinates: Coordinates,
  units: Units
): Promise<WeatherData> => {
  const response = await fetch(
    `${process.env.VITE_WEATHER_APP_API_URL}/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=${units}&exclude=minutely&appid=${process.env.VITE_WEATHER_APP_API_KEY}`
  );

  const data = (await response.json()) as WeatherData;

  return data;
};
