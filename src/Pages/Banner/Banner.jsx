import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaDownload,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaMapMarkerAlt,
  FaBriefcase,
  FaLink,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <section className="min-h-screen text-base-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-6">

      {/* LEFT SIDEBAR ICONS - hidden below lg */}
      <div className="hidden lg:flex col-span-1 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-primary p-2 flex flex-col gap-4 items-center justify-start rounded-full border border-white fixed left-4 top-20 z-10"
        >
          <button className="btn btn-circle bg-base-100 text-secondary">
            <FaEnvelope />
          </button>
          <button className="btn btn-circle bg-base-100 text-secondary">
            <FaPhone />
          </button>
          <button className="btn btn-circle bg-base-100 text-secondary">
            <FaGithub />
          </button>
          <button className="btn btn-circle bg-base-100 text-secondary">
            <FaDownload />
          </button>
        </motion.div>
      </div>

      {/* MAIN CONTENT */}
      <div className="col-span-12 lg:col-span-11 space-y-6 mt-6 lg:ml-8">

        {/* Title */}
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-secondary mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Typewriter
              words={["Welcome to my page"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h1>
        </div>

        <div className="grid grid-cols-12 gap-6 items-start">

          {/* PROFILE CARD */}
          <motion.div
            className="col-span-12 md:col-span-4 bg-base-100 border-l-4 border-secondary py-6 shadow-xl rounded-tl-[100px] rounded-br-[100px] border-2 border-r-white mx-auto md:mx-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex flex-col items-center text-center px-6">
              <img
                src="https://i.ibb.co/Y2Z8LZf/dev-avatar.png"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-secondary mb-4"
              />
              <h2 className="text-xl font-semibold text-accent">Md. Naeem Islam</h2>
              <p className="text-sm text-base-content mb-4">Full-Stack Developer</p>

              <div className="text-left w-full">
                <div className="text-sm space-y-3 text-base-content mb-4">
                  <p className="flex items-center gap-2">
                    <FaEnvelope className="text-secondary" /> naeemislam.hasan74@gmail.com
                  </p>
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-secondary" /> Bangladesh
                  </p>
                  <p className="flex items-center gap-2">
                    <FaBriefcase className="text-secondary" /> Full-time / Freelance
                  </p>
                  <p className="flex items-center gap-2">
                    <FaLink className="text-secondary" /> www.naeemdev.com
                  </p>
                </div>

                <div className="flex gap-4 text-black text-sm">
                  <p className="bg-secondary rounded-xl px-2">HTML</p>
                  <p className="bg-secondary rounded-xl px-2">CSS</p>
                  <p className="bg-secondary rounded-xl px-2">JS</p>
                  <p className="bg-secondary rounded-xl px-2">REACT</p>
                </div>
              </div>

              <button className="btn mt-6 mb-3 bg-white text-primary border-none shadow-md flex items-center justify-center rounded-3xl">
                <FaDownload className="mr-2" /> Download CV
              </button>
            </div>
          </motion.div>

          {/* INTRO SECTION */}
          <motion.div
            className="col-span-12 md:col-span-8 flex flex-col gap-2 max-w-2xl mx-auto md:mx-0 px-4 md:px-0 mt-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <span className="text-sm text-secondary">&lt;h1&gt;</span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Hey, <br />
              I’m <span className="text-secondary">Naeem</span>,<br />
              Full-Stack Developer
              <span className="text-sm text-secondary ml-4">&lt;/h1&gt;</span>
            </h1>

            <span className="text-sm text-secondary">&lt;p&gt;</span>
            <p className="text-base">
              I help businesses grow by crafting amazing web experiences. If
              you're looking for a developer that gets stuff done, let's talk!
            </p>
            <span className="text-sm text-secondary mb-2">&lt;/p&gt;</span>

            <button className="btn w-max bg-secondary text-primary shadow">
              Let’s Talk ✉️
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
