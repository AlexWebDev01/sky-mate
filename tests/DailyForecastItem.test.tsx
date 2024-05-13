import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import DailyForecastItem from '@components/DailyForecast/components/DailyForecastItem';
import { DailyWeatherData } from '@api/fetchWeatherData/fetchWeatherData.interface';
import { WeatherConditions } from '@shared/constants/clothesAlgorithm/clothesAlgorithm.interface';
import {
  calculateLocalFormattedDay,
  calculateLocalDateAnotherFormat,
} from '@shared/helpers/date/date.ts';

jest.mock('@shared/helpers/date/date.ts', () => ({
  calculateLocalFormattedDay: jest.fn((dt) => `Day ${dt}`),
  calculateLocalDateAnotherFormat: jest.fn((dt) => `Formatted ${dt}`),
}));

const mockItem: DailyWeatherData = {
  clouds: 0,
  dew_point: 10,
  dt: 1625241600,
  humidity: 50,
  pressure: 1013,
  uvi: 5,
  weather: [
    {
      id: 800,
      main: WeatherConditions.clear,
      description: 'clear sky',
      icon: '01d',
    },
  ],
  wind_deg: 180,
  wind_speed: 5,
  feels_like: { day: 25, night: 15, eve: 20, morn: 10 },
  moon_phase: 0.5,
  moonrise: 1625205600,
  moonset: 1625258400,
  pop: 0.1,
  rain: 0,
  summary: 'Clear sky',
  sunrise: 1625212800,
  sunset: 1625263200,
  temp: {
    day: 25,
    eve: 20,
    max: 28,
    min: 15,
    morn: 18,
    night: 15,
  },
  wind_gust: 10,
};

describe('DailyForecastItem', () => {
  test('renders correctly with given item data', () => {
    const { getByText } = render(<DailyForecastItem item={mockItem} />);

    expect(getByText('Day 1625241600')).toBeInTheDocument();
    expect(getByText('Formatted 1625241600')).toBeInTheDocument();
    expect(getByText('25°')).toBeInTheDocument();
    expect(getByText('15°')).toBeInTheDocument();
    expect(getByText('clear')).toBeInTheDocument();
  });

  test('applies correct class based on weather type', () => {
    const { container } = render(<DailyForecastItem item={mockItem} />);
    const dateElement = container.querySelector('.clear.date');

    expect(dateElement).toBeInTheDocument();
  });

  test('calls utility functions with correct arguments', () => {
    render(<DailyForecastItem item={mockItem} />);

    expect(calculateLocalFormattedDay).toHaveBeenCalledWith(mockItem.dt);
    expect(calculateLocalDateAnotherFormat).toHaveBeenCalledWith(mockItem.dt);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<DailyForecastItem item={mockItem} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
