import { useGlobalContext } from '@context/GlobalContext';

import NavBar from '@components/NavBar/NavBar';
import NavigationLink from '@components/NavigationLink/NavigationLink';
import AdditionalInfo from '@components/AdditionalInfo/AdditionalInfo';
import Background from '@components/Background/Background';

import './LookPage.css';

const LookPage = () => {
  const { state } = useGlobalContext();
  const { weatherData, pageStyle, location, isLoading, clothesAdvice } = state;

  const { clothesStyle, clothesList, clothesDescription } = clothesAdvice ?? {};

  if (isLoading || !weatherData) {
    return (
      <div className='loader'>
        <img src='./loader.png' />
      </div>
    );
  }

  return (
    <div className='look-page'>
      <NavBar />
      <div className='left-part'>
        <h2 className='location'>{location}</h2>
        <AdditionalInfo expanded isMainPage={false} />
      </div>
      <NavigationLink direction='left' to='/'>
        Go back
      </NavigationLink>
      <div className='right-part'>
        <h1>{clothesStyle}</h1>
        <div className={`${pageStyle} temperature`}>
          {Math.round(weatherData.current.temp)}&deg; C
        </div>
        <ul className='clothes-list'>
          {clothesList?.map((item: string, index: number) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <p className='clothes-description'>{clothesDescription}</p>
      <Background page='lookPage' />
    </div>
  );
};

export default LookPage;
