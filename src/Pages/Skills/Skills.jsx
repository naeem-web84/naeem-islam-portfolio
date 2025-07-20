import Marquee from "react-fast-marquee";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiExpress, SiMongodb } from "react-icons/si";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
  { name: "Express", icon: <SiExpress className="text-white text-5xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-5xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-5xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-white text-5xl" /> },
];

const Skills = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center mt-20 max-w-4xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-secondary">Tech Stack</h2>
        <p className="text-accent">Technologies I work with</p>
      </div>

      {/* Card container */}
      <div className="bg-base-primary rounded-lg shadow-xl p-8">
        {/* Optional intro text inside the card */}
        <p className="text-base-100 mb-6 text-center font-medium text-lg">
          Here are some of my key skills:
        </p>

        <Marquee speed={50} pauseOnHover={true} gradient={false}>
          {skillsData.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center h-[200px] min-w-[120px] mx-6 cursor-pointer
                         transition-transform duration-300 hover:scale-110"
            >
              <div className="bg-base-100 p-8 rounded-full shadow-lg
                              ring-2 ring-secondary transition-shadow duration-300
                              hover:shadow-2xl hover:ring-accent">
                {skill.icon}
              </div>
              <p className="mt-4 font-semibold text-sm text-base-secondary select-none">
                {skill.name}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
