// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaPlaneDeparture,
//   FaBus,
//   FaHotel,
//   FaUtensils,
//   FaCar,
//   FaTrain,
// } from "react-icons/fa";

// const icons = [
//   FaPlaneDeparture,
//   FaBus,
//   FaHotel,
//   FaUtensils,
//   FaCar,
//   FaTrain,
// ];

// const Loader = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % icons.length);
//     }, 900); // Faster switch (short delay)
//     return () => clearInterval(timer);
//   }, []);

//   const CurrentIcon = icons[index];

//   return (
//     <div className="h-screen w-full flex flex-col items-center justify-center bg-white relative overflow-hidden">
//       {/* Circular Gradient Background with Jelly Animation */}
//       <motion.div
//         className="w-40 h-40 rounded-full overflow-hidden relative flex items-center justify-center"
//         style={{
//           backgroundImage: "linear-gradient(135deg, #f1c709, #b16611)",
//           boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
//         }}
//         animate={{
//           scale: [1, 1.1, 0.95, 1.05, 1],
//         }}
//         transition={{
//           duration: 1.2,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: 100, opacity: 0 }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="absolute"
//           >
//             <CurrentIcon style={{ fontSize: "48px", color: "#ffffff" }} />
//           </motion.div>
//         </AnimatePresence>
//       </motion.div>

//       {/* Static Branding Text */}
//       <motion.div
//         className="mt-8 text-[#99837e] text-xl font-semibold tracking-wide"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//       >
//         MEMORIES PLATFORM
//       </motion.div>

//       {/* Stylish Loading Animation */}
//       <div className="absolute bottom-10 text-[#99837e] text-lg font-medium flex gap-1">
//         <span>Loading</span>
//         <motion.span
//           animate={{ opacity: [0.3, 1, 0.3] }}
//           transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
//         >
//           .
//         </motion.span>
//         <motion.span
//           animate={{ opacity: [0.3, 1, 0.3] }}
//           transition={{ repeat: Infinity, duration: 1, delay: 0.2, ease: "easeInOut" }}
//         >
//           .
//         </motion.span>
//         <motion.span
//           animate={{ opacity: [0.3, 1, 0.3] }}
//           transition={{ repeat: Infinity, duration: 1, delay: 0.4, ease: "easeInOut" }}
//         >
//           .
//         </motion.span>
//       </div>
//     </div>
//   );
// };

// export default Loader;
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import busGif from "../assets/gallery/bus.gif";

const Loader = ({ onComplete }) => {
  const [phase, setPhase] = useState("bus");

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("title"), 3000);
    const timer2 = setTimeout(() => {
      setPhase("done");
      if (onComplete) onComplete();
    }, 5200); // 2.2s for title + dots
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#f1c709] relative overflow-hidden transition-opacity duration-1000">
      <AnimatePresence mode="wait">
        {phase === "bus" && (
          <motion.img
            key="bus"
            src={busGif}
            alt="Bus loading"
            className="w-156 md:w-172 lg:w-196 h-auto"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
          />
        )}

        {phase === "title" && (
          <motion.div
            key="title"
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-[28px] sm:text-[32px] md:text-[42px] lg:text-[56px] font-extrabold tracking-wider text-center px-4">
              <span className="font-pai text-[#691303]">MEMORIES</span>{" "}
              <span className="font-pai text-white">PLATFORM</span>
            </h1>

            {/* Loading Dots */}
            <div className="flex gap-1 mt-4">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#691303]"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Loader;
