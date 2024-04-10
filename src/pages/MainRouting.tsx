import { Routes, Route } from 'react-router-dom';

import WeatherPage from './WeatherPage/WeatherPage';
import LookPage from './LookPage/LookPage';

const MainRouting = () => {
  return (
    <Routes>
      <Route path='/' element={<WeatherPage />} />
      <Route path='/look' element={<LookPage />} />
    </Routes>
  );
};

export default MainRouting;
