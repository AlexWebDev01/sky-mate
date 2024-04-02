import {
  useState,
  createContext,
  useContext,
  FunctionComponent,
  useCallback,
  useMemo,
} from "react";
import {
  Coordinates,
  GlobalContext,
  GlobalProviderProps,
  GlobalState,
  LocationData,
} from "./GlobalContext.interface";

import { fetchLocationData } from "../api/fetchLocationData";
import { fetchUserLocatioByIP } from "../api/fetchUserLocationByIp";
import { separateCoordinates } from "../shared/helpers/date";
import { fetchWeatherData } from "../api/fetchWeatherData";
import { calculateClothesAdvice } from "../shared/helpers/clothesAlgorithm";

const GlobalContext = createContext<GlobalContext | null>(null);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("Global context should be used in GlobalProvider!");
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
    pageStyle: "",
    clothesAdvice: null,
  });

  const getWeatherData = useCallback(async (coordinates: Coordinates) => {
    console.log("GET WEATHER DATA CORS: ", coordinates);
    try {
      const data = await fetchWeatherData(coordinates, "metric");
      const weatherCondition = data.daily[0].weather[0].main.toLowerCase();
      const averageTemp = data.daily[0].temp.day;
      const clothesAdvice = calculateClothesAdvice(
        weatherCondition,
        averageTemp
      );
      return {
        weatherData: data,
        clothesAdvice,
        pageStyle: weatherCondition,
      };
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  }, []);

  const fetchData = useCallback(async () => {
    console.log("STARTED FETCH DATA");

    setState((prevState) => ({ ...prevState, isLoading: true }));

    try {
      const data = await fetchUserLocatioByIP();
      const coordinates = separateCoordinates(data.loc);

      const { weatherData, clothesAdvice, pageStyle } = await getWeatherData(
        coordinates
      );
      setState((prevState) => ({
        ...prevState,
        weatherData,
        clothesAdvice,
        pageStyle,
        coordinates,
        location: data.city,
        isLoading: false,
      }));
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }, [getWeatherData]);

  const handleSearch = useCallback(
    async (location: string) => {
      try {
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
      } catch (error) {
        console.error("Error fetching coordinates for location:", error);
      }
    },
    [getWeatherData]
  );

  const sharedState = useMemo<GlobalContext>(
    () => ({
      state,
      fetchData,
      handleSearch,
    }),
    [state, fetchData, handleSearch]
  );

  return (
    <GlobalContext.Provider value={sharedState}>
      {children}
    </GlobalContext.Provider>
  );
};
