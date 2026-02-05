import { motion } from "framer-motion";

const values = [
  {
    id: "01",
    title: "Growth",
    description:
      "Our vision is to grow together as an organisation while working towards achieving individual and professional goals.",
  },
  {
    id: "02",
    title: "People",
    description:
      "Our people are the driving force behind all our achievements, and we make it a point to give it back to them.",
  },
  {
    id: "03",
    title: "Balance",
    description:
      "We value life and its intricate balance, hence ensuring all our people are well balanced in both their professional and personal roles.",
  },
];

export default function SecondSection() {
  return (
    <div className="text-white mt-20 min-h-screen bg-black">
      <div className="flex relative  h-full px-4 max-w-[1200px] mx-auto gap-20">
        
        {/* Left Sticky Section */}
        <div className="w-1/3 min-h-screen mt-14 flex items-start">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center sticky top-20 max-w-xl"
          >
            <h2 className="heading--xl font-bold">The Values We Live By</h2>
            <p className="subheading--large text-gray-400 mt-4">
              We make it a priority to keep our values up-front, anywhere and everywhere.
            </p>
            <div className="text-7xl mt-6 font-bold text-white">*</div>
          </motion.div>
        </div>

        {/* Right Scrollable Section */}
        <div className="w-2/3">
          <div className="py-14 grid gap-8 max-w-4xl">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="flex gap-6 items-start border-l-2 border-gray-600 pl-6"
              >
                <span className="text-gray-500 min-h-screen text-xl">{value.id}</span>
                <div>
                  <h3 className="heading--xl font-semibold">{value.title}</h3>
                  <p className="subheading--large text-gray-400 mt-2">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
