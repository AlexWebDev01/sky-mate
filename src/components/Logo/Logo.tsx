import { Link } from 'react-router-dom';
import LogoSvg from '@shared/assets/icons/logo.svg';

import './Logo.scss';

const Logo = () => {
  return (
    <Link to='/' className='logo-link'>
      <LogoSvg class='logo' />
    </Link>
  );
};

export default Logo;
