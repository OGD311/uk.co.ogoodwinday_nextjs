import Link from "next/link";
import { projects } from "../../../public/data/projects";
import { CiShare1 } from "react-icons/ci";

export default function Projects(){


    return projects ? (
        <div className="flex w-full justify-center">
            <table className="m-2">
                <thead>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Tools</th>
                    <th>Links</th>
                    <th>Company</th>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.title} className="odd:bg-gray-50">
                            <td>{project.title}</td>
                            <td>{project.description}</td>
                            <td>
                                {project.tools.map(tool => 
                                    <p key={tool} className="rounded-2xl border w-fit p-1 bg-pill-body text-pill-text dark:bg-pill-body-dark dark:text-pill-text-dark">{tool}</p>
                                )}
                            </td>
                            {project.link && 
                                <td>
                                    <Link href={project.link}>
                                        <CiShare1 />
                                    </Link>
                                </td>
                            }
                            {!project.link && <td>No Link</td>}
                            {project.company && 
                                <td>{project.company}</td>
                            }
                            {!project.company && <p>For fun!</p>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
    :
    (
        <p>No Projects</p>
    )
}