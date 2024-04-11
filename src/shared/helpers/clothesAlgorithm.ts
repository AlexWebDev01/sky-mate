import {
  ClothesAdviceWithTemp,
  ClothesAdvices,
  TEMPERATURE_RANGE_NAMES,
  WeatherConditions,
  clothesStyle,
} from '@shared/constants/clothesAlgorithm/clothesAlgorithm.interface';
import {
  TEMPERATURE_RANGES,
  CLOTHES_ADVICES,
} from '@shared/constants/clothesAlgorithm/clothesAlgorithmData';

const getTempRange = (temp: number): TEMPERATURE_RANGE_NAMES => {
  for (let i = 0; i < TEMPERATURE_RANGES.length; i++) {
    if (temp < TEMPERATURE_RANGES[i].highestTemp) {
      return TEMPERATURE_RANGES[i].name;
    }
  }

  throw new Error(`There is no temperature range for provided temp: ${temp}`);
};

export const calculateClothesAdvice = (
  weatherCondition: WeatherConditions,
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
    console.error(`For now there is no advices for such conditions. 
        Temperature: ${temp}, 
        Temperature range: ${tempRangeName}, 
        Weather condition: ${weatherCondition}
        `);

    return {
      clothesStyle: clothesStyle.noLook,
      clothesList: [''],
      clothesDescription:
        "Ahh, the weather is so unpredictable, we don't have any advice for you! Try following your intuition or simply look at the sky.",
      tempRangeName: null,
    };
  }
};
