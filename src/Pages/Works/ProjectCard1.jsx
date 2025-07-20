import React from "react";
import { motion } from "framer-motion";
import tribly from "../../assets/Screenshot 2025-07-20 191623.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard1 = () => {
  return (
    <motion.div
      className="card bg-base-100 shadow-lg rounded-lg p-4 flex flex-col md:flex-row gap-6  "
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left: Image */}
      <div className="md:w-1/2 w-full">
        <img
          src={tribly}
          alt="Tribly Project"
          className="rounded-lg object-contain w-full h-48 md:h-full"
        />
      </div>

      {/* Right: Text Content */}
      <div className="md:w-1/2 w-full flex flex-col justify-center">
        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-2 text-center md:text-left">
            Tribly - Social Campaign Platform
          </h3>
          <p className="text-base-content mb-4 text-center md:text-left">
            A social campaign platform where users can host or join events, give
            feedback, and more. Built with MERN stack & Firebase.
          </p>

          {/* Technologies Used */}
          <div className="mb-2 text-center md:text-left">
            <h4 className="font-semibold text-accent mb-1">Technologies Used:</h4>
            <ul className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-base-content">
              <li className="badge badge-outline">React.js (Vite)</li>
              <li className="badge badge-outline">Firebase Authentication</li>
              <li className="badge badge-outline">React Router DOM</li>
              <li className="badge badge-outline">React Hook Form</li>
              <li className="badge badge-outline">Tailwind CSS + DaisyUI</li>
              <li className="badge badge-outline">Node.js + Express.js</li>
              <li className="badge badge-outline">MongoDB + Mongoose</li>
              <li className="badge badge-outline">JWT</li>
              <li className="badge badge-outline">Framer Motion</li>
              <li className="badge badge-outline">SweetAlert2 + Toast</li>
              <li className="badge badge-outline">Deployed on Firebase & Vercel</li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center md:justify-start">
          <a
            href="https://github.com/naeem-web84/Tribly_Social"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://b11-a12-6ef1f.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline btn-success flex items-center gap-2"
          >
            <FaExternalLinkAlt /> Live Site
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard1;
