import { useState, createContext, useContext, FunctionComponent } from "react";
import {
  Coordinates,
  GlobalContext,
  GlobalProviderProps,
} from "./GlobalContext.interface";

const GlobalContext = createContext<GlobalContext | null>(null);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useWords must be used within a WordsProvider");
  }

  return context;
};

export const GlobalProvider: FunctionComponent<GlobalProviderProps> = ({
  children,
}) => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [weatherData, setWeatherData] = useState<object | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [pageStyle, setPageStyle] = useState<string>("");

  const sharedState: GlobalContext = {
    coordinates,
    setCoordinates,
    weatherData,
    setWeatherData,
    location,
    setLocation,
    pageStyle,
    setPageStyle,
  };

  return (
    <GlobalContext.Provider value={sharedState}>
      {children}
    </GlobalContext.Provider>
  );
};
