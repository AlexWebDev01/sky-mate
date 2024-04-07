import { Units, Coordinates, WeatherData } from "./fetchWeatherData.interface";

export const fetchWeatherData = async (
  coordinates: Coordinates,
  units: Units
): Promise<WeatherData> => {
  const response = await fetch(
    `${import.meta.env.VITE_WEATHER_APP_API_URL}/onecall?lat=${
      coordinates.lat
    }&lon=${coordinates.lon}&units=${units}&exclude=minutely&appid=${
      import.meta.env.VITE_WEATHER_APP_API_KEY
    }`
  );

  const data: WeatherData = await response.json();

  return data;
};
