import Link from "next/link";

export default function SectionsBar({ sections, activeSection } : { sections: string[], activeSection: number }) {

    return (
        <div>
            {sections.map((section, i) => (
                <Link key={i} href={`#${section.toLowerCase()}`}>
                    <p className={`${activeSection == i ? 'text-green-500' : ''}`}>{section}</p>
                </Link>
            ))}
        </div>
    );
}