import Banner1 from "./components/banners/Banner1";
import Banner2 from "./components/banners/Banner2";
import Card1 from "./components/cards/Card1";
import Card2 from "./components/cards/Card2";
import Button1 from "./components/comman/Buttons/Button1";
import { FaArrowRight } from "react-icons/fa";
import technologiesServices from "../../public/assets/service/technologies.jpg"
// app/page.js
export default function HomePage() {
  const cardsData = [
    {
      title: "Caribou",
      id: "caribou-coffee",
      description:
        "Assisting a renowned coffee chain in Kuwait to go digital with a robust application.",
      image:
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with real image URL
      category: "Food",
    },
    {
      title: "Lulu Hypermarket",
      description:
        "Creating a seamless experience for a high-volume, search-intensive big-brand store.",
      image:
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with real image URL
      category: "Retail",
    },
    {
      title: "Middlesex University",
      description:
        "Enhancing the digital presence of a world-class university for improved visual impact.",
      image:
        "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with real image URL
      category: "Education",
    },
    {
      title: "Retail",
      description:
        "Elevating Qatar's leading toy brand through our expertise in web, app, and digital marketing",
      image:
        "https://images.pexels.com/photos/935760/pexels-photo-935760.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with real image URL
      category: "Retail",
    },
    {
      title: "Retail / Manufacturing",
      description:
        "Transforming the digital landscape for India's premier design-led interior fit-out brand.",
      image:
        "https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with real image URL
      category: "Retail / Manufacturing",
    },
    {
      title: "Retail / Food",
      description:
        "Designing an appealing e-commerce platform to launch a new sales channel.",
      image:
        "https://images.pexels.com/photos/28907758/pexels-photo-28907758/free-photo-of-interior-of-a-modern-supermarket-produce-section.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with real image URL
      category: "Retail / Food",
    },
  ];
  const cardsData2 = [
    {
      title: "Branding",
      id: 'branding',
      description:
        "Establish a cohesive brand identity across all platforms with our strategic visual solutions.",
      image:
        "https://images.pexels.com/photos/7552373/pexels-photo-7552373.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      category: "Branding",
    },
    {
      title: "UI/UX Design",
      id: 'ui-ux-design',
      description:
        "Crafting intuitive UI/UX designs that offer seamless and efficient user experiences.",
      image:
        "https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
      category: "Design",
    },
    {
      title: "E-commerce",
      id: 'ecommerce',
      description:
        "Connecting your storefront to customers through our comprehensive eCommerce strategies.",
      image:
        "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
      category: "E-commerce",
    },
    {
      title: "Web App Development",
      id: 'web-development',
      description:
        "Developing tailored web applications that provide immersive digital experiences.",
      image:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
      category: "Web App Development",
    },
    {
      title: "Mobile App Development",
      id: "app-development",
      description:
        "Creating customized enterprise and consumer apps to meet your specific business requirements.",
      image:
        "https://images.pexels.com/photos/89955/pexels-photo-89955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
      category: "Mobile App Development",
    },
    {
      title: "DevOps Consulting",
      id: 'consulting',
      description:
        "Optimizing software development processes to enhance delivery reliability.",
      image:
        "https://images.pexels.com/photos/6804069/pexels-photo-6804069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with actual image URL
      category: "Consulting",
    },
  ];

  return (
    <div>
      <Banner1 />

      <div className="container mx-auto px-4 py-8 max-w-[1200px]">
        <h2 className="heading--large sm:text-start text-center text-gray-900  mb-8">
          Services
        </h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData2.map((card, index) => (
            <Card2
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

      <div className="w-full mx-auto flex justify-center">
        <Button1
          text="Explore More"
          // onClick={handleClick}
          icon={FaArrowRight}
          // isLoading={isLoading}
          isDisabled={false}
        />
      </div>
      <Banner2 />

      <div className="container mx-auto px-4 py-8 max-w-[1200px]">
        <h2 className="heading--large sm:text-start text-center  text-gray-900  mb-8">
          Case Studies
        </h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <Card1
              id={card.id}
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              category={card.category}
            />
          ))}
        </div>
      </div>
      <div className="mx-auto w-full flex justify-center">
      <img src="/assets/service/technologies.jpg" alt="Technologies Services" />
      </div>
     
    </div>
  );
}
