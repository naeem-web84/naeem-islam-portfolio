import React from "react";
import { motion } from "framer-motion";
import hobbyHubImg from "../../assets/hobbyHub.png"; // Replace with your actual image path
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard3 = () => {
  return (
    <motion.div
      className="card bg-base-100 shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-8  "
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left: Image */}
      <div className="md:w-1/2 w-full">
        <img
          src={hobbyHubImg}
          alt="HobbyHub Project"
          className="rounded-lg object-contain w-full h-48 md:h-full"
          style={{ maxHeight: "320px" }}
        />
      </div>

      {/* Right: Text Content */}
      <div className="md:w-1/2 w-full flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-secondary mb-4 text-center md:text-left">
          HobbyHub – Connect Through Hobbies & Community
        </h3>
        <p className="text-base-content mb-6 text-center md:text-left">
          A community platform to discover, create, and manage local hobby groups like book clubs, fitness crews, art circles, and more.
        </p>

        {/* Technologies Used */}
        <div className="mb-6 text-center md:text-left">
          <h4 className="font-semibold text-accent mb-2">Technologies Used:</h4>
          <ul className="flex flex-wrap justify-center md:justify-start gap-2 text-sm text-base-content">
            <li className="badge badge-outline">React.js (Vite)</li>
            <li className="badge badge-outline">React Router DOM</li>
            <li className="badge badge-outline">Tailwind CSS + DaisyUI</li>
            <li className="badge badge-outline">Firebase Authentication</li>
            <li className="badge badge-outline">React Hook Form</li>
            <li className="badge badge-outline">Lottie React</li>
            <li className="badge badge-outline">React Awesome Reveal</li>
            <li className="badge badge-outline">SweetAlert2 + Toast</li>
            <li className="badge badge-outline">Node.js + Express.js</li>
            <li className="badge badge-outline">MongoDB + Mongoose</li>
            <li className="badge badge-outline">JWT</li>
            <li className="badge badge-outline">Deployed on Vercel</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="https://github.com/naeem-web84/hobby-hub-client-EJP"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline flex items-center gap-2"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://hobby-hub-app-bb214.web.app/"
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

export default ProjectCard3;
