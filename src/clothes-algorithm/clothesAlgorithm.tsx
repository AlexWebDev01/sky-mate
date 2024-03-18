import {
  ClothesAdviceWithTemp,
  ClothesAdvices,
  WEATHER_CONDITIONS,
} from "./clothesAlgorithm.interface";
import { TEMPERATURE_RANGES, CLOTHES_ADVICES } from "./clothesAlgorithmData";

const getTempRange = (temp: number): string => {
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
    return { ...clothesAdvices[tempRangeName], tempRangeName };
  } else {
    console.error(`For now there is no such conditions. 
        Temperature: ${temp}, 
        Temperature range: ${tempRangeName}, 
        Weather condition: ${weatherCondition}
        `);
  }
};
