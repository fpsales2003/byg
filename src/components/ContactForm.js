import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import Image from 'next/image';
import { motion } from 'framer-motion';

const ContactForm = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_lo9w1gv', 'template_4ecipdi', form.current, 'QVU0i4m6ad6dkjdqj')
        .then((result) => {
            console.log(result.text);
            setIsSent(true)
            setShowPopup(true)
            setTimeout(() => {
              setShowPopup(false)
            }, 3000)
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <div>
        <form ref={form} onSubmit={sendEmail} className="font-['FuturaMd']">
          <div className='flex flex-col items-center justify-center gap-8 bg-none'>
              <div className='border-4 border-white rounded-md'>
                  <input type="email" id="email" name="email" placeholder="email" required className='md:w-[40vw] w-[55vw] h-[2rem] bg-gray-200 bg-opacity-40 p-3'/>
              </div>
              <div className='border-4 border-white rounded-md h-[15vh]'>
                  <textarea id="message" name="message" placeholder="bodytext" required className='md:w-[40vw] w-[55vw] h-[10rem] resize-none bg-gray-200 bg-opacity-40 h-[14vh] p-2'/>
              </div>
              <motion.div
                whileHover={{ textShadow: '0 0 10px rgba(0, 0, 0, 10)', boxShadow: '0 0 10px rgba(255, 255, 255, 5)', filter: 'brightness(1.2)', borderRadius: '10%', scale: '1.05'}}
                style={{ textShadow: '0 0 5px rgba(0, 0, 0, 5)' }}
              >
                {isSent ? (
                  <input type="submit" value="Sent!" className='cursor-pointer border-4 border-white px-4 py-2 rounded-md'/>
                  ) : (
                    <input type="submit" value="Send" className='cursor-pointer border-4 border-white px-4 py-2 rounded-md'/>
                  )}
              </motion.div>
          </div>
        </form>
        {showPopup && (
          <motion.div 
            className='fixed top-0 left-0 w-full h-full flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              style={{ textShadow: '0 0 10px rgba(0, 0, 0, 10)', boxShadow: '0 0 10px rgba(255, 255, 255, 5)', filter: 'brightness(1.2)', borderRadius: '5%'}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Image 
                src={`/emailthanks.png`}
                width={250}
                height={250}
                alt="Thanks for contacting us"
                className='rounded-lg h-[80vh] w-auto shadow-xl'
              />
            </motion.div>
          </motion.div>
          )}
      </div>
    );
  };
  export default ContactForm;