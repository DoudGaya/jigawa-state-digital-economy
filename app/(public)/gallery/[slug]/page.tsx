import PagesBanner from '@/app/components/PagesBanner'
import React from 'react'

const page = async ( {params}:{ params: Promise<any>} ) => {
  const p = await params
    console.log(p.slug)
  return (
    <div>
        <PagesBanner subtitle='' message='Gallery' />
    </div>
  )
}

export default page