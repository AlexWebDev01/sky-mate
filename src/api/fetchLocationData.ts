import { LocationData } from "../context/GlobalContext.interface";

export const fetchLocationData = async (
  location: string
): Promise<LocationData> => {
  const response = await fetch(
    `${
      import.meta.env.VITE_GEOCODING_API_URL
    }/direct?q=${location}&limit=${1}&appid=${
      import.meta.env.VITE_WEATHER_APP_API_KEY
    }`
  );

  const data = await response.json();
  const { name, lat, lon } = data[0];

  return { name, lat, lon };
};
