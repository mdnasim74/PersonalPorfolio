import React from 'react'
import { education } from '../../constants'

export default function Education() {
  return (
    <section id='education' className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px[20vw] relative bg-[#0a0a23]/50 bg-opacity-50 clip-path-custom-3'>

      {/**Section Tittle */}
      <div className='text-center mb-8'>
        <h1 className='text-4xl text-white font-bold'>EDUCATION</h1>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 font-semibold mt-4 text-lg'>My education has been a jounrey of learning and development. Here are the details of my academic background</p>
      </div>

      <div className='relative'>

        {/**education Entries */}

        {education.map((education, index) => (
          <div key={education.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}>
            {/**Content Section */}
            <div className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,60,236,0.3)] ${index % 2 == 0 ? "sm:ml-0" : "sm:mr-0"} sm:ml-44 sm:mr-44 transform transition-transform duration-300 hover:scale-105`}>
              {/**Flex Container for image and text*/}
              <div className='flex items-center'>
                <div className='w-48 md:w-32  h-26 mb-2 bg-white rounded-2xl overflow-hidden'>
                  <img src={education.img} className='w-full h-full object-cover' />
                </div>
                <div className='p-2'>
                  <h2 className='text-white font-bold'>{education.degree}</h2>
                  <h3 className='text-gray-300 '>{education.school}</h3>
                  <p className='text-gray-400 font-bold'>Grade:{education.grade}</p>
                </div>
              </div>

          <div className='p-2'>
            <p className='text-gray-400 font-semibold'>{education.desc}</p>
          </div>
          <div className='p-1'>
            <p className='font-bold text-gray-300'>{education.date}</p>
          </div>

            </div>
          </div>

        ))}
      </div>

    </section>
  )
}
