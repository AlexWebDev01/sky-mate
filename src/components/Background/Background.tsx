import { useGlobalContext } from '@context/global/GlobalContext';

import { BackgroundImage } from './components/BackgroundImage';
import { BackgroundDecoration } from './components/BackgroundDecorations';

import './Background.scss';

interface IProps {
  page: string;
}

const Background = ({ page }: IProps) => {
  const { state } = useGlobalContext();
  const { pageStyle, clothesAdvice } = state;

  return (
    <div
      className={`background-container ${page === 'weatherPage' ? 'white' : ''}`}
    >
      <BackgroundDecoration pageStyle={pageStyle} />
      <BackgroundImage
        pageStyle={pageStyle}
        clothesAdvice={clothesAdvice}
        key={pageStyle}
      />
    </div>
  );
};

export default Background;
