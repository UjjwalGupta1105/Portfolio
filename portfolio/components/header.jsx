import {Lobster,Roboto} from "next/font/google";
import Link from "next/link";
import { FiMoon, FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useRef } from "react";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  
});


const header=()=>{
    const sidemenu=useRef();

    const openWindow = () => {
    sidemenu.current.style.transform = "translateX(-70rem)";
    }
    const closeWindow = () => {
        sidemenu.current.style.transform = "translateX(0rem)";

    }

    const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

    return(
        <div className="flex flex-row items-center justify-between p-5  w-full xl:px-13 xl:mb-2">
            <div>
                <h2 className={` text-[28px] xl:text-[38px] font-extrabold xl:mt-4 xl:ml-5 ${roboto.className}`} > <Link href="/">{`<Ujjwal Gupta/>`}</Link> </h2>
            </div>
            {/* Navigation */}
        <nav className="hidden xl:flex items-center gap-10 px-12 py-4 rounded-full
                        bg-white/10 backdrop-blur-lg border border-white/10 mt-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm text-white/80 font-medium transition-all
                         hover:text-white"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#5810ff]
                               transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden xl:block px-10 py-3 rounded-full text-sm font-medium text-white
                     border border-[#5810ff] bg-[#5810ff]/10
                     hover:bg-[#5810ff] hover:shadow-[0_0_25px_#5810ff70]
                     transition-all duration-300 mt-5 mr-16"
        >
          Hire Me ↗
        </a>

            {/* Mobile Menu */}
            <div ref={sidemenu} className="bg-secondary xl:hidden fixed top-0 bottom-0 right-0 h-screen w-[70%] flex flex-col  transform translate-x-[70rem] transition-all duration-300 ease-in-out shadow-lg z-50 overflow-hidden text-white  ">
                <div className="flex justify-end p-5">
                    <button onClick={closeWindow} className="text-white absolute top-10 right-10">
                        <IoClose size={50} />
                    </button>
                </div>
                <ul className="text-white gap-12 px-20 py-25 pb-15 flex flex-col text-xl font-semibold">
                    <li>
                      <Link href="#home" onClick={closeWindow}>Home</Link>
                    </li>
                    <li>
                      <Link href="#about" onClick={closeWindow}>About</Link>
                    </li>
                    <li>
                      <Link href="#skills" onClick={closeWindow}>Skills</Link>
                    </li>
                    <li>
                      <Link href="#projects" onClick={closeWindow}>Projects</Link>
                    </li>
                    <li>
                      <Link href="#experience" onClick={closeWindow}>Experience</Link>
                    </li>
                </ul>

                  <div className="mx-auto px-4 rounded-xl">
                    <Button className="cursor-pointer  btn btn-lg btn-accent" variant="outline" onClick={closeWindow}>
                      <Link href="#contact">Hire Me</Link><FiArrowRight className="rotate-320" size={27} /></Button>   
                </div>
            </div>

            <button onClick={openWindow} className="xl:hidden mr-2">
                    <FiMenu size={40} />
            </button>     

        </div >
    )
}

export default header;