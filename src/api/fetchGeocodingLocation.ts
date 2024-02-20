import { Coordinates } from "../context/GlobalContext.interface";

export const fetchGeocodingLocation = async (
  coordinates: Coordinates
): Promise<string> => {
  const { lat, lon } = coordinates;
  const response = await fetch(
    `${
      import.meta.env.VITE_GEOCODING_API_URL
    }/reverse?lat=${lat}&lon=${lon}&limit=${1}&appid=${
      import.meta.env.VITE_WEATHER_APP_API_KEY
    }`
  );

  const data = await response.json();

  return data[0].name;
};
