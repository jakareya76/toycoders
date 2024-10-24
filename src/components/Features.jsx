import featureImg from "../assets/a.png";

const Features = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="w-full md:w-1/2">
            <img src={featureImg} alt="feature" className="w-full" />
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl max-w-xl font-medium">
              A Branded Game Creating Mordan & Engaging Online Experience
            </h4>
            <p className="py-5 max-w-xl text-gray-500">
              HelloSoft Ltd., a forerunner in game creation, is delivering
              branded games to increase brand engagement and keep you ahead of
              the curve in the ever-changing world of technology and business.
            </p>

            <p className="max-w-xl text-gray-500">
              In our opinion, this is a very new and creative idea for branding
              a company's product with the least investment where a company can
              show all of their items in a single game (No more multiple
              advertisements are needed for various kinds of products).
            </p>

            <h4 className="text-2xl text-zinc-900 font-medium py-5">
              We have broken this section into two parts:
            </h4>

            <ul className="list-disc ml-8 space-y-3 text-zinc-700 font-medium">
              <li>Partial reskin games</li>
              <li>Full Game Reskin</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
