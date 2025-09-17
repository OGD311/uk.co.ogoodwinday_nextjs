export interface PROJECT {
    title: string,
    description?: string,
    link?: string,
    company?: string,
    tools: string[]
}

export interface EXPERIENCE {
    company: string,
    role: string[],
    description?: string,
    dateStart: Date,
    dateEnd?: Date
}