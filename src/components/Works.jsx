import React from "react";
import TiltProps from "react-parallax-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link_preview
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <TiltProps
        className="bg-tertiary p-5 rounded-2xl sm:w-[260px] w-full"
        options={{ max: 45, scale: 1, speed: 450 }}
      >
        <div className="relative w-full h-[230px]">
          <a href={link_preview} target="_blank" rel="noreferrer" className="cursor-pointer"><img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          /></a>
          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div> */}
        </div>
        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </TiltProps>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My Projects
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My projects are a showcase of my abilities and passion for developing
          web interfaces. Each project featured on this page is a testament to
          my skill and dedication to the craft. Through my projects, I
          demonstrate my ability to design and build visually stunning and
          user-friendly interfaces that are tailored to meet the specific needs
          of your clients.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-row flex-wrap gap-8">
        {projects.map((project, index) => (
          <ProjectCard {...project} index={index} key={`project-${index}`} />
        ))}
      </div>
    </>
  );
};

// export default Works
export default SectionWrapper(Works, "work");
