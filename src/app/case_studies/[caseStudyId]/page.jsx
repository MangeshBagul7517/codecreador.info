import HeroSection from '@/app/components/caseStudies/HeroSection'
import Section1 from '@/app/components/caseStudies/Section1'
import Section2 from '@/app/components/caseStudies/Section2'
import Section3 from '@/app/components/caseStudies/Section3'
import React from 'react'
import caseStudies from "@/app/data/caseStudies";

const CaseStudyDetails = ({  params  }) => {

  // const objectivesData = {
  //   title: "Objectives",
  //   description:
  //     "The major objective of the client was to implement a feasible solution that helps users make a seamless online purchase in addition to the offline purchase option available. With a mindful team of proficient designers, developers, and testing experts, we aimed to invoke the users’ interest in app-based sales.",
  //   objectives: [
  //     {
  //       icon: "📦", // Replace with your preferred icon component or image
  //       title: "Online ordering system",
  //       description:
  //         "They wished to adopt a preferable combination of both offline sales and online sales, with online sales to be managed through a brand-owned application.",
  //     },
  //     {
  //       icon: "🔗", // Replace with your preferred icon component or image
  //       title: "POS integration",
  //       description:
  //         "The solution had to be effectively integrated with the external services and the client’s backend systems to minimise operational complexities and overhead costs for a scalable expansion.",
  //     },
  //     {
  //       icon: "🎁", // Replace with your preferred icon component or image
  //       title: "Loyalty program",
  //       description:
  //         "The client wanted to provide an option that makes it easier for the customers to redeem their reward points and view the balance points whenever necessary.",
  //     },
  //   ],
  // };
  // const challengesData = {
  //   title: "Challenges",
  //   description:
  //     "Though the brand already had about 20,000 orders per day via direct orders and delivery agents, they wanted their system to increase the number of orders while relieving themselves of the challenge of paying third-party agents for product delivery.",
  //     objectives: [
  //     {
  //       icon: "✍️", // Replace with your preferred icon component or image
  //       title: "Lack of personalised order experience",
  //       description:
  //         "There was no app-based solution for the customers in the region. Additionally, the brand was not able to offer a personalised order experience to the users digitally.",
  //     },
  //     {
  //       icon: "📦", // Replace with your preferred icon component or image
  //       title: "Inconsistent product delivery",
  //       description:
  //         "Relying on food delivery partners to accept orders was not cost-effective. The lack of a product delivery system to replace the delivery partners was a key challenge.",
  //     },
  //     {
  //       icon: "🔗", // Replace with your preferred icon component or image
  //       title: "Operational complexities",
  //       description:
  //         "The solution had to be effectively integrated with the external services and the client’s backend systems to minimise operational complexities and overhead costs for a scalable expansion.",
  //     },
  //   ],
  // };

  // const features={
  //   smallTitle: "Major Features",
  //   title: "Customise Products as Desired",
  //   subtitle: 'The app lets users easily add their preferred features of the product, and customise them according to their preferences. With a user-friendly interface, the app helps shoppers customise the products they wish to purchase with their preferred combinations. '
  // }
  
  // const features2={
  //   smallTitle: "",
  //   title: "Superior UX Design",
  //   subtitle: 'The app offers users real-time order status, information about the new products, pop-ups, and the option to choose rewards. With an intuitive interface and superior UX that facilitates ease of purchase and payment, users have a highly engaging experience.'
  // }
  // const features3={
  //   smallTitle: "",
  //   title: "Loyalty we serve to our customers",
  //   subtitle: 'Caribou coffee app lets customers redeem points for rewards like complimentary brewed coffee, upgrades in size, and more. The “My Rewards” section in the app enables users to build up balance points and redeem them for exciting rewards like size upgrades, free bakery products, growlers, or beans.'
  // }
  // const features4={
  //   smallTitle: "",
  //   title: "Multiple Languages, Single Vision",
  //   subtitle: 'The app gives the flexibility to choose from the available languages with a feature that helps users view and use the app based on their preferred language. This helps both Kuwaiti customers and non-Kuwaiti residents enjoy using the app without any language barrier.'
  // }
  // const features5={
  //   smallTitle: "",
  //   title: "Seamless Shopping Experiences",
  //   subtitle: 'In case of an order failure, it is important to ensure an alternative feature that helps to keep the process alive. The Flutter-based outlet app serves the business as an internal application to view and manage orders via the app itself.'
  // }
  // const features6={
  //   smallTitle: "",
  //   title: "Power of Analytics at Your Fingertips",
  //   subtitle: 'With the analytics dashboard, we have helped the admins track and measure the users, retention rate, sales analysis, conversions, etc. It has also served as a parameter to understand and improve both the usage and performance of the applications.'
  // }
  // const features7={
  //   smallTitle: "",
  //   title: "Order Taking Tablet Interface (POS)",
  //   subtitle: 'With an efficient order-taking tablet interface, the POS system enhances the customer experience by offering user-friendly navigation and customisable options. It ensures swift order processing, streamlined inventory management, sales reporting, data storage, and overall operational efficiency.'
  // }

  // const keyResultsData = {
  //   title: "Key Results",
  //   description:
  //     "WAC has transformed the digital face of Caribou with an exclusive premium mobile app solution. The app not only helped the client increase orders but also made a remarkable impression on the users with its design, appeal, convenience, and overall experience.",
  //     objectives: [
  //     {
  //       icon: "📱", // Replace with your preferred icon component or image
  //       title: "Improved orders via app",
  //       description:
  //         "In line with the client’s expectations, the number of orders placed via app rose from 0% to 33%. The app invoked consumers’ attention with offers, redeemable points, and loyalty programmes, denoting a sharp rise in online sales. It made shopping easier with the mobile app, which helped the client scale the conversion rates.",
  //     },
  //     {
  //       icon: "📈", // Replace with your preferred icon component or image
  //       title: "Increased mobile app customers",
  //       description:
  //         "The mobile app has won the hearts of customers in Kuwait with an increased number of downloads, which is a huge improvement for mobile app consumers. With technological innovation and an optimised app-based online sales solution, the customer journey was refined, making it also comfortable to manage orders.",
  //     },
  //     {
  //       icon: "🌍", // Replace with your preferred icon component or image
  //       title: "Retained the Global Image",
  //       description:
  //         "Our approach to focusing on adherence to the brand guidelines helped us retain the global image while upholding the values and reliability of the brand. The elegant design reflecting the brand identity, personalised loyalty programme, curated content that symbolises coffee culture, and ease of shopping upheld the global standards of Caribou.",
  //     },
  //   ],
  // };

  // const conclusion={
  //   title: "Conclusion",
  //   subtitle: "With a proactive approach towards the proposed ‘Caribou Coffee Kuwait’ mobile app development services, WAC has successfully tackled the potential roadblocks and challenges, ensuring seamless project progress. With detailed discussions on understanding the pain points of consumers, our experts put forward a targeted solution that aligned their vision with the client’s expectations while considerably improving the overall orders, purchases, sales, and users."
  // }

  // const section1 = {
  //   title1: "Services Provided",
  //   title:
  //     "Developing an Extraordinary Mobile App for Premium US-Based Coffee Brand",
  //   description: `Caribou Coffee is a US-based premium coffee brand, providing high-quality handcrafted beverages, coffee lifestyle products, and food items in a welcoming coffeehouse environment for over three decades. In addition to Caribou’s presence in grocery stores, club stores, merchandisers, food service providers, entertainment venues, and various eCommerce channels, the brand wanted an exclusive app-based solution to make purchases seamless for Kuwaiti customers through mobile app purchases.`,
  //   services: [
  //     "UI/UX Design",
  //     "E-commerce",
  //     "Web App Development",
  //     "Mobile App Development",
  //     "Digital Marketing",
  //     "Cloud Services",
  //   ],
  //   details: [
  //     { label: "Language", value: "PHP/Kotlin / Swift" },
  //     { label: "Timescale", value: "20 Weeks" },
  //     { label: "Launch Date", value: "January 2024" },
  //     { label: "System", value: "Laravel" },
  //   ],
  // };

  // const dataArray = [
  //   {
  //     title: "Caribou Coffee’s Digital Takeoff with a Complete Mobile App",
  //     category: "Industry",
  //     industry: "Food",
  //     image:
  //       "https://images.pexels.com/photos/29949908/pexels-photo-29949908/free-photo-of-man-drinking-coffee-by-campfire-in-forest-scene.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     title: "Innovating Retail with Cutting-Edge E-commerce Solutions",
  //     category: "Industry",
  //     industry: "Retail",
  //     image:
  //       "https://images.pexels.com/photos/3965543/pexels-photo-3965543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  // ];
  
  const { caseStudyId } = params;
  console.log(caseStudyId, "id")
  const data = caseStudies.find(study => study.id === caseStudyId);
  console.log(data, "data")
  if (!data) {
    return <div>Case study not found!</div>;
  }


  return (
    <div>
        <HeroSection data={data.heroSection} />
        <Section1 data={data.section1}/>
        <Section3  data={data.features[2]}/>
        <Section2  data={data.objectivesData}/>
        <Section3  data={data.features[0]}/>
        <Section2  data={data.challengesData}/>
        <Section3  data={data.features[1]}/>
        <Section2  data={data.keyResultsData}/>
        <Section3  data={data.conclusion}/>
      
    </div>
  )
}


export default CaseStudyDetails