import HourlyForecast from "../HourlyForecast/HourlyForecast";

import { epochToLocalTime } from "../../helpers";
import { calculateLocalDate } from "../../helpers";
import { calculateLocalDay } from "../../helpers";

import "./WeatherCard.css";
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";

const WeatherCard = ({ weatherData, location }: any) => {
  const pageStyle = weatherData.daily[0].weather[0].main.toLowerCase();

  return (
    <div className={`${pageStyle} weather-card`}>
      <div className="main-info">
        <div className="left">
            <div className="temperature">{Math.round(weatherData.current.temp)}&deg; C</div>
            <h2 className={pageStyle}>{location}</h2>
        </div>
        <div className="right">
            <div className="date">{calculateLocalDate(weatherData.current.dt)}/</div>
             <div className="time">
                {epochToLocalTime(
                    weatherData.current.dt,
                    weatherData.timezone_offset
                )}
            </div>
            <div>{calculateLocalDay(weatherData.current.dt)}</div>
        </div>
      </div>
      <AdditionalInfo weatherData={weatherData} />
      <HourlyForecast weatherData={weatherData} />
      <span className="weather">{weatherData.daily[0].weather[0].main}</span>
    </div>
  );
};

export default WeatherCard;
