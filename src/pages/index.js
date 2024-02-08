import Nav from '@/components/Nav'
import Link from 'next/link'

import { motion } from 'framer-motion'
import { useRouter } from 'next/router';

export default function Home() {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const randomInteger = getRandomInt(1, 4); // Generates a random integer between 1 and 5 (inclusive)

  const router = useRouter();

  const handleClick = () => {
    // Add a delay of 1000 milliseconds (1 second) before navigating to the new page
    setTimeout(() => {
      router.push('/saga');
    }, 1000);
  };

  return (
    <motion.div 
      className='relative h-screen w-screen overflow-hidden'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Nav />
      <div className="absolute z-0 h-full w-full flex justify-center items-center overflow-hidden">
        <img 
          src={`/home/home1.gif`}
          width={100}
          height={100}
          alt="Background"
          className="absolute w-auto min-w-full min-h-full max-w-none"
        />
      </div>
      <Link
          href="/saga"
        >
      <motion.div className="flex flex-col justify-center items-center h-screen w-screen bg-black" onClick={handleClick}>
          <motion.h1 
            className="font-['Futura'] text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-white z-30 cursor-pointer"
            initial={{ scale: 1, textShadow: '0 0 3px rgba(255, 255, 255, 0.9)' }}
            whileHover={{ scale: 1.01, textShadow: '0 0 20px rgba(255, 255, 255, 0.9)'}}
          >
            I WANT TO BOOST
          </motion.h1>
      </motion.div>
      </Link>
    </motion.div>
  )
}