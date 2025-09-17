import { EXPERIENCE } from "@/constants/interfaces";
import { formatExperienceDates } from "@/utils/dates";

export default function ExperienceCard({ experience } : { experience: EXPERIENCE }) {

    return (
        <div className="flex w-4/5 border rounded-lg m-5 p-5 hover:-translate-y-3 transition duration-200">
            <div className="flex w-full items-start">
                <div className="flex flex-col mr-auto">
                    <h1 className="text-lg">{experience.company}</h1>
                    <p>{formatExperienceDates(experience.dateStart, experience.dateEnd)}</p>
                </div>
                <ul className="flex flex-col items-end">
                    {experience.roles.map((role, i) => (
                        <li key={i} className={`${i === 0 ? "font-bold" : ""}`}>{role}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}