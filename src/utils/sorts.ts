import { EXPERIENCE } from "@/constants/interfaces";

export function sortExperiences(exps: EXPERIENCE[]): EXPERIENCE[] {
    return exps.sort((a, b) => {
        const aEnd = a.dateEnd ?? new Date(); 
        const bEnd = b.dateEnd ?? new Date();
        return bEnd.getTime() - aEnd.getTime();
    });
}
