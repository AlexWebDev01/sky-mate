import './SmallScreenPage.scss';

const SmallScreenPage = () => {
  return (
    <div className='narrow-page'>
      <h1 className='title'>Ooops, seems like your device is too small!</h1>
      <p className='text'>
        Please, try again using laptop/desktop device that is wider than
      </p>
      <div className='images-container'>
        <div className='sun'></div>
        <img className='sun-character' src='./images/sun-character-warm.webp' />
      </div>
    </div>
  );
};

export default SmallScreenPage;
