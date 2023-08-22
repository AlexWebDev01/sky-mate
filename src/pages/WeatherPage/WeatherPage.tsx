import { useState, useEffect } from "react";

import "./WeatherPage.css";

import NavBar from "../../components/NavBar/NavBar";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import DailyForecast from "../../components/DailyForecast/DailyForecast";

import { fetchWeatherData } from "../../api/fetchWeatherData";
import { fetchUserLocatioByIP } from "../../api/fetchUserLocationByIp";
import { separateCoordinates } from "../../helpers";
import NavigationLink from "../../components/NavigationLink/NavigationLink";
import Background from "../../components/Background/Background";


const WeatherPage = () => {

    const [lat, setLat] = useState<number>(0);
    const [lon, setLon] = useState<number>(0);
    const [data, setData] = useState<object | null>(null);
    const [location, setLocation] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [expandedCard, setExpandedCard] = useState<'weather-card' | 'daily-forecast'>('weather-card');
    const [pageStyle, setPageStyle] = useState<string>('');

    useEffect(() => {
      getUserLocation();
    }, []);
  
    const getUserLocation = () => {
      fetchUserLocatioByIP()
      .then((res) => res.json())
      .then((result) => {
        const {latitude, longitude}: any = separateCoordinates(result.loc);
        console.log(latitude, longitude);
        setLocation(result.city);
        setLat(latitude);
        setLon(longitude);
        console.log("USER LOCATION: ", result);
      })
      .catch(error => console.error(error));
    };
  
    const getWeatherData = () => {
      fetchWeatherData(lat, lon, "metric")
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          setPageStyle((result.daily[0].weather[0].main).toLowerCase())
          setIsLoading(false);
          console.log("DATA:", result);
        });
    };
  
    useEffect(() => {
      if (!lat || !lon) {
        return;
      }
  
      getWeatherData();
  
      fetch(
        `${
          import.meta.env.VITE_GEOCODING_API_URL
        }/reverse?lat=${lat}&lon=${lon}&limit=${1}&appid=${
          import.meta.env.VITE_WEATHER_APP_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((result) => {
          setLocation(result[0].name);
          console.log("LOCATION: ", result[0]);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lat, lon]);

    const handleSearch = (location: string) => {
      fetch(
        `${
          import.meta.env.VITE_GEOCODING_API_URL
        }/direct?q=${location}&limit=${1}&appid=${
          import.meta.env.VITE_WEATHER_APP_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((result) => {
          setLat(result[0].lat);
          setLon(result[0].lon);
        });
    };

    const handleWeatherExpand = () => {
      if (expandedCard !== 'weather-card') {
        setExpandedCard('weather-card');
      }
    };

    const handleForecastExpand = () => {
      if (expandedCard !== 'daily-forecast') {
        setExpandedCard('daily-forecast');
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
            <Background page="weatherPage" pageStyle={pageStyle} />
            <NavBar handleSearch={handleSearch} pageStyle={pageStyle} />
            <WeatherCard 
                weatherData={data}
                location={location}
                isMainPage={true}
                expanded={expandedCard}
                onExpand={handleWeatherExpand}
            />
            <DailyForecast weatherData={data} expanded={expandedCard} onExpand={handleForecastExpand} />
            <NavigationLink navigationTo='/look' state={{ lat: lat, lon: lon, location: location, data: data, pageStyle: pageStyle }} />
        </div>
    )
};

export default WeatherPage;