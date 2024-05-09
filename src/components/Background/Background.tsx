import { BackgroundImage } from './components/BackgroundImage';
import { BackgroundDecoration } from './components/BackgroundDecorations';

import './Background.scss';

// Lazy image - contains state (isLoaded: boolean)
// isLoaded? - if true, show image
// onLoad={() => console.log("loaded")}
// when loaded - implement animation when increase opacity
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
