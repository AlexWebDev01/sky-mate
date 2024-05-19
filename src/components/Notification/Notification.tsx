import './Notification.scss';

interface IProps {
  message: string;
  onClose: () => void;
  isVisible: boolean;
}

const Notification = ({ message, onClose, isVisible }: IProps) => {
  return (
    <div
      className={isVisible ? 'visible notification' : 'notification'}
      data-testid='notification'
    >
      <p className='text'>{message}</p>
      <button
        className='close-button'
        onClick={onClose}
        data-testid='close-button'
      >
        X
      </button>
    </div>
  );
};

export default Notification;
