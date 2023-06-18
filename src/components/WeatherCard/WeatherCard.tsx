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
            <div>{calculateLocalDate(weatherData.current.dt)}/</div>
             <div>
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
          <div>sunrise</div>
          <div>{epochToLocalTime(weatherData.current.sunrise, weatherData.timezone_offset)}</div>
        </div>
        <div>
          <div>sunset</div>
          {epochToLocalTime(weatherData.current.sunset, weatherData.timezone_offset)}
        </div>
        <div>
            <div>wind speed</div>
            <div>{Math.round(weatherData.current.wind_speed * 10) / 10} m/s</div>
        </div>
        <div>
            <div>pressure</div>
            <div>{weatherData.current.pressure} m/s</div>
        </div>
      </div>
    {/* TODO: ADD HOURLYFORECAST COMPONENT */}
      <span className="weather">{weatherData.daily[0].weather[0].main}</span>
    </div>
  );
};

export default WeatherCard;
