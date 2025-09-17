export function formatExperienceDates(startDate: Date, endDate?: Date | null) {
    // Case for if no end date (still working)
    if (!endDate) { 
        return `${startDate.toLocaleDateString("en-gb", { month: "long", year: "numeric"})} - Present`
    }
    // Case for one month (or less)
    else if (startDate.getMonth() == endDate?.getMonth() && startDate.getFullYear() == endDate.getFullYear()) {
        return `${startDate.toLocaleDateString("en-gb", { month: "long", year: "numeric" })}`
    }
    // Case for several months in one year
    else if (startDate.getFullYear() == endDate.getFullYear()) {
        return `${startDate.toLocaleDateString("en-gb", { month: "long" })} - ${endDate.toLocaleDateString("en-gb", { month: "long", year: "numeric"})}`
    }
    // Default case for 90% of experience
    else {
        return `${startDate.toLocaleDateString("en-gb", { month: "long", year: "numeric"})} - ${endDate.toLocaleDateString("en-gb", { month: "long", year: "numeric"})}`
    }
}