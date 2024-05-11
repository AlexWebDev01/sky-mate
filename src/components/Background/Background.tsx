import { BackgroundImage } from './components/BackgroundImage';
import { BackgroundDecoration } from './components/BackgroundDecorations';

import './Background.scss';

interface IProps {
  page: string;
}

const Background = ({ page }: IProps) => {
  return (
    <div className='background-container'>
      <BackgroundDecoration page={page} />
      <BackgroundImage />
    </div>
  );
};

export default Background;
