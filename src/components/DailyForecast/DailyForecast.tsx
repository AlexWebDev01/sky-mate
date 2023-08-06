import "./DailyForecast.css";

import { calculateLocalDateAnotherFormat } from "../../helpers";
import { calculateLocalFormattedDay } from "../../helpers";

const DailyForecast = ({ weatherData, expanded, onExpand }: any) => {
    const pageStyle = weatherData.daily[0].weather[0].main.toLowerCase();

    return(
        <div className={expanded === 'daily-forecast' ? 'forecast-expanded' : 'daily-forecast'} onClick={onExpand}>
            {weatherData.daily.map((item: any, index: number) => {

                return(
                    <div className="daily-weather" key={index}>
                        <div className="day">{calculateLocalFormattedDay(item.dt)}</div>
                        <div className={`${pageStyle} date`}>{calculateLocalDateAnotherFormat(item.dt)}</div>
                        <div className="day-temperature">{Math.round(item.temp.day)}&deg;</div>
                        <div className="night-temperature">{Math.round(item.temp.night)}&deg;</div>
                        <div className="weather">{item.weather[0].main}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default DailyForecast;