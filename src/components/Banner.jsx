import bannerBg from "../assets/bg.jpg";
import heroImg from "../assets/b.png";

const Banner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bannerBg})` }}
      className="w-full py-16 md:py-5 bg-cover -mt-28 relative"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000c7] z-10"></div>

      <div className="container mx-auto relative z-30 px-5">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col-reverse mt-28 items-center justify-center gap-10 md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-center md:text-left font-bold text-white">
                <span className="text-blue-500">Enter a World of </span>{" "}
                Limitless Play
              </h2>
              <p className="text-white my-5 max-w-sm text-center md:text-left">
                Discover a universe where gaming meets innovation. Play,
                connect, and experience like never before.
              </p>
              <button className="px-8 py-4 text-xl font-medium text-white bg-blue-600 rounded-xl duration-200 hover:bg-blue-700">
                Get Started
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={heroImg}
                alt="hero-img"
                className="w-full animate-slow-short-bounce"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
