"use client"
import ProfilePicture from "@/components/ProfilePicture";
import SectionsBar from "@/components/SectionsBar";
import SocialLinks from "@/components/SocialLinks";
import { useEffect, useRef, useState } from "react";
import { experiences } from "../../public/data/experience";
import { sortExperiences } from "@/utils/sorts";
import ExperienceCard from "@/components/ExperienceCard";
import Link from "next/link";
import { projects } from "../../public/data/projects";
import { CiShare1 } from "react-icons/ci";
import { links } from "../../public/data/links";
import DarkModeToggle from "@/components/DarkModeToggle";
import { FaArrowDown } from "react-icons/fa";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

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
        threshold: 0.5
      }
    );
    
    sections.forEach((section) => observer.observe(section));

    return(() => {
      sections.forEach((section) => observer.unobserve(section));
    })
  }, []);


  return (
    <div className="flex min-h-screen max-md:flex-col text-text dark:text-text-dark bg-bg dark:bg-bg-dark duration-200 transition">
      <DarkModeToggle />
      <div className="w-1/4 max-md:w-full h-full pr-3 min-md:sticky min-md:top-0">
        <div className="h-full flex flex-col justify-between items-center">
          <div className="flex flex-col items-center mt-5 min-md:mt-10">
            <ProfilePicture />
            <div className="w-full text-left mb-5">
              <h1 className="text-xl mt-2 pl-2">Oli GD</h1>
              <h2 className="text-lg w-full p-2">Student, Developer <br/> Aspiring Entrepreneur</h2>
            </div>
          </div>
          <SectionsBar sections={["about", "experience", "projects"]} activeSection={activeSection} />
          <SocialLinks />
        </div>
        <Footer />
      </div>
      <div className="w-3/4 max-md:w-full min-h-screen min-md:overflow-y-scroll pt-5" ref={scrollContainerRef}>

        <div id="about" className="section min-h-screen flex flex-col items-center mt-5 pb-10">
          <h3 className="text-4xl text-center mb-5 mt-5">About</h3>
          <p className="w-3/4 p-2 text-lg min-xl:text-xl">
            I&apos;m a hardworking and curious student at <Link href="https://sheffield.ac.uk" className="text-link dark:text-link-dark">The University of Sheffield</Link>, passionate about Web Development and Data Science.
            Currently, I am <Link href="#experience" className="text-link dark:text-link-dark">{experiences[0].roles[0]} @ {experiences[0].company}</Link>, where I get to work on lots of cool stuff!
            <br />
            <br />
            One day I hope to start my own business, once I have enough experience :)
            <br />
            <br />
            In my spare time, I like to work on my own projects, which you can read more about <Link href="#projects" className="text-link dark:text-link-dark">here</Link>.{" "}
            {projects.length > 0 && 
              <>
                My latest project is {projects[0].title}, utilising tools like {projects[0].tools[0]} and {projects[0].tools[1]}.
              </>
            } {" "}
            Although the best place to keep up to date with what I do is to follow me on <Link href={links.github} className="text-link dark:text-link-dark">Github</Link>!
            <br/>
            I also like to play video games (notably Arma3) and am a rather passionate James Bond fan!
          </p>
          <Link href="#experience" className="flex flex-col items-center mt-5 max-md:hidden">
            Scroll on to read more!
            <FaArrowDown className="w-8 h-8 mt-5 animate-bounce" />
          </Link>

        </div>

        <hr className="text-hover dark:text-hover-dark my-10" />

        <div id="experience" className="section min-h-screen flex flex-col items-center pb-10 mb-auto">
          <h3 className="text-4xl text-center mb-5 mt-5">Experience</h3>
          {experiences.length > 0 ? 
            <>
            {sortExperiences(experiences).slice(0, 4).map(experience => 
              <ExperienceCard key={experience.company} experience={experience} />
            )}
            {experiences.length > 4 ? 
              <Link href="/experience">
                View {experiences.length - 4} More Experiences
              </Link>
              :
              <p className="mt-5 text-lg max-md:text-md text-center pr-2 pl-2">No More Experiences to Show.  <br className="min-md:hidden"/> Check back soon(ish)</p>
            }
            </>
          :
            <div className="flex flex-col w-full h-full items-center justify-center">
              <p className="text-lg">No Experiences!</p>
              <p>It would appear I don&apos;t have any experience yet...</p>
              <p>But I reckon its more a problem with my site 🤦</p>
              <Link href={links.linkedin} className="text-blue-600 flex items-center">Check out my LinkedIn whilst I resolve this! <CiShare1 className="ml-2"/></Link>
            </div>
          }

        </div>

        <hr className="text-hover dark:text-hover-dark my-10" />
        
        <div id="projects" className="section min-h-screen flex flex-col items-center pb-10">
          <h3 className="text-4xl text-center mt-5">Projects</h3>
          {projects.length > 0 ? (
            <>
              {projects
                .slice(0, 3)
                .map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}

              {projects.length > 3 ? 
                <Link href="/projects">
                  View {projects.length - 3} More Projects
                </Link>
                :
                <p className="mt-5 text-lg max-md:text-md text-center pr-2 pl-2 mb-5">No More Projects to Show. <br className="min-md:hidden"/> Check back soon(ish)</p>
              }
            </>
          ) : 
            <div className="flex flex-col w-full h-full items-center justify-center text-center">
              <p className="text-lg">No Projects!</p>
              <p>It would appear I haven&apos;t done any projects yet...</p>
              <p>But I reckon its more a problem with my site 🤦</p>
              <Link href={links.github} className="text-blue-600 flex items-center">Check out my Github whilst I resolve this! <CiShare1 className="ml-2"/></Link>
            </div>
          }

        </div>
      </div>
    </div>
  );
}
