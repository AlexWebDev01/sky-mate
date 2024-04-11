import { useEffect } from 'react';
import { useGlobalContext } from '@context/GlobalContext';

import MainRouting from '@pages/MainRouting';

import './App.css';

function App() {
  const { fetchData } = useGlobalContext();

  useEffect(() => {
    fetchData();
  }, []);

  return <MainRouting />;
}

export default App;
