import React from 'react'

const Section3 = ({data}) => {
  return (
    <div className='max-w-[1200px] mx-auto px-4 mt-8'>
       { data?.smallTitle &&<div className='subheading--small font-semibold'>{data?.smallTitle}</div> }
        <div>
        <div className='heading--xl pb-4'>{data?.title}</div>
        <div>{data?.subtitle}</div>
        </div>
    </div>
  )
}

export default Section3