import React from 'react'
import Nav from '@/components/Nav'
import ContactForm from '@/components/ContactForm'
import backgroundVideo from '@/components/BackgroundVideo'

import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div className="relative h-screen w-screen overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    >
      <Nav />
      <div className="absolute z-0 h-full w-full flex justify-center items-center overflow-hidden">
        <img 
          src="/contact.png"
          width={100}
          height={100}
          alt="Background"
          className="absolute w-auto min-w-full min-h-full max-w-none"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-screen w-screen relative z-30 gap-5" style={{ textShadow: '0 0 15px rgba(0, 0, 0, 0.3)' }}>
        <div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-['Futura']">CONTACT US</h1>
        </div>
        <div className='flex items-center justify-center gap-5 md:gap-10 lg:gap-20'>
          <div>
            <a href="https://youtube.com/@boostyourguys?si=Dz9TuRn4AM6YI51Y" target="_blank">
                <img 
                  src="/youtube.svg"
                  width="50"
                  height="50"
                  alt="Youtube"
                  className='md:w-20 w-10'
                />
            </a>
          </div>
          <div>
            <a href="https://www.tiktok.com/@boostyourguys?_t=8jTgjuOKAj0&_r=1" target="_blank">
              <img 
                src="/tiktok.svg"
                width="50"
                height="50"
                alt="Youtube"
                className='md:w-20 w-10'
              />
            </a>
          </div>
          <div>
            <a href="https://open.spotify.com/album/7rhHAabF2JYgnMk4wlW6XS?si=sKhu7tjATjWTnG_Kywg5rQ" target="_blank">
            <img 
              src="/spotify.svg"
              width="50"
              height="50"
              alt="Spotify"
              className='md:w-20 w-10'
            />
            </a>
          </div>
        </div>
        <div className='max-w-[50vw]'>
          <p className="text-center text-md md:text-1xl lg:text-2xl font-['FuturaMd']">Interested in joining BOOST YOUR GUYS? Want your original content or music featured in our videos? Desiring to reach out in general?<br></br>Shoot us an email below:</p>
        </div>
        <div className='mt-3'>
          <ContactForm />
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
