import {
  useState,
  createContext,
  useContext,
  FunctionComponent,
  useCallback,
  useMemo,
} from 'react';
import {
  GlobalContext as GlobalContextInterface,
  GlobalProviderProps,
  GlobalState,
} from './GlobalContext.interface';

import { fetchLocationData } from '@api/fetchLocationData/fetchLocationData';
import { fetchUserLocatioByIP } from '@api/fetchUserLocationByIP/fetchUserLocationByIP';
import { separateCoordinates } from '@shared/helpers/date/date';
import { fetchWeatherData } from '@api/fetchWeatherData/fetchWeatherData';
import { calculateClothesAdvice } from '@shared/helpers/clothesAlgorithm';

import { WeatherConditions } from '@shared/constants/clothesAlgorithm/clothesAlgorithm.interface';
import { LocationDataByIP } from '@api/fetchUserLocationByIP/fetchUserLocationByIP.interface';
import { LocationData } from '@api/fetchLocationData/fetchLocationData.interface';
import {
  Units,
  Coordinates,
} from '@api/fetchWeatherData/fetchWeatherData.interface';

const GlobalContext = createContext<GlobalContextInterface | null>(null);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('Global context should be used in GlobalProvider!');
  }

  return context;
};

export const GlobalProvider: FunctionComponent<GlobalProviderProps> = ({
  children,
}) => {
  const [state, setState] = useState<GlobalState>({
    isLoading: true,
    coordinates: null,
    location: null,
    weatherData: null,
    pageStyle: '',
    clothesAdvice: null,
  });
  const [error, setError] = useState<string>('');

  const getWeatherData = useCallback(async (coordinates: Coordinates) => {
    const data = await fetchWeatherData(coordinates, Units.metric);
    const weatherCondition =
      data.daily[0].weather[0].main.toLowerCase() as WeatherConditions;
    const averageTemp = data.daily[0].temp.day;
    const clothesAdvice = calculateClothesAdvice(weatherCondition, averageTemp);
    return {
      weatherData: data,
      clothesAdvice,
      pageStyle: weatherCondition,
    };
  }, []);

  const fetchData = useCallback(async () => {
    console.group('FETCH DATA');
    console.info('Started initial data fetching');

    setState((prevState) => ({ ...prevState, isLoading: true }));

    try {
      const locationData: LocationDataByIP = await fetchUserLocatioByIP();
      const coordinates = separateCoordinates(locationData.loc);

      const { weatherData, clothesAdvice, pageStyle } =
        await getWeatherData(coordinates);
      setState((prevState) => ({
        ...prevState,
        weatherData,
        clothesAdvice,
        pageStyle,
        coordinates,
        location: locationData.city,
        isLoading: false,
      }));

      console.info('Fetched & calculated data: ', {
        weatherData,
        clothesAdvice,
        pageStyle,
        city: locationData.city,
      });
      console.info('Finished initial data fetching');
      console.groupEnd();
    } catch (error) {
      if (error instanceof Error) {
        setError('Oops, unexpected error!');
      }

      console.error('Failed to fetch initial data:', error);
    }
  }, [getWeatherData]);

  const handleSearch = useCallback(
    async (location: string) => {
      try {
        console.group('HANDLE SEARCH');
        console.info('Started fetching data for location:', location);
        const locationData: LocationData = await fetchLocationData(location);
        const { name, lat, lon } = locationData;

        const { weatherData, clothesAdvice, pageStyle } = await getWeatherData({
          lat,
          lon,
        });

        setState((prevState) => ({
          ...prevState,
          coordinates: { lat, lon },
          location: name,
          weatherData,
          clothesAdvice,
          pageStyle,
        }));
        console.info('Fetched & calculated data: ', {
          weatherData,
          clothesAdvice,
          pageStyle,
          city: name,
        });
        console.info('Finished fetching data for location:', location);
      } catch (error) {
        if (error instanceof Error && error.message === 'Location not found') {
          setError('Location not found');
        } else if (error instanceof Error) {
          setError('Oops, unexpected error!');
        }

        console.error('Error fetching data for location:', error);
      }
    },
    [getWeatherData]
  );

  const sharedState = useMemo<GlobalContextInterface>(
    () => ({
      state,
      error,
      setError,
      fetchData,
      handleSearch,
    }),
    [state, error, setError, fetchData, handleSearch]
  );

  return (
    <GlobalContext.Provider value={sharedState}>
      {children}
    </GlobalContext.Provider>
  );
};
