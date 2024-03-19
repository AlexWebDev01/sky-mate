import { useEffect } from "react";

import { useGlobalContext } from "../../context/GlobalContext";

import NavBar from "../../components/NavBar/NavBar";
import NavigationLink from "../../components/NavigationLink/NavigationLink";
import AdditionalInfo from "../../components/AdditionalInfo/AdditionalInfo";
import Background from "../../components/Background/Background";

import { calculateClothesAdvice } from "../../clothes-algorithm/clothesAlgorithm";

import "./LookPage.css";

const LookPage = () => {
  const { state, fetchData } = useGlobalContext();
  const { weatherData, pageStyle, location, isLoading, clothesAdvice } = state;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading || !weatherData) {
    return (
      <div className="loader">
        <img src="./loader.png" />
      </div>
    );
  } else {
    const clothesList = clothesAdvice
      ? clothesAdvice.clothesList
      : ["Shorts/Skirt", "Rubber Boots", "Umbrella", "Cotton T-Shirt", "Cap"];
    const clotherDescription = clothesAdvice
      ? clothesAdvice.clothesDescription
      : "Wear a lightweight, water-resistant jacket made of nylon or polyester to keep you dry in the rain. Layer with a long-sleeved shirt made of a moisture-wicking fabric like polyester or merino wool to keep you comfortable and dry.";
    const tempRangeName = clothesAdvice
      ? clothesAdvice.tempRangeName.toLowerCase().replace("_", "-")
      : "";
    console.log("TEMP RANGE NAME: ", tempRangeName);

    return (
      <div className="look-page">
        <NavBar />
        <div className="left-part">
          <h2 className="location">{location}</h2>
          <AdditionalInfo expanded="weather-card" />
        </div>
        <NavigationLink navigationTo="/" />
        <div className="right-part">
          <h1>Protect look</h1>
          <div className={`${pageStyle} temperature`}>
            {Math.round(weatherData.current.temp)}&deg; C
          </div>
          <ul className="clothes-list">
            {clothesList.map((item: string, index: number) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <p className="clothes-description">{clotherDescription}</p>
        <Background page="lookPage" />
      </div>
    );
  }
};

export default LookPage;
