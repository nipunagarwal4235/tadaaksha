import { FC } from "react";
import { ChevronDown } from "lucide-react";

const HeroContent: FC = () => {
  return (
    <div className="text-center text-white px-4">
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-light tracking-wider mb-8">
        TADAAKSHA
      </h1>
      <button className="bg-white text-black px-8 py-3 font-medium tracking-wide hover:bg-gray-100 transition-colors duration-300">
        EXPLORE MORE
      </button>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </div>
  );
};

export default HeroContent;
