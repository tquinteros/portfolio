import React from 'react'
import { motion } from "framer-motion"
import { ComputersCanvas } from './canvas'


const Hero = () => {
  return (
    <div className='relative w-full h-screen mx-auto'>
      <div className={`sm:px-16 px-6 absolute inset-0 mb-24 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div  className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div  className='w-1 sm:h-80 h-40 violet-gradient' /> 
        </div>
        <div>
          <h1 className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}>Hi, I'm <span className='text-[#915eff]'>Tomás</span></h1>
          <p className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2`}>I'm Tomás Quinteros, a frontend developer skilled in HTML, CSS, Tailwind, Javascript, React, and more.</p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute bottom-24 sm:bottom-12 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev 
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            animate={{ y: [0, 24, 0] }} 
            transition={{duration: 1.5, repeat: Infinity, repeatType: "loop"}}
            />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Hero