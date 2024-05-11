import { useGlobalContext } from '@context/global/GlobalContext';
import { epochToLocalTime } from '@shared/helpers/date/date';

import './AdditionalInfo.scss';

interface Props {
  isMainPage: boolean;
  expanded: boolean;
}

const AdditionalInfo = ({ isMainPage, expanded }: Props) => {
  const { state } = useGlobalContext();
  const { weatherData } = state;

  if (!weatherData) {
    return null;
  }

  const additionalInfoContent = [
    {
      title: 'sunrise',
      value: epochToLocalTime(
        weatherData.current.sunrise,
        weatherData.timezone_offset
      ),
    },
    {
      title: 'sunset',
      value: epochToLocalTime(
        weatherData.current.sunset,
        weatherData.timezone_offset
      ),
    },
    {
      title: 'wind speed',
      value: `${Math.round(weatherData.current.wind_speed * 10) / 10} m/s`,
    },
    { title: 'pressure', value: `${weatherData.current.pressure} m/s` },
  ];

  const weatherCondition = weatherData.daily[0].weather[0].main.toLowerCase();
  const titleStyle = isMainPage ? weatherCondition + '-light' : '';
  const contentStyle = isMainPage ? '' : weatherCondition;

  return (
    <div className={expanded ? 'additional-info' : 'hide'}>
      {additionalInfoContent.map((item, index) => {
        return (
          <div key={index}>
            <div className={`${titleStyle} title`}>{item.title}</div>
            <div className={`${contentStyle} value`}>{item.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AdditionalInfo;
