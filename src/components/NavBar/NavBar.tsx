import { memo } from 'react';
import SearchBar from '@components/SearchBar/SearchBar';
import Logo from '@components/Logo/Logo';

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
