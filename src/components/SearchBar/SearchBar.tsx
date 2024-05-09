import { useState } from 'react';

import { VerticalLine } from './components/VerticalLine';
import { SearchButton } from './components/SearchButton';

import { useGlobalContext } from '@context/GlobalContext';
import { defineColor } from '@shared/helpers/defineColor';

import './SearchBar.scss';

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const onKeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  };

  const color = defineColor(pageStyle);

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
      <VerticalLine color={color} />
      <SearchButton color={color} onClick={performSearch} />
    </div>
  );
};

export default SearchBar;
