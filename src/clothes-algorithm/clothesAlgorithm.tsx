import { 
    TEMPERATURE_RANGES, 
    CLOTHES_ADVICES
} from "./clothesAlgorithmConsts";

const getTempRange = (temp: number): string => {
    for (let i = 0; i < TEMPERATURE_RANGES.length; i++) {
        if (temp < TEMPERATURE_RANGES[i].highestTemp) {
            return TEMPERATURE_RANGES[i].name;
        }
    }

    return '';
};

export const calculateClothesAdvice = (weatherCondition: string, temp: number) => {
    const clothesAdvices = CLOTHES_ADVICES[weatherCondition];
    const tempRangeName = getTempRange(temp);
    
    if (clothesAdvices[tempRangeName]) {
        return clothesAdvices[tempRangeName];
    } else {
        return `For now there is no such conditions. 
        Temperature: ${temp}, 
        Temperature range: ${tempRangeName}, 
        Weather condition: ${weatherCondition}
        `
    }
};