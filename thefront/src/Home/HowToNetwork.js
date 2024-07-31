import { FaArrowRight } from "react-icons/fa";

function HowToNetwork() {
  return (
    <div className="flex w-full h-fit items-center justify-center bg-med-blue/50 space-x-6 px-6 py-4 rounded-xl sm:mx-10">
      <div className="flex flex-col items-center justify-center text-gray-700">
        <h1 className="text-xl sm:text-4xl text-black font-bold whitespace-nowrap">How to Network</h1>
        <a className="flex items-center" href="/webapp/home">
          <span className="text-sm sm:text-lg pr-2 underline underline-offset-2">Learn More</span>
          <FaArrowRight className="w-4 h-4"/>
        </a>
      </div>
      <img
        src="/network.png"
        alt="Networking"
        className="sm:w-36 sm:h-36 w-20 h-20 object-cover"
      />
    </div>
  );
}

export default HowToNetwork;
