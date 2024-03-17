export interface TempRanges {
  name: string;
  lowestTemp: number;
  highestTemp: number;
}

export interface ClothesAdvice {
  clothesList: string[];
  clothesDescription: string;
}

export interface ClothesAdvices {
  [key: string]: ClothesAdvice;
}

export interface ClothesAdvicesMap {
  Rain: ClothesAdvices;
  Sun: ClothesAdvices;
  Clear: ClothesAdvices;
  Clouds: ClothesAdvices;
  Snow: ClothesAdvices;
}
