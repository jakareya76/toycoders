import { IoPencilOutline } from "react-icons/io5";
import { workProcessData } from "../data";
import { PiQuotesLight } from "react-icons/pi";
import { GoGoal } from "react-icons/go";

const renderIcon = (iconName) => {
  switch (iconName) {
    case "pencil":
      return (
        <div className="p-5 rounded-full border">
          <IoPencilOutline size={30} />
        </div>
      );
    case "quote":
      return (
        <div className="p-5 rounded-full border">
          <PiQuotesLight size={30} />
        </div>
      );
    case "goal":
      return (
        <div className="p-5 rounded-full border">
          <GoGoal size={30} />
        </div>
      );
    default:
      return null;
  }
};

const OurWorkProcess = () => {
  return (
    <section className="container mx-auto py-20">
      <h2 className="text-3xl text-center font-medium uppercase">
        Work Process
      </h2>
      <div className="w-14 h-[3px] bg-blue-500 mx-auto my-5"></div>
      <p className="mx-auto max-w-2xl text-gray-600 font-medium text-center text-xl">
        We will also be available to provide you with support throughout the
        process.
      </p>

      <div className="flex items-center justify-center mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workProcessData.map((work, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col items-center border-b-2 border py-8 cursor-pointer px-5 rounded-xl duration-200 hover:border-b-4 hover:border-b-blue-600"
              >
                {renderIcon(work.icon)}
                <h3 className="text-xl my-3 mt-5 font-medium">{work.title}</h3>
                <p className="text-sm text-center max-w-sm">{work.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurWorkProcess;
