export function formatExperienceDates(startDate: Date, endDate?: Date | null) {
    if (!endDate) { 
        return `${startDate.toLocaleDateString("en-gb", { month: "long", year: "numeric"})} - Present`
    }
    else if (startDate.getMonth() == endDate?.getMonth() && startDate.getFullYear() == endDate.getFullYear()) {
        return `${startDate.toLocaleDateString("en-gb", { month: "long" })} - ${endDate.toLocaleDateString("en-gb", { month: "long", year: "numeric"})}`
    }
    else {
        return `${startDate.getFullYear()} - ${endDate.getFullYear()}`
    }
}