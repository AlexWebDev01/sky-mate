import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'

import NavBar from "../../components/NavBar/NavBar";
import NavigationLink from "../../components/NavigationLink/NavigationLink";

import "./LookPage.css";

import { fetchWeatherData } from "../../api/fetchWeatherData";
import { fetchUserLocatioByIP } from "../../api/fetchUserLocationByIp";
import { separateCoordinates } from "../../helpers";
import AdditionalInfo from "../../components/AdditionalInfo/AdditionalInfo";

const LookPage = () => {
  const props = useLocation();

  const clothesList = ['Shorts/Skirt', 'Rubber Boots', 'Umbrella', 'Cotton T-Shirt', 'Cap'];
  const clotherDescription = 'Wear a lightweight, water-resistant jacket made of nylon or polyester to keep you dry in the rain. Layer with a long-sleeved shirt made of a moisture-wicking fabric like polyester or merino wool to keep you comfortable and dry.'

  const [data, setData] = useState(props.state ? props.state.data : null);
  const [newDataFetched, setNewDataFetched] = useState(false);
  const [lat, setLat] = useState(props.state ? props.state.lat : 0);
  const [lon, setLon] = useState(props.state ? props.state.lon : 0);
  const [isLoading, setIsLoading] = useState(props.state? false : true);
  const [location, setLocation] = useState(props.state ? props.state.location : '');
  console.log(data);

    useEffect(() => {
      if (!props.state) getUserLocation();
    }, [])

    const getUserLocation = () => {
        fetchUserLocatioByIP()
        .then((res) => res.json())
        .then((result) => {
          const {latitude, longitude}: any = separateCoordinates(result.loc);
          console.log(latitude, longitude);
          setLocation(result.city);
          setLat(latitude);
          setLon(longitude);
          setNewDataFetched(true);
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
          setNewDataFetched(true);
        });
    };

    useEffect(() => {
        if (!lat || !lon) return

        if (newDataFetched) {
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
        }

      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [lat, lon]);

    if (isLoading)
    return (
      <div className="loader">
        <img src="./loader.png" />
      </div>
    );

    return (
        <div className="look-page">
            <NavBar handleSearch={handleSearch} />
              <div className="left-part">
                <h2 className="location">{location}</h2>
                <AdditionalInfo weatherData={data} /> 
                <NavigationLink navigationTo="/" />
              </div>
              <div className="right-part">
                <h1>Protect look</h1>
                <div className="temperature">{Math.round(data.current.temp)}&deg; C</div>
                <ul className="clothes-list">
                  {
                    clothesList.map((item: string, index: number) => {
                      return <li key={index}>{item}</li>
                    })
                  }
                </ul>
              </div>
              <p className="clothes-description">{clotherDescription}</p>
        </div>
    )
};

export default LookPage;