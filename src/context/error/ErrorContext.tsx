import {
  useState,
  createContext,
  useContext,
  useMemo,
  FC,
  useEffect,
  useCallback,
} from 'react';
import {
  ErrorContext as ErrorContextInterface,
  ErrorProviderProps,
} from './ErrorContext.interface';
import Notification from '@components/Notification/Notification';

const ErrorContext = createContext<ErrorContextInterface | null>(null);

export const useErrorContext = () => {
  const context = useContext(ErrorContext);

  if (!context) {
    throw new Error('Error context should be used in ErrorProvider!');
  }

  return context;
};

export const ErrorProvider: FC<ErrorProviderProps> = ({ children }) => {
  const [error, setError] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const closeNotification = () => {
    setIsVisible(false);
  };

  const showNotification = useCallback((message: string) => {
    setError(message);
    setIsVisible(true);
  }, []);

  const sharedState = useMemo<ErrorContextInterface>(
    () => ({
      showNotification,
    }),
    [showNotification]
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;

    if (isVisible) {
      timeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }

    if (!isVisible && error) {
      timeout2 = setTimeout(() => {
        setError('');
      }, 600);
    }

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, [isVisible]);

  return (
    <ErrorContext.Provider value={sharedState}>
      {children}
      {
        <Notification
          message={error}
          onClose={closeNotification}
          isVisible={isVisible}
        />
      }
    </ErrorContext.Provider>
  );
};
