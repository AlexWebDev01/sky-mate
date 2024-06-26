import { useState } from 'react';
import { useGlobalContext } from '@context/global/GlobalContext';

import NavBar from '@components/NavBar/NavBar';
import WeatherCard from '@components/WeatherCard/WeatherCard';
import DailyForecast from '@components/DailyForecast/DailyForecast';
import NavigationLink from '@components/NavigationLink/NavigationLink';
import Background from '@components/Background/Background';
import Loader from '@components/Loader/Loader';

import './WeatherPage.scss';

const WeatherPage = () => {
  const [isWeatherCardExpanded, setIsWeatherCardExpanded] = useState(true);
  const [isDailyForecastExpanded, setIsDailyForecastExpanded] = useState(false);

  const { state } = useGlobalContext();
  const { isLoading, pageStyle } = state;

  const handleWeatherExpanded = () => {
    setIsWeatherCardExpanded(true);
    setIsDailyForecastExpanded(false);
  };

  const handleForecastExpanded = () => {
    setIsWeatherCardExpanded(false);
    setIsDailyForecastExpanded(true);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={`${pageStyle} weather-page`}>
      <NavBar />
      <div className='content-container'>
        <WeatherCard
          isMainPage
          expanded={isWeatherCardExpanded}
          onExpand={handleWeatherExpanded}
        />
        <DailyForecast
          expanded={isDailyForecastExpanded}
          onExpand={handleForecastExpanded}
        />
      </div>
      <NavigationLink direction='right' to='/look'>
        View more
      </NavigationLink>
      <Background page='weatherPage' />
    </div>
  );
};

export default WeatherPage;
