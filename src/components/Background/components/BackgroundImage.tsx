import { useState } from 'react';

import {
  ClothesAdviceWithTemp,
  WeatherConditions,
} from '@shared/constants/clothesAlgorithm/clothesAlgorithm.interface';
import { getBackgroundImageData } from '@shared/helpers/getBackgroundImageData';

interface IProps {
  pageStyle: WeatherConditions | '';
  clothesAdvice: ClothesAdviceWithTemp | null;
}

export const BackgroundImage = ({ pageStyle, clothesAdvice }: IProps) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const newImageData = getBackgroundImageData(pageStyle, clothesAdvice);

  const handleLoad = () => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 400);
  };

  return (
    <img
      src={newImageData.src}
      className={`background-image ${newImageData.className} ${isLoaded ? 'loaded' : ''}`}
      alt={newImageData.alt}
      onLoad={handleLoad}
    />
  );
};
