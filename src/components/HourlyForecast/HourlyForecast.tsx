import { useState } from 'react';
import { useGlobalContext } from '@context/GlobalContext';

import HourlyForecastItem from './components/HourlyForecastItem';
import LeftArrow from '@shared/assets/icons/left-arrow.svg';
import RightArrow from '@shared/assets/icons/right-arrow.svg';

import { HourlyWeatherData } from '@api/fetchWeatherData/fetchWeatherData.interface';

import './HourlyForecast.scss';

interface Props {
  expanded: boolean;
}

const HourlyForecast = ({ expanded }: Props) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const { state } = useGlobalContext();
  const { weatherData } = state;

  const sliderItems: HourlyWeatherData[] = weatherData
    ? weatherData.hourly.slice(1, 14)
    : [];
  const itemWidth = 55;
  const isLeftArrowDisabled = currentPosition <= 0;
  const isRightArrowDisabled = currentPosition >= 220;

  const slideLeft = () => {
    const newPosition = currentPosition - itemWidth;
    setCurrentPosition(newPosition);
  };

  const slideRight = () => {
    const newPosition = currentPosition + itemWidth;
    setCurrentPosition(newPosition);
  };

  return (
    <div className={expanded ? `hourly-forecast` : 'hide'}>
      <button
        className='left-arrow'
        onClick={slideLeft}
        disabled={isLeftArrowDisabled}
      >
        <LeftArrow />
      </button>
      <div className='slider-container'>
        <div
          id='slider'
          className='slider'
          style={{ transform: `translateX(-${currentPosition}px)` }}
        >
          {sliderItems.map(
            (item: HourlyWeatherData, timezoneOffset: number) => (
              <HourlyForecastItem
                item={item}
                timezoneOffset={timezoneOffset}
                key={item.dt}
              />
            )
          )}
        </div>
      </div>
      <button
        className='right-arrow'
        onClick={slideRight}
        disabled={isRightArrowDisabled}
      >
        <RightArrow />
      </button>
    </div>
  );
};

export default HourlyForecast;
