import Link from "next/link";
import toTitlecase from "@/utils/titlecase";

export default function SectionsBar({ sections, activeSection } : { sections: string[], activeSection: number }) {

    return (
        <div className="flex flex-col">
            {sections.map((section, i) => (
                <Link key={i} href={`#${section.toLowerCase()}`}>
                    <p className={`p-3 text-2xl border-b-3 ${activeSection == i ? '' : 'border-transparent'}`}>{toTitlecase(section)}</p>
                </Link>
            ))}
        </div>
    );
}