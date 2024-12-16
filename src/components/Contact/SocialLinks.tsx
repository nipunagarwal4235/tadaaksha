import { FC } from "react";
import { Linkedin, Instagram, Youtube } from "lucide-react";

const SocialLinks: FC = () => {
  return (
    <div className="space-y-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">SOCIALS</h3>
      <div className="space-y-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Instagram className="w-5 h-5" />
          <span>Instagram</span>
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Youtube className="w-5 h-5" />
          <span>YouTube</span>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
