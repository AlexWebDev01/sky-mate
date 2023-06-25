export function epochToLocalTime(epochTime: number, offsetTime: number): string {
    // create a new Date object using the epoch time multiplied by 1000 (to convert from seconds to milliseconds)
    const utcDate = new Date(epochTime * 1000);
  
    // get the UTC hours and minutes from the UTC date object
    const utcHours = utcDate.getUTCHours();
    const utcMinutes = utcDate.getUTCMinutes();
  
    // calculate the local hours and minutes using the UTC hours and minutes, and the offset time in seconds
    let localHours = (utcHours + offsetTime / 3600);
    let localMinutes = (utcMinutes + (offsetTime % 3600) / 60)
  
    // handle the case where the local hours or minutes go past 24 or 60, respectively
    if (localHours >= 24) {
      localHours -= 24;
    } else if (localHours < 0) {
      localHours += 24;
    }
  
    if (localMinutes >= 60) {
      localMinutes -= 60;
      localHours++;
    } else if (localMinutes < 0) {
      localMinutes += 60;
      localHours--;
    }
  
    // return the local date object
    return `${localHours.toString().padStart(2, "0")}:${localMinutes.toString().padStart(2, "0")}`;
}

// Format: dd.mm
export function calculateLocalDate(unixTimestamp: number) {
    const fullDate = new Date(unixTimestamp * 1000);
    const month = fullDate.getMonth().toString();
    const date = fullDate.getDate().toString();

    return `${date.padStart(2, "0")}.${month.padStart(2, "0")}`;
}

// Format: dd month
export function calculateLocalDateAnotherFormat(unixTimestamp: number) {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
  const fullDate = new Date(unixTimestamp * 1000);
  const month = fullDate.getMonth();
  const monthFormatted = monthNames[month];
  const date = fullDate.getDate().toString();

  return `${date} ${monthFormatted}`;
}

export function calculateLocalFormattedDay(unixTimestamp: number) {
  const date = new Date(unixTimestamp * 1000);
  const dayOfWeek = date.getDay();
  switch (dayOfWeek) {
    case 0:
      return "Sun";
      case 1:
      return "Mon";
      case 2:
      return "Tue";
      case 3:
      return "Wed";
      case 4:
      return "Thu";
      case 5:
      return "Fri";
      case 6:
      return "Sat";
  }
}

export function calculateLocalDay(unixTimestamp: number) {
    const date = new Date(unixTimestamp * 1000);
    const dayOfWeek = date.getDay();
    switch (dayOfWeek) {
        case 0:
        return "Sunday";
        case 1:
        return "Monday";
        case 2:
        return "Tuesday";
        case 3:
        return "Wednesday";
        case 4:
        return "Thursday";
        case 5:
        return "Friday";
        case 6:
        return "Saturday";
    }
}
  
export function isDateEqual(firstDate: Date, secondDate: Date) {
    return (
      firstDate.getFullYear() === secondDate.getFullYear() &&
      firstDate.getMonth() === secondDate.getMonth() &&
      firstDate.getDate() === secondDate.getDate()
    );
}
  
export function separateCoordinates(coordinatesString: string): object {
    const [latitude, longitude] = coordinatesString.split(',');
    return {
      latitude: Number(latitude.trim()),
      longitude: Number(longitude.trim()),
    };
}