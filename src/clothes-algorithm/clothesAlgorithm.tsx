import { 
    TEMPERATURE_RANGES, 
    CLOTHES_ADVICES
} from "./clothesAlgorithmConsts";

const getTempRange = (temp: number) => {
    for (let i = 0; i < TEMPERATURE_RANGES.length; i++) {
        if (temp < TEMPERATURE_RANGES[i].highestTemp) {
            return TEMPERATURE_RANGES[i].name;
        }
    }
};

export const calculateClothesAdvice = (weatherCondition: string, temp: number) => {
    const clothesAdvicesArray = CLOTHES_ADVICES[weatherCondition];
    const currentTempRange = getTempRange(temp);
    
    for (let i = 0; i < clothesAdvicesArray.length; i++) {

        if (clothesAdvicesArray[i].tempRange === currentTempRange) {
            return clothesAdvicesArray[i];
        } else {
            return `For now there is no such conditions. 
            Temperature: ${temp}, 
            Temperature range: ${currentTempRange}, 
            Weather condition: ${weatherCondition}
            `
        }
    }
};