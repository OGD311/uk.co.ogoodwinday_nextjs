import { PROJECT } from "@/constants/interfaces";

export const projects: PROJECT[] = [
    {
        title: "RateMySociety",
        tools: ["NextJS", "React", "Tailwind", "Prisma", "Cloudflare"],
        description: "A review site, allowing University students to give honest, anonymous reviews of societies at their University. It makes heavy use of NextJS' server functions, as well as utilising Prisma as an ORM, and Cloudflare Turnstile to prevent abuse.",
    },
    {
        title: "slugsoc.co.uk",
        tools: ["AstroJS", "React", "Tailwind", "Cloudflare"],
        description: "A rewriting of the current societies Google Page, allowing us to have greater control over the styling and layout of the site. Astro was used for the majority of the site, with React being used for the Events page as it pulled events from a Google App Script linked to our society calendar. The contact page is a reverse-engineered google form, allowing us to keep any submissions on our google drive, whilst allowing the frontend styling to match our site.",
        link: "https://slugsoc.co.uk",
        company: "Sheffield University Gaming Society (SLUGS)"
    },
    {
        title: "apiT",
        tools: ["Python", "FastAPI", "Pandas"],
        description: "A FastAPI program that allows the dynamic creation of REST APIs from spreadsheet (CSV) files. It makes use of Pandas for extracting the column headers and data. It also features custom pagination, and an advanced filtering system dependent on the headers and their datatypes."
    }

];