"use client"
import Link from "next/link";
import { projects } from "../../../public/data/projects";
import { CiShare1 } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Projects(){


    return projects ? (
        <div className="flex min-h-screen flex-col text-text dark:text-text-dark bg-bg dark:bg-bg-dark *:duration-200 *:transition">
            <div className="w-full h-20 flex ml-5 align-middle items-center">
                <DarkModeToggle />
                <Link href={"/"} className="flex h-fit p-3 align-middle items-center hover:bg-hover dark:hover:bg-hover-dark rounded-lg duration-200 transition">
                    <FaArrowLeft />
                    <span className="ml-2">Back to the site</span>
                </Link>
            </div>
            <table className="m-2">
                <thead>
                    <tr>
                        <th className="p-2">Title</th>                            
                        <th>Description</th>
                        <th>Tools</th>
                        <th>Links</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.title} className="odd:bg-gray-50 odd:dark:bg-gray-950 *:px-4 *:py-2">
                            <td >{project.title}</td>
                            <td className="w-3/5">{project.description}</td>
                            <td className="flex flex-col items-center *:my-0.5">
                                {project.tools.map(tool => 
                                    <p key={tool} className="rounded-2xl border w-fit p-1 bg-pill-body text-pill-text dark:bg-pill-body-dark dark:text-pill-text-dark">{tool}</p>
                                )}
                            </td>
                            {project.link ? (
                                    <td>
                                        <Link href={project.link}>
                                            <CiShare1 className="w-10 h-10 hover:bg-hover dark:hover:bg-hover-dark rounded-lg duration-200 transition p-2" />
                                        </Link>
                                    </td>
                                ) 
                                :
                                (
                                    <td></td>
                                )
                            }
                            {project.company ?
                                (
                                    <td className="w-1/8 text-center">{project.company}</td>
                                )
                                :
                                (
                                    <td></td>
                                )
                            }

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