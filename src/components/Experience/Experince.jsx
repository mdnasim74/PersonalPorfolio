import React from 'react'
import { experiences } from '../../constants'

export default function Experince() {
  return (
    <section id='experience'
      className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] bg-[#0a0a23]/50 bg-opacity-50 clip-path-custom-2'>


      <div className='text-center mb-16'>
        <h1 className='text-white text-4xl font-bold '>EXPERIENCE</h1>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>A Collection of my work experience and the roles I have taken in various organizations</p>
      </div>

      {/**Experience Time line */}
      <div className='relative'>
       
        {/**Experience Entries */}

        {experiences.map((experience, index) => (
          <div key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}>
            {/**Content Section */}
            <div className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,60,236,0.3)] ${index % 2 == 0 ? "sm:ml-0" : "sm:mr-0"} sm:ml-44 sm:mr-44 transform transition-transform duration-300 hover:scale-105`}>
              {/**Flex Container for image and text*/}
              <div className='w-26 h-26 mb-2 bg-white rounded-md overflow-hidden'>
                <img src={experience.img} alt={experience.company} className='w-full h-full object-cover' />
              </div>
              <div className='flex items-center space-x-6'>
                {/**Company Logo */}

                {/****Comapany role and name*/}
                <div className='flex flex-col overflow-hidden'>
                  <div>
                    <h3 className='text-2xl sm:text-3xl text-white font-bold'>{experience.role}</h3>
                    <h4 className='text-xl sm:text-2xl font-semibold text-gray-300'>{experience.company}</h4>
                    <h5 className='text-xl font-semibold text-gray-500'>{experience.desc}</h5>

                    <div className='mt-2'>
                      <h5 className='font-medium text-white'>Skills:</h5>
                      <ul className='flex flex-wrap mt-2'>
                        {experience.skills.map((skill, index) => (
                          <li key={index}
                          className='bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400'>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <h6 className='text-white mt-2 font-semibold text-xl'>{experience.date}</h6>
                  </div>
                </div>
              </div>

            </div>
          </div>

        ))}
      </div>
    </section>
  )
}
