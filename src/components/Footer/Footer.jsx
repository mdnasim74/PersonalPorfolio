import React from 'react'
import { FiMenu, FiX } from "react-icons/fi"
import { FaGithub, FaLinkedin ,FaYoutube,FaTwitter} from "react-icons/fa"

export default function Footer() {

   const MenuItem = [
    { id: "about", label: "About" },
    { id: "skill", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Project" },
    { id: "education", label: "Education" },

  ]
  return (
    <section id='footer' className='py-8 pb-8 px-[12vw] md:px-[7vw] lg:px-[16vw] bg-[#0a0a23]/50 bg-opacity-50'>

      {/**Section Title */}
      <div className='flex justify-center items-center'>
        <h2 className='text-[#8245ec] text-center text-2xl font-bold'>MD NASIM ANSARI</h2>
      </div>
    
      
          <div className='flex justify-center items-center p-2'>
          <ul className='flex  flex-col gap-2 sm:flex-row sm:gap-5 p-2 font-semibold'>
          {MenuItem.map((item) => (
            <li key={item.id} className={`cursor-pointer text-white hover:text-[#8245ec]`}>
              {item.label}</li>
          ))}
        </ul>
        </div>
          <div className='p-2 flex justify-center items-center gap-5'>
                <a href="https://github.com/mdnasim74" target='_blank' rel='noopener noreferrer'
                           className='text-gray-300 hover:text-[#8245ec]'>
                           <FaGithub size={24} />
                         </a>
                         <a href="https://linkedin.com/in/md-nasim-ansari-237s" target='_blank' rel='noopener noreferrer'
                           className='text-gray-300 hover:text-[#8245ec]'>
                           <FaLinkedin size={24} />
                         </a>
                         <a href="https://x.com/" target='_blank' rel='noopener noreferrer'
                           className='text-gray-300 hover:text-[#8245ec]'>
                           <FaTwitter size={24} />
                         </a>
                         <a href="https://www.youtube.com/" target='_blank' rel='noopener noreferrer'
                           className='text-gray-300 hover:text-[#8245ec]'>
                           <FaYoutube size={24} />
                         </a>
          </div>
          <div className='mt-2'>
            <p className='text-gray-300 text-center font-semibold'>2026 Md Nasim Ansari.All rights reserved</p>
          </div>
      
    </section>
  )
}
