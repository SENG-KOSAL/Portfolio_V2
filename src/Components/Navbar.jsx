import React, { useState } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [active, setActive] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["Home", "About", "Project", "Contact"];

  const handleClick = (item) => {
    setActive(item);
    setMenuOpen(false); // Close menu on click (for mobile)
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center items-center p-4 text-center">
      <div className="backdrop-blur-md bg-black/50 rounded-full px-6 py-2 text-white">
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <NavLink
              key={item}
              smooth
              to={`/#${item.toLowerCase()}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === item
                  ? "bg-white text-black shadow-lg scale-105 hover:scale-110"
                  : "hover:text-white hover:scale-105"
              }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/80 p-4 flex flex-col items-center space-y-4 md:hidden">
          {menuItems.map((item) => (
            <NavLink
              key={item}
              smooth
              to={`/#${item.toLowerCase()}`}
              className="text-white text-lg font-medium py-2"
              onClick={() => handleClick(item)}
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
