import { useGlobalContext } from '@context/global/GlobalContext';

import DailyForecastItem from './components/DailyForecastItem';

import { DailyWeatherData } from '@api/fetchWeatherData/fetchWeatherData.interface';

import './DailyForecast.scss';

interface IProps {
  expanded: boolean;
  onExpand: () => void;
}

const DailyForecast = ({ expanded, onExpand }: IProps) => {
  const { state } = useGlobalContext();
  const { weatherData } = state;

  if (!weatherData) {
    return null;
  }

  return (
    <div
      className={expanded ? 'forecast-expanded' : 'daily-forecast'}
      onClick={onExpand}
    >
      {weatherData.daily.map((item: DailyWeatherData, index: number) => {
        return <DailyForecastItem item={item} key={index} />;
      })}
    </div>
  );
};

export default DailyForecast;
