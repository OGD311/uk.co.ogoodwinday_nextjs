import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function SocialLinks() {
    const links = {
        "linkedin": "https://linkedin.com/in/oliver-goodwin-day",
        "github": "https://github.com/OGD311",
    }

    return (
        <div className="flex w-full justify-center">
            <Link href={links.github} className="p-3">
                <BsGithub />
            </Link>
            <Link href={links.linkedin} className="p-3">
                <BsLinkedin className="hover:bg-blue-400" />
            </Link>
        </div>
    );
}