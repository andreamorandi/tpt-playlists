export function secondsToHoursAndMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingMinutes = minutes % 60;
    const hours = Math.floor(minutes / 60);
    return hours ? `${hours} h ${remainingMinutes} min` : `${remainingMinutes} min`;
}

export function secondsToMinutesAndSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}