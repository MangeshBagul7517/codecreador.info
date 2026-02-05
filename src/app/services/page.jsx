import React from 'react'
import HeroService from '../components/service/HeroService'
import ExperienceDesign from '../components/service/ExperienceDesign'
import services from '../data/services'
import StatsSection from '../components/service/StatsSection'
import ScrollCarousel from '../components/cardWrapper/ScrollCarousel'
const page = () => {
  return (
    <div>
        <HeroService/>
        <ExperienceDesign data={services?.experience}/>
        <ExperienceDesign data={services?.technology}/>
        <ExperienceDesign data={services?.digitalMarketing}/>
        <ExperienceDesign data={services?.branding}/>
        <StatsSection data={services?.OurImpact}/>
        
    </div>
  )
}

export default page