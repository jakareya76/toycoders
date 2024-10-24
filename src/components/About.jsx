import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImg from "../assets/2.png";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center gap-5 md:flex-row px-5">
          <motion.div
            className="w-full md:w-1/2 md:mt-20"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 my-5">
              Toy Coders Ltd.
            </h2>
            <p className="max-w-2xl text-justify text-gray-500">
              Toy Coders Ltd. is a game development company and web game
              publisher that also provides web development, application
              development, digital marketing, software development, and other
              ITES-related services. We believe that technology can be used to
              make the world a better place, and we are committed to using our
              skills to make a positive impact.
            </p>

            <h4 className="text-xl font-semibold mt-8">
              Here are some of our key achievements:
            </h4>
            <ul className="list-disc ml-5 my-4 space-y-3 text-gray-600 font-medium">
              <li>
                We have developed and published over 400 games, which have been
                played by millions of users worldwide.
              </li>
              <li>
                We have a team of experienced professionals with a proven track
                record of success.
              </li>
              <li>We are committed to providing excellent customer service.</li>
            </ul>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <img src={aboutImg} alt="about" className="w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
