// personal touch
export function getCurrentTime(): string {
    const currentTime = new Date().getHours()

    if (isWeekend()) {
        return 'Weekend'
    }

    switch (true) {
        case currentTime < 12:
            return 'Morning'
        case currentTime < 18:
            return 'Afternoon'
        default:
            return 'Evening'
    }
}

function isWeekend(): boolean {
    const currentDay = new Date().getDay()
    return currentDay === 0 || currentDay === 6
}
