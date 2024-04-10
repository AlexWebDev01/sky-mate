export enum WeatherConditions {
  rain = 'rain',
  snow = 'snow',
  sun = 'sun',
  clear = 'clear',
  clouds = 'clouds',
  fog = 'fog',
  dust = 'dust',
  mist = 'mist',
}

export enum TEMPERATURE_RANGE_NAMES {
  DANGEROUSLY_FREEZING = 'DANGEROUSLY_FREEZING',
  EXTREMELY_FREEZING = 'EXTREMELY_FREEZING',
  FREEZING = 'FREEZING',
  VERY_COLD = 'VERY_COLD',
  COLD = 'COLD',
  SLIGHTLY_COLD = 'SLIGHTLY_COLD',
  SLIGHTLY_FRESH = 'SLIGHTLY_FRESH',
  FRESH = 'FRESH',
  WARM = 'WARM',
  VERY_WARM = 'VERY_WARM',
  HOT = 'HOT',
  VERY_HOT = 'VERY_HOT',
  DANGEROUSLY_HOT = 'DANGEROUSLY_HOT',
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
  rain: ClothesAdvices;
  sun: ClothesAdvices;
  clear: ClothesAdvices;
  clouds: ClothesAdvices;
  snow: ClothesAdvices;
  fog: ClothesAdvices;
  dust: ClothesAdvices;
  mist: ClothesAdvices;
}

export enum clothesStyle {
  basic = 'Basic look',
  protect = 'Protect look',
  elegant = 'Elegant look',
  home = 'Home look',
  noLook = 'Oops, no look!',
}
