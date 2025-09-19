import { PROJECT } from "@/constants/interfaces";
import Link from "next/link";
import { CiShare1 } from "react-icons/ci";

export default function ProjectCard({ project } : { project:PROJECT }) {
    return project.link == null ? (
        <div className="flex w-4/5 border rounded-lg m-5 p-5 hover:-translate-y-3 duration-200 transition flex-col">
            <div className="flex flex-col items-center">
                <h1 className="text-xl min-md:text-2xl text-center">{project.title}</h1>
                {project.company && <p className="text-center text-xs font-bold mt-2 w-4/5">{project.company}</p>}
                <div className="flex flex-wrap justify-center gap-2 mt-5">
                    {project.tools.map(tool => 
                        <p key={tool} className="rounded-2xl border w-fit p-1 bg-pill-body text-pill-text dark:bg-pill-body-dark dark:text-pill-text-dark">{tool}</p>
                    )}
                </div>
            </div>
            <p className="text-center justify-center items-center mt-5">
                {project.description}
            </p>
        </div>
    ) : 
    (
        <Link href={project.link} className="flex w-4/5 border rounded-lg m-5 p-5 hover:-translate-y-3 duration-200 transition flex-col">
            <div className="flex flex-col items-center relative">
                <h1 className="text-xl min-md:text-2xl text-center">
                    {project.title}
                </h1>
                <CiShare1 className="absolute right-0 top-3 transform -translate-y-1/2 text-xl max-md:text-2xl" />
                {project.company && <p className="text-center text-xs font-bold mt-2 w-4/5">{project.company}</p>}
                <div className="flex flex-wrap justify-center gap-2 mt-5">
                    {project.tools.map(tool => 
                        <p key={tool} className="rounded-2xl border w-fit p-1 bg-pill-body text-pill-text dark:bg-pill-body-dark dark:text-pill-text-dark">{tool}</p>
                    )}
                </div>
            </div>
            <p className="text-center justify-center items-center mt-5">
                {project.description}
            </p>
        </Link>
    )
}