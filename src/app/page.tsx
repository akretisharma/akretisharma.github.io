"use client";
import { useRef } from "react";
import { Icons } from "@/components/ui/icons";
import { ProjectCard } from "@/components/project-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {ExperienceSection} from "@/components/experience-section"
import TargetCursor from '@/components/target-cursor';


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
      <div>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      <section id="hero" className="mb-8">
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
        Hey, I'm Akreti 👋
      </h1>
      <p className="mb-6">
  {`I'm an incoming Computer Science student at the University of Waterloo interested in software engineering, AI, and biomedical technology. I enjoy building intelligent systems that combine machine learning, computer vision, and real-world applications.`}
      </p>
      <div>
        <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
          <li className="cursor-target">
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/akretisharma/"
            >
              <Icons.arrow className="size-3" />
              <p className="ml-2 h-7">linkedin</p>
            </a>
          </li>
          <li className="cursor-target">
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/akretisharma"
            >
              <Icons.arrow className="size-3" />
              <p className="ml-2 h-7">github</p>
            </a>
          </li>
          <li className="cursor-target">
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="./Akreti_Sharma_Resume.pdf"
            >
              <Icons.arrow className="size-3" />
              <p className="ml-2 h-7">resume</p>
            </a>
          </li>
          
        </ul>
      </div>
      </section>

      <section id="education" className="mb-8">
  <h2 className="mb-2 text-xl font-semibold">Education</h2>

  <div className="cursor-target">
    <ExperienceSection
      title="University of Waterloo"
      date="Sep 2026 – Present"
      description="Bachelor of Computer Science (Honours), Co-op"
    />
  </div>
</section>

      <section id="experience" className="mb-8">
  <h2 className="mb-2 text-xl font-semibold">My Experience</h2>

  <div className="cursor-target">
    <ExperienceSection
      title="Programming Research Intern @ Sunnybrook Research Institute"
      date="Jul 2026 – Aug 2026"
      description="Developed Python software to interface with Radiation Force Balance equipment for focused ultrasound research. Built data processing and visualization tools using NumPy and Matplotlib to analyze experimental measurements and automate acoustic power calculations."
    />
  </div>

  <div className="cursor-target">
    <ExperienceSection
      title="Assistant Teacher @ Spirit of Math"
      date="Sep 2025 – Jul 2026"
      description="Support students from Kindergarten to Grade 11 through one-on-one instruction while assisting teachers with classroom management and student progress."
    />
  </div>

  <div className="cursor-target">
    <ExperienceSection
      title="Challenge Finalist @ Kode With Klossy × Deloitte"
      date="Dec 2024 – Feb 2025"
      description="Developed GaiaIntel, an AI-powered sustainability app that provides personalized eco-friendly recommendations and climate insights."
    />
  </div>

  <div className="cursor-target">
    <ExperienceSection
      title="App Development Scholar @ Kode With Klossy"
      date="Aug 2024"
      description="Completed Kode With Klossy's mobile development program and built Care Comrade, an emergency assistance app using Swift and Xcode."
    />
  </div>
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

<div className="flex-shrink-0 w-[280px] snap-start cursor-target">
  <ProjectCard
    href={"https://devpost.com/software/goodminton"}
    key={"Goodminton"}
    title={"Goodminton"}
    description={
      "AI-powered badminton match analyzer built at Ignition Hacks V6. Uses computer vision with YOLO and motion tracking to detect shuttlecock movement, track rallies, and update scores in real time. Features a Next.js + Tailwind scoreboard UI with WebSocket streaming."
    }
    dates={"Aug 2025"}
    tags={[
      "Python",
      "OpenCV",
      "Next.js",
      "JavaScript",
      "YOLO",
      "TailwindCSS",
      "WebSocket",
      "Roboflow",
    ]}
    image="/goodminton.jpg"
    video={""}
    links={[
      {
        type: "Devpost",
        href: "https://devpost.com/software/goodminton",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Github",
        href: "https://github.com/PenguinPush/ignitionhacks-v6",
        icon: <Icons.github className="size-3" />,
      },
    ]}
    hackathonWinner
  />
</div>


<div className="flex-shrink-0 w-[280px] snap-start cursor-target">
      <ProjectCard
  href={"https://docs.google.com/presentation/d/1xIsxaxNSJdumuowEzKZLmYBEwFjiGipKvLNWsP8fNVc/edit?usp=sharing"}
  key={"EchoLens"}
  title={"EchoLens"}
  description={
    "Assistive smart glasses prototype using YOLOv5 for real-time object detection and a Wio Terminal light sensor to simulate ultrasonic distance sensing built at Design Like a Girl 2025. Audio feedback delivers spatial awareness to visually impaired users. Built with Python, YOLOv5, and Wio Terminal."
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
  hackathonWinner
/>
</div>

<div className="flex-shrink-0 w-[280px] snap-start cursor-target">
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
<div className="flex-shrink-0 w-[280px] snap-start cursor-target">
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
      href: "https://github.com/akretisharma/GaiaIntel",
      icon: <Icons.github className="size-3" />,
    },
  ]}
/>
</div>
<div className="flex-shrink-0 w-[280px] snap-start cursor-target">
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
<div className="flex-shrink-0 w-[280px] snap-start cursor-target">
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
    </div>
  </main>
    
    
  )
}