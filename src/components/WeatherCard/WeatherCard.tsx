import HourlyForecast from "../HourlyForecast/HourlyForecast";

import { epochToLocalTime } from "../../shared/helpers/date";
import { calculateLocalDate } from "../../shared/helpers/date";
import { calculateLocalDay } from "../../shared/helpers/date";

import "./WeatherCard.css";
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";
import { useGlobalContext } from "../../context/GlobalContext";

const WeatherCard = ({ isMainPage, expanded, onExpand }: any) => {
  const { state } = useGlobalContext();
  const { weatherData, pageStyle, location } = state;

  if (!weatherData) {
    return <div>Loading</div>;
  }

  return (
    <div
      className={
        expanded === "weather-card"
          ? `weather-expanded ${pageStyle} weather-card`
          : `${pageStyle} weather-card`
      }
      onClick={onExpand}
    >
      <div className="main-info">
        <div className="left">
          <div className="temperature">
            {Math.round(weatherData.current.temp)}&deg; C
          </div>
          <h2 className={pageStyle}>{location}</h2>
        </div>
        <div className="right">
          <div className="date">
            {calculateLocalDate(weatherData.current.dt)}/
          </div>
          <div className="time">
            {epochToLocalTime(
              weatherData.current.dt,
              weatherData.timezone_offset
            )}
          </div>
          <div>{calculateLocalDay(weatherData.current.dt)}</div>
        </div>
      </div>
      <AdditionalInfo isMainPage={isMainPage} expanded={expanded} />
      <HourlyForecast expanded={expanded} />
      <span className="weather">{weatherData.daily[0].weather[0].main}</span>
    </div>
  );
};

export default WeatherCard;
