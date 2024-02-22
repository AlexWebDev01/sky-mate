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
  const { weatherData, pageStyle, location, isLoading } = state;

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
    const calcResult = calculateClothesAdvice(
      weatherData.daily[0].weather[0].main,
      weatherData.daily[0].temp.day
    );
    const clothesList = calcResult
      ? calcResult.adviceData.clothesList
      : ["Shorts/Skirt", "Rubber Boots", "Umbrella", "Cotton T-Shirt", "Cap"];
    const clotherDescription = calcResult
      ? calcResult.adviceData.clothesDescription
      : "Wear a lightweight, water-resistant jacket made of nylon or polyester to keep you dry in the rain. Layer with a long-sleeved shirt made of a moisture-wicking fabric like polyester or merino wool to keep you comfortable and dry.";
    const tempRangeName = calcResult
      ? calcResult.tempRangeName.toLowerCase().replace("_", "-")
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
        <Background page="lookPage" tempRangeName={tempRangeName} />
      </div>
    );
  }
};

export default LookPage;
