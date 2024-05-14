import { Link } from 'react-router-dom';
import LogoSvg from '@shared/assets/icons/logo.svg';

import './Logo.scss';

const Logo = () => {
  return (
    <Link to='/' className='logo-link' data-testid='logo-link'>
      <LogoSvg className='logo' data-testid='logo-svg' />
    </Link>
  );
};

export default Logo;
