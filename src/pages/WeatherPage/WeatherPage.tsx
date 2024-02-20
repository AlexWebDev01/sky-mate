import { useState, useEffect } from "react";

import { useGlobalContext } from "../../context/GlobalContext";

import NavBar from "../../components/NavBar/NavBar";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import DailyForecast from "../../components/DailyForecast/DailyForecast";
import NavigationLink from "../../components/NavigationLink/NavigationLink";
import Background from "../../components/Background/Background";

import { fetchWeatherData } from "../../api/fetchWeatherData";
import { fetchUserLocatioByIP } from "../../api/fetchUserLocationByIp";
import { fetchGeocodingCoordinates } from "../../api/fetchGeocodingCoordinates";
import { fetchGeocodingLocation } from "../../api/fetchGeocodingLocation";

import "./WeatherPage.css";
import { separateCoordinates } from "../../helpers";

const WeatherPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [expandedCard, setExpandedCard] = useState<
    "weather-card" | "daily-forecast"
  >("weather-card");

  const {
    coordinates,
    setCoordinates,
    location,
    setLocation,
    weatherData,
    setWeatherData,
    pageStyle,
    setPageStyle,
  } = useGlobalContext();

  useEffect(() => {
    if (!coordinates && !location) {
      setIsLoading(true);
      console.log("Getting location by ip...");
      getUserLocation();
    }
  }, []);

  useEffect(() => {
    console.log("Getting weather data...");
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates]);

  const getUserLocation = async () => {
    const data = await fetchUserLocatioByIP();

    const coords = separateCoordinates(data.loc);
    const { lat, lon } = coords;
    setCoordinates({ lat, lon });
    console.log("CURRENT COORDINATES:", coordinates);
    setLocation(data.city);
  };

  const fetchData = async () => {
    if (coordinates) {
      setIsLoading(true);

      try {
        // Run both async operations concurrently and wait for them to complete
        await Promise.all([getWeatherData(), getLocation()]);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }

      setIsLoading(false);
    }
  };

  const getWeatherData = async () => {
    if (coordinates) {
      const data = await fetchWeatherData(coordinates, "metric");

      setWeatherData(data);
      setPageStyle(data.daily[0].weather[0].main.toLowerCase());
    }
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

  if (isLoading) {
    return (
      <div className="loader">
        <img src="./loader.png" />
      </div>
    );
  } else {
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
  }
};

export default WeatherPage;
