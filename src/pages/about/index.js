import React from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'


const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className='bg-blue-950 relative h-[93vh] w-screen overflow-hidden text-white'>
        <Nav />
        <div className="flex w-full h-full fixed items-center">
          <div className="flex flex-col font-['Glass'] sm:ml-[7.5rem] ml-[3rem] md:mr-auto sm:mr-20 mr-5">
            <div className='sm:w-full md:w-[60vw] lg:w-[56vw] xl:w-[55vw] flex flex-col gap-10'>
              <div>
                <h1 className='lg:text-8xl md:text-5xl sm:text-3xl text-2xl mb-3'>About Us</h1>
                <p className='md:text-base text-xs'>Boost Your Guys was founded in 2021 by Jack Goodman, David Corro, Gerard Allen, and Oscar Hechter. What started as a small recreational vessel for passion and creativity soon evolved into a massive multimedia conglomerate loved by audience members worldwide. But what is Boost Your Guys?</p>
              </div>
              <div>
                <h2 className='lg:text-6xl md:text-3xl sm:text-xl text-lg mb-1'>Mission Statement</h2>
                <p className='xl:text-base md:text-sm text-xs'>It’s that feeling when you roll into the driveway right as your song ends. That moment when you hit a clip in your video game right as the chorus comes in. It’s your windshield wipers syncing up with your Discover Weekly. It’s the perfect storm. In a world where arts and crafts and show and tell are a thing of the past, Boost Your Guys is an opportunity for creators to create and thrill-seekers to thrill. It provides a platform for people who wouldn’t usually express themselves artistically. At the end of the day, Boost Your Guys serves as a vessel of emotion. A visually stunning medium that anyone can enjoy from the comfort of their own home. </p>
              </div>
            </div>
          </div>
          <div className='right-0'>
              <Image 
                src="/models/beingoflight.png"
                alt="Being of light"
                width={400}
                height={200}
                className="absolute top-20 right-40 hidden lg:block w-[30vw]"
              />
              <Image 
                src="/models/beingoflight.png"
                alt="Being of light"
                width={400}
                height={200}
                className="absolute top-20 right-20 hidden md:block w-[30vw]"
              />
              <Image 
                src="/models/beingoflight.png"
                alt="Being of light"
                width={400}
                height={200}
                className="absolute top-40 right-60 hidden xl:block w-[30vw]"
              />
              <Image 
                src="/models/beingoflight.png"
                alt="Being of light"
                width={400}
                height={200}
                className="absolute top-[40%] right-36 hidden lg:block w-[30vw]"
              />
              <Image 
                src="/models/beingoflight.png"
                alt="Being of light"
                width={400}
                height={200}
                className="absolute top-60 right-0 hidden md:block w-[30vw]"
              />
              <Image 
                src="/models/beingoflight.png"
                alt="Being of light"
                width={400}
                height={200}
                className="absolute top-10 right-[-2%] hidden md:block w-[30vw]"
              />
              <Image 
                src="/models/beingoflight.png"
                alt="Being of light"
                width={400}
                height={200}
                className="absolute top-80 right-10 hidden md:block w-[30vw]"
              />
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}

export default About
