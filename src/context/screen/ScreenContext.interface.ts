import { ReactNode } from 'react';

export interface ScreenContextInterface {
  isSmallScreen: boolean;
}

export interface ScreenProviderProps {
  children: ReactNode;
}
