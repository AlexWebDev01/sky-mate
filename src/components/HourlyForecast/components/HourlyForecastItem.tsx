import { HourlyWeatherData } from '../../../api/fetchWeatherData/fetchWeatherData.interface';
import { epochToLocalTime } from '../../../shared/helpers/date/date';

interface Props {
  item: HourlyWeatherData;
  timezoneOffset: number;
}

const HourlyForecastItem = ({ item, timezoneOffset }: Props) => {
  return (
    <div className='day'>
      <div>{Math.round(item.temp)}&deg;</div>
      <div className='line'></div>
      <div>{epochToLocalTime(item.dt, timezoneOffset).slice(0, 2)}</div>
    </div>
  );
};

export default HourlyForecastItem;
