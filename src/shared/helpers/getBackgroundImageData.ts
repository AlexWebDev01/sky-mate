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
          ? `./images/snow-character-${formattedTempRange}.webp`
          : './images/snow-character.webp',
        defaultSrc: './images/snow-character.webp',
        className: 'snow-character',
        alt: 'Snow character',
      };
    case WeatherConditions.rain:
      return {
        src: clothesAdvice?.tempRangeName
          ? `./images/rain-character-${formattedTempRange}.webp`
          : './images/rain-character.webp',
        defaultSrc: './images/rain-character.webp',
        className: 'rain-character',
        alt: 'Rain character',
      };
    case WeatherConditions.clear:
    case WeatherConditions.sun:
      return {
        src: clothesAdvice?.tempRangeName
          ? `./images/sun-character-${formattedTempRange}.webp`
          : './images/sun-character.webp',
        defaultSrc: './images/sun-character.webp',
        className: 'sun-character',
        alt: 'Sun character',
      };
    case WeatherConditions.clouds:
    case WeatherConditions.fog:
    case WeatherConditions.dust:
    case WeatherConditions.mist:
      return {
        src: clothesAdvice?.tempRangeName
          ? `./images/clouds-character-${formattedTempRange}.webp`
          : './images/clouds-character.webp',
        defaultSrc: './images/clouds-character.webp',
        className: 'clouds-character',
        alt: 'Clouds character',
      };
    default:
      return {
        src: '',
        defaultSrc: '',
        className: '',
        alt: '',
      };
  }
};

interface BackgroundImageData {
  src: string;
  defaultSrc: string;
  className: string;
  alt: string;
}
