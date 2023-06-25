import './AdditionalInfo.css';

import { epochToLocalTime } from "../../helpers";

const AdditionalInfo = ({ weatherData }: any) => {

    return (
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
    )
};

export default AdditionalInfo;