import { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '@context/global/GlobalContext';

import './Notification.scss';

const Notification = () => {
  const { error, setError } = useGlobalContext();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const refreshTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (error) {
      setIsVisible(true);

      if (refreshTimeout.current) {
        clearTimeout(refreshTimeout.current);
      }

      refreshTimeout.current = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          setError('');
        }, 600);
      }, 5000);
    }
  }, [error, setError]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setError('');
    }, 600);
  };

  return (
    <div
      className={isVisible ? 'visible notification' : 'notification'}
      data-testid='notification'
    >
      <p className='text'>{error}</p>
      <button
        className='close-button'
        onClick={handleClose}
        data-testid='close-button'
      >
        X
      </button>
    </div>
  );
};

export default Notification;
