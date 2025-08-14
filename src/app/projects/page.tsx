import React from 'react'

import Projects from '../Projects'
const page = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 justify-center bg-white shadow-lg rounded-lg space-y-4 md:space-y-0 md:space-x-8 p-3.5'>
      {Projects.map((project) => (
        <div key={project.id} className='grid  items-center card'>
          <img src={project.src} alt={project.name} style={{ width: '300px', height: '200px'}} />
          <h2 className='text-2xl font-bold'>{project.name}</h2>
          <a className='btn hover:cursor-pointer' href={project.link} target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </div>
      ))}
    </div>
  )
}

export default page