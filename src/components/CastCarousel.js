import React from "react";

import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { getCastDetails, getSagaDetails } from "@/pages/api";

export async function getStaticProps() {
    const { data: castData } = await getCastDetails()

    return {
        props: {
            castData: castData,
        },
        revalidate: 1,
    }
}

const CastCarousel = ({ castData, boostData }) => {
    const [selectedMember, setSelectedMember] = useState(null);

    const handleImageClick = (index) => {
      setSelectedMember(selectedMember === index ? null : index);
    };

    const handleCloseClick = () => {
        setSelectedMember(null);
      };
    return (
        <div className="custom-scrollbar-container">
          <motion.div className="scrolling-content">
            {castData?.map((member, index) => {
              const isSelected = selectedMember === index;
    
              return (
                <motion.div
                  key={index}
                  className="inline-block"
                >
                  {isSelected ? (
                    <motion.div
                      className="relative flex flex-col justify-between items-center bg-black rounded-md w-[70vw] xl:h-[70vh] sm:h-[90%] h-[95%] m-5"
                      style={{
                        boxShadow: '0 0 10px rgba(255, 255, 255, 5)',
                        filter: 'brightness(1.2)',
                      }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                    >
                      <div className="flex flex-col w-full justify-around p-10 h-full">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-['Inter'] lg:text-5xl md:text-4xl sm:text-3xl text-2xl">{member.name}</p>
                            </div>
                            <div className="hidden">
                                <p className="font-['Inter'] md:text-base text-sm">aka</p>
                                <p className="md:text-2xl text-lg font-['Crimson']">"{member.nickname}"</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10 justify-around whitespace-normal">
                            <div className="sm:w-2/3 w-full flex flex-col justify-between text-gray-500 font-['Playfair'] text-[.5rem] md:text-sm">
                                <div className="flex flex-col justify-between sm:gap-1 gap-5">
                                    <div>
                                        <p>home: {member.origin}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>[{member.song.title}]</p>
                                        <p>- {member.song.artist}</p>
                                    </div>
                                </div>
                                <div>
                                    <p>{member.why}</p>
                                </div>
                                <div>
                                    <Image 
                                        src={`/profile/animals/${member.slug}.png`}
                                        alt={`${member.animal}`}
                                        width={150}
                                        height={150}
                                        className="w-[13vw] lg:mb-10 mb-0 lg:ml-20"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row w-full justify-between">
                            <div className="md:w-1/2">
                                <img
                                    src={`/models/${member.slug}.gif`}
                                    width={30}
                                    height={50}
                                    alt="Spinning model"
                                    className="xl:h-[55vh] lg:h-[45vh] md:h-[40vh] sm:h-[30vh] h-[20vh] min-w-max sm:border-white border-none"
                                    onClick={() => handleImageClick(index)}
                                    onError={(e) => {
                                        e.target.src = '/models/beingoflight.png';
                                    }}
                                />
                            </div>
                            <div className="md:w-1/4 w-full flex md:flex-col flex-row h-full justify-around items-center text-gray-500 font-['Playfair'] text-[.4rem] sm:text-sm">
                                <div>
                                    <p>[boosts]</p>
                                    <div className="flex flex-col items-start">
                                    {member.boosts.map((boost, index) => (
                                      <p key={index}>
                                        {boost}
                                      </p>
                                    ))}
                                </div>
                                </div>
                                <div className="self-end block">
                                  <Image 
                                    src="/skullx.png"
                                    alt="skull"
                                    width={100}
                                    height={100}
                                    className="sm:w-[8vw] w-full min-h-max"
                                  />
                                </div>
                                <div className="w-full">
                                    <p>likes:<br></br>- {member.likes.one}<br></br>
                                    - {member.likes.two}<br></br>- {member.likes.three}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                      </div>
                      <motion.div
                        className="cursor-pointer text-white absolute top-2 right-2 font-['Glass'] text-2xl m-3"
                        onClick={handleCloseClick}
                      >
                        X
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      className="flex flex-col justify-center items-center w-max h-full"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                    >
                      <motion.div
                      >
                        <img
                          src={`/models/${member.slug}.gif`}
                          width={30}
                          height={50}
                          alt="Spinning model"
                          className={`h-[40vh] min-w-max ${isSelected ? 'hidden' : ''}`}
                          onClick={() => handleImageClick(index)}
                          onError={(e) => {
                            e.target.src = '/models/beingoflight.png';
                          }}
                        />
                      </motion.div>
                      <div>
                        <p className="text-xl font-['FuturaMd'] p-5">{member.name}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      );
    };

export default CastCarousel