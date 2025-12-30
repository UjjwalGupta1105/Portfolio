"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "ReactJS Developement Intern",
    organization: "Antmore Labs Pvt Ltd",
    duration: "SEP 2024 – JAN 2025",
    description:
      <p className="text-white/80 leading-relaxed space-y-2">
  <span className="block">
    • Built an <span className="text-[#5810ff] font-medium">embeddable JavaScript SDK</span> enabling seamless one-click game launches with scalable multi-game support.
  </span>
  <span className="block">
    • Developed a <span className="text-[#5810ff] font-medium">Comic Book App</span> using React.js with immersive visuals and a fully responsive UI.
  </span>
  <span className="block">
    • Created a <span className="text-[#5810ff] font-medium">MERN e-commerce platform</span> with Context API, REST APIs, and Razorpay integration.
  </span>
  <span className="block">
    • Strengthened <span className="text-[#5810ff] font-medium">teamwork and problem-solving</span> through cross-functional collaboration.
  </span>
</p>


  },
  {
    title: "Open Source Contributor",
    organization: "GirlScript Summer of Code (GSSoC)",
    duration: "May 2024 – July 2024",
    description:
      <p className="text-white/80 leading-relaxed space-y-2">
  <span className="block">
    • Contributed to <span className="text-[#5810ff] font-medium">open-source repositories</span> including Shopy, Community-Site, CareerZunction Intern, and Shopnex.
  </span>
  <span className="block">
    • Fixed <span className="text-[#5810ff] font-medium">bugs</span>, optimized functionalities, and improved UI for better performance and usability.
  </span>
</p>

  },
  {
    title: "Executive Member",
    organization: "Google Developer Groups (GDG) MMMUT",
    duration: "Nov 2024 – Aug 2025",
    description:
      <p className="text-white/80 leading-relaxed space-y-2">
  <span className="block">
    • Organized <span className="text-[#5810ff] font-medium">technical events</span>, hackathons, and class briefings under Google Developer Group (GDG).
  </span>
  <span className="block">
    • Coordinated with the <span className="text-[#5810ff] font-medium">GDG team</span> to ensure smooth execution, fostering teamwork and collaboration.
  </span>
</p>
  },

  {
    title: "Bachelors of Technology(B.Tech)[ECE]",
    organization: "Madan Mohan Malaviya University of Technology, Gorakhpur(MMMUT)",
    duration: "Sep 2023 – May 2027",
    CGPA: "8.17/10",
  },
];

const Experience = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12">
      <div id='experience' className="container mx-auto px-6 xl:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mb-16"
        >
          <h2 className="h1 text-white">Education & <span className="text-accent">Experience</span></h2>
          {/* <p className="text-white/60 max-w-xl mt-2">
            A timeline of my professional and leadership journey.
          </p> */}
        </motion.div>

        {/* Timeline */}
        <div className="relative xl:px-8">
          {/* Timeline line */}
          <div
            className="
              absolute top-0 h-full w-[2px] bg-white/20
              left-4
              md:left-1/2 md:-translate-x-1/2
            "
          ></div>

          <div className="flex flex-col gap-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6 }}
                  className="
                    relative flex w-full
                    md:justify-between
                  "
                >
                  {/* Dot */}
                  <div
                    className="
                      absolute top-6 w-4 h-4 bg-accent rounded-full z-10
                      left-4 -translate-x-1/2
                      md:left-1/2 md:-translate-x-1/2
                    "
                  ></div>

                  {/* Card */}
                  <div
                    className={`
                      ml-12 w-full
                      md:ml-0 md:w-[45%]
                      bg-white/5 border border-white/10
                      rounded-xl p-6
                      transition-all duration-500
                      hover:border-accent
                      ${isLeft ? "md:mr-auto" : "md:ml-auto"}
                    `}
                  >
                    <span className="text-sm text-accent">
                      {exp.duration}
                    </span>

                    <h3 className="text-xl font-semibold text-white mt-2">
                      {exp.title}
                    </h3>

                    <p className="text-white/70 mt-1">
                      {exp.organization}
                    </p>

                    <p className="text-white/60 mt-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {
                      exp.title =='Bachelors of Technology(B.Tech)[ECE]' && <>
                        <p className="text-white/60 mt-4 text-xl">
                          <span className="text-accent font-extrabold text-xl">CGPA:</span> {exp.CGPA}
                        </p>
                      </>
                    }
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
