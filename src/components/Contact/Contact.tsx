import { FC } from "react";

import SocialLinks from "./SocialLinks";

const Contact: FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-4xl font-light tracking-wider text-gray-900">
              GET IN TOUCH
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <iframe
              src="https://app.youform.com/forms/qfdlc9mc"
              loading="lazy"
              width="100%"
              height="700"
            ></iframe>
          </div>
          <div className="lg:col-span-1">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
