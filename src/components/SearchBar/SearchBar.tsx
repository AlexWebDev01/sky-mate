import { useState } from 'react';

import { useGlobalContext } from '@context/GlobalContext';
import { WeatherConditions } from '@shared/constants/clothesAlgorithm/clothesAlgorithm.interface';

import './SearchBar.css';

const SearchBar = () => {
  const { state, handleSearch } = useGlobalContext();
  const [inputValue, setInputValue] = useState('');
  const { pageStyle } = state;

  const performSearch = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue) {
      handleSearch(trimmedValue);
      setInputValue('');
    }
  };

  const onClickHandler = () => {
    performSearch();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const onKeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  };

  const color: string =
    pageStyle === WeatherConditions.snow || pageStyle === WeatherConditions.rain
      ? 'var(--light-blue)'
      : pageStyle === WeatherConditions.clear ||
          pageStyle === WeatherConditions.sun
        ? 'var(--light-orange)'
        : pageStyle === WeatherConditions.clouds ||
            pageStyle === WeatherConditions.fog ||
            pageStyle === WeatherConditions.dust ||
            pageStyle === WeatherConditions.mist
          ? 'var(--light-green)'
          : '';

  return (
    <div className='search-bar'>
      <input
        placeholder='Search'
        className={pageStyle}
        onKeyDown={onKeyPressHandler}
        onChange={handleChange}
        value={inputValue}
        autoFocus
      />
      <svg
        className='vertical-line'
        width='2'
        height='32'
        viewBox='0 0 2 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path id='Vector 10' d='M1 0L0.999999 32' stroke={color} />
      </svg>
      <button onClick={onClickHandler}>
        <svg
          width='25'
          height='25'
          viewBox='0 0 25 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            id='Vector'
            d='M24 24L18.4507 18.4507M18.4507 18.4507C19.3999 17.5014 20.1529 16.3745 20.6666 15.1343C21.1803 13.8941 21.4447 12.5648 21.4447 11.2224C21.4447 9.87995 21.1803 8.55067 20.6666 7.31044C20.1529 6.0702 19.3999 4.9433 18.4507 3.99406C17.5014 3.04483 16.3745 2.29185 15.1343 1.77813C13.8941 1.26441 12.5648 1 11.2224 1C9.87995 1 8.55067 1.26441 7.31044 1.77813C6.0702 2.29185 4.9433 3.04483 3.99406 3.99406C2.077 5.91113 1 8.51123 1 11.2224C1 13.9335 2.077 16.5336 3.99406 18.4507C5.91113 20.3677 8.51123 21.4447 11.2224 21.4447C13.9335 21.4447 16.5336 20.3677 18.4507 18.4507Z'
            stroke={color}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
