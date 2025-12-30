"use client";

import { motion } from "framer-motion";

// Language / Framework / DB icons
import {
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

import { FaCogs, FaServer, FaDatabase } from "react-icons/fa";


const cardVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const SkillItem = ({ icon: Icon, label }) => (
  <div
    className="
      group flex flex-col items-center gap-2
      p-3 rounded-xl
      transition-all duration-300
      hover:bg-[#5810ff]
    "
  >
    <Icon
      size={26}
      className="
        transition-colors duration-300
        group-hover:text-white
      "
    />
    <span
      className="
        text-xs text-white/70
        group-hover:text-white
        transition-colors
      "
    >
      {label}
    </span>
  </div>
);


const SkillBox = ({ number, title, skills }) => (
  <motion.div
    variants={cardVariant}
    className="
      rounded-2xl p-6
      bg-white/4 cursor-pointer
      border border-white/10
      transition-all duration-300
      hover:border-[#5810ff]/40
    "
  >
    
    <div className="flex items-center gap-1 mb-6">
      <span className="text-[#5810ff] font-extrabold text-2xl ">
        {number}.
      </span>
      <h3 className="text-2xl font-semibold text-white">
        {title}
      </h3>
    </div>

    
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
      {skills.map((skill, idx) => (
        <SkillItem key={idx} {...skill} />
      ))}
    </div>
  </motion.div>
);


export default function Skills() {
  return (
    <section id="skills" className="py-20 pb-5 px-6 md:px-20">
     
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-white">My <span className="text-[#5810ff]">Skills</span></h2>
        <p className="text-white/60 mt-3">
          Technologies and core fundamentals I work with
        </p>
      </div>

      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        
        <SkillBox
          number="1"
          title="Languages"
          skills={[
            { icon: SiCplusplus, label: "C++" },
            { icon: SiPython, label: "Python" },
            { icon: SiHtml5, label: "HTML" },
            { icon: SiCss3, label: "CSS" },
            { icon: SiJavascript, label: "JavaScript" },
          ]}
        />

      
        <SkillBox
          number="2"
          title="Frameworks"
          skills={[
            { icon: SiReact, label: "React" },
            { icon: SiNextdotjs, label: "Next.js" },
            { icon: SiNodedotjs, label: "Node.js" },
            { icon: SiExpress, label: "Express.js" },
          ]}
        />

       
        <SkillBox
          number="3"
          title="Databases"
          skills={[
            { icon: SiMongodb, label: "MongoDB" },
            { icon: SiMysql, label: "SQL" },
            { icon: FaDatabase, label: "Design" },
          ]}
        />

        
        <SkillBox
          number="4"
          title="CS Fundamentals"
          skills={[
            { icon: FaCogs, label: "OOPS" },
            { icon: FaServer, label: "Operating Systems" },
            { icon: FaDatabase, label: "DBMS Concepts" },
          ]}
        />
      </motion.div>
    </section>
  );
}
