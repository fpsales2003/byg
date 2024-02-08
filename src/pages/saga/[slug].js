'use client'
import Nav from "@/components/Nav";

import { getSagaDetails, getCastDetails } from "../api";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const getStaticPaths = async () => {
    const data = await getSagaDetails();
    const paths = data.map(boost => {
        return {
            params: { slug: boost.slug.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async(context) => {
    const slug = context.params.slug;
    const data = await getSagaDetails();
    const boost = data.find((b) => b.slug.toString() === slug)

    return {
        props: { boost }
    }
}

const BoostPage = ({ boost }) => {
    
    const getRandomSize = () => {
        // Generate a random size
        return Math.floor(Math.random() * (400 - 100 + 1) + 200);
    };

    const getRandomX = () => {
        // Generate a random x value
        return Math.floor(Math.random() * 105);
    };

    const getRandomY = () => {
        // Generate a random x value
        return Math.floor(Math.random() * 100);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-[100vw]"
        >
            <Nav />
            <div className="fixed z-0 h-full w-full flex justify-center items-center overflow-hidden">
                <img
                    src={`/boosts/backgrounds/${boost.slug}.gif`}
                    loop
                    autoPlay
                    muted
                    className="w-full h-full object-cover"
                >
                </img>
            </div>
            <div className="relative z-30 w-screen h-screen flex flex-col justify-center md:items-start items-center gap-10">
                <div className="xl:ml-32 lg:ml-24 md:ml-10 ml-5">
                    <motion.h1 
                        className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl font-['Futura'] w-full self-start text-white"
                        initial={{ scale: 1, textShadow: '0 0 3px rgba(255, 255, 255, 0.9)' }}
                    >
                        {boost.name}
                    </motion.h1>
                </div>
                <div className="flex sm:flex-row flex-col gap-10 self-center">
                    <div className="flex">
                        <iframe 
                            width="560"
                            height="315" 
                            src={`${boost.embed}?controls=0`}
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen
                            className="w-[60vw] sm:h-[60vh] h-[30vh] rounded-xl"
                        ></iframe>
                    </div>
                    <div>
                    <iframe 
                        src={`${boost.spotify}`}
                        width="100%" 
                        height="352" 
                        allowfullscreen="" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy"
                        className="sm:h-[60vh] h-[20vh] w-full"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="h-full text-white z-30 relative flex flex-col justify-center items-center">
                    <div className="w-8/12 mx-auto bg-black bg-opacity-50 p-4 rounded-lg my-20">
                        <p className="md:text-4xl text-2xl text-shadow-lg font-['FuturaMd']">{boost.desc}</p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center w-full">
                        {boost.promo.map((image, index) => (
                            <motion.div
                                key={index+1}
                                className="m-20"
                                style={{ 
                                    width: `${getRandomSize()}px`, 
                                    height: `${getRandomSize()}px`,
                                    left: `${getRandomX()}%`,
                                    top: `${getRandomY()}%`
                                }}
                            >
                                <img 
                                    src={`/boosts/promo/${boost.slug}/${image}.jpg`}
                                    alt={`Promotional Image ${index+1}`}
                                    className="w-full object-cover rounded-xl shadow-lg"
                                />
                            </motion.div>
                        ))}
                </div>
            </div>
        </motion.div>
    )
}

export default BoostPage