import { useEffect } from 'react';
import { useGlobalContext } from '@context/global/GlobalContext';
import { useScreenContext } from '@context/screen/ScreenContext';

import MainRouting from '@pages/MainRouting';
import SmallScreen from '@pages/SmallScreenPage/SmallScreenPage';

import './App.css';

function App() {
  const { fetchData } = useGlobalContext();
  const { isSmallScreen } = useScreenContext();

  useEffect(() => {
    if (!isSmallScreen) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isSmallScreen) {
    return <SmallScreen />;
  }

  return <MainRouting />;
}

export default App;
