import { useState, useEffect } from "react";

import "./WeatherPage.css";

import NavBar from "../../components/NavBar/NavBar";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import DailyForecast from "../../components/DailyForecast/DailyForecast";

import { fetchWeatherData } from "../../api/fetchWeatherData";
import { fetchUserLocatioByIP } from "../../api/fetchUserLocationByIp";
import NavigationLink from "../../components/NavigationLink/NavigationLink";
import Background from "../../components/Background/Background";
import { Coordinates } from "../../context/GlobalContext.interface";
import { fetchGeocodingCoordinates } from "../../api/fetchGeocodingCoordinates";
import { fetchGeocodingLocation } from "../../api/fetchGeocodingLocation";

const WeatherPage = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<object | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [expandedCard, setExpandedCard] = useState<
    "weather-card" | "daily-forecast"
  >("weather-card");
  const [pageStyle, setPageStyle] = useState<string>("");

  useEffect(() => {
    if (!coordinates && !location) {
      getUserLocation();
    }
  }, []);

  useEffect(() => {
    getWeatherData();
    getLocation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates]);

  const getUserLocation = async () => {
    const data = await fetchUserLocatioByIP();

    console.log("COORDINATES:", data.loc);
    setCoordinates(data.loc);
    setLocation(data.city);
  };

  const getWeatherData = async () => {
    if (coordinates) {
      const data = await fetchWeatherData(coordinates, "metric");

      setWeatherData(data);
      setPageStyle(data.daily[0].weather[0].main.toLowerCase());
    }

    setIsLoading(false);
  };

  const getLocation = async (): Promise<void> => {
    if (coordinates) {
      const location = await fetchGeocodingLocation(coordinates);

      setLocation(location);
    }
  };

  const handleSearch = async (location: string) => {
    const coordinates = await fetchGeocodingCoordinates(location);
    setCoordinates(coordinates);
  };

  const handleWeatherExpand = () => {
    if (expandedCard !== "weather-card") {
      setExpandedCard("weather-card");
    }
  };

  const handleForecastExpand = () => {
    if (expandedCard !== "daily-forecast") {
      setExpandedCard("daily-forecast");
    }
  };

  if (isLoading)
    return (
      <div className="loader">
        <img src="./loader.png" />
      </div>
    );

  return (
    <div className={`${pageStyle} weather-page`}>
      <NavBar handleSearch={handleSearch} pageStyle={pageStyle} />
      <div className="content-container">
        <WeatherCard
          weatherData={weatherData}
          location={location}
          isMainPage={true}
          expanded={expandedCard}
          onExpand={handleWeatherExpand}
        />
        <DailyForecast
          weatherData={weatherData}
          expanded={expandedCard}
          onExpand={handleForecastExpand}
        />
      </div>
      <NavigationLink navigationTo="/look" />
      <Background page="weatherPage" pageStyle={pageStyle} />
    </div>
  );
};

export default WeatherPage;
