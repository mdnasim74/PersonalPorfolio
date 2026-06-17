import React, { useState } from 'react'
import { projects } from '../../constants'

export default function Work() {

  const [isSelected, setIsSelected] = useState(null);

  const handleOpenModel = (project) => {

    setIsSelected(project)
  }

  const handleClose = (project) => {
    setIsSelected(null)
  }
  return (
    <section id='project'
      className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px[20vw] relative bg-[#0a0a23]/50 bg-opacity-50'>

      {/**Section Tittle */}
      <div className='text-center mb-8'>
        <h1 className='text-4xl text-white font-bold'>PROJECTS</h1>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 font-semibold mt-4 text-lg'>A Showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>
      </div>

      {/**Section image */}

      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (

          <div key={project.id} onClick={() => handleOpenModel(project)}>
            <div className='border border-white bg-gray-900 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover: -translate-y-2 transition transition-transform duration-300 '>
              <div className='p-4'>
                <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-2xl' />
              </div>
              <div className='p-6'>
                <h3 className='text-white font-bold text-2xl mb-2'>{project.title}</h3>
                <p className='text-gray-500 pt-5 line-clamp-3'>{project.description}</p>
              </div>

              <div className='p-8'>
                <ul className='flex flex-wrap'>
                  {project.tags.map((tag, index) => (
                    <li key={index} className='text-purple-500/50 px-4 py-1 text-xs sm:text-sm rounded-full mr-2 mb-2 border border-gray-400'>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/**Model Container */}

      {isSelected && (
        <div className='fixed inset-0 z-50 flex justify-center items-center bg-black'>
          <div className='bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[80%] max-w-2xl overflow-hidden relative'>

            <div className='flex justify-end p-4'>
              <button onClick={handleClose} className='text-white text-3xl font-bold hover:text-purple-500 cursor-pointer'>
                  &times;
              </button>
            </div>
            <div className='flex flex-col '>
              <div className='w-full flex justify-center bg-gray-900'>
                      <img src={isSelected.image} alt={isSelected.title} 
                      className='lg:w-full w-[95%] object-contain rounded-xl shadow-2xl p-4'/>
             
              </div>
              <div className='lg:p-8 p-6'>
                <h3 className='lg:text-3xl font-bold text-white mb-2'>{isSelected.title}</h3>
                <p className='lg:text-ms font-semibold text-gray-400'>{isSelected.description}</p>
              </div>

            
                <div className='flex justify-between items-center p-2'>
              <a href={isSelected.github} rel='noopener noreferer' target='_blank'> 
                <button className='border border-purple-400 rounded-2xl p-2 text-white font-bold px-4 md:px-10 mb-2 hover:bg-purple-500 cursor-pointer'>View Code</button>
              </a>
                <a href={isSelected.webapp}  rel='noopener noreferer' target='_blank'>
                  <button className='border border-purple-400 rounded-2xl p-2 text-white font-bold px-4 md:px-10 mb-2  hover:bg-purple-500 cursor-pointer'>View Live</button>
                </a>
              </div>
            </div>
          </div>

        </div>
      )}
    </section>
  )
}
