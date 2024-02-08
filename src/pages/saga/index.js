import React from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav';

import { motion } from 'framer-motion';

import { getSagaDetails } from '../api'

export async function getStaticProps() {
    const boostData = await getSagaDetails();
    return {
        props: {
            boostData,
        }
    }
}

const Saga = ({ boostData }) => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
    >
        <Nav />
        <div
            className='w-full h-screen flex sm:flex-row flex-col justify-evenly items-center'
        >
            {boostData.map((boost, index) => {
                return (
                    <div key={index} className="relative w-full h-full">
                        <div className="absolute z-0 h-full w-full flex justify-center items-center overflow-hidden">
                                <img 
                                    src={`/boosts/backgrounds/${boost.slug}.gif`}
                                    width={100}
                                    height={100}
                                    alt="Background"
                                    className="absolute w-auto min-w-full min-h-full max-w-none"
                                    />
                        </div>
                            <div className='z-5 relative flex flex-col justify-center items-center h-full w-full'>
                                <Link href={'/saga/' + boost.slug}>
                                    <motion.h1
                                        className="text-6xl font-['Futura'] text-4xl md:text-6xl lg:text-8xl text-white"
                                        whileHover={{ scale: 1.1, textShadow: '0 0 20px rgba(255, 255, 255, 0.9)'}}
                                    >
                                        {boost.num}
                                    </motion.h1>
                                </Link>
                            </div>
                    </div>
                )
            })}
        </div>
    </motion.div>
  )
}

export default Saga