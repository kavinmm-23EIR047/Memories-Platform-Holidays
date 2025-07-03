import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../assets/logos/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Buses", href: "gallery" },
    { name: "Reviews", href: "reviews" },
    { name: "Contact", href: "contact" },
  ];

  const handleNavClick = (href) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${href}`;
    } else {
      scrollToSection(href);
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#691303] shadow-[0_0_10px_rgba(241,199,9,0.4)] border-b border-[#f1c70950] font-montserrat">
      <div className="flex justify-between items-center h-28 px-6 max-w-7xl mx-auto">
        {/* Desktop Logo */}
        <div className="hidden md:flex items-center h-full transition-transform duration-300 hover:scale-105">
          <img src={logo} alt="Logo" className="h-24 object-contain" />
        </div>

{/* Mobile Logo */}
<div className="flex md:hidden justify-center w-full absolute top-1 left-1/2 transform -translate-x-1/2 px-4 z-50">
  <div className="max-w-[90vw]">
    <img
      src={logo}
      alt="Logo"
      className="h-24 w-auto object-contain mx-auto"
    />
  </div>
</div>



        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-50 relative">
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-[#f1c709] text-4xl font-bold transition-transform duration-300 ease-in-out transform hover:scale-110"
  >
    <span
      className={`inline-block transition-all duration-500 ease-in-out ${
        menuOpen ? "rotate-180 scale-110" : "rotate-0"
      }`}
    >
      {menuOpen ? "✕" : "☰"}
    </span>
  </button>
</div>


        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-[#f1c709] text-base lg:text-lg items-center font-kui">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="relative group px-2 py-1 transition duration-300 ease-in-out"
              >
                <span className="group-hover:text-white transition">{link.name}</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </button>
            </li>
          ))}
          <li>
            <RouterLink
              to="/feedback"
              className="text-[#a7a3a0] hover:text-white transition-colors duration-300"
            >
              Feedback
            </RouterLink>
          </li>
        </ul>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#691303] backdrop-blur-md transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } z-40 flex flex-col justify-between pt-28 pb-10`}
      >
        <ul className="flex flex-col items-start pl-8 gap-8 text-lg text-[#f1c709] font-semibold tracking-wide font-kui">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="hover:text-white transition duration-300"
              >
                {link.name}
              </button>
            </li>
          ))}
          <li>
            <RouterLink
              to="/feedback"
              onClick={() => setMenuOpen(false)}
              className="text-[#a7a3a0] hover:text-white transition duration-300"
            >
              Feedback
            </RouterLink>
          </li>
        </ul>

        <div className="text-center px-6 mt-12">
          <p className="text-gray-300 text-sm mb-4">
            © 2025 Memories Platform. All rights reserved.
          </p>
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="h-20 object-contain" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
