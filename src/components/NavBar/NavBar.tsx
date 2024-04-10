import { memo } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../Logo/Logo';

import './NavBar.css';

const NavBar = memo(() => {
  return (
    <div className='nav-bar'>
      <Logo />
      <SearchBar />
    </div>
  );
});

export default NavBar;
