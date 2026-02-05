import React from 'react'
import Card2 from '../cards/Card2'
import Card1 from '../cards/Card1'
import Card3 from '../cards/Card3'
import Card4 from '../cards/Card4'

const OurGoal = ({data}) => {
  return (
    <div className='max-w-[1200px] pb-10 px-4 mx-auto'>
        <div>{data?.title}</div>
           <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2  gap-8">
          {data.items.map((card, index) => (
            <Card4
              key={index}
              id={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              category={card.category}
            />
          ))}
        </div>
    </div>
  )
}

export default OurGoal