import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto py-20 px-5">
      <h2 className="text-2xl md:text-3xl text-center font-medium uppercase">
        Get In Touch
      </h2>
      <div className="w-14 h-[3px] bg-blue-500 mx-auto my-5"></div>
      <p className="mx-auto text-sm max-w-2xl text-gray-700 font-medium text-center">
        We thrive when coming up with innovative ideas but also understand that
        a smart concept should be supported with measurable results.
      </p>

      <div className="flex items-center justify-center mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-1 mb-5">
              <h4 className="font-medium">TOYCODERS LTD</h4>
              <p className="text-gray-600">
                Company Registration Number: 12917753
              </p>
            </div>
            <div className="space-y-1 mb-5">
              <h4 className="font-medium">Registered Office Address:</h4>
              <p className="text-gray-600">
                47 Shayer Road, Southampton, England, SO15 5JZ
              </p>
            </div>
            <div className="space-y-1 mb-5">
              <h4 className="font-medium">Working Hours:</h4>
              <p className="text-gray-600">9:00AM To 6:00PM</p>
            </div>
          </motion.div>
          <motion.div
            className="col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="p-4 border outline-none rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email*"
                  className="p-4 border outline-none rounded"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="md:col-span-2 p-4 border outline-none rounded"
                />
                <textarea
                  name=""
                  id=""
                  placeholder="Message"
                  className="md:col-span-2 p-4 pb-16 border outline-none rounded"
                ></textarea>
              </div>
              <button className="bg-blue-600 font-medium text-white px-8 py-3 rounded-xl duration-300 hover:bg-blue-800">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
