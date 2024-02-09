'use client'

import CastCarousel from "@/components/CastCarousel"
import Nav from "@/components/Nav"

import { getCastDetails } from "../api"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Cast = () => {
    const [castData, setCastData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCastDetails();
                setCastData(data)
            } catch (error) {
                console.log("Error fetching cast data", error)
            }
        };
        fetchData();
    }, [])

    return (
        <motion.div
         className="overflow-hidden"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="absolute z-0 h-screen w-screen overflow-hidden flex justify-center">
                <img
                    src={"/profile/profile.gif"}
                    loop
                    autoPlay
                    muted
                    className="absolute w-auto min-w-full min-h-full max-w-none"
                >
                </img>
            </div>
            <Nav className="relative z-30"/>
            <div className="relative z-30 flex flex-col justify-center gap-16 h-screen">
                <div className="self-center">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Futura'] text-white"
                        initial={{ scale: 1, textShadow: '0 0 10px rgba(255, 255, 255, 0.9)' }}
                    >
                        OUR FRIENDS
                    </motion.h1>
                </div>
                <div>
                    <CastCarousel castData={castData}/>
                </div>
            </div>
        </motion.div>
    )
}

export default Cast