import React from "react";
import ProjectCard1 from "./ProjectCard1";
import ProjectCard2 from "./ProjectCard2";
import ProjectCard3 from "./ProjectCard3";

const Works = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-base-100 rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-8 text-secondary">Works</h2>
      <p className="text-center text-base-content mb-12">
        Some featured projects built with modern web technologies.
      </p>

      {/* First section: left aligned */}
      <section className="mb-16 flex justify-start">
        <div>
          <ProjectCard1 />
        </div>
      </section>

      {/* Second section: right aligned */}
      <section className="mb-16 flex justify-end">
        <div className="w-full">
          <ProjectCard2 />
        </div>
      </section>

      {/* Third section: left aligned again */}
      <section className="mb-16 flex justify-start">
        <div  >
          <ProjectCard3 />
        </div>
      </section>
    </div>
  );
};

export default Works;
