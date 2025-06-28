import { useRef, useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Services from "./Services";
import Reviews from "./Reviews";
import Contact from "./Contact";

const MainScrollPage = () => {
  const sectionsRef = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const scrollTo = (index) => {
    if (index >= 0 && index < sectionsRef.current.length) {
      sectionsRef.current[index]?.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const index = sectionsRef.current.findIndex(
        (section) =>
          section &&
          section.getBoundingClientRect().top >= 0 &&
          section.getBoundingClientRect().top < window.innerHeight / 2
      );
      if (index !== -1) setCurrentSection(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* 🔽 Page Sections */}
      {[
        { id: "home", Component: Home },
        { id: "about", Component: About },
        { id: "services", Component: Services },
        { id: "gallery", Component: Gallery },
        { id: "reviews", Component: Reviews },
        { id: "contact", Component: Contact },
      ].map(({ id, Component }, i) => (
        <section
          key={id}
          ref={(el) => (sectionsRef.current[i] = el)}
          id={id}
          className="min-h-screen scroll-mt-24"
        >
          <Component />
        </section>
      ))}

      {/* 🔼 Scroll Arrows */}
      <div className="fixed bottom-24 right-4 flex flex-col gap-2 z-50 sm:right-3">
        {currentSection > 0 && (
          <button
            onClick={() => scrollTo(currentSection - 1)}
            className="bg-white border-4 border-yellow-400 text-yellow-400 w-12 h-12 sm:w-9 sm:h-9 text-2xl sm:text-xl rounded-full flex items-center justify-center font-extrabold shadow-md hover:shadow-lg transition"
            title="Scroll Up"
          >
            ↑
          </button>
        )}

        {currentSection < sectionsRef.current.length - 1 && (
          <button
            onClick={() => scrollTo(currentSection + 1)}
            className="bg-white border-4 border-yellow-400 text-yellow-400 w-12 h-12 sm:w-9 sm:h-9 text-2xl sm:text-xl rounded-full flex items-center justify-center font-extrabold shadow-md hover:shadow-lg transition"
            title="Scroll Down"
          >
            ↓
          </button>
        )}
      </div>

      {/* 📞 Call Now Button */}
      <a
        href="tel:9629932787"
        title="Call: 9629932787"
        className="fixed bottom-4 right-4 sm:right-3 bg-yellow-400 hover:bg-yellow-500 text-white rounded-full p-4 sm:p-3 shadow-lg z-[9999] transition-all duration-300 group"
      >
        <FaPhoneAlt className="text-xl sm:text-lg group-hover:scale-110 transition-transform duration-300" />
      </a>

      {/* 📩 Optional Modal for Enquiry */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-2xl w-[90%] sm:w-[80%] md:max-w-xl relative animate-fade-in max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-lg font-bold text-gray-500 hover:text-red-500"
              onClick={() => setIsEnquiryOpen(false)}
            >
              ×
            </button>
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainScrollPage;
