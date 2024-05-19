import { WeatherConditions } from '@shared/constants/clothesAlgorithm/clothesAlgorithm.interface';

import RainBlob from '@shared/assets/icons/rain-blob.svg';
import Snowflake from '@shared/assets/icons/snowflake.svg';
import Clouds from '@shared/assets/icons/clouds.svg';

interface IProps {
  pageStyle: WeatherConditions | '';
}

export const BackgroundDecoration = ({ pageStyle }: IProps) => {
  switch (pageStyle) {
    case WeatherConditions.rain:
      return (
        <>
          {Array.from({ length: 6 }).map((_, index) => (
            <RainBlob key={index} className={`blob rain-${index + 1}`} />
          ))}
        </>
      );
    case WeatherConditions.snow:
      return (
        <>
          {Array.from({ length: 4 }).map((_, index) => (
            <Snowflake key={index} className={`snow snow-${index + 1}`} />
          ))}
        </>
      );
    case WeatherConditions.clouds:
    case WeatherConditions.fog:
    case WeatherConditions.dust:
    case WeatherConditions.mist:
      return <Clouds className='clouds' />;
    case WeatherConditions.sun:
    case WeatherConditions.clear:
      return <div className='sun'></div>;
  }
};
