import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_lo9w1gv', 'template_4ecipdi', form.current, 'QVU0i4m6ad6dkjdqj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <form ref={form} onSubmit={sendEmail} className="font-['FuturaMd']">
        <div className='flex flex-col items-center justify-center gap-8 bg-none'>
            <div className='border-4 border-white rounded-md'>
                <input type="email" id="email" name="email" placeholder="email" required className='md:w-[40vw] w-[55vw] h-[2rem]'/>
            </div>
            <div className='border-4 border-white rounded-md'>
                <textarea id="message" name="message" placeholder="bodytext" required className='md:w-[40vw] w-[55vw] h-[10rem] resize-none'/>
            </div>
            <div>
                <input type="submit" value="Send" className='cursor-pointer border-4 border-white px-4 py-2 rounded-md'/>
            </div>
        </div>
      </form>
    );
  };
  export default ContactForm;