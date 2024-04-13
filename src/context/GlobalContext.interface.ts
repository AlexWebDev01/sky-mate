import { ReactNode } from 'react';
import {
  ClothesAdviceWithTemp,
  WeatherConditions,
} from '@shared/constants/clothesAlgorithm/clothesAlgorithm.interface';
import {
  Coordinates,
  WeatherData,
} from '@api/fetchWeatherData/fetchWeatherData.interface';

export interface GlobalContext {
  state: GlobalState;
  fetchData: () => Promise<void>;
  handleSearch: (location: string) => Promise<void>;
}

export interface GlobalState {
  isLoading: boolean;
  coordinates: Coordinates | null;
  location: string | null;
  weatherData: WeatherData | null;
  pageStyle: WeatherConditions | '';
  clothesAdvice: ClothesAdviceWithTemp | null;
}

export interface GlobalProviderProps {
  children: ReactNode;
}
