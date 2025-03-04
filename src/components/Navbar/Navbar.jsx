import { BsRobot } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/" },
    { name: "All Images", path: "/allImages" },
    { name: "Generate", path: "/generateImage" },
  ];

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logout Successful",
          background: "#6b21a8",
          color: "#fff",
          confirmButtonColor: "#3b0764",
          showClass: {
            popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
          },
          hideClass: {
            popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
          },
        });
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <div className="fixed top-0 z-20 w-full backdrop-blur-xl bg-transparent shadow-md animate__animated animate__fadeInDown">
      <div className="container mx-auto flex items-center justify-between px-6 py-2 ">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-white text-2xl font-bold"
        >
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
        {!user && (
          <Link
            to="/login"
            className="hidden lg:inline-block relative px-6 py-2 rounded-lg text-white font-medium transition-all duration-300 border border-purple-600 backdrop-blur-md bg-transparent hover:bg-[#250038] hover:border-purple-400 hover:shadow-[0_0_10px_rgba(168,85,247,0.5)]"
          >
            Get Started
          </Link>
        )}

        {user && (
          <div className="dropdown dropdown-end hidden lg:inline-block">
            <button
              className="avatar avatar-online cursor-pointer"
              tabIndex={0}
            >
              <div className="w-14 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  alt="User Avatar"
                />
              </div>
            </button>

            <ul
              className="dropdown-content menu w-52 rounded-box bg-base-100 shadow-sm mt-3 p-2"
              tabIndex={0}
            >
              <li>
                <Link
                  to={"profile"}
                  className="hidden lg:inline-block px-4 py-2 rounded-lg text-white transition-all hover:bg-purple-500/20"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <button
                  className="hidden lg:inline-block px-4 py-2 rounded-lg text-white transition-all hover:bg-purple-500/20"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}

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
          {!user && (
            <Link
              to="/login"
              className="block text-center mt-4 border-2 border-purple-500 px-4 py-2 rounded-lg text-white transition-all hover:bg-purple-500/20"
              onClick={() => setMenuOpen(false)}
            >
              Get Start
            </Link>
          )}

          {user && (
            <Link
              className={`block px-4 py-3 text-white text-lg transition-all relative
              after:absolute after:left-0 after:bottom-1 after:h-[2px] after:bg-purple-400 after:w-0 after:transition-all after:duration-300
              before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[90%] before:h-[70%] before:bg-purple-500/10 before:rounded-lg before:blur-sm before:opacity-0 before:transition-all before:duration-300
              ${
                location.pathname === "profile"
                  ? "text-purple-400 before:opacity-100 after:w-full"
                  : "hover:text-purple-400 hover:before:opacity-100 hover:after:w-full"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              My Profile
            </Link>
          )}
          {user && (
            <button
              className="block text-center mt-4 border-2 border-purple-500 px-4 py-2 rounded-lg text-white transition-all hover:bg-purple-500/20"
              onClick={handleLogOut}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
