import { BsRobot } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "All Images", path: "/tools" },
    { name: "Generate", path: "/generateImage" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "How to use", path: "/how-to-use" },
  ];

  return (
    <div className="fixed top-0 z-20 w-full backdrop-blur-xl bg-transparent shadow-md bgtra">
      <div className="container mx-auto flex items-center justify-between px-6 py-2 ">
        {/* Logo */}
        <Link to="/" className="flex items-center text-white text-2xl font-bold">
          <BsRobot className="text-purple-500 mr-2" />
          Abryon<span className="text-purple-500">ix</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 border border-purple-900 p-2 rounded-full px-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-6 py-3 text-white text-md font-medium transition-all duration-300 
                after:absolute after:left-0 after:bottom-1 after:h-[2px] after:bg-purple-400 after:w-0 after:transition-all after:duration-300 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[90%] before:h-[70%] before:bg-purple-500/10 before:rounded-lg before:blur-md before:opacity-0 before:transition-all before:duration-300
                ${
                  location.pathname === link.path
                    ? "text-purple-400 before:opacity-100 after:w-full"
                    : "hover:text-purple-400 hover:before:opacity-100 hover:after:w-full"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Get Start Button */}
        <Link
          to="/login"
          className="hidden lg:inline-block border-2 border-purple-500 px-4 py-2 rounded-lg text-white transition-all hover:bg-purple-500/20"
        >
          Get Start
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl p-4 shadow-md">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 text-white text-lg transition-all relative
                after:absolute after:left-0 after:bottom-1 after:h-[2px] after:bg-purple-400 after:w-0 after:transition-all after:duration-300
                before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[90%] before:h-[70%] before:bg-purple-500/10 before:rounded-lg before:blur-sm before:opacity-0 before:transition-all before:duration-300
                ${
                  location.pathname === link.path
                    ? "text-purple-400 before:opacity-100 after:w-full"
                    : "hover:text-purple-400 hover:before:opacity-100 hover:after:w-full"
                }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="block text-center mt-4 border-2 border-purple-500 px-4 py-2 rounded-lg text-white transition-all hover:bg-purple-500/20"
            onClick={() => setMenuOpen(false)}
          >
            Get Start
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
