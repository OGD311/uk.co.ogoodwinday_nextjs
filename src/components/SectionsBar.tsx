import Link from "next/link";
import toTitlecase from "@/utils/titlecase";

export default function SectionsBar({ sections, activeSection } : { sections: string[], activeSection: number }) {

    return (
        <div className="flex flex-col items-start">
            {sections.map((section, i) => (
                <Link key={i} href={`#${section.toLowerCase()}`} className="w-full">
                    <p className={`mt-2 p-3 text-2xl border-b-3 duration-150 transition hover:bg-zinc-200 ${activeSection == i ? 'bg-zinc-200' : 'border-transparent'}`}>{toTitlecase(section)}</p>
                </Link>
            ))}
        </div>
    );
}