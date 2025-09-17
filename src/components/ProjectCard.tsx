import { PROJECT } from "@/constants/interfaces";

export default function ProjectCard({ project } : { project:PROJECT }) {
    return (
        <div>
            {project.title}
        </div>
    );
}