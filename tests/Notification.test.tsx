import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Notification from '@components/Notification/Notification';
import { ErrorProvider, useErrorContext } from '@context/error/ErrorContext';

describe('Notification Component', () => {
  test('renders the notification message', () => {
    render(
      <Notification
        message='Test message'
        onClose={() => {}}
        isVisible={true}
      />
    );

    const messageElement = screen.getByText(/Test message/i);
    expect(messageElement).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();
    render(
      <Notification
        message='Test message'
        onClose={onCloseMock}
        isVisible={true}
      />
    );

    const closeButton = screen.getByTestId('close-button');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('has the correct class when isVisible is true', () => {
    render(
      <Notification
        message='Test message'
        onClose={() => {}}
        isVisible={true}
      />
    );

    const notificationElement = screen.getByTestId('notification');
    expect(notificationElement).toHaveClass('visible notification');
  });

  test('has the correct class when isVisible is false', () => {
    render(
      <Notification
        message='Test message'
        onClose={() => {}}
        isVisible={false}
      />
    );

    const notificationElement = screen.getByTestId('notification');
    expect(notificationElement).toHaveClass('notification');
    expect(notificationElement).not.toHaveClass('visible');
  });
});

const TestComponent: React.FC = () => {
  const { showNotification } = useErrorContext();

  React.useEffect(() => {
    showNotification('Test error message');
  }, [showNotification]);

  return null;
};

describe('ErrorContext and Notification Component', () => {
  jest.useFakeTimers();

  test('shows the notification when the error message is setup', () => {
    render(
      <ErrorProvider>
        <TestComponent />
      </ErrorProvider>
    );

    expect(screen.getByText('Test error message')).toBeInTheDocument();
    expect(screen.getByTestId('notification')).toHaveClass(
      'visible notification'
    );
  });

  test('hides the notification after 5 seconds', () => {
    render(
      <ErrorProvider>
        <TestComponent />
      </ErrorProvider>
    );

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(screen.getByTestId('notification')).not.toHaveClass('visible');
  });

  test('resets the error message after hiding the notification', () => {
    render(
      <ErrorProvider>
        <TestComponent />
      </ErrorProvider>
    );

    act(() => {
      jest.advanceTimersByTime(5600);
    });

    act(() => {
      jest.advanceTimersByTime(600);
    });

    expect(screen.getByTestId('notification')).not.toHaveTextContent(
      'Test error message'
    );
  });
});
