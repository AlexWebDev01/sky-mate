import './SmallScreenPage.scss';

const SmallScreenPage = () => {
  return (
    <div className='narrow-page'>
      <h1 className='title'>Ooops, seems like your device is too small!</h1>
      <p className='text'>
        Please, try again using device that is wider than 1240px and higher than
        700px
      </p>
      <div className='images-container'>
        <div className='sun'></div>
        <img className='sun-character' src='./images/sun-character-warm.png' />
      </div>
    </div>
  );
};

export default SmallScreenPage;
