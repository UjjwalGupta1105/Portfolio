"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/* ---------------- DATA ---------------- */

const projectData = [
  {
    nums: "1.",
    category: "Sprintly",
    description:
      "Developed Sprintly, a Jira-inspired full-stack project management platform enabling teams to create and manage projects with Kanban boards, sprint planning and issue lifecycle tracking, streamlining team task management and improving workflow efficiency",
    stack: ["Next JS","React JS", "Prisma", "PostgreSQL", "Neon DB", "Tailwind CSS" "Framer Motion"],
    image: "/Sprintly.png",
    live: "https://sprintly-abc.vercel.app/",
    github: "https://github.com/UjjwalGupta1105/Sprintly",
  },
  {
    nums: "2.",
    category: "ServiceGo",
    description:
      "A full-stack service booking platform enabling users to discover, book, and professionally manage services with dedicated admin and professional dashboards.",
    stack: ["React JS", "Express JS", "MongoDB", "Razorpay API"],
    image: "/ServiceGo.png",
    live: "https://servicego-abc.vercel.app/",
    github: "https://github.com/UjjwalGupta1105/ServiceGo",
  },
  {
    nums: "3.",
    category: "TripGenie",
    description:
      "An AI-powered trip planning application that generates personalized travel itineraries based on user preferences for a smarter travel experience.",
    stack: ["React JS", "Node JS", "Express JS", "MongoDB", "Gemini API"],
    image: "/tripbanner.png",
    live: "https://github.com/UjjwalGupta1105/Trip-Genie",
    github: "https://github.com/UjjwalGupta1105/Trip-Genie",
  },
  {
    nums: "4.",
    category: "JustBuy",
    description:
      "A full-stack MERN e-commerce platform designed to deliver a complete online shopping experience with secure authentication, cart management, and seamless payments.",
    stack: ["JavaScript", "React JS", "Node JS", "Express JS", "MongoDB"],
    image: "/JUSTBUY.png",
    live: "https://justbuy-abc.vercel.app/",
    github: "https://github.com/UjjwalGupta1105/Just_Buy",
  },
];

/* ---------------- ANIMATION ---------------- */

const projectVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

/* ---------------- COMPONENT ---------------- */

const Projects = () => {
  return (
    <section id='projects' className="min-h-screen py-20 w-[87%] mx-auto">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h2 text-accent text-5xl font-extrabold mb-20 text-center md:text-left"
      >
        Projects
      </motion.h1>

      {/* Projects */}
      <div className="flex flex-col gap-20">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={projectVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col xl:flex-row gap-14 items-center"
          >
            {/* IMAGE — FIRST ON MOBILE */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="xl:w-1/2 w-full order-1 xl:order-2"
            >
              <div className="relative w-full md:w-[91%] aspect-[16/9] rounded-xl overflow-hidden bg-black/10">
                <Image
                  src={project.image}
                  fill
                  className="object-contain"
                  alt={project.category}
                />
              </div>
            </motion.div>

            {/* TEXT — SECOND ON MOBILE */}
            <div className="xl:w-1/2 flex flex-col gap-6 order-2 xl:order-1">
              {/* Number + Title */}
              <div className="flex items-center">
                <span className="outline-number text-5xl md:text-6xl">
                  {project.nums}
                </span>
                <h2 className="h2 text-4xl font-bold text-white">
                  {project.category}
                </h2>
              </div>

              {/* Description */}
              <p className="text-white/60 max-w-xl">
                {project.description}
              </p>

              {/* Stack */}
              <ul className="flex flex-wrap gap-3">
                {project.stack.map((tech, i) => (
                  <li key={i} className="text-accent text-lg">
                    {tech}
                    {i !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20 w-full" />

              {/* Buttons */}
              <div className="flex gap-4">
                {/* Live */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="w-[64px] h-[64px] rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all group">
                          <BsArrowUpRight className="text-white text-2xl group-hover:text-accent group-hover:rotate-45 transition-all" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>Live Project</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* GitHub */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="w-[64px] h-[64px] rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all group">
                          <BsGithub className="text-white text-2xl group-hover:text-accent transition-all" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>GitHub Repository</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
