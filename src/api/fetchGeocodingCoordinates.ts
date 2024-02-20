import { Coordinates } from "../context/GlobalContext.interface";

export const fetchGeocodingCoordinates = async (
  location: string
): Promise<Coordinates> => {
  const response = await fetch(
    `${
      import.meta.env.VITE_GEOCODING_API_URL
    }/direct?q=${location}&limit=${1}&appid=${
      import.meta.env.VITE_WEATHER_APP_API_KEY
    }`
  );

  const data = await response.json();
  const { lat, lon } = data[0];

  return { lat, lon };
};
