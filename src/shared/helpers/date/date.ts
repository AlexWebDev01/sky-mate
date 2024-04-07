import { Coordinates } from "../../../api/fetchWeatherData/fetchWeatherData.interface";
import { FullWeekday, ShortWeekday } from "./date.interface";

export function epochToLocalTime(
  epochTime: number,
  offsetTime: number
): string {
  // create a new Date object using the epoch time multiplied by 1000 (to convert from seconds to milliseconds)
  const date = new Date(epochTime * 1000);

  // calculate the local time offset in milliseconds
  const localTimeOffset = offsetTime * 1000;

  // create a new Date object that represents the local time
  const localDate = new Date(date.getTime() + localTimeOffset);

  // return the local time as a string in the format HH:MM
  return localDate.toISOString().substring(11, 16);
}

// Format: dd.mm
export function calculateLocalDate(unixTimestamp: number): string {
  const fullDate = new Date(unixTimestamp * 1000);
  const month = fullDate.getMonth().toString();
  const date = fullDate.getDate().toString();

  return `${date.padStart(2, "0")}.${month.padStart(2, "0")}`;
}

// Format: dd month
export function calculateLocalDateAnotherFormat(unixTimestamp: number): string {
  const monthNames = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sept",
    "oct",
    "nov",
    "dec",
  ];
  const fullDate = new Date(unixTimestamp * 1000);
  const month = fullDate.getMonth();
  const monthFormatted = monthNames[month];
  const date = fullDate.getDate().toString();

  return `${date} ${monthFormatted}`;
}

export function calculateLocalFormattedDay(
  unixTimestamp: number
): ShortWeekday | "" {
  const date = new Date(unixTimestamp * 1000);
  const dayOfWeek = date.getDay();
  switch (dayOfWeek) {
    case 0:
      return ShortWeekday.Sun;
    case 1:
      return ShortWeekday.Mon;
    case 2:
      return ShortWeekday.Tue;
    case 3:
      return ShortWeekday.Wed;
    case 4:
      return ShortWeekday.Thu;
    case 5:
      return ShortWeekday.Fri;
    case 6:
      return ShortWeekday.Sat;
    default:
      return "";
  }
}

export function calculateLocalDay(unixTimestamp: number): FullWeekday | "" {
  const date = new Date(unixTimestamp * 1000);
  const dayOfWeek = date.getDay();
  switch (dayOfWeek) {
    case 0:
      return FullWeekday.Sunday;
    case 1:
      return FullWeekday.Monday;
    case 2:
      return FullWeekday.Tuesday;
    case 3:
      return FullWeekday.Wednesday;
    case 4:
      return FullWeekday.Thursday;
    case 5:
      return FullWeekday.Friday;
    case 6:
      return FullWeekday.Saturday;
    default:
      return "";
  }
}

export function separateCoordinates(coordinatesString: string): Coordinates {
  const [latitude, longitude] = coordinatesString.split(",");
  return {
    lat: Number(latitude.trim()),
    lon: Number(longitude.trim()),
  };
}
