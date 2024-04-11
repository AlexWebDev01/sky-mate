import { Link } from 'react-router-dom';
import LogoSvg from '../../shared/assets/icons/logo.svg?react';

const Logo = () => {
  return (
    <Link to='/' className='logo-link'>
      <LogoSvg width={212.5} height={55} />
    </Link>
  );
};

export default Logo;
