"use client"
import ProfilePicture from "@/components/ProfilePicture";
import SectionsBar from "@/components/SectionsBar";
import SocialLinks from "@/components/SocialLinks";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const sections = scrollContainerRef.current.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target as Element);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.5
      }
    );
    
    sections.forEach((section) => observer.observe(section));

    return(() => {
      sections.forEach((section) => observer.unobserve(section));
    })
  }, []);


  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-400 h-full">
        <div className="h-4/5 flex flex-col justify-between items-center mt-2">
          <ProfilePicture />
          <SectionsBar sections={["blog", "projects"]} activeSection={activeSection} />
          <SocialLinks />
        </div>
      </div>
      <div className="w-3/4 h-full overflow-y-scroll scroll-smooth" ref={scrollContainerRef}>

        <div id="blog" className="section h-screen bg-amber-300">
          BLOG
        </div>
        <div id="projects" className="section h-screen bg-blue-300">
          PROJECTS
        </div>


      </div>
    </div>
  );
}
