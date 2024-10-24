import { motion } from "framer-motion";
import { servicesData } from "../data/index";

const Services = () => {
  return (
    <section className="container mx-auto py-20">
      <h2 className="text-3xl text-center font-medium uppercase">
        Our Services
      </h2>
      <div className="w-14 h-[3px] bg-blue-500 mx-auto my-5"></div>
      <p className="mx-auto max-w-2xl text-gray-700 font-medium text-center md:text-xl">
        Expert Services for Software and Game Development, Customized to Your
        Vision and Needs. Let's Build Together
      </p>

      <div className="flex items-center justify-center mt-16 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center justify-center gap-4 shadow p-5 rounded-lg transition-transform duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-28 bg-blue-50 p-5 rounded-full"
              />
              <h2 className="text-xl font-medium">{service.title}</h2>
              <p className="max-w-sm text-sm text-center text-gray-500">
                {service.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
