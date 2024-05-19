import './Loader.scss';

const Loader = () => {
  return (
    <div className='loader-container' data-testid='loader-container'>
      <div className='sun-loader' data-testid='sun-loader'></div>
    </div>
  );
};

export default Loader;
