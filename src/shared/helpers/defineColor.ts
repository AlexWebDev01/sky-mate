import { WeatherConditions } from '@shared/constants/clothesAlgorithm/clothesAlgorithm.interface';

export const defineColor = (
  pageStyle: WeatherConditions | ''
): LightColors | '' => {
  switch (pageStyle) {
    case WeatherConditions.snow:
    case WeatherConditions.rain:
      return 'var(--light-blue)';
    case WeatherConditions.clear:
    case WeatherConditions.sun:
      return 'var(--light-orange)';
    case WeatherConditions.clouds:
    case WeatherConditions.fog:
    case WeatherConditions.dust:
    case WeatherConditions.mist:
      return 'var(--light-green)';
    default:
      return '';
  }
};

export type LightColors =
  | 'var(--light-blue)'
  | 'var(--light-orange)'
  | 'var(--light-green)';
