import './AdditionalInfo.css';

import { epochToLocalTime } from "../../helpers";

const AdditionalInfo = ({ weatherData }: any) => {
  const pageStyle = weatherData.daily[0].weather[0].main.toLowerCase();

    return (
        <div className="additional-info">
        <div>
          <div className={`${pageStyle} title`}>sunrise</div>
          <div className="value">{epochToLocalTime(weatherData.current.sunrise, weatherData.timezone_offset)}</div>
        </div>
        <div>
          <div className={`${pageStyle} title`}>sunset</div>
          <div className="value">{epochToLocalTime(weatherData.current.sunset, weatherData.timezone_offset)}</div>
        </div>
        <div>
            <div className={`${pageStyle} title`}>wind speed</div>
            <div className="value">{Math.round(weatherData.current.wind_speed * 10) / 10} m/s</div>
        </div>
        <div>
            <div className={`${pageStyle} title`}>pressure</div>
            <div className="value">{weatherData.current.pressure} m/s</div>
        </div>
      </div>
    )
};

export default AdditionalInfo;