import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../../assets/about_me_background.png';
import naeemImage from "../../assets/width_522.jpeg";

const AboutMe = () => {
  const handleAboutClick = () => {
    console.log("About Me clicked!");
    // Optional: Navigate, open modal, etc.
  };

  return (
    <section
      className="relative w-full min-h-screen bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto px-4 pt-10 text-base-content w-full md:mr-6"
      >
        {/* Top Decorative Line */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="hidden sm:flex flex-col items-center justify-center min-h-[100px] mx-auto mb-14 space-y-2"
        >
          <div className="w-5 h-8 rounded-t-[30px] rounded-b-[30px] my-2 bg-black border border-secondary border-2 "><div className='w-1 h-2 bg-secondary ml-1.5 mt-1 rounded'></div></div>

          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </motion.div>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="md:w-1/2 text-left group hover:scale-[1.02] transition-all duration-300 hover:shadow-lg"
          >
            <h2
              onClick={handleAboutClick}
              title="Click Me"
              className="cursor-pointer hover:animate-bounce text-4xl font-bold mb-4 p-4 border border-secondary rounded-tl-4xl rounded-br-4xl inline-block text-white bg-base-100"
            >
              About Me
            </h2>
            <p className="text-lg leading-relaxed text-white bg-base-100 p-6 rounded-xl shadow-lg">
              I’m a passionate developer who loves building clean and efficient web applications.
              I enjoy tackling challenging problems and constantly learning new technologies
              to improve my craft.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src={naeemImage}
              alt="Md. Naeem Islam"
              className="w-48 h-48 sm:w-64 sm:h-64 object-cover border-4 border-accent rounded-2xl shadow-xl hover:scale-105 hover:shadow-accent transition-all duration-300 cursor-pointer"
              title="Click Me"
              onClick={() => console.log("Image clicked")}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
