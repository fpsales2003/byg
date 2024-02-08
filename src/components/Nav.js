import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { motion, AnimatePresence } from 'framer-motion'

const Nav = () => {
  const [ menuOpen, setMenuOpen ] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="fixed z-50 md:left-10 md:top-10 top-5 left-5 text-white font-['FuturaMd'] text-2xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
        onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)}
        className={`${menuOpen ? 'block' : 'hidden'} flex flex-col gap-3 rounded-lg p-5`}
      >
        <Link
          href="/"
        >
          <motion.div 
            className='flex items-center justify-center gap-[2rem] h-[5rem]'
            whileHover={{ textShadow: '0 0 10px rgba(0, 0, 0, 10)', boxShadow: '0 0 10px rgba(255, 255, 255, 5)', filter: 'brightness(1.2)', borderRadius: '5%'}}
            style={{ textShadow: '0 0 5px rgba(0, 0, 0, 5)' }}
          >
            <Image 
              src="/navigation/topbun_home.png"
              height={100}
              width={100}
              alt="navigation hamburger menu"
            />
            <p>Home</p>
          </motion.div>
        </Link>
        <Link
          href="/merch"
        >
          <motion.div 
            className='flex items-center justify-center gap-[2rem] h-[5rem]'
            whileHover={{ textShadow: '0 0 10px rgba(0, 0, 0, 10)', boxShadow: '0 0 10px rgba(255, 255, 255, 5)', filter: 'brightness(1.2)', borderRadius: '5%'}}
            style={{ textShadow: '0 0 5px rgba(0, 0, 0, 5)' }}
          >
            <Image 
              src="/navigation/cheese_merch.png"
              height={100}
              width={100}
              alt="navigation hamburger menu"
            />
            <p className='mt-5'>Merch</p>
          </motion.div>
        </Link>
        <Link
          href="/saga"
        >
          <motion.div 
            className='flex items-center justify-center gap-[2rem] h-[5rem]'
            whileHover={{ textShadow: '0 0 10px rgba(0, 0, 0, 10)', boxShadow: '0 0 10px rgba(255, 255, 255, 5)', filter: 'brightness(1.2)', borderRadius: '5%'}}
            style={{ textShadow: '0 0 5px rgba(0, 0, 0, 5)' }}
          >
            <Image 
              src="/navigation/cd_boosts.png"
              height={100}
              width={100}
              alt="navigation hamburger menu"
            />
            <p className=''>Boosts</p>
          </motion.div>
        </Link>
        <Link
          href="/cast"
        >
          <motion.div 
            className='flex items-center justify-center gap-[2rem] h-[5rem]'
            whileHover={{ textShadow: '0 0 10px rgba(0, 0, 0, 10)', boxShadow: '0 0 10px rgba(255, 255, 255, 5)', filter: 'brightness(1.2)', borderRadius: '5%'}}
            style={{ textShadow: '0 0 5px rgba(0, 0, 0, 5)' }}
          >
            <Image 
              src="/navigation/patty_profiles.png"
              height={100}
              width={100}
              alt="navigation hamburger menu"
            />
            <p className=''>Our Friends</p>
          </motion.div>
        </Link>
        <Link
          href="/contact"
        >
          <motion.div 
            className='flex items-center justify-center gap-[2rem] h-[5rem]'
            whileHover={{ textShadow: '0 0 10px rgba(0, 0, 0, 10)', boxShadow: '0 0 10px rgba(255, 255, 255, 5)', filter: 'brightness(1.2)', borderRadius: '5%'}}
            style={{ textShadow: '0 0 5px rgba(0, 0, 0, 5)' }}
          >
            <Image 
              src="/navigation/lettuce_contact.png"
              height={100}
              width={100}
              alt="navigation hamburger menu"
            />
           <p className=''>Contact</p>
          </motion.div>
        </Link>
        <Link
          href="/about"
        >
          <motion.div 
            className='flex items-center justify-center gap-[2rem] h-[5rem]'
            whileHover={{ textShadow: '0 0 10px rgba(0, 0, 0, 10)', boxShadow: '0 0 10px rgba(255, 255, 255, 5)', filter: 'brightness(1.2)', borderRadius: '5%'}}
            style={{ textShadow: '0 0 5px rgba(0, 0, 0, 5)' }}
          >
            <Image 
              src="/navigation/bottombun_about.png"
              height={100}
              width={100}
              alt="navigation hamburger menu"
            />
            <p className=''>About Us</p>
          </motion.div>
        </Link>
      </motion.div>
      <motion.div
        onClick={toggleMenu}
        onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)}
        className={`cursor-pointer ${menuOpen ? 'hidden' : 'block'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src="/navigation/burger_closed.png"
          height={100}
          width={100}
          alt="navigation hamburger menu"
        />
      </motion.div>
    </div>
  )
}

export default Nav