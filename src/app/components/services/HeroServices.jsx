import React from 'react'

const HeroServices = ({data}) => {
    const { title, category, industry, image } = data;
  return (
    <div
    className="relative h-[500px] bg-cover bg-center"
    style={{ backgroundImage: `url(${image})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>

    {/* Content */}
    <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
    <div className="heading--4xl  ">
        {title}
      </div>
      <p className="subheading--large uppercase tracking-wide mb-2">
        {category} 
      </p>
    
    </div>
  </div>
  )
}

export default HeroServices