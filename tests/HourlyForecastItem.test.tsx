import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HourlyForecastItem from '@components/HourlyForecast/components/HourlyForecastItem';
import { HourlyWeatherData } from '@api/fetchWeatherData/fetchWeatherData.interface';
import { epochToLocalTime } from '@shared/helpers/date/date';
import { WeatherConditions } from '@shared/constants/clothesAlgorithm/clothesAlgorithm.interface';

jest.mock('@shared/helpers/date/date', () => ({
  epochToLocalTime: jest.fn(),
}));

const mockEpochToLocalTime = epochToLocalTime as jest.MockedFunction<
  typeof epochToLocalTime
>;

jest.mock('@shared/assets/icons/link-arrow.svg', () => {
  return () => <svg data-testid='mocked-arrow'></svg>;
});

describe('HourlyForecastItem Component', () => {
  const mockItem: HourlyWeatherData = {
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
    pop: 0.2,
    wind_gust: 7.0,
    visibility: 10000,
    temp: 20.5,
    feels_like: 20,
  };

  const mockTimezoneOffset = -14400; // UTC-4

  beforeEach(() => {
    mockEpochToLocalTime.mockReturnValue('14:00');
  });

  test('renders temperature correctly', () => {
    render(
      <HourlyForecastItem item={mockItem} timezoneOffset={mockTimezoneOffset} />
    );
    const tempElement = screen.getByText('21°');
    expect(tempElement).toBeInTheDocument();
  });

  test('renders the time correctly', () => {
    render(
      <HourlyForecastItem item={mockItem} timezoneOffset={mockTimezoneOffset} />
    );
    const timeElement = screen.getByText('14');
    expect(timeElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(
      <HourlyForecastItem item={mockItem} timezoneOffset={mockTimezoneOffset} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
