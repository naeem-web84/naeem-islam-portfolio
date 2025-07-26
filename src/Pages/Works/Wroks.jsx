import React from "react";
import { motion } from "framer-motion";
import ProjectCard1 from "./ProjectCard1";
import ProjectCard2 from "./ProjectCard2";
import ProjectCard3 from "./ProjectCard3";

const fadeVariant = (direction = "left") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -60 : 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

const Works = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto px-4 py-16 bg-base-100 rounded-xl shadow-lg"
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-secondary">Works</h2>
      <p className="text-center text-base-content mb-12">
        Some featured projects built with modern web technologies.
      </p>

      {/* First section: left aligned */}
      <motion.section
        variants={fadeVariant("left")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16 flex justify-start"
      >
        <div>
          <ProjectCard1 />
        </div>
      </motion.section>

      {/* Second section: right aligned */}
      <motion.section
        variants={fadeVariant("right")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16 flex justify-end"
      >
        <div className="w-full">
          <ProjectCard2 />
        </div>
      </motion.section>

      {/* Third section: left aligned */}
      <motion.section
        variants={fadeVariant("left")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16 flex justify-start"
      >
        <div>
          <ProjectCard3 />
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Works;
