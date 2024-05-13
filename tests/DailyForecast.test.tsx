import '@testing-library/jest-dom';
import {
  fireEvent,
  queryByTestId,
  render,
  screen,
} from '@testing-library/react';
import { GlobalProvider } from '@context/global/GlobalContext';
import DailyForecast from '@components/DailyForecast/DailyForecast';
import { WeatherData } from '@api/fetchWeatherData/fetchWeatherData.interface';
import { WeatherConditions } from '@shared/constants/clothesAlgorithm/clothesAlgorithm.interface';
import { useState } from 'react';

const mockWeatherData: WeatherData = {
  current: {
    clouds: 75,
    dew_point: 10,
    dt: 1631990400,
    feels_like: 12,
    humidity: 50,
    pressure: 1000,
    sunrise: 1631990400,
    sunset: 1632034400,
    temp: 15,
    uvi: 5,
    visibility: 10000,
    weather: [
      {
        main: WeatherConditions.clouds,
        description: 'overcast clouds',
        icon: '04d',
        id: 804,
      },
    ],
    wind_deg: 180,
    wind_speed: 2.5,
  },
  daily: [
    {
      dt: 1631990400,
      sunrise: 1631990400,
      sunset: 1632034400,
      moonrise: 1631990400,
      moonset: 1632034400,
      moon_phase: 0.5,
      temp: { day: 15, min: 10, max: 20, night: 10, eve: 12, morn: 10 },
      feels_like: { day: 12, night: 10, eve: 12, morn: 10 },
      pressure: 1000,
      humidity: 50,
      dew_point: 10,
      wind_speed: 2.5,
      wind_deg: 180,
      wind_gust: 3.5,
      clouds: 75,
      uvi: 5,
      pop: 0.5,
      rain: 0.5,
      summary: 'overcast clouds',
      weather: [
        {
          main: WeatherConditions.sun,
          description: 'clear sky',
          icon: '01d',
          id: 800,
        },
      ],
    },
  ],
  hourly: [
    {
      dt: 1631990400,
      temp: 15,
      feels_like: 12,
      pressure: 1000,
      humidity: 50,
      dew_point: 10,
      uvi: 5,
      clouds: 75,
      visibility: 10000,
      wind_speed: 2.5,
      wind_deg: 180,
      wind_gust: 3.5,
      pop: 0.5,
      weather: [
        {
          main: WeatherConditions.clouds,
          description: 'overcast clouds',
          icon: '04d',
          id: 804,
        },
      ],
    },
  ],
  lat: 56.946,
  lon: 24.1059,
  timezone: 'Europe/Riga',
  timezone_offset: 10800,
};

const DailyForecastParent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return <DailyForecast expanded={expanded} onExpand={handleExpand} />;
};

jest.mock('@context/global/GlobalContext', () => ({
  useGlobalContext: jest.fn(),
  GlobalProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe('DailyForecast', () => {
  beforeEach(() => {
    const { useGlobalContext } = jest.requireMock(
      '@context/global/GlobalContext'
    );
    useGlobalContext.mockImplementation(() => ({
      state: {
        weatherData: mockWeatherData,
        isLoading: false,
        coordinates: { lat: 56.946, lon: 24.1059 },
        location: 'Riga',
        pageStyle: 'clouds',
        clothesAdvice: 'Wear a jacket',
      },
      error: '',
      setError: jest.fn(),
      fetchData: jest.fn(),
      handleSearch: jest.fn(),
    }));
  });

  test('renders without crashing', () => {
    render(
      <GlobalProvider>
        <DailyForecast expanded={false} onExpand={jest.fn()} />
      </GlobalProvider>
    );
    expect(screen.getByTestId('daily-forecast')).toBeInTheDocument();
  });

  test('does not render if weatherData is null', () => {
    const { useGlobalContext } = jest.requireMock(
      '@context/global/GlobalContext'
    );
    useGlobalContext.mockImplementation(() => ({
      state: {
        weatherData: null,
        isLoading: false,
        coordinates: { lat: 56.946, lon: 24.1059 },
        location: 'Riga',
        pageStyle: 'clouds',
        clothesAdvice: 'Wear a jacket',
      },
      error: '',
      setError: jest.fn(),
      fetchData: jest.fn(),
      handleSearch: jest.fn(),
    }));

    const { container } = render(
      <GlobalProvider>
        <DailyForecast expanded={false} onExpand={jest.fn()} />
      </GlobalProvider>
    );
    expect(queryByTestId(container, 'daily-forecast')).toBeNull();
  });

  test('toggles expansion on click', () => {
    render(<DailyForecastParent />);

    const dailyForecast = screen.getByTestId('daily-forecast');
    expect(dailyForecast).toHaveClass('daily-forecast');

    fireEvent.click(dailyForecast);
    expect(dailyForecast).toHaveClass('forecast-expanded');

    fireEvent.click(dailyForecast);
    expect(dailyForecast).toHaveClass('daily-forecast');
  });

  test('matches snapshot', () => {
    const { asFragment } = render(
      <DailyForecast expanded={false} onExpand={jest.fn()} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
