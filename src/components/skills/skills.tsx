import CSS from "../../assets/lenguages/css3.webp";
import DOCKER from "../../assets/lenguages/docker.png";
import HTML from "../../assets/lenguages/html5.png";
import JAVASCRIPT from "../../assets/lenguages/javascript.png";
import MYSQL from "../../assets/lenguages/mysql.png";
import NODEJS from "../../assets/lenguages/nodejs.png";
import REACT from "../../assets/lenguages/react.png";
import TAILWINDCSS from "../../assets/lenguages/tailwindcss.png";
import TYPESCRIPT from "../../assets/lenguages/typescript.png";
import { Skill } from "./skill";

import { skillsData } from "./skillsData";

function getImageAndTextForSkill(skillName: string) {
  switch (skillName) {
    case "HTML":
      return HTML;
    case "CSS":
      return CSS;
    case "JAVASCRIPT":
      return JAVASCRIPT;
    case "TAILWINDCSS":
      return TAILWINDCSS;
    case "NODEJS":
      return NODEJS;
    case "REACT":
      return REACT;
    case "TYPESCRIPT":
      return TYPESCRIPT;
    case "MYSQL":
      return MYSQL;
    case "DOCKER":
      return DOCKER;
    default:
      return "";
  }
}

export function Skills() {
  return (
    <section id="section-skills" className="min-h-screen w-full bg-white">
      <div className="h-full w-full py-28 px-28 flex flex-col items-center">
        <h1 className="relative text-5xl text-red tracking-wide font-bold mb-44 before:content-[''] before:absolute before:w-60 before:h-1.5 before:rounded-full before:left-0 before:right-0 before:m-auto before:bg-red before:top-14">
          Minhas Skills
        </h1>
        <div className="w-full grid grid-cols-3 gap-24 ">
          {skillsData?.map((skill, index) => (
            <Skill
              key={index}
              image={getImageAndTextForSkill(skill.name)}
              text={skill.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
