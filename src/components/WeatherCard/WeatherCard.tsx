import HourlyForecast from "../HourlyForecast/HourlyForecast";

import { epochToLocalTime } from "../../helpers";
import { calculateLocalDate } from "../../helpers";
import { calculateLocalDay } from "../../helpers";

import "./WeatherCard.css";

const WeatherCard = ({ weatherData, location }: any) => {

  return (
    <div className="weather-card">
      <div className="main-info">
        <div className="left">
            <div className="temperature">{Math.round(weatherData.current.temp)}&deg; C</div>
            <h2>{location}</h2>
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
      <div className="additional-info">
        <div>
          <div className="title">sunrise</div>
          <div className="value">{epochToLocalTime(weatherData.current.sunrise, weatherData.timezone_offset)}</div>
        </div>
        <div>
          <div className="title">sunset</div>
          <div className="value">{epochToLocalTime(weatherData.current.sunset, weatherData.timezone_offset)}</div>
        </div>
        <div>
            <div className="title">wind speed</div>
            <div className="value">{Math.round(weatherData.current.wind_speed * 10) / 10} m/s</div>
        </div>
        <div>
            <div className="title">pressure</div>
            <div className="value">{weatherData.current.pressure} m/s</div>
        </div>
      </div>
      <HourlyForecast weatherData={weatherData} />
      <span className="weather">{weatherData.daily[0].weather[0].main}</span>
    </div>
  );
};

export default WeatherCard;
