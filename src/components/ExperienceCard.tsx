import { EXPERIENCE } from "@/constants/interfaces";
import { formatExperienceDates } from "@/utils/dates";
import Link from "next/link";
import { CiShare1 } from "react-icons/ci";
import { FaShare } from "react-icons/fa";

export default function ExperienceCard({ experience } : { experience: EXPERIENCE }) {

    return experience.link == null ? (
        <div className="flex w-4/5 border rounded-lg m-5 p-5 hover:-translate-y-3 duration-200 transition">
            <div className="flex w-full items-start max-md:flex-col">
                <div className="flex flex-col mr-auto">
                    <h1 className="text-lg max-md:text-xl">{experience.company}</h1>
                    <p>{formatExperienceDates(experience.dateStart, experience.dateEnd)}</p>
                </div>
                <ul className="flex flex-col min-md:items-end max-md:mt-2">
                    {experience.roles.map((role, i) => (
                        <li key={i} className={`${i === 0 ? "font-bold" : ""}`}>{role}</li>
                    ))}
                </ul>
            </div>
        </div>
    ) : 
    (
        <Link href={experience.link} className="flex w-4/5 border rounded-lg m-5 p-5 hover:-translate-y-3 duration-200 transition">
            <div className="flex w-full items-start max-md:flex-col">
                <div className="flex flex-col mr-auto">
                    <h1 className="text-lg max-md:text-xl flex items-center">
                        {experience.company} 
                        <CiShare1 className="ml-2 text-xl max-md:text-2xl flex-shrink-0" />
                    </h1>
                    <p>{formatExperienceDates(experience.dateStart, experience.dateEnd)}</p>
                </div>
                <ul className="flex flex-col min-md:items-end max-md:mt-2">
                    {experience.roles.map((role, i) => (
                        <li key={i} className={`${i === 0 ? "font-bold" : ""}`}>{role}</li>
                    ))}
                </ul>
            </div>
        </Link>
    )
}