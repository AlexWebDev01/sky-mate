import { Link } from 'react-router-dom';
import LinkArrow from '@shared/assets/icons/link-arrow.svg?react';

import './NavigationLink.css';

interface Props {
  direction: string;
}

const NavigationLink = ({ direction }: Props) => {
  const text = direction === 'left' ? 'Go back' : 'View more';
  const href = direction === 'left' ? '/' : '/look';

  return (
    <div className={`navigation-link ${direction}`}>
      <Link to={href} className='link'>
        {text}
      </Link>
      <LinkArrow className='arrow' />
    </div>
  );
};

export default NavigationLink;
