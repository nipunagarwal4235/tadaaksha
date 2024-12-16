import { FC } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
    >
      {children}
    </a>
  );
};

export default NavLink;
