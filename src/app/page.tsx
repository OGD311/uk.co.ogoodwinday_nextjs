"use client"
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
      <div className="w-1/4 bg-gray-400"></div>
      <div className="w-3/4" ref={scrollContainerRef}></div>
    </div>
  );
}
