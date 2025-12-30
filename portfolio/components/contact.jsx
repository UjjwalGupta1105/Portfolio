"use client";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

/* ✅ ADDED */
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const leftVariant = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  /* ✅ ADDED */
  const formRef = useRef();

 
 const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
          progressStyle: { background: "#5810ff" },
        });
        formRef.current.reset();
      },
      (error) => {
        console.error(error);
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
          progressStyle: { background: "#ff4d4f" },
        });
      }
    );
};


  return (
    <section id="contact" className="py-24 px-6 md:px-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold text-white tracking-tight">
          Get In <span className="text-[#5810ff]">Touch</span>
        </h2>
        <p className="text-white/60 mt-4 max-w-xl mx-auto">
          Have a project idea, opportunity, or just want to connect?  
          Feel free to reach out.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        
        {/* LEFT: FORM */}
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Send a Message
          </h3>

          {/* ✅ MODIFIED: ref + onSubmit */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-5"
          >
            {/* ✅ name attributes added */}
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#5810ff]"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#5810ff]"
            />

            <textarea
              rows={5}
              name="message"
              placeholder="Your Message"
              required
              className="bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#5810ff]"
            />

            <button
              type="submit"
              className="
                mt-2 w-fit px-8 py-3 rounded-full
                bg-[#5810ff] text-white font-medium
                hover:opacity-90 transition
              "
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* RIGHT: CONTACT DETAILS */}
        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-8"
        >
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Contact Details
            </h3>
            <p className="text-white/60 max-w-md">
              I’m open to internships, collaborations, and exciting
              opportunities. Let’s build something impactful together.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <FiMail className="text-[#5810ff] text-xl" />
              </div>
              <span className="text-white/80">
                ujjwalgupta0506@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <FiPhone className="text-[#5810ff] text-xl" />
              </div>
              <span className="text-white/80">
                +91 6393295514
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <FiMapPin className="text-[#5810ff] text-xl" />
              </div>
              <span className="text-white/80">
                India
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <ToastContainer />
    </section>
  );
}
