import { FaArrowRight } from "react-icons/fa";
import Button2 from "../comman/Buttons/Button2";

const Card3 = ({ image, title, description, hoverText }) => {
  return (
    <div className="relative w-full rounded-lg overflow-hidden bg-white group">
      {/* Image Section */}
      <div className="relative w-full overflow-hidden transition-all duration-300 group-hover:h-36 h-52">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:transform group-hover:origin-center"
        />

      </div>

      {/* Text Section */}
      <div className="flex flex-col p-4 h-auto">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-1 text-sm">{description}</p>

        {/* Hover Text Section */}
        <div className="overflow-hidden max-h-0 group-hover:max-h-12 hide-scrollbar transition-all duration-300 ease-in-out">
          <Button2
            text="Learn more"
            // onClick={(e) => {
            //   e.stopPropagation(); // Prevent triggering card click
            //   handleRedirect('/caseStudies/1');
            // }}
            icon={FaArrowRight}
            isDisabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Card3;
