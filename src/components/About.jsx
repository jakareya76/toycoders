import aboutImg from "../assets/2.png";

const About = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center gap-5 md:flex-row">
          <div className="mt-20">
            <h2 className="text-5xl font-bold text-blue-500 my-5">
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
                Played by millions of users worldwide.
              </li>
              <li>
                We have a team of experienced professionals with a proven track
                record of success.
              </li>
              <li>We are committed to providing excellent customer service.</li>
            </ul>
          </div>
          <div>
            <img src={aboutImg} alt="about" className="md:max-w-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
