import { TEMPERATURE_RANGES, WEATHER_CONDITIONS } from "./clothesAlgorithmConsts";

const getTempRange = (temp: number) => {
    for (let i = 0; i < TEMPERATURE_RANGES.length; i++) {
        if (temp > TEMPERATURE_RANGES[i].highestTemp) {
            return TEMPERATURE_RANGES[i].name;
        }
    }
};

const calculateClothesRecommendation = (weatherCondition, temp) => {
    const tempRange = getTempRange(temp);
    
    for (let i = 0, i < )
};