                                                   import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNode, FaDocker } from "react-icons/fa"; 
import { SiGo, SiTypescript, SiPostgresql, SiExpress } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "Go", icon: <SiGo /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Express", icon: <SiExpress /> },
];

export default function Skill() {
  return (
    <div className="bg-[#F5EFFF] text-[#34105a]">
      <div className="container content-center justify-center lg:mb-0 lg:h-screen lg:flex-row mx-auto pb-24">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-10 mt-24">
          <h2 className="font-mono text-2xl lg:text-4xl mb-4">Skills</h2>
          <span className="h-1 w-20 bg-[#34105a]"></span>
        </div>

        {/* Skills Grid */}
        <div className="mx-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6"
            >
              {/* Skill Icon */}
              <div className="text-4xl mb-4">{skill.icon}</div>

              {/* Skill Name */}
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
