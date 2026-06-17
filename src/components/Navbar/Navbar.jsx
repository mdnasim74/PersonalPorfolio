import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi"
import { FaGithub, FaLinkedin } from "react-icons/fa"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

 const handleMenuItemClick = (sectionId) => {
  setActiveSection(sectionId);
  setIsOpen(false);

  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
};
  const MenuItem = [
    { id: "about", label: "About" },
    { id: "skill", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Project" },
    { id: "education", label: "Education" },

  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#0504414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className='text-white py-5 flex justify-between center'>
        <div className='text-lg font-semibold cursor-pointer'>
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Md</span>
          <span className='text-[#8245ec]'>/</span>
          <span className='text-white'>Nasim</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div>

        <ul className='hidden md:flex space-x-8 text-gray-300'>
          {
            MenuItem.map((items) => (
              <li key={items.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === items.id ? "text-[#8245ec]" : ""} `}>
                <button onClick={() => handleMenuItemClick(items.id)}>{items.label}</button>
              </li>
            ))
          }
        </ul>

        <div className='hidden md:flex space-x-4'>
          <a href="https://github.com/mdnasim74" target='_blank' rel='noopener noreferrer'
            className='text-gray-300 hover:text-[#8245ec]'>
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/md-nasim-ansari-237s" target='_blank' rel='noopener noreferrer'
            className='text-gray-300 hover:text-[#8245ec]'>
            <FaLinkedin size={24} />
          </a>

        </div>
        {/* Mobile Menu Button */}

        <div className='md:hidden'>
          {
            isOpen ? (
              <FiX className='text-3xl text-white cursor-pointer'
                onClick={() => setIsOpen(false)} />
            ) : (
              <FiMenu className='text-3xl text-white cursor-pointer'
                onClick={() => setIsOpen(true)} />
            )
          }

        </div>

        {/* Mobile menu Items*/}
        {
          isOpen && (
            <div className='absolute top-16 left-1/2 transition -translate-x-1/2 w-4/5 bg-[#0a0a23]/50 bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg'>
              <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
                {MenuItem.map((item) => (

                  <li key={item.id} className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                    <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
                  </li>
                ))}

                <div className='flex space-x-4'>
                  <a href="https://github.com/mdnasim74" target='_blank' rel='noopener noreferrer'
                    className='text-gray-300 hover:text-[#8245ec]'>
                    <FaGithub size={24} />
                  </a>
                  <a href="https://linkedin.com/in/md-nasim-ansari-237s" target='_blank' rel='noopener noreferrer'
                    className='text-gray-300 hover:text-[#8245ec]'>
                    <FaLinkedin size={24} />
                  </a>

                </div>
              </ul>
            </div>
          )
        }
      </div>
    </nav>
  )
}
