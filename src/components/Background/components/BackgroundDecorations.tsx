import { useGlobalContext } from '@context/global/GlobalContext';
import { WeatherConditions } from '@shared/constants/clothesAlgorithm/clothesAlgorithm.interface';
import { RainDecoration } from './RainDecoration';
import { SnowDecoration } from './SnowDecoration';
import { CloudsDecoration } from './CloudsDecoration';
import { SunDecoration } from './SunDecoration';

interface IProps {
  page: string;
}

export const BackgroundDecoration = ({ page }: IProps) => {
  const { state } = useGlobalContext();
  const { pageStyle } = state;

  const coldColor =
    page === 'weatherPage' ? 'var(--white)' : 'var(--light-blue)';
  const cloudsColor =
    page === 'weatherPage' ? 'var(--white)' : 'var(--light-green)';
  const warmColor =
    page === 'weatherPage' ? 'var(--white)' : 'var(--light-orange)';

  switch (pageStyle) {
    case WeatherConditions.rain:
      return <RainDecoration coldColor={coldColor} />;
    case WeatherConditions.snow:
      return <SnowDecoration coldColor={coldColor} />;
    case WeatherConditions.clouds:
    case WeatherConditions.fog:
    case WeatherConditions.dust:
    case WeatherConditions.mist:
      return <CloudsDecoration cloudsColor={cloudsColor} />;
    case WeatherConditions.sun:
    case WeatherConditions.clear:
      return <SunDecoration warmColor={warmColor} />;
  }
};
