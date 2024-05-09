import {
  ClothesAdviceWithTemp,
  WeatherConditions,
} from '@shared/constants/clothesAlgorithm/clothesAlgorithm.interface';

export const getBackgroundImageData = (
  pageStyle: WeatherConditions | '',
  clothesAdvice: ClothesAdviceWithTemp | null
): BackgroundImageData => {
  const formattedTempRange = clothesAdvice?.tempRangeName
    ? clothesAdvice.tempRangeName.toLowerCase().replace('_', '-')
    : '';

  switch (pageStyle) {
    case WeatherConditions.snow:
      return {
        src: clothesAdvice?.tempRangeName
          ? `./snow-character-${formattedTempRange}.png`
          : './snow-character.png',
        className: 'snow-character',
        alt: 'Snow character',
      };
    case WeatherConditions.rain:
      return {
        src: clothesAdvice?.tempRangeName
          ? `./rain-character-${formattedTempRange}.png`
          : './rain-character.png',
        className: 'rain-character',
        alt: 'Rain character',
      };
    case WeatherConditions.clear:
    case WeatherConditions.sun:
      return {
        src: clothesAdvice?.tempRangeName
          ? `./sun-character-${formattedTempRange}.png`
          : './sun-character.png',
        className: 'sun-character',
        alt: 'Sun character',
      };
    case WeatherConditions.clouds:
    case WeatherConditions.fog:
    case WeatherConditions.dust:
    case WeatherConditions.mist:
      return {
        src: clothesAdvice?.tempRangeName
          ? `./clouds-character-${formattedTempRange}.png`
          : './clouds-character.png',
        className: 'clouds-character',
        alt: 'Clouds character',
      };
    default:
      return {
        src: '',
        className: '',
        alt: '',
      };
  }
};

interface BackgroundImageData {
  src: string;
  className: string;
  alt: string;
}
