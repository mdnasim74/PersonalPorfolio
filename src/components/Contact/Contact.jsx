import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_aqoun9q", "template_5u2homa", form.current, "uPvtFwL_qhctzX1LN")
    .then(() => {
      setIsSent(true)
      form.current.reset() //Reset from feild after
      toast.success("Message sent successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
      })
    }, (error) => {
      toast.error("Error sending Message", error);
       toast.error("Failed to send message ! Please try Again", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
      })
    })
  }

  return (
    <section id='contact' className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16] relative bg-[#0a0a23]/50 bg-opacity-50'>

      <ToastContainer />
      {/**Section Tittle */}
      <div className='text-center mb-8'>
        <h1 className='text-4xl text-white font-bold'>CONTACT</h1>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 font-semibold mt-4 text-lg'>I'd love to hear from you-reach out for any opportunities or questions! </p>
      </div>

      {/**Section div for box */}

      <div className='flex justify-center items-center'>
        <div className='w-full sm:w-[30%] border border-white bg-transparent backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover: -translate-y-2 transition transition-transform duration-300 '>
          <div className='p-4'>
            <p className='text-white text-center'>Connect with me</p>
          </div>

          <div className='p-2'>
              <form ref={form} onSubmit={sendEmail}  className='flex flex-col gap-5'>
                <div className='flex items-center justify-center'> 
                  <input type="text" placeholder='Your Email' name='email' required className='w-[90%] rounded-md text-white border border-gray-400 p-2 font-bold focus:outline-none focus:border-purple-900'/>
                </div>
                <div className='flex items-center justify-center'>
                   <input type="text" placeholder='Your Name' name='name' required className='w-[90%] rounded-md text-white border border-gray-400 p-2 font-bold focus:outline-none focus:border-purple-900'/>
                </div>
                <div className='flex items-center justify-center'>
                   <input type="text" placeholder='Subject' name='subject' required className='w-[90%] rounded-md text-white border border-gray-400 p-2 font-bold focus:outline-none focus:border-purple-900'/>
                </div>
                <div className='flex items-center justify-center'>
                  <textarea name="message" id="message" placeholder='Message'  required className='w-[90%] rounded-md text-white border border-gray-400 p-2 font-bold focus:outline-none focus:border-purple-900' rows={4} cols={10}>

                </textarea>
                </div>
                <div className='flex justify-center items-cente mb-3'>
                  <button  type='submit' className='w-[90%] rounded-md font-bold bg-blue-800 p-2 text-white cursor-pointer'>SEND</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </section>
  )
}
