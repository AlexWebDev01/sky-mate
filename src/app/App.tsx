import { useEffect } from 'react';
import { useGlobalContext } from '@context/GlobalContext';

import MainRouting from '@pages/MainRouting';

import './App.css';

function App() {
  const { fetchData } = useGlobalContext();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <MainRouting />;
}

export default App;
