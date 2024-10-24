import { motion } from "framer-motion";
import featureImg from "../assets/a.png";

const Features = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center justify-center md:flex-row md:space-x-12">
          <motion.div
            className="w-full md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img src={featureImg} alt="feature" className="w-full rounded-lg" />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl md:text-3xl font-bold max-w-xl text-gray-800 mb-4">
              A Branded Game Creating Modern & Engaging Online Experience
            </h4>
            <p className="py-5 max-w-xl text-gray-600 text-sm md:text-lg">
              HelloSoft Ltd., a forerunner in game creation, is delivering
              branded games to increase brand engagement and keep you ahead of
              the curve in the ever-changing world of technology and business.
            </p>

            <p className="max-w-xl text-gray-600 text-sm md:text-lg mb-6">
              We believe this is a creative approach to branding, allowing
              companies to showcase all their products within a single game,
              eliminating the need for multiple advertisements.
            </p>

            <h4 className="text-2xl text-gray-900 font-semibold mb-5">
              We have broken this section into two parts:
            </h4>

            <ul className="list-disc ml-8 space-y-3 text-gray-700 text-lg font-medium">
              <li>Partial reskin games</li>
              <li>Full Game Reskin</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
