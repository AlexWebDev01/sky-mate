import {
  ClothesAdviceWithTemp,
  ClothesAdvices,
  TEMPERATURE_RANGE_NAMES,
  WEATHER_CONDITIONS,
  clothesStyle,
} from "./clothesAlgorithm.interface";
import { TEMPERATURE_RANGES, CLOTHES_ADVICES } from "./clothesAlgorithmData";

const getTempRange = (temp: number): TEMPERATURE_RANGE_NAMES => {
  for (let i = 0; i < TEMPERATURE_RANGES.length; i++) {
    if (temp < TEMPERATURE_RANGES[i].highestTemp) {
      return TEMPERATURE_RANGES[i].name;
    }
  }

  throw new Error(`There is no temperature range for provided temp: ${temp}`);
};

export const calculateClothesAdvice = (
  weatherCondition: WEATHER_CONDITIONS,
  temp: number
): ClothesAdviceWithTemp => {
  const clothesAdvices: ClothesAdvices = CLOTHES_ADVICES[weatherCondition];
  const tempRangeName = getTempRange(temp);

  if (clothesAdvices[tempRangeName]) {
    return {
      ...clothesAdvices[tempRangeName],
      tempRangeName,
    } as ClothesAdviceWithTemp;
  } else {
    console.error(`For now there is no such conditions. 
        Temperature: ${temp}, 
        Temperature range: ${tempRangeName}, 
        Weather condition: ${weatherCondition}
        `);

    return {
      clothesStyle: clothesStyle.noLook,
      clothesList: [""],
      clothesDescription:
        "Ahh, there is such flaky weather that we even don`t have an advice for you! Try to listen your intuition or just look at the sky!",
      tempRangeName: null,
    };
  }
};
