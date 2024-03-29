import { useGlobalContext } from "../../context/GlobalContext";

import { epochToLocalTime } from "../../helpers/date";

import "./AdditionalInfo.css";

const AdditionalInfo = ({ isMainPage, expanded }: any) => {
  const { state } = useGlobalContext();
  const { weatherData } = state;

  const additionalInfoContent = [
    {
      title: "sunrise",
      value: epochToLocalTime(
        weatherData.current.sunrise,
        weatherData.timezone_offset
      ),
    },
    {
      title: "sunset",
      value: epochToLocalTime(
        weatherData.current.sunset,
        weatherData.timezone_offset
      ),
    },
    {
      title: "wind speed",
      value: `${Math.round(weatherData.current.wind_speed * 10) / 10} m/s`,
    },
    { title: "pressure", value: `${weatherData.current.pressure} m/s` },
  ];

  const titleStyle = isMainPage
    ? weatherData.daily[0].weather[0].main.toLowerCase() + "-light"
    : "";
  const contentStyle = isMainPage
    ? ""
    : weatherData.daily[0].weather[0].main.toLowerCase();

  return (
    <div className={expanded === "weather-card" ? "additional-info" : "hide"}>
      {additionalInfoContent.map((item, index) => {
        return (
          <div key={index}>
            <div className={`${titleStyle} title`}>{item.title}</div>
            <div className={`${contentStyle} value`}>{item.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AdditionalInfo;
