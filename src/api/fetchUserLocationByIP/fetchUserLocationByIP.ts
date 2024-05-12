import { LocationDataByIP } from './fetchUserLocationByIP.interface';

export const fetchUserLocatioByIP = async (): Promise<LocationDataByIP> => {
  const response = await fetch(
    `${process.env.VITE_IP_API_URL}?token=${process.env.VITE_IP_API_KEY}& fields = latitude,longitude`
  );

  const data = (await response.json()) as LocationDataByIP;

  return data;
};
