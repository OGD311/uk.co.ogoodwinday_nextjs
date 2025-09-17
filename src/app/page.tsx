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
    <div className="flex h-screen max-md:flex-col">
      <div className="w-1/4 max-md:w-full h-full">
        <div className="h-full flex flex-col justify-between items-center">
          <div className="flex flex-col items-center mt-5">
            <ProfilePicture />
            <h1 className="text-xl mt-2">Oli GD</h1>
            <h2 className="text-lg w-full p-2 text-center">Student, Developer <br/> Aspiring Entrepreneur</h2>
          </div>
          <SectionsBar sections={["experience", "projects"]} activeSection={activeSection} />
          <SocialLinks />
        </div>
      </div>
      <div className="w-3/4 max-md:w-full h-full min-md:overflow-y-scroll scroll-smooth" ref={scrollContainerRef}>

        <div id="experience" className="section h-screen">
          <h3>Experience</h3>
        </div>
        <div id="projects" className="section h-screen">
          <h3>Projects</h3>
        </div>


      </div>
    </div>
  );
}
