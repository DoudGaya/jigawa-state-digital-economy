import { getAllAcademics } from '@/actions/academics-management'
import React from 'react'
import { AcademicActionArea } from './_components/AcademicActionArea'
import { AcademicType } from '@/lib/academics-schema'

const AcademicsPage = async () => {
  const allAcademics = await getAllAcademics() as AcademicType[]
  
  return (
    <div className='flex bg-white dark:bg-dark-bg'>
      <AcademicActionArea academics={allAcademics} />
    </div>
  )
}

export default AcademicsPage