import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import SearchBar from '@components/SearchBar/SearchBar';
import { useGlobalContext } from '@context/global/GlobalContext';
import { GlobalContext } from '@context/global/GlobalContext.interface';

jest.mock('@shared/assets/icons/vertical-line.svg', () => {
  return () => <svg data-testid='mocked-vertical-line'></svg>;
});

jest.mock('@shared/assets/icons/search-icon.svg', () => {
  return (props: { onClick: () => void }) => (
    <svg data-testid='mocked-search-icon' onClick={props.onClick}></svg>
  );
});

jest.mock('@context/global/GlobalContext', () => ({
  useGlobalContext: jest.fn(),
}));

const mockUseGlobalContext = useGlobalContext as jest.MockedFunction<
  typeof useGlobalContext
>;

describe('SearchBar Component', () => {
  const mockContextValue: GlobalContext = {
    state: {
      pageStyle: '',
      isLoading: true,
      coordinates: null,
      location: null,
      weatherData: null,
      clothesAdvice: null,
    },
    handleSearch: jest.fn(),
    fetchData: jest.fn(),
  };

  beforeEach(() => {
    mockUseGlobalContext.mockReturnValue(mockContextValue);
  });

  test('renders the component', () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText('Search');
    const verticalLineElement = screen.getByTestId('mocked-vertical-line');
    const searchIconElement = screen.getByTestId('mocked-search-icon');

    expect(inputElement).toBeInTheDocument();
    expect(verticalLineElement).toBeInTheDocument();
    expect(searchIconElement).toBeInTheDocument();
  });

  test('updates input value on change', () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'test query' } });

    expect(inputElement).toHaveValue('test query');
  });

  test('performs search on enter key press', () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'test query' } });

    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    expect(mockContextValue.handleSearch).toHaveBeenCalledWith('test query');
    expect(inputElement).toHaveValue('');
  });

  test('performs search on search icon click', () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'test query' } });
    const searchIconElement = screen.getByTestId('mocked-search-icon');

    act(() => {
      fireEvent.click(searchIconElement);
    });

    expect(mockContextValue.handleSearch).toHaveBeenCalledWith('test query');
    expect(inputElement).toHaveValue('');
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<SearchBar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
