export const isWorkingDay = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay();
    return day !== 6 && day !== 5; // 0 = Sunday, 6 = Saturday
}

export const isWithinWorkingHours = (timeString) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    const timeInMinutes = hours * 60 + minutes;
    const openingTime = 9 * 60; // 9:00 AM
    const closingTime = 21 * 60; // 21:00 PM
    return timeInMinutes >= openingTime && timeInMinutes <= closingTime;
}

export const validateTimeAndDate = (dateString, timeString) => {
    if (!isWorkingDay(dateString)) {
        return "Los turnos solo pueden sacarse de lunes a viernes.";
    }
    if (!isWithinWorkingHours(timeString)) {
        return "Los turnos solo pueden sacarse de 9:00 AM a 21:00 PM.";
    }
    return null; // No errors
}