import { FC, useState } from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MobileMenu from "../Navbar/MobileMenu";
import HeroImage from "../../assets/hero-image.webp";

const Hero: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Transformations for the main element
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.2]); // Shrinks over 10% of scroll
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -50]); // Moves up over 10% of scroll
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]); // Fades out over 10% of scroll

  // Transformations for the navigation bar
  const navScale = useTransform(scrollYProgress, [0, 0.1], [0.2, 1]); // Grows over the same 10%
  const navY = useTransform(scrollYProgress, [0, 0.1], [-50, 0]); // Slides in over the same 10%
  const navOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]); // Fades in over the same 10%
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white z-50 flex gap-48 justify-center items-center overflow-hidden">
        <motion.h2
          style={{ scale: navScale, y: navY, opacity: navOpacity }}
          className="text-3xl font-lunar font-semibold text-black"
        >
          Tadaaksha
        </motion.h2>

        {/* Desktop Navigation */}
        {/* <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <NavLink href="/jewelry">HOME</NavLink>
          <NavLink href="/gifts">ABOUT</NavLink>
          <NavLink href="/collections">COLLECTION</NavLink>
          <NavLink href="/sale">COUPLE</NavLink>
          <NavLink href="/sale">CONTACT</NavLink>
        </div> */}

        {/* Mobile Menu Button */}
        <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />

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
      <div className="relative">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${HeroImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="sticky top-0 h-screen flex items-start justify-center overflow-hidden pt-8">
          <motion.h1
            style={{ scale, y, opacity }}
            className="text-6xl md:text-9xl lg:text-10xl xl:text-11xl tracking-wider font-bold font-lunar text-white pt-8"
          >
            Tadaaksha
          </motion.h1>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </div>
    </>
  );
};

export default Hero;
