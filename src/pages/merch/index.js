import React from 'react'
import Nav from '@/components/Nav'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getMerchData } from "../api"

export async function getStaticProps() {
  const merchData = await getMerchData();
  return {
      props: {
          merchData,
      }
  }
}

const Merch = ({ merchData }) => {
  return (
    <motion.div className='relative z-0 bg-white h-full w-full'     
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}>
      <Nav />
      <div className='relative flex flex-col justify-center items-center gap-10 p-16'>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Futura'] text-black"
          initial={{ scale: 1, textShadow: '0 0 10px rgba(255, 255, 255, 0.9)' }}
        >MERCH</motion.h1>
        <div className="grid sm:grid-cols-3 grid-cols-1 lg:gap-10 md:gap-8">
          {merchData?.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <a href={`${item.link}`} target="_blank" rel="noopener noreferrer">
                      <Image 
                        src={`/merch/${item.slug}.jpeg`}
                        width={250}
                        height={250}
                        alt={`${item.name}`}
                        className="lg:w-60 md:w-48 h-auto"
                      />
                      <p className="text-black font-['FuturaMd'] sm:text-[1.1rem] text-sm text-center">{item.name}</p>
                    </a>
                  </motion.div>
                )
          }
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Merch
