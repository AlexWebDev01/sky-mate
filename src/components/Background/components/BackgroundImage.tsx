import { useGlobalContext } from '@context/GlobalContext';
import { getBackgroundImageData } from '@shared/helpers/getBackgroundImageData';

export const BackgroundImage = () => {
  const { state } = useGlobalContext();
  const { pageStyle, clothesAdvice } = state;

  const backgroundImageData = getBackgroundImageData(pageStyle, clothesAdvice);
  const { src, className, alt } = backgroundImageData;

  return (
    <img
      src={src}
      className={className}
      alt={alt}
      // onLoad={() => console.log("loaded")}
    />
  );
};
