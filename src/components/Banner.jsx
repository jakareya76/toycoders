import bannerBg from "../assets/bg.jpg";
import heroImg from "../assets/b.png";

const Banner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bannerBg})` }}
      className="w-full h-screen bg-cover -mt-28 relative"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000c7] z-10"></div>

      <div className="container mx-auto relative z-30">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex flex-col mt-28 items-center justify-center gap-10 md:flex-row">
            <div className="w-full md:w-1/2">
              <h2 className="text-7xl font-bold text-white">
                <span className="text-blue-500">Enter a World of </span>{" "}
                Limitless Play
              </h2>
              <p className="text-white my-5">
                Discover a universe where gaming meets innovation. <br /> Play,
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
