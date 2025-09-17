import { EXPERIENCE } from "@/constants/interfaces";

export default function ExperienceCard({ experience } : { experience: EXPERIENCE }) {

    return (
        <div className="flex w-4/5 border rounded-lg m-5 p-5 hover:-translate-y-3 transition duration-200">
            <div className="flex w-full items-start justify-center">
                <h1 className="text-lg mr-auto">{experience.company}</h1>
                <ul className="flex flex-col items-end">
                    {experience.roles.map((role, i) => (
                        <li key={i} className={`${i === 0 ? "font-bold" : ""}`}>{role}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}