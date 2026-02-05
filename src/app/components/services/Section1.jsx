import React from 'react'
import Card2 from '../cards/Card2'

const Section1 = ({data}) => {
  return (
    <div className='bg-gray-50 mt-24 w-full'>
     <div className="container mx-auto px-4 py-8 max-w-[1200px]">
        <h2 className="heading--large sm:text-start text-center text-gray-900  mb-8">
          {data?.title}
        </h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.items.map((card, index) => (
            <Card2
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              category={card.category}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section1