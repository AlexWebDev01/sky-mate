import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import HourlyForecast from '@components/HourlyForecast/HourlyForecast';
import { useGlobalContext } from '@context/global/GlobalContext';
import { WeatherData } from '@api/fetchWeatherData/fetchWeatherData.interface';
import {
  ClothesStyle,
  TemperatureRangeNames,
  WeatherConditions,
} from '@shared/constants/clothesAlgorithm/clothesAlgorithm.interface';

jest.mock('@shared/assets/icons/left-arrow.svg', () => {
  return () => <svg data-testid='mocked-left-arrow'></svg>;
});

jest.mock('@shared/assets/icons/right-arrow.svg', () => {
  return () => <svg data-testid='mocked-right-arrow'></svg>;
});

jest.mock('@context/global/GlobalContext', () => ({
  useGlobalContext: jest.fn(),
}));

const mockUseGlobalContext = useGlobalContext as jest.MockedFunction<
  typeof useGlobalContext
>;

describe('HourlyForecast Component', () => {
  const mockWeatherData: WeatherData = {
    current: {
      clouds: 75,
      dew_point: 10,
      dt: 1625235600,
      humidity: 65,
      pressure: 1013,
      uvi: 0.5,
      weather: [
        {
          id: 500,
          main: WeatherConditions.rain,
          description: 'light rain',
          icon: '10d',
        },
      ],
      wind_deg: 270,
      wind_speed: 5.1,
      sunrise: 1625217600,
      sunset: 1625268000,
      visibility: 10000,
      temp: 20,
      feels_like: 20,
    },
    daily: [],
    hourly: Array.from({ length: 14 }, (_, i) => ({
      dt: 1625235600 + i * 3600,
      temp: 20 + i,
      clouds: 75,
      dew_point: 10,
      humidity: 65,
      pressure: 1013,
      uvi: 0.5,
      weather: [
        {
          id: 500,
          main: WeatherConditions.rain,
          description: 'light rain',
          icon: '10d',
        },
      ],
      wind_deg: 270,
      wind_speed: 5.1,
      pop: 0.2,
      wind_gust: 7.0,
      visibility: 10000,
      feels_like: 20 + i,
    })),
    lat: 0,
    lon: 0,
    timezone: 'UTC',
    timezone_offset: 0,
  };

  beforeEach(() => {
    mockUseGlobalContext.mockReturnValue({
      state: {
        weatherData: mockWeatherData,
        isLoading: false,
        location: 'London',
        coordinates: { lat: 0, lon: 0 },
        pageStyle: WeatherConditions.clear,
        clothesAdvice: {
          tempRangeName: TemperatureRangeNames.COLD,
          clothesStyle: ClothesStyle.basic,
          clothesDescription: '',
          clothesList: ['jacket', 'scarf'],
        },
      },
      fetchData: jest.fn(),
      handleSearch: jest.fn(),
    });
  });

  test('renders correctly when expanded', () => {
    render(<HourlyForecast expanded={true} />);
    const slider = screen.getByTestId('slider');
    expect(slider).toBeInTheDocument();
  });

  test('disables left arrow at initial position', () => {
    render(<HourlyForecast expanded={true} />);
    const leftArrow = screen.getByTestId('left-arrow');
    expect(leftArrow).toBeDisabled();
  });

  test('enables right arrow at initial position', () => {
    render(<HourlyForecast expanded={true} />);
    const rightArrow = screen.getByTestId('right-arrow');
    expect(rightArrow).not.toBeDisabled();
  });

  test('slides right and updates position', () => {
    render(<HourlyForecast expanded={true} />);
    const rightArrow = screen.getByTestId('right-arrow');

    fireEvent.click(rightArrow);

    const slider = screen.getByTestId('slider');
    expect(slider).toHaveStyle('transform: translateX(-55px)');
  });

  test('slides left and updates position', () => {
    render(<HourlyForecast expanded={true} />);
    const rightArrow = screen.getByTestId('right-arrow');
    const leftArrow = screen.getByTestId('left-arrow');

    fireEvent.click(rightArrow);
    fireEvent.click(leftArrow);

    const slider = screen.getByTestId('slider');
    expect(slider).toHaveStyle('transform: translateX(-0px)');
  });

  test('disables right arrow at max position', () => {
    render(<HourlyForecast expanded={true} />);
    const rightArrow = screen.getByTestId('right-arrow');

    for (let i = 0; i < 4; i++) {
      fireEvent.click(rightArrow);
    }

    expect(rightArrow).toBeDisabled();
  });

  test('matches snapshot', () => {
    const { container } = render(<HourlyForecast expanded={true} />);
    expect(container).toMatchSnapshot();
  });
});
