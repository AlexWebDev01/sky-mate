import { DailyWeatherData } from "../../../api/fetchWeatherData/fetchWeatherData.interface";
import {
  calculateLocalDateAnotherFormat,
  calculateLocalFormattedDay,
} from "../../../shared/helpers/date/date";

interface Props {
  item: DailyWeatherData;
}

const DailyForecastItem = ({ item }: Props) => {
  return (
    <div className="daily-weather">
      <div className="day">{calculateLocalFormattedDay(item.dt)}</div>
      <div className={`${item.weather[0].main.toLowerCase()} date`}>
        {calculateLocalDateAnotherFormat(item.dt)}
      </div>
      <div className="day-temperature">{Math.round(item.temp.day)}&deg;</div>
      <div className="night-temperature">
        {Math.round(item.temp.night)}&deg;
      </div>
      <div className="weather">{item.weather[0].main}</div>
    </div>
  );
};

export default DailyForecastItem;
