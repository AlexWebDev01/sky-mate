import { ReactNode } from "react";
import { ClothesAdviceWithTemp } from "../helpers/clothes-algorithm/clothesAlgorithm.interface";

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
  clothesAdvice: ClothesAdviceWithTemp | null;
}

export interface GlobalProviderProps {
  children: ReactNode;
}

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface LocationData extends Coordinates {
  name: string;
}
