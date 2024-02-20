import { ReactNode } from "react";

export interface GlobalContext {
  coordinates: Coordinates | null;
  setCoordinates: (coordinates: Coordinates) => void;
  weatherData: object | null;
  setWeatherData: (data: object) => void;
  location: string;
  setLocation: (location: string) => void;
  expandedCard: "weather-card" | "daily-forecast";
  setExpandedCard: (expandedCard: "weather-card" | "daily-forecast") => void;
  pageStyle: string;
  setPageStyle: (pageStyle: string) => void;
}

export interface GlobalProviderProps {
  children: ReactNode;
}

export interface Coordinates {
  lat: number;
  lon: number;
}
