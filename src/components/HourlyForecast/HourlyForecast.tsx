import "./HourlyForecast.css";

import { epochToLocalTime } from "../../helpers";

const WeatherCard = ({ weatherData }: any) => {
  return (
    <div className="timeline-container">
        <svg className="left-arrow"></svg>
        {weatherData.hourly.slice(1, 12).map((hour: any, index: number) => {
            return (
                <div key={index}>
                    <div>{Math.round(hour.temp)}&deg;C</div>
                    <div className="line"></div>
                    <div>{epochToLocalTime(hour.dt, weatherData.timezone_offset)}</div>
                </div>
            )
        })}
        <div className="timeline">

        </div>
        <svg className="right-arrow"></svg>
  </div>
  );
};

export default WeatherCard;
