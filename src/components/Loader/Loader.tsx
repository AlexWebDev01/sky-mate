import Notification from '@components/Notification/Notification';
import './Loader.scss';

const Loader = () => {
  return (
    <div className='loader-container'>
      <Notification />
      <div className='sun-loader'></div>
    </div>
  );
};

export default Loader;
