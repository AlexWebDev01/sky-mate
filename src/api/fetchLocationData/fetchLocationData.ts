import {
  LocationData,
  LocationGeocodeData,
} from './fetchLocationData.interface';

export const fetchLocationData = async (
  location: string
): Promise<LocationData> => {
  const response = await fetch(
    `${process.env.VITE_GEOCODING_API_URL}/direct?q=${location}&limit=${1}&appid=${process.env.VITE_WEATHER_APP_API_KEY}`
  );

  const locationData = (await response.json()) as LocationGeocodeData[];

  if (!locationData.length) {
    throw new Error('Location not found');
  }

  const { name, lat, lon } = locationData[0];

  return { name, lat, lon };
};
