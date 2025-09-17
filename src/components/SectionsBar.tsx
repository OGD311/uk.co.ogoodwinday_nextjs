import Link from "next/link";
import toTitlecase from "@/utils/titlecase";

export default function SectionsBar({ sections, activeSection } : { sections: string[], activeSection: number }) {

    return (
        <div className="flex flex-col items-start">
            {sections.map((section, i) => (
                <Link key={i} href={`#${section.toLowerCase()}`} className="w-full">
                    <p className={`mt-2 p-3 text-2xl border-b-3 hover:bg-hover dark:hover:bg-hover-dark ${activeSection == i ? 'bg-hover dark:bg-hover-dark' : 'border-transparent'}`}>{toTitlecase(section)}</p>
                </Link>
            ))}
        </div>
    );
}