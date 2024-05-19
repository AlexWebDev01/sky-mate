import { ReactNode } from 'react';

export interface ErrorContext {
  showNotification: (message: string) => void;
}

export interface ErrorProviderProps {
  children: ReactNode;
}
