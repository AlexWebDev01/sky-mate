export enum WEATHER_CONDITIONS {
  Rain = "Rain",
  Sun = "Sun",
  Clear = "Clear",
  Clouds = "Clouds",
  Snow = "Snow",
}

export enum TEMPERATURE_RANGE_NAMES {
  DANGEROUSLY_FREEZING = "DANGEROUSLY_FREEZING",
  EXTREMELY_FREEZING = "EXTREMELY_FREEZING",
  FREEZING = "FREEZING",
  VERY_COLD = "VERY_COLD",
  COLD = "COLD",
  SLIGHTLY_COLD = "SLIGHTLY_COLD",
  SLIGHTLY_FRESH = "SLIGHTLY_FRESH",
  FRESH = "FRESH",
  WARM = "WARM",
  VERY_WARM = "VERY_WARM",
  HOT = "HOT",
  VERY_HOT = "VERY_HOT",
  DANGEROUSLY_HOT = "DANGEROUSLY_HOT",
}

export interface TempRanges {
  name: TEMPERATURE_RANGE_NAMES;
  lowestTemp: number;
  highestTemp: number;
}

export interface ClothesAdvice {
  clothesStyle: clothesStyle;
  clothesList: string[];
  clothesDescription: string;
}

export interface ClothesAdviceWithTemp extends ClothesAdvice {
  tempRangeName: TEMPERATURE_RANGE_NAMES | null;
}

export type ClothesAdvices = {
  [K in TEMPERATURE_RANGE_NAMES]?: ClothesAdvice;
};

export interface ClothesAdvicesMap {
  Rain: ClothesAdvices;
  Sun: ClothesAdvices;
  Clear: ClothesAdvices;
  Clouds: ClothesAdvices;
  Snow: ClothesAdvices;
}

export enum clothesStyle {
  basic = "Basic look",
  protect = "Protect look",
  elegant = "Elegant look",
  home = "Home look",
  noLook = "Oops, no look!",
}
