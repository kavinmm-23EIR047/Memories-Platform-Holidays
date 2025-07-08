import { FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";
const bgImage = "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1750562876/logo_bktbe6.jpg";
import logo from "../assets/logos/logo.png";

const Footer = () => {
  return (
    <footer
      className="relative text-white pt-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Main Content */}
      <div className="relative z-10 px-6 py-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm items-start">
        
        {/* Logo and About */}
        <div className="text-center md:text-left">
          <img
            src={logo}
            alt="Memories Platform Logo"
            className="w-44 sm:w-48 md:w-52 lg:w-56 xl:w-64 -mt-20  mx-auto md:mx-0 drop-shadow-lg"
          />
          <p className="text-gray-300 leading-relaxed font-kui -mt-5">
            Travel beyond boundaries with Memories Platform. Discover unforgettable holiday experiences crafted just for you.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3 text-yellow-400 font-kui -mt-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 -mt-">
            <li><a href="#about" className="hover:text-yellow-300 transition font-lui">About Us</a></li>
            <li><a href="#services" className="hover:text-yellow-300 transition font-lui">Services</a></li>
            <li><a href="#reviews" className="hover:text-yellow-300 transition font-lui">Reviews</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 transition font-lui">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3 text-yellow-400 font-kui -mt-4">Contact Us</h3>
          <p className="text-gray-300 mb-2 font-lui">
            Phone: <a href="tel:+919629932787" className="hover:text-yellow-300 transition">+91 96299 32787</a>
          </p>
          <p className="text-gray-300 mb-4 font-lui">
            Email: <a href="mailto:memoriesplatform@gmail.com" className="hover:text-yellow-300 transition">memoriesplatform@gmail.com</a>
          </p>
          <div className="flex justify-center md:justify-start gap-5 text-2xl mt-2">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/memoriesplatform_holidays?igsh=aG5iaWFuOHNjZWR1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-full hover:scale-110 transition duration-300 text-xl"
            >
              <FaInstagram />
            </a>

            {/* Threads */}
            <a
              href="https://www.threads.net/@memoriesplatform_holidays"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-2 rounded-full hover:scale-110 transition duration-300"
            >
              <img
                src="https://toppng.com/uploads/preview/instagram-threads-logo-white-logo-icon-hd-png-11688671430stcpk0vzgp.png"
                alt="Threads"
                className="w-5 h-5"
              />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9629932787"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-green-500 p-2 rounded-full hover:scale-110 transition duration-300 text-xl"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="relative z-10 text-center text-gray-400 text-xs mt-10 border-t border-yellow-900 pt-4 px-4 font-kui">
        &copy; {new Date().getFullYear()} Memories Platform. All rights reserved. Developed by{" "}
       <a 
  href="https://kavinsportfolio-6c0p.onrender.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-yellow-300 font-medium font-kui"
>
  AK WebFlair Technologies
</a>

      </div>
    </footer>
  );
};

export default Footer;
