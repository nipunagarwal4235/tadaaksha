import { FC } from "react";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  );
};

export default MobileMenu;
