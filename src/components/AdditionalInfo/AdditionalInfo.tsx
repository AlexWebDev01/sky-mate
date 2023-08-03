import './AdditionalInfo.css';

import { epochToLocalTime } from "../../helpers";

const AdditionalInfo = ({ weatherData }: any) => {
  const additionalInfoContent = [
    {title: 'sunrise', value: epochToLocalTime(weatherData.current.sunrise, weatherData.timezone_offset)},
    {title: 'sunset', value: epochToLocalTime(weatherData.current.sunset, weatherData.timezone_offset)},
    {title: 'wind speed', value: `${Math.round(weatherData.current.wind_speed * 10) / 10} m/s`},
    {title: 'pressure', value: `${weatherData.current.pressure} m/s`}
  ];
  const pageStyle = weatherData.daily[0].weather[0].main.toLowerCase();

  return(
    <div className="additional-info">
      {additionalInfoContent.map((item: any) => {
          return (
              <div key='index'>
                <div className={`${pageStyle} title`}>{item.title}</div>
                <div className="value">{item.value}</div>
            </div>
          )
      })}
    </div>
    );
};

export default AdditionalInfo;