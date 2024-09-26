import { useState } from "react";
import { headerLogo } from "../assets/images/index";
import { hamburger, xMark } from "../assets/icons/index";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-slate-700">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        
        {/* Desktop Menu */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Toggle Button */}
        <div
          className="hidden cursor-pointer hover:scale-110 max-lg:block"
          onClick={handleMenuToggle}
        >
          <img
            src={isMenuOpen ? xMark : hamburger}
            alt={isMenuOpen ? "close_menu" : "hamburger_menu"}
            width={25}
            height={25}
          />
        </div>
        
        {/* Mobile Menu with Smooth Transition */}
        <ul
          className={`absolute top-20 left-0 w-full bg-slate-700 flex flex-col items-center gap-6 py-8 lg:hidden z-10
          transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.label} className="hover:underline">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-300"
                onClick={() => setIsMenuOpen(false)} 
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
