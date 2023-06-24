export const fetchWeatherData = (lat: number, lon: number, units: string) => {
    return fetch(
      `${
        import.meta.env.VITE_WEATHER_APP_API_URL
      }/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely&appid=${
        import.meta.env.VITE_WEATHER_APP_API_KEY
      }`
    );
  };
  