import { useState } from 'react';

import VerticalLine from '@shared/assets/icons/vertical-line.svg';
import SearchIcon from '@shared/assets/icons/search-icon.svg';

import { useGlobalContext } from '@context/global/GlobalContext';

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

  return (
    <div className={`search-bar ${pageStyle}`}>
      <input
        placeholder='Search'
        onKeyDown={onKeyPressHandler}
        onChange={handleChange}
        value={inputValue}
        autoFocus
      />

      <VerticalLine className='vertical-line' />
      <SearchIcon className='search-icon' onClick={performSearch} />
    </div>
  );
};

export default SearchBar;
