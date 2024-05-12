import { memo } from 'react';
import SearchBar from '@components/SearchBar/SearchBar';
import Logo from '@components/Logo/Logo';

import './NavBar.scss';

const NavBar = memo(() => {
  return (
    <div className='nav-bar' data-testid='nav-bar'>
      <Logo />
      <SearchBar />
    </div>
  );
});

NavBar.displayName = 'NavBar';
export default NavBar;
