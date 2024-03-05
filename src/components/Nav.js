import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { motion, AnimatePresence } from 'framer-motion'

const Nav = () => {
  const [ menuOpen, setMenuOpen ] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const burgerIconVariants = {
    hover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } },
    tap: { scale: 0.9 }
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.5 } },
    exit: { opacity: 0, y: -20 }
  }

  return (
    <motion.div className="fixed z-50 md:left-10 md:top-10 top-5 left-5 text-white font-['FuturaMd'] text-2xl w-auto">
      <AnimatePresence>
        <motion.div
          onClick={toggleMenu}
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
          className={`cursor-pointer ${menuOpen ? 'hidden' : 'block'}`}
          whileHover="hover"
          whileTap="tap"
          variants={burgerIconVariants}
        >
          <Image
            src="/navigation/burger_closed.png"
            height={100}
            width={100}
            alt="navigation hamburger menu"
            layout="fixed"
          />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {menuOpen && ( 
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
          className={`flex flex-col gap-3 rounded-lg p-5`}
        >
          <motion.div
            variants={menuItemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
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
          </motion.div>
          <motion.div
            variants={menuItemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Link
              href="/merch"
            >
              <motion.div 
                variants={menuItemVariants}
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
          </motion.div>
          <motion.div
            variants={menuItemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Link
              href="/saga"
            >
              <motion.div 
                variants={menuItemVariants}
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
          </motion.div>
          <motion.div
            variants={menuItemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Link
              href="/cast"
            >
              <motion.div 
                variants={menuItemVariants}
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
          </motion.div>
          <motion.div
            variants={menuItemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Link
              href="/contact"
            >
              <motion.div 
                variants={menuItemVariants}
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
          </motion.div>
          <motion.div
            variants={menuItemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Link
              href="/about"
            >
              <motion.div 
                variants={menuItemVariants}
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
        </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Nav