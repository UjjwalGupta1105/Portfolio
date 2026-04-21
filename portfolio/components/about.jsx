"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import Image from "next/image";
import Blob from "./Blob";

const About=()=>{

    const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeInOut" },
    },
    };

    const rightVariant = {
    hidden: { opacity: 0, x: 80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeInOut" },
    },
    };


    return(
    <>
    <h1 id="about" className="hidden xl:block text-accent text-5xl xl:text-5xl font-extrabold my-17 text-center xl:text-left  xl:m-20 xl:mt-17">About Me</h1>
     <section
      
      className=" flex items-center justify-center px-6 xl:px-20 mb-20"
    >
      <div className="grid grid-cols-1 xl:grid-cols-2  gap-6 xl:gap-1 items-center max-w-7xl">

        {/* LEFT: Image */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          {/* <div className="w-72 h-72 xl:w-80 xl:h-80 rounded-2xl overflow-hidden border border-white/10 hover:shadow-[0_0_30px_#5810ff40]
"> */}
          <div className="hidden xl:block w-[21%] flex-1 relative z-20 xl:ml-14">
                <Blob containerStyles="w-[435px] h-[435px]"></Blob>
                <Image
                    src="/Profile-Top.png"
                    alt=""
                    width={310}
                    height={310}
                    className="absolute top-18 left-[95px]"
                /> 
                {/* Overlay gradient */}
                <div className="w-full h-[164px] absolute bottom-0 left-0 right-0
                bg-gradient-to-t from-primary via-primary/90 to-primary/2"></div>
            </div>
          {/* </div> */}
        </motion.div>

        {/* RIGHT: Text */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-white"
        >
          <h2 className="text-4xl font-bold mb-6 tracking-tight">
            About Me
          </h2>

          <p className="text-white/80 leading-relaxed mb-8">
            I am <span className="text-accent font-bold ">Ujjwal Gupta</span> pre-final year B.Tech student(2027 Batch) at 
            <span className="text-accent font-bold"> Madan Mohan Malaviya University of Technology, Gorakhpur(MMMUT)</span>, a passionate Full Stack Developer with strong foundations in Data Structures and Algorithms.
             I have hands-on experience building scalable full-stack applications, along with internship experience and active open-source contributions.
          </p>

         {/* Highlights */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
    {[
        "Full Stack Developer",
        "Strong DSA Knowledge",
        "Internship Experiences",
        "Open Source Contributor",
        "Problem Solver",
        "CS Fundamentals",
    ].map((item, idx) => (
        <div
        key={idx}
        className="
            relative px-4 py-3 rounded-xl
            bg-white/5
            border border-[#5810ff]/30
            text-white text-sm font-medium
            backdrop-blur-xl
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-[0_0_25px_#5810ff40]
        "
        >
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#5810ff]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
        <FiCheckCircle className="text-[#5810ff] mr-2 shrink-0 inline mb-1" />
        <span className="relative z-10">{item}</span>
        </div>
    ))}
    </div>

        </motion.div>
      </div>
    </section>
    
    </>
);
}

export default About;