import { FC } from "react";
import AboutContent from "./AboutContent";

const About: FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Section Title */}
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-4xl font-light tracking-wider text-gray-900">
              HOW & ABOUT
            </h2>
          </div>

          <AboutContent />
        </div>
      </div>
    </section>
  );
};

export default About;
