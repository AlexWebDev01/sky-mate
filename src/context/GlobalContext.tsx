import {
  useState,
  createContext,
  useContext,
  FunctionComponent,
  useCallback,
} from "react";
import {
  GlobalContext,
  GlobalProviderProps,
  GlobalState,
  LocationData,
} from "./GlobalContext.interface";

import { fetchLocationData } from "../api/fetchLocationData";
import { fetchUserLocatioByIP } from "../api/fetchUserLocationByIp";
import { separateCoordinates } from "../helpers";
import { fetchWeatherData } from "../api/fetchWeatherData";
import { calculateClothesAdvice } from "../clothes-algorithm/clothesAlgorithm";

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

  const getUserLocation = useCallback(async () => {
    console.log("GET USER LOCATION BY IP");
    try {
      const data = await fetchUserLocatioByIP();
      const { lat, lon } = separateCoordinates(data.loc);
      setState((prevState) => ({
        ...prevState,
        coordinates: { lat, lon },
        location: data.city,
      }));
    } catch (error) {
      console.error("Error fetching user location by IP:", error);
    }
  }, []);

  const getWeatherData = useCallback(async () => {
    if (!state.coordinates) return;
    console.log("GET WEATHER DATA CORS: ", state.coordinates);
    try {
      const data = await fetchWeatherData(state.coordinates, "metric");
      const weatherCondition = data.daily[0].weather[0].main;
      const clothesAdvice = calculateClothesAdvice(
        data.daily[0].weather[0].main,
        data.daily[0].temp.day
      );
      setState((prevState) => ({
        ...prevState,
        weatherData: data,
        clothesAdvice,
        pageStyle: weatherCondition.toLowerCase(),
      }));
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }, [state.coordinates]);

  const fetchData = useCallback(async () => {
    console.log("STARTED FETCH DATA");

    setState((prevState) => ({ ...prevState, isLoading: true }));

    if (!state.coordinates) {
      await getUserLocation();
    }

    if (!state.weatherData) {
      console.log("WEATHER DATA:", state.weatherData);
      try {
        await Promise.all([getWeatherData()]);
        setState((prevState) => ({ ...prevState, isLoading: false }));
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
  }, [getUserLocation, getWeatherData]);

  const handleSearch = async (location: string) => {
    try {
      const locationData: LocationData = await fetchLocationData(location);
      const { name, lat, lon } = locationData;
      setState((prevState) => ({
        ...prevState,
        coordinates: { lat, lon },
        location: name,
      }));
    } catch (error) {
      console.error("Error fetching coordinates for location:", error);
    }
  };

  const sharedState: GlobalContext = {
    state,
    fetchData,
    handleSearch,
  };

  return (
    <GlobalContext.Provider value={sharedState}>
      {children}
    </GlobalContext.Provider>
  );
};
