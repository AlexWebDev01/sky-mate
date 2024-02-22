import { ReactNode } from "react";

export interface GlobalContext {
  state: GlobalState;
  fetchData: () => Promise<void>;
  handleSearch: (location: string) => Promise<void>;
}

export interface GlobalState {
  isLoading: boolean;
  coordinates: Coordinates | null;
  location: string | null;
  weatherData: any | null;
  pageStyle: string;
}

export interface GlobalProviderProps {
  children: ReactNode;
}

export interface Coordinates {
  lat: number;
  lon: number;
}
