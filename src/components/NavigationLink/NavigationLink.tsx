import { Link, LinkProps } from 'react-router-dom';
import LinkArrow from '@shared/assets/icons/link-arrow.svg';

import './NavigationLink.css';

interface Props extends LinkProps {
  direction: string;
}

const NavigationLink = ({ direction, children, ...rest }: Props) => {
  return (
    <div className={`navigation-link ${direction}`}>
      <Link className='link' {...rest}>
        {children}
      </Link>
      <LinkArrow className='arrow' />
    </div>
  );
};

export default NavigationLink;
