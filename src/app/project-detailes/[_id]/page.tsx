"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Projects from '@/app/Projects'
const page = () => {
  const params = useParams<{ _id: string }>()

  const [selectedProject, setSelectedProject] = useState<any>({})
  useEffect(() => {

    if (params._id) {
      setSelectedProject(Projects.filter((project) => project.id === parseInt(params._id))[0] || {})
    }
  }, [])




  return (
    <div className='grid grid-cols-1 gap-0.5 justify-center bg-white shadow-lg rounded-lg space-y-4 md:space-y-0 md:space-x-8 p-3.5'>

      <img src={selectedProject?.src} alt={selectedProject.name} />
      <p className='text-2xl font-bold'>

        {selectedProject?.name}
      </p>
    </div>
  )
}

export default page