import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl font-bold text-gray-800 flex items-center space-x-2"
          onClick={handleScrollToTop}
        >
          <img src={`${process.env.PUBLIC_URL}/terminal.png`} alt="Logo" className="w-6 h-6" />
          <span>Priyanshu Naudiyal</span>
        </Link>

        {/* Hamburger Menu for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? (
              <span className="text-2xl font-bold">×</span>
            ) : (
              <span className="text-2xl font-bold">☰</span>
            )}
          </button>
        </div>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 text-sm text-gray-600 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-4 md:py-0 shadow md:shadow-none transition-all duration-300`}
        >
          {location.pathname === "/" && (
            <>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleAnchorClick(e, "#about")}
                  className="block py-2 md:py-0 hover:text-black"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleAnchorClick(e, "#projects")}
                  className="block py-2 md:py-0 hover:text-black"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => handleAnchorClick(e, "#experience")}
                  className="block py-2 md:py-0 hover:text-black"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleAnchorClick(e, "#testimonials")}
                  className="block py-2 md:py-0 hover:text-black"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  onClick={(e) => handleAnchorClick(e, "#resume")}
                  className="block py-2 md:py-0 hover:text-black"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleAnchorClick(e, "#contact")}
                  className="block py-2 md:py-0 hover:text-black"
                >
                  Contact
                </a>
              </li>
            </>
          )}

          <li>
            <Link to="/freelance" onClick={() => setMenuOpen(false)}>
              <button className="mt-2 md:mt-0 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition w-full md:w-auto">
                Hire Me
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
