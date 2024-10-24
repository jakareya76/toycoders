import bannerBg from "../assets/banner.jpeg";

const Banner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bannerBg})` }}
      className="w-full h-screen bg-cover -mt-28 relative"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000c7] z-10"></div>

      <div className="container mx-auto relative z-30">
        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="text-5xl font-bold text-white">Hello World</h2>
          <p className="text-white max-w-2xl text-center mx-auto my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            mollitia explicabo quasi quis dolore! Illum, natus quos magni sed
            possimus quaerat delectus aliquid exercitationem
          </p>
          <button className="px-8 py-4 text-white bg-blue-500 rounded-xl">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
