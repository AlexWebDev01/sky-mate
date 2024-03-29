import { useState } from "react";

import { useGlobalContext } from "../../context/GlobalContext";

import NavBar from "../../components/NavBar/NavBar";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import DailyForecast from "../../components/DailyForecast/DailyForecast";
import NavigationLink from "../../components/NavigationLink/NavigationLink";
import Background from "../../components/Background/Background";

import "./WeatherPage.css";

const WeatherPage = () => {
  const [expandedCard, setExpandedCard] = useState<
    "weather-card" | "daily-forecast"
  >("weather-card");

  const { state } = useGlobalContext();
  const { isLoading, pageStyle } = state;

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
  }

  return (
    <div className={`${pageStyle} weather-page`}>
      <NavBar />
      <div className="content-container">
        <WeatherCard
          isMainPage={true}
          expanded={expandedCard}
          onExpand={handleWeatherExpand}
        />
        <DailyForecast
          expanded={expandedCard}
          onExpand={handleForecastExpand}
        />
      </div>
      <NavigationLink navigationTo="/look" />
      <Background page="weatherPage" />
    </div>
  );
};

export default WeatherPage;
