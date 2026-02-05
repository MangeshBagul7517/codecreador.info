import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Button1 from '../comman/Buttons/Button1'

const StatsSection = ({data, varient="primary"}) => {
  const secondaryVarient= varient==="secondary"
  return (
    <div className={` px-4 max-w-[1200px] mx-auto ${secondaryVarient? '': 'bg-white md:py-16 py-4 text-center'}  `}>
        <div className={`${secondaryVarient ?"": "mx-auto"}  sm:w-[90%]`}>
    {/* Heading Section */}
    <h2 className="heading--xl mb-4">{data?.title}</h2>
    <p className={`subheading--small ${secondaryVarient ?"":"max-w-2xl mx-auto"} text-silver-200  mb-10 `}>
      {data?.description}
    </p>

    {/* Stats Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      {data?.stats.map((stat, index) => (
        <div key={index}>
          <p className={`heading--large  ${secondaryVarient ?"":"text-dark"} `}>{stat?.value}</p>
          <p className="subheading--small">{stat?.description}</p>
        </div>
      ))}
    </div>

    {/* Button Section */}
    <div className={`flex ${secondaryVarient ?"":"justify-center"} `}>

     
    <Button1

          text= {data?.buttonText}
          variant={secondaryVarient ?'secondary': 'primary'}
          // onClick={handleClick}
          icon={FaArrowRight}
          // isLoading={isLoading}
          isDisabled={false}
        />
 
  </div>
  </div>
  </div>
  )
}

export default StatsSection