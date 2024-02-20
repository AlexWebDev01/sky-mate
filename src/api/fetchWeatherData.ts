import { Coordinates } from "../context/GlobalContext.interface";

export const fetchWeatherData = async (
  coordinates: Coordinates,
  units: string
) => {
  console.log("COORDINATES:", coordinates);

  const response = await fetch(
    `${import.meta.env.VITE_WEATHER_APP_API_URL}/onecall?lat=${
      coordinates.lat
    }&lon=${coordinates.lon}&units=${units}&exclude=minutely&appid=${
      import.meta.env.VITE_WEATHER_APP_API_KEY
    }`
  );

  const data = await response.json();

  return data;
};
