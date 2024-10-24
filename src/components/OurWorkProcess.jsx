import { IoPencilOutline } from "react-icons/io5";
import { workProcessData } from "../data";
import { PiQuotesLight } from "react-icons/pi";
import { GoGoal } from "react-icons/go";
import { motion } from "framer-motion";

const renderIcon = (iconName) => {
  switch (iconName) {
    case "pencil":
      return (
        <div className="p-5 bg-blue-100 text-blue-500 rounded-full shadow-md">
          <IoPencilOutline size={30} />
        </div>
      );
    case "quote":
      return (
        <div className="p-5 bg-green-100 text-green-500 rounded-full shadow-md">
          <PiQuotesLight size={30} />
        </div>
      );
    case "goal":
      return (
        <div className="p-5 bg-purple-100 text-purple-500 rounded-full shadow-md">
          <GoGoal size={30} />
        </div>
      );
    default:
      return null;
  }
};

const OurWorkProcess = () => {
  return (
    <section className="container mx-auto py-20 px-4">
      <h2 className="text-2xl md:text-3xl text-center font-bold uppercase text-gray-800">
        Our Work Process
      </h2>
      <div className="w-20 h-[3px] bg-blue-500 mx-auto my-5"></div>
      <p className="mx-auto max-w-2xl text-gray-600 font-medium text-center md:text-lg mb-12">
        We will be with you every step of the way to provide support and
        guidance throughout the process.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {workProcessData.map((work, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center border py-8 px-6 rounded-xl transition transform duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-3 bg-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            {renderIcon(work.icon)}
            <h3 className="text-xl my-4 font-semibold text-gray-700">
              {work.title}
            </h3>
            <p className="text-center text-gray-500 text-sm max-w-sm">
              {work.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurWorkProcess;
