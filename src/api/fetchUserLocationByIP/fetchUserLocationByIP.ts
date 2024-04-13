import { LocationDataByIP } from './fetchUserLocationByIP.interface';

export const fetchUserLocatioByIP = async (): Promise<LocationDataByIP> => {
  const response = await fetch(
    `${import.meta.env.VITE_IP_API_URL}?token=${
      import.meta.env.VITE_IP_API_KEY
    }& fields = latitude,longitude`
  );

  const data = (await response.json()) as LocationDataByIP;

  return data;
};
