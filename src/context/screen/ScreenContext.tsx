import {
  FunctionComponent,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  ScreenContextInterface,
  ScreenProviderProps,
} from './ScreenContext.interface';

const ScreenContext = createContext<ScreenContextInterface>({
  isSmallScreen: true,
});

export const useScreenContext = () => {
  const context = useContext(ScreenContext);

  if (!context) {
    throw new Error('Screen context should be used in ScreenProvider!');
  }

  return context;
};

export const ScreenProvider: FunctionComponent<ScreenProviderProps> = ({
  children,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    window.innerWidth < 1240
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1240 || window.innerHeight < 700);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScreenContext.Provider value={{ isSmallScreen }}>
      {children}
    </ScreenContext.Provider>
  );
};
