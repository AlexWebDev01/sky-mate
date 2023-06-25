import "./DailyForecast.css";

import { calculateLocalDateAnotherFormat } from "../../helpers";
import { calculateLocalFormattedDay } from "../../helpers";

const DailyForecast = ({ weatherData }: any) => {

    return(
        <div className="daily-forecast">
            {weatherData.daily.map((item: any, index: number) => {

                return(
                    <div className="daily-weather" key={index}>
                        <div className="day">{calculateLocalFormattedDay(item.dt)}</div>
                        <div className="date">{calculateLocalDateAnotherFormat(item.dt)}</div>
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