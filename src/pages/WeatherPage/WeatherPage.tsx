import { useState, useEffect } from "react";

import "./WeatherPage.css";

import NavBar from "../../components/NavBar/NavBar";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import DailyForecast from "../../components/DailyForecast/DailyForecast";

import { fetchWeatherData } from "../../api/fetchWeatherData";
import { fetchUserLocatioByIP } from "../../api/fetchUserLocationByIp";
import { separateCoordinates } from "../../helpers";



const WeatherPage = () => {

    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    const [data, setData] = useState(null);
    const [location, setLocation] = useState("");
    const [isLoading, setIsLoading] = useState(true);
  
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
          setIsLoading(false);
          console.log("DATA:", result);
        });
    };
  
    useEffect(() => {
      getUserLocation();
    }, []);
  
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

    if (isLoading)
    return (
      <div className="loader">
        <img src="./loader.png" />
      </div>
    );
  
    return (
        <div className="weather-page">
            <NavBar handleSearch={handleSearch} />
            <WeatherCard 
                weatherData={data}
                location={location}
                getWeatherData={getWeatherData}
            />
            <DailyForecast weatherData={data} />
        </div>
    )
};

export default WeatherPage;