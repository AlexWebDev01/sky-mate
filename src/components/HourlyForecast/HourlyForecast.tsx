import { useState } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';

import HourlyForecastItem from './components/HourlyForecastItem';

import { HourlyWeatherData } from '../../context/GlobalContext.interface';

import './HourlyForecast.css';

interface Props {
  expanded: boolean;
}

const HourlyForecast = ({ expanded }: Props) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const { state } = useGlobalContext();
  const { weatherData } = state;

  const sliderItems: HourlyWeatherData[] = weatherData.hourly.slice(1, 14);
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
        {/* TODO: import svg icons to React projects */}
        <svg
          width='11'
          height='19'
          viewBox='0 0 11 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.82028 18.624L0.278817 10.2018C0.177435 10.1016 0.105453 9.99296 0.0628727 9.87599C0.0202921 9.75902 -0.000660041 9.63369 1.58411e-05 9.5C1.58411e-05 9.36631 0.020968 9.24098 0.0628727 9.12401C0.104777 9.00704 0.176759 8.89842 0.278817 8.79815L8.82028 0.350923C9.05684 0.116974 9.35254 0 9.70738 0C10.0622 0 10.3664 0.12533 10.6198 0.375989C10.8733 0.626649 11 0.919085 11 1.2533C11 1.58751 10.8733 1.87995 10.6198 2.13061L3.16821 9.5L10.6198 16.8694C10.8564 17.1033 10.9747 17.3918 10.9747 17.7347C10.9747 18.0776 10.8479 18.374 10.5945 18.624C10.341 18.8747 10.0453 19 9.70738 19C9.36943 19 9.07374 18.8747 8.82028 18.624Z'
            fill='white'
          />
        </svg>
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
        <svg
          width='11'
          height='19'
          viewBox='0 0 11 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2.17972 18.624L10.7212 10.2018C10.8226 10.1016 10.8945 9.99296 10.9371 9.87599C10.9797 9.75902 11.0007 9.63369 11 9.5C11 9.36631 10.979 9.24098 10.9371 9.12401C10.8952 9.00704 10.8232 8.89842 10.7212 8.79815L2.17972 0.350923C1.94316 0.116974 1.64746 0 1.29262 0C0.937786 0 0.633639 0.12533 0.380184 0.375989C0.126728 0.626649 0 0.919085 0 1.2533C0 1.58751 0.126728 1.87995 0.380184 2.13061L7.83179 9.5L0.380184 16.8694C0.143625 17.1033 0.0253448 17.3918 0.0253448 17.7347C0.0253448 18.0776 0.152073 18.374 0.405529 18.624C0.658985 18.8747 0.954683 19 1.29262 19C1.63057 19 1.92626 18.8747 2.17972 18.624Z'
            fill='white'
          />
        </svg>
      </button>
    </div>
  );
};

export default HourlyForecast;
