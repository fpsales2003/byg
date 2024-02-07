import React from 'react'
import Nav from '@/components/Nav'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Merch = () => {
  return (
    <motion.div className='relative z-0 bg-white h-screen w-screen'     
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}>
      <Nav />
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div>
          <Image 
            src="/construction.png"
            alt="Under Construction"
            width={1000}
            height={1000}
            className="w-[40vw] max-h-max"
          />
        </div>
        <div>
          <p className="text-black font-['FuturaMd'] md:text-2xl text-md text-center">
            This page is <span className="font-['Futura'] font-bold">UNDER CONSTRUCTION</span>. Whatever that means.<br></br>
            MERCH coming soon...
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Merch
