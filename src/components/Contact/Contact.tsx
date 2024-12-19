import { FC } from "react";
import { Mail, Phone, Instagram } from "lucide-react";

const Contact: FC = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center font-lunar mb-8">
          Contact
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          We would love to be a part of your special day. Visit our studio or
          get in touch with us to start your bridal journey.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <a
            href="mailto:tadaaksha@gmail.com"
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <Mail className="w-5 h-5 mr-2" />
            tadaaksha@gmail.com
          </a>
          <a
            href="tel:+919704131199"
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <Phone className="w-5 h-5 mr-2" />
            +91-9704131199
          </a>
          <a
            href="https://www.instagram.com/tadaaksha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <Instagram className="w-5 h-5 mr-2" />
            @tadaaksha
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
