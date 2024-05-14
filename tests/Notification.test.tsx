import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import Notification from '@components/Notification/Notification';
import { useGlobalContext } from '@context/global/GlobalContext';
import { WeatherConditions } from '@shared/constants/clothesAlgorithm/clothesAlgorithm.interface';

jest.mock('@context/global/GlobalContext', () => ({
  useGlobalContext: jest.fn(),
  GlobalProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

const mockUseGlobalContext = useGlobalContext as jest.MockedFunction<
  typeof useGlobalContext
>;

const baseContextValue = {
  state: {
    weatherData: null,
    isLoading: false,
    coordinates: { lat: 56.946, lon: 24.1059 },
    location: 'Riga',
    pageStyle: WeatherConditions.clear,
    clothesAdvice: null,
  },
  setError: jest.fn(),
  fetchData: jest.fn(),
  handleSearch: jest.fn(),
};

describe('Notification', () => {
  let mockSetError: jest.Mock;

  beforeEach(() => {
    mockSetError = jest.fn();
    mockUseGlobalContext.mockReturnValue({
      ...baseContextValue,
      error: '',
      setError: mockSetError,
    });
  });

  test('should render without crashing', () => {
    const { getByTestId } = render(<Notification />);
    expect(getByTestId('notification')).toBeInTheDocument();
  });

  test('should display the error message when error is present', () => {
    mockUseGlobalContext.mockReturnValue({
      ...baseContextValue,
      error: 'Test error message',
    });

    const { getByText, getByTestId } = render(<Notification />);
    expect(getByTestId('notification')).toHaveClass('visible');
    expect(getByText('Test error message')).toBeInTheDocument();
  });

  test('should hide the notification after 5 seconds', async () => {
    jest.useFakeTimers();

    mockUseGlobalContext.mockReturnValue({
      ...baseContextValue,
      error: 'Test error message',
    });

    const { getByTestId } = render(<Notification />);
    expect(getByTestId('notification')).toHaveClass('visible');

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    await waitFor(() => {
      expect(getByTestId('notification')).not.toHaveClass('visible');
    });

    setTimeout(() => {
      expect(mockSetError).toHaveBeenCalledWith('');
    }, 600);

    jest.useRealTimers();
  });

  test('should close the notification when close button is clicked', () => {
    mockUseGlobalContext.mockReturnValue({
      ...baseContextValue,
      error: 'Test error message',
    });

    const { getByTestId } = render(<Notification />);
    expect(getByTestId('notification')).toHaveClass('visible');

    act(() => {
      fireEvent.click(getByTestId('close-button'));
    });

    setTimeout(() => {
      expect(getByTestId('notification')).not.toHaveClass('visible');
      expect(mockSetError).toHaveBeenCalledWith('');
    }, 600);
  });
});
