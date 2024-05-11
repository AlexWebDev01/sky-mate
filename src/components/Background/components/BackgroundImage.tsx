import { useGlobalContext } from '@context/global/GlobalContext';
import { getBackgroundImageData } from '@shared/helpers/getBackgroundImageData';
import { useEffect, useState } from 'react';

export const BackgroundImage = () => {
  const { state } = useGlobalContext();
  const { pageStyle, clothesAdvice } = state;
  const [imageData, setImageData] = useState({
    src: '',
    className: '',
    alt: '',
    defaultSrc: '',
  });
  const [imageSrc, setImageSrc] = useState<string>('');
  const [imageClassName, setImageClassName] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(false);
    const newImageData = getBackgroundImageData(pageStyle, clothesAdvice);
    setImageData(newImageData);

    const img = new Image();

    img.onload = () => {
      setTimeout(() => {
        setImageSrc(newImageData.src);
        setImageClassName(newImageData.className);
        setIsLoaded(true);
      }, 400);
    };

    img.onerror = () => {
      setTimeout(() => {
        setImageSrc(newImageData.defaultSrc);
        setImageClassName(newImageData.className);
        setIsLoaded(true);
      }, 400);
    };

    img.src = newImageData.src;
  }, [pageStyle, clothesAdvice]);

  return (
    <img
      src={imageSrc}
      className={`background-image ${imageClassName} ${isLoaded ? 'loaded' : ''}`}
      alt={imageData.alt}
    />
  );
};
