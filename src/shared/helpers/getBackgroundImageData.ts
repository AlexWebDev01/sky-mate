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
          ? `./images/snow-character-${formattedTempRange}.png`
          : './images/snow-character.png',
        defaultSrc: './images/snow-character.png',
        className: 'snow-character',
        alt: 'Snow character',
      };
    case WeatherConditions.rain:
      return {
        src: clothesAdvice?.tempRangeName
          ? `./images/rain-character-${formattedTempRange}.png`
          : './images/rain-character.png',
        defaultSrc: './images/rain-character.png',
        className: 'rain-character',
        alt: 'Rain character',
      };
    case WeatherConditions.clear:
    case WeatherConditions.sun:
      console.log(`./images/sun-character-${formattedTempRange}.png`);
      return {
        src: clothesAdvice?.tempRangeName
          ? `./images/sun-character-${formattedTempRange}.png`
          : './images/sun-character.png',
        defaultSrc: './images/sun-character.png',
        className: 'sun-character',
        alt: 'Sun character',
      };
    case WeatherConditions.clouds:
    case WeatherConditions.fog:
    case WeatherConditions.dust:
    case WeatherConditions.mist:
      return {
        src: clothesAdvice?.tempRangeName
          ? `./images/clouds-character-${formattedTempRange}.png`
          : './images/clouds-character.png',
        defaultSrc: './images/clouds-character.png',
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
