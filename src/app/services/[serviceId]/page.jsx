import React from 'react'
import servicesData from '../../data/services/index';
import HeroServices from '@/app/components/services/HeroServices';
import Section1 from '@/app/components/services/Section1';
import OurProcess from '@/app/components/services/OurProcess';
import ScrollCarousel from '@/app/components/cardWrapper/ScrollCarousel';
import Faq from '@/app/components/general/Faq';
import DesignServices from '@/app/components/services/DesignServices';
import TopSectionDesign from '@/app/components/service/TopSectionDesign';

const servicePageDetails = ({params}) => {

    const { serviceId } = params;
    const data = servicesData.find(study => study.id === serviceId)
    if (!data) {
      return <div>service not found!</div>;
    }
  return (
    <div>
        
       
        <HeroServices data={data.heroSection} />
        {data?.topSection  &&
         <TopSectionDesign  data={data?.topSection}/>
        }
         
        <Section1 data={data.services} />
       
        <OurProcess data={data.processExpand} />
        <DesignServices data={data?.serviceSection}/>
        <ScrollCarousel data={data?.section5}/>
        <Faq data={data?.faqData}/>
        
    </div>
  )
}

export default servicePageDetails