"use client"

import Navbar_ from "@/components/header";
import Home_ from "@/components/home";
import About from "@/components/about";
import { motion } from "framer-motion";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div
    
    className=" items-center justify-between overflow-x-hidden w-full h-full"> 
        <Navbar_/>
        <Home_/>
        <About/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact/>

    </div>
  );
}
