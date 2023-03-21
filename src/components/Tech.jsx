import React from 'react'
// import { technologies } from '../constants'
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import sql from "../assets/tech/sql.png";
import bootstrap from "../assets/tech/bootstrap.png";
import next from "../assets/tech/nextjs.svg";

import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  threejs,
} from "../assets";

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Sql",
    icon: sql,
  },
];


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {
        technologies.map((tech) => {
          return <div className='w-28 h-28' key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        })
      }
    </div>
  )
}

export default SectionWrapper(Tech, "tech")

// export default Tech;