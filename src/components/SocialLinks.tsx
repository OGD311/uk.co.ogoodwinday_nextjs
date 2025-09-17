import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { links } from "../../public/data/links";

export default function SocialLinks() {

    return (
        <div className="flex w-full justify-center mb-5">
            <Link href={links.github} className="p-3">
                <BsGithub className="h-8 w-8"/>
            </Link>
            <Link href={links.linkedin} className="p-3">
                <BsLinkedin className="h-8 w-8" />
            </Link>
        </div>
    );
}