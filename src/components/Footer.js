import React from 'react'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const Footer = () => {
  const controls = useAnimation()

  const startAnimation = async () => {
    await controls.start({ y: [-5, 5, -5], transition: { duration: 3, repeat: Infinity } });
  };

  // Trigger the animation when the component mounts
  React.useEffect(() => {
    startAnimation();
  }, []);
  return (
        <div className='relative bg-white h-full text-black z-50 w-screen overflow-hidden flex flex-col'>
          <motion.div animate={controls}>
            <div className="flex justify-center"><div className="w-[100%] border-b-2 border-black mt-1"></div></div>
            <div className='flex justify-center items-center mt-1'>
              <p className="whitespace-nowrap text-2xl font-['Futura']">
                BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS 
              </p>
            </div>
            <div className="flex justify-center"><div className="w-[100%] border-b-2 border-black mt-1"></div></div>
          </motion.div>
        <div className="flex items-center justify-around font-['FuturaMd']">
          <div className='flex flex-col'>
            <p className='text-2xl mb-2'>*The Original Guys*</p>
            <p>- Jack Goodman</p>
            <p>- David Corro</p>
            <p>- Gerard Allen</p>
            <p>- Oscar Hechter</p>
          </div>
          <div className='flex gap-16 mt-5'>
            <div>
              <div>
                <p className='text-xl'>[Graphics & Design]</p>
                <p>Jack Goodman</p>
              </div>
              <div>
                <p className='text-xl'>[Design & Developer]</p>
                <p>Francis Sales</p>
              </div>
            </div>
            <div className="h-full border-r-2 border-black mx-4"></div>
            <div>
              <div>
                <p className='text-xl'>[3D Models]</p>
                <p>Andrew Buzby</p>
              </div>
              <div>
                <p className='text-xl'>[Music]</p>
                <p>Oscar Hechter</p>
              </div>
              <div>
                <p className='text-xl'>[Stock Footage]</p>
                <p>Pexels</p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="spinninghead.gif"
              alt="Spinning Head"
              loop
            />
          </div>
        </div>
        <div>
          <div className="flex justify-center"><div className="w-[100%] border-b-2 border-black mt-1"></div></div>
          <div className='flex justify-center items-center mb-1'>
            <p className="whitespace-nowrap text-2xl font-['Futura']">
              BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS BOOST YOUR GUYS 
            </p>
          </div>
          <div className="flex justify-center"><div className="w-[100%] border-t-2 border-black mb-1"></div></div>
        </div>
      </div>
    )
}

export default Footer