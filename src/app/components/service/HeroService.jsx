import React from 'react'

const HeroService = () => {
  return (
    <div
    className="relative bg-cover bg-center h-[400px]  flex items-center justify-center "
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    }}
  >
    <h1 className="text-white px-4  heading--xl max-w-[1200px] w-full justify-start ">Our Services</h1>
  </div>
  )
}

export default HeroService