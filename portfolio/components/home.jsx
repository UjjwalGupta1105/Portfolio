"use client"

import {motion} from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import { FiPhone, FiMail } from "react-icons/fi";
import Blob from "./Blob";
import Image from "next/image";


const Home=()=>{
    const baseStyle =
    "w-11 h-11 flex items-center justify-center rounded-full border border-[#5810ff] text-[#5810ff] transition-all duration-300";

  const hoverStyle =
    "hover:bg-[#5810ff] hover:text-white hover:scale-110";

    return(
        <>
        <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{delay:2.4, duration:0.4, ease:"easeIn"}}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}>

        <div className="xl:w-[90%] m-8 mt-1 mb-10 xl:mb-0 mx-[auto] flex flex-col xl:flex-row items-center
        justify-between ">
            <div className="order-2 xl:order-1">
            <div className="w-full xl:ml-[15px] h-[370px] sm:h-[300px] md:h-[340] flex flex-col items-center xl:items-start
            text-center xl:text-left">
                <h1 className="h1 inline-block flex-1 mt-0 m-5 mb-[2px]  p-2">Hi! I'm Ujjwal Gupta,<br/>
                <TypeAnimation sequence={["Web Developer",2000,"Problem Solver",2000,"Fast Learner",2000]} 
                speed={40} repeat={Infinity}
                className="text-accent"
                cursor={false}
                />
                </h1>
                <p className="max-w-[500px] m-5 mt-[0px]  mb-[14px]" >
                    I build visually appealing and functional web applications that 
                    transform your ideas into seamless, engaging digital experiences.</p>

                <div className="p-7">
                    <a href="https://drive.google.com/file/d/1QqcPP-QzGhwBNa_yuKW68Ls2SI6ftMOy/view" target="_blank">
                       <div className="btn btn-lg btn-accent ">Resume<FiArrowRight className="rotate-320" size={27} /></div>
                     
                    </a>
                    {/* <div className="btn btn-xl btn-accent ">Resume<FiArrowRight className="rotate-320" size={27} /></div> */}
                </div>

                <div>
                
                    
                </div>

            </div>
            <div className="flex flex-col xl:flex-row items-center gap-6 mt-3 xl:w-[95%] px-1 mx-auto">
                {/* Phone */}
                <a
                    href="tel:+919876543210"
                    className="text-[#5810ff] hover:scale-110 transition-transform duration-300"
                    aria-label="Phone"
                >
                    <FiPhone className="inline" size={25} /><span className="text-xl text-white"> (+91)6393295514</span>
                </a>

                {/* Email */}
                <a
                    href="mailto:ujjwal@example.com"
                    className="text-[#5810ff] hover:scale-110 transition-transform duration-300"
                    aria-label="Email"
                >
                    <FiMail className="inline" size={22} /><span className="text-xl text-white"> ujjwaxlupta0506@gmail.com</span>
            
                </a>

            </div>
            <div className="mx-auto mt-10 xl:w-[89%] px-4  ">
                 <div className="flex gap-4 justify-center xl:justify-start">
                    <a
                        href="https://www.linkedin.com/in/ujjwal-gupta-b05130289/"
                        target="_blank"
                        className={`${baseStyle} ${hoverStyle}`}
                        title="Linkedin"
                    >
                        <FaLinkedinIn className="text-xl" />
                    </a>
                    <a
                        href="https://github.com/Ujjwaxlupta1105"
                        target="_blank"
                        className={`${baseStyle} ${hoverStyle}`}
                        title="GitHub"
                    >
                        <FaGithub className="text-xl" />
                    </a>

                    <a
                        href="https://www.geeksforgeeks.org/profile/ujjwaxlupta0506"
                        target="_blank"
                        className={`${baseStyle} ${hoverStyle}`}
                        title="GeeksforGeeks"
                    >
                        <SiGeeksforgeeks className="text-xl" />
                    </a>

                    <a
                        href="https://www.codechef.com/users/ujjwaxlupta11"
                        target="_blank"
                        className={`${baseStyle} ${hoverStyle}`}
                        title="CodeChef"
                    >
                        <SiCodechef className="text-xl" />
                    </a>
                   </div>
            </div>
            </div>
            <div
  className="
    relative z-20 flex justify-center items-center
    w-full xl:w-[22%] flex-1
    order-1 xl:order-2
    min-h-[320px] xl:min-h-[560px]
  "
>
  {/* Blob */}
  <Blob
    containerStyles="
      w-[320px] h-[320px]
      xl:w-[560px] xl:h-[560px]
    "
  />

  {/* Profile Image */}
  <Image
    src="/Profile-Top.png"
    alt="Profile"
    width={410}
    height={410}
    className="
      absolute
      w-[220px] xl:w-[410px]
      bottom-[20px] xl:bottom-[60px]
      left-1/2
      xl:-translate-y-[-4%]
      -translate-x-[40%]
    "
  />

  {/* Overlay gradient */}
  <div
    className="
      absolute bottom-0 left-0 right-0
      h-[120px] xl:h-[164px]
      bg-gradient-to-t from-primary via-primary/90 to-primary/2
    "
  />
</div>

        </div>

        {/* Links */}
        <div className="flex flex-col ">
            <div>

            </div>
            
        </div>
        </motion.div>
        </>
        

    );
}


export default Home;