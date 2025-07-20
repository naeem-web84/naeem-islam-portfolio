import React from "react";
import { motion } from "framer-motion";
import actforbdImg from "../../assets/actforbd.png"; // Replace with actual image
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard2 = () => {
  return (
    <motion.div
      className="card bg-base-100 shadow-lg rounded-lg p-4 flex flex-col md:flex-row gap-6  "
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left: Text Content */}
      <div className="md:w-1/2 w-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-2">
            ActForBD – Empowering Communities, One Event at a Time
          </h3>
          <p className="text-base-content mb-4">
            A platform to create, join, and manage social service events across Bangladesh. From cleanup drives to tree plantations and donation programs — empowering communities to build a better future.
          </p>

          {/* Technologies Used */}
          <div className="mb-2">
            <h4 className="font-semibold text-accent mb-1">Technologies Used:</h4>
            <ul className="flex flex-wrap gap-3 text-sm text-base-content">
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
        <div className="flex gap-3 mt-auto">
          <a
            href="https://github.com/naeem-web84/a11-actforbd-EJP"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://actforbd.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline btn-success flex items-center gap-2"
          >
            <FaExternalLinkAlt /> Live Site
          </a>
        </div>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2 w-full">
        <img
          src={actforbdImg}
          alt="ActForBD Project"
          className="rounded-lg object-contain w-full h-48 md:h-full"
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard2;
