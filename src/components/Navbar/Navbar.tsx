import { FC, useState } from "react";
import Logo from "../../assets/logo.png";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={Logo} className=" text-purple-600" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <NavLink href="/jewelry">HOME</NavLink>
            <NavLink href="/gifts">ABOUT</NavLink>
            <NavLink href="/collections">COLLECTION</NavLink>
            <NavLink href="/sale">COUPLE</NavLink>
            <NavLink href="/sale">CONTACT</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } border-t border-gray-200`}
      >
        <div className="pt-2 pb-3 space-y-1 px-4">
          <a
            href="/jewelry"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
          >
            HOME
          </a>
          <a
            href="/gifts"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
          >
            ABOUT
          </a>
          <a
            href="/collections"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
          >
            COLLECTION
          </a>
          <a
            href="/sale"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
          >
            COUPLE
          </a>
          <a
            href="/sale"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
