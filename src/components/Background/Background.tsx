import { useGlobalContext } from "../../context/GlobalContext";
import "./Background.css";

const Background = ({ page }: any) => {
  const { state } = useGlobalContext();
  const { pageStyle, clothesAdvice } = state;

  const coldColor = page === "weatherPage" ? "#FFFFFF" : "#CAE7FD";
  const warmColor = page === "weatherPage" ? "#FFFFFF" : "#FDCBCA";
  const cloudColor = page === "weatherPage" ? "#FFFFFF" : "#CAF0C0";

  const formattedTempRange = clothesAdvice?.tempRangeName
    .toLowerCase()
    .replace("_", "-");

  if (pageStyle === "rain") {
    return (
      <div className="background-container">
        <svg
          className="rain-1 blob"
          viewBox="0 0 231 231"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Rectangle 168"
            d="M231 0L231 115.5C231 179.289 179.289 231 115.5 231C51.7111 231 7.42182e-06 179.289 1.02101e-05 115.5C1.29984e-05 51.7111 51.7111 -7.83697e-06 115.5 -5.04866e-06L231 0Z"
            fill={coldColor}
          />
        </svg>
        <svg
          className="rain-2 blob"
          viewBox="0 0 231 231"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Rectangle 168"
            d="M231 0L231 115.5C231 179.289 179.289 231 115.5 231C51.7111 231 7.42182e-06 179.289 1.02101e-05 115.5C1.29984e-05 51.7111 51.7111 -7.83697e-06 115.5 -5.04866e-06L231 0Z"
            fill={coldColor}
          />
        </svg>
        <svg
          className="rain-3 blob"
          viewBox="0 0 231 231"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Rectangle 168"
            d="M231 0L231 115.5C231 179.289 179.289 231 115.5 231C51.7111 231 7.42182e-06 179.289 1.02101e-05 115.5C1.29984e-05 51.7111 51.7111 -7.83697e-06 115.5 -5.04866e-06L231 0Z"
            fill={coldColor}
          />
        </svg>
        <svg
          className="rain-4 blob"
          viewBox="0 0 231 231"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Rectangle 168"
            d="M231 0L231 115.5C231 179.289 179.289 231 115.5 231C51.7111 231 7.42182e-06 179.289 1.02101e-05 115.5C1.29984e-05 51.7111 51.7111 -7.83697e-06 115.5 -5.04866e-06L231 0Z"
            fill={coldColor}
          />
        </svg>
        <svg
          className="rain-5 blob"
          viewBox="0 0 231 231"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Rectangle 168"
            d="M231 0L231 115.5C231 179.289 179.289 231 115.5 231C51.7111 231 7.42182e-06 179.289 1.02101e-05 115.5C1.29984e-05 51.7111 51.7111 -7.83697e-06 115.5 -5.04866e-06L231 0Z"
            fill={coldColor}
          />
        </svg>
        <svg
          className="rain-6 blob"
          viewBox="0 0 231 231"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Rectangle 168"
            d="M231 0L231 115.5C231 179.289 179.289 231 115.5 231C51.7111 231 7.42182e-06 179.289 1.02101e-05 115.5C1.29984e-05 51.7111 51.7111 -7.83697e-06 115.5 -5.04866e-06L231 0Z"
            fill={coldColor}
          />
        </svg>
        <img
          src={
            clothesAdvice?.tempRangeName
              ? `./rain-character-${formattedTempRange}.png`
              : "./rain-character.png"
          }
          className="rain-character"
        />
      </div>
    );
  }

  if (pageStyle === "clouds") {
    return (
      <div className="background-container">
        <svg
          className="clouds"
          width="826"
          height="612"
          viewBox="0 0 826 612"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="152.538" cy="238.367" r="152.538" fill={cloudColor} />
          <circle cx="305.501" cy="152.538" r="152.538" fill={cloudColor} />
          <circle cx="458.464" cy="240.067" r="152.538" fill={cloudColor} />
          <circle cx="492.456" cy="458.464" r="152.538" fill={cloudColor} />
          <circle cx="673.462" cy="277.458" r="152.538" fill={cloudColor} />
          <circle cx="304.651" cy="305.501" r="152.538" fill={cloudColor} />
        </svg>
        <img
          src={
            clothesAdvice?.tempRangeName
              ? `./clouds-character-${formattedTempRange}.png`
              : "./clouds-character.png"
          }
          className="clouds-character"
        />
      </div>
    );
  }

  if (pageStyle === "sun" || pageStyle === "clear") {
    return (
      <div className="background-container">
        <svg
          className="sun"
          viewBox="0 0 626 626"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="313" cy="313" r="313" fill={warmColor} />
        </svg>
        <img
          src={
            clothesAdvice?.tempRangeName
              ? `./sun-character-${formattedTempRange}.png`
              : "./sun-character.png"
          }
          className="sun-character"
        />
      </div>
    );
  }

  if (pageStyle === "snow") {
    return (
      <div className="background-container">
        <svg
          className="snow snow-1"
          width="288"
          height="293"
          viewBox="0 0 288 293"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M144 59.4835L178.097 0.499995L253.403 43.9742L219.366 102.992L287.5 103.025L287.5 189.975L219.366 190.008L253.403 249.025L178.097 292.5L144 233.516L109.903 292.5L34.5966 249.025L68.6343 190.008L0.499992 189.975L0.499996 103.025L68.6343 102.992L34.5966 43.9742L109.903 0.499992L144 59.4835Z"
            fill={coldColor}
          />
        </svg>
        <svg
          className="snow snow-2"
          width="174"
          height="177"
          viewBox="0 0 174 177"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M132.422 114.724L152.934 150.299L107.544 176.51L86.9966 140.955L66.444 176.513L21.0574 150.309L41.5753 114.731L0.510261 114.714L0.513948 62.2994L41.5794 62.2759L21.067 26.7005L66.4572 0.490137L87.0048 36.0448L107.557 0.486776L152.944 26.6907L132.426 62.2689L173.491 62.2864L173.487 114.701L132.422 114.724Z"
            fill={coldColor}
          />
        </svg>
        <svg
          className="snow snow-3"
          width="164"
          height="162"
          viewBox="0 0 164 162"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M130.722 81.0664L163.791 100.218L139.417 142.517L106.328 123.398L106.31 161.669L57.5613 161.669L57.5426 123.398L24.4544 142.517L0.0800988 100.218L33.1497 81.0664L0.0801021 61.9146L24.4544 19.6156L57.5426 38.7342L57.5613 0.463827L106.31 0.463832L106.328 38.7342L139.417 19.6156L163.791 61.9146L130.722 81.0664Z"
            fill={coldColor}
          />
        </svg>
        <svg
          className="snow snow-4"
          width="140"
          height="142"
          viewBox="0 0 140 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M70 113.316L53.3675 142L16.6326 120.858L33.2363 92.158L-2.17937e-06 92.1418L-4.02765e-06 49.8582L33.2363 49.842L16.6326 21.1418L53.3675 -2.33277e-06L70 28.684L86.6325 -3.78683e-06L123.367 21.1418L106.764 49.842L140 49.8582L140 92.1418L106.764 92.158L123.367 120.858L86.6325 142L70 113.316Z"
            fill={coldColor}
          />
        </svg>
        <img
          src={
            clothesAdvice?.tempRangeName
              ? `./snow-character-${formattedTempRange}.png`
              : "./snow-character.png"
          }
          className="snow-character"
        />
      </div>
    );
  }
};

export default Background;
