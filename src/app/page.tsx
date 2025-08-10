"use client";
import { useRef } from "react";
import { Icons } from "@/components/ui/icons";
import { ProjectCard } from "@/components/project-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {ExperienceSection} from "@/components/experience-section"
import Socials from "@/components/socials";

export default function Page() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <main>
      <section id="hero" className="mb-8">
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
        Hey, I'm Akreti 👋
      </h1>
      <p className="mb-6">
        {`I'm a rising grade 12 high school student interested in software/biomedical engineering.`}
      </p>
      <Socials />
      </section>

      <section id="experience" className="mb-8">
        <h2 className="mb-2 text-xl font-semibold">My Experience</h2>
    <ExperienceSection title="Hackathon Participant @ Hack Canada" date="Feb 2025" description="Built NutriMind, an AI-powered recipe recommendation platform that helps users find personalized meal ideas based on dietary preferences, allergies, etc." />
    <ExperienceSection title="Challenge Finalist @ KWK X Deliotte" date="Dec 2024 - Feb 2025" description="Developed GaiaIntel, an app leveraging AI to provide sustainability insights and optimize eco-friendly choices." />
    <ExperienceSection title="App Development Scholar @ KWK" date="Aug 2024" description="Developed Care Comrade, an app designed to assist in emergency situations by providing step-by-step solutions to common problems." />
      </section>

      <section id="projects" className="mb-8">
      <h2 className="mb-6 text-xl font-semibold">My Projects</h2>

      <div className="relative flex items-center gap-2">

      <button
    onClick={() => scroll("left")}
    className="p-2 bg-black/50 dark:bg-white/50 text-white dark:text-black rounded-full hover:bg-black/70 dark:hover:bg-white/70 z-10"
  >
    <ChevronLeft className="size-5" />
  </button>
  <div
    ref={carouselRef}
    className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
  >

<div className="flex-shrink-0 w-[280px] snap-start">
      <ProjectCard
  href={"https://docs.google.com/presentation/d/1xIsxaxNSJdumuowEzKZLmYBEwFjiGipKvLNWsP8fNVc/edit?usp=sharing"}
  key={"EchoLens"}
  title={"EchoLens"}
  description={
    "Assistive smart glasses prototype using YOLOv5 for real-time object detection and a Wio Terminal light sensor to simulate ultrasonic distance sensing. Audio feedback delivers spatial awareness to visually impaired users. Built with Python, YOLOv5, and Wio Terminal."
  }
  dates={"July 2025"}
  tags={[
    "Python",
    "YOLOv5",
    "Computer Vision",
    "Wio Terminal",
  ]}
  image="/echolens.jpg"
  video={""}
  links={[
    {
      type: "Pitch Deck",
      href: "https://docs.google.com/presentation/d/1xIsxaxNSJdumuowEzKZLmYBEwFjiGipKvLNWsP8fNVc/edit?usp=sharing",
      icon: <Icons.googleDrive className="size-3" />,
    },
  ]}
/>
</div>

<div className="flex-shrink-0 w-[280px] snap-start">
      <ProjectCard
  href={"https://github.com/NimayDesai/NutriMind"}
  key={"NutriMind"}
  title={"NutriMind"}
  description={
    "AI-powered recipe platform delivering personalized meal plans using RAG with LangChain and Gemini, trained on 500K+ recipes. Built with Next.js, TypeScript, PostgreSQL, and Redis, featuring a GraphQL API and a responsive, animated UI."
  }
  dates={"Feb 2025"}
  tags={[
    "Next.js",
    "Typescript",
    "PostgreSQL",
    "Prisma",
    "TailwindCSS",
    "Shadcn UI",
  ]}
  image="/nutrimind.png"
  video={""}
  links={[
    {
      type: "Github",
      href: "https://github.com/NimayDesai/NutriMind",
      icon: <Icons.github className="size-3" />,
    },
    {
      type: "DoraHacks",
      href: "https://dorahacks.io/buidl/23113",
      icon: <Icons.globe className="size-3" />,
    },
  ]}
/>
</div>
<div className="flex-shrink-0 w-[280px] snap-start">
<ProjectCard
  href={"https://github.com/akretisharma/GaiaIntel"}
  key={"GaiaIntel"}
  title={"GaiaIntel"}
  description={
    "Mobile app that educates users on AI’s role in climate change through facts, quizzes, eco-action checklists, and an interactive chatbot. Designed to promote sustainable habits using engaging, personalized content."
  }
  dates={"Dec 2024 - Feb 2025"}
  tags={[
    "Swift",
    "XCode",
    "Gemini AI",
  ]}
  image="/gaiaintel.png"
  video={""}
  links={[
    {
      type: "Github",
      href: "https://github.com/NimayDesai/NutriMind",
      icon: <Icons.github className="size-3" />,
    },
  ]}
/>
</div>
<div className="flex-shrink-0 w-[280px] snap-start">
<ProjectCard
  href={"https://github.com/NimayDesai/NutriMind"}
  key={"Care Comrade"}
  title={"Care Comrade"}
  description={
    "Emergency assistance app offering step-by-step solutions to common crises. Built with Swift in Xcode, focusing on intuitive design, quick accessibility, and reliable performance."
  }
  dates={"Aug 2024"}
  tags={[
    "Swift",
    "Xcode",
    "UI/UX",
  ]}
  image="/carecomrade.jpg"
  video={""}
  links={[
    {
      type: "Github",
      href: "https://github.com/maahinmm/Care-Comrade",
      icon: <Icons.github className="size-3" />,
    },
  ]}
/>
</div>
<div className="flex-shrink-0 w-[280px] snap-start">
<ProjectCard
  href={"https://github.com/NimayDesai/NutriMind"}
  key={"Yelp Business Data Finder"}
  title={"Yelp Business Data Finder"}
  description={
    "Python tool that queries the Yelp API to find and export up to 1000 business listings matching a keyword, supporting pagination and CSV export for analysis or website integration."
  }
  dates={"Feb 2025"}
  tags={[
    "Python",
    "Yelp API",
    "SQL",
  ]}
  image="/bwdcchallenge.png"
  video={""}
  links={[
    {
      type: "Github",
      href: "https://github.com/akretisharma/bwdc_kwk_AS",
      icon: <Icons.github className="size-3" />,
    },
  ]}
/>
</div>
</div>
<button
    onClick={() => scroll("right")}
    className="p-2 bg-black/50 dark:bg-white/50 text-white dark:text-black rounded-full hover:bg-black/70 dark:hover:bg-white/70 z-10"
  >
    <ChevronRight className="size-5" />
  </button>
      </div>
    </section>
  </main>
    
    
  )
}