import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const videoList = [
  "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1719050000/home3_a2tmdc.mp4",
  "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1719050100/home1_imx7y3.mp4",
  "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1719050200/home5_yqxdji.mp4",
  "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1751646159/WhatsApp_Video_2025-07-04_at_10.15.06_AM_mm6lkn.mp4"
];

const Home = () => {
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % videoList.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="h-[90vh] relative overflow-hidden flex flex-col justify-center items-center text-white mt-10"
      style={{ backgroundColor: "#691303" }}
    >
      {/* 🎥 Video Background */}
      <AnimatePresence mode="wait">
        <motion.video
          key={videoIndex}
          src={videoList[videoIndex]}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* 🌓 Overlay Filter */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/5 to-transparent z-0" />

      {/* 🌟 Foreground Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-pai font-normal text-[#f1c709] drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
        >
          Memories{" "}
          <span className="font-pai font-normal text-[#ffffff] drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">
            Platform
          </span>
        </motion.h1>

        {/* 🌟 Slogan - Collect Memories */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-2xl md:text-3xl font-bold text-center px-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-yellow-300 drop-shadow-lg"
          style={{
            textShadow: '0 0 8px rgba(255,255,255,0.6), 0 0 16px rgba(241,199,9,0.8)',
            animation: 'pulse-glow 2.5s ease-in-out infinite'
          }}
        >
          “Collect Memories, Not Things.”
        </motion.p>

        {/* 🌍 Leading Trip Planner - Glow Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-2xl md:text-3xl font-extrabold text-center px-6 text-[#f1c709] font-kui drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
        >
          Leading Trip Planner
        </motion.p>

        {/* 🌍 Explore All States */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6 text-lg md:text-xl text-[#f1c709] font-semibold font-mai drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]"
        >
          Explore All States
        </motion.div>

{/* 📄 Brochure Download */}
<motion.button
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.9 }}
  onClick={() => {
    const link1 = document.createElement("a");
    link1.href = "/brochure.pdf";
    link1.download = "brochure.pdf";
    document.body.appendChild(link1);
    link1.click();
    document.body.removeChild(link1);

    const link2 = document.createElement("a");
    link2.href = "/brochure1.pdf";
    link2.download = "brochure1.pdf";
    document.body.appendChild(link2);
    link2.click();
    document.body.removeChild(link2);
  }}
  className="mt-8 inline-flex items-center gap-2 px-6 py-2 text-lg md:text-xl font-bold text-[#1a1200] bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
>
  <FiDownload className="text-xl" />
  Download Brochure
</motion.button>



        {/* 🔗 Social Icons */}
        <div className="mt-6 flex gap-6 text-3xl justify-center">
          <a
            href="https://www.instagram.com/memoriesplatform_holidays?igsh=aG5iaWFuOHNjZWR1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-full hover:scale-110 transition duration-300 text-xl"
          >
            <FaInstagram />
          </a>

          {/* Threads */}
          <a
            href="https://www.threads.net/@memoriesplatform_holidays"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
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
            aria-label="WhatsApp"
            className="text-white bg-green-500 p-2 rounded-full hover:scale-110 transition duration-300 text-xl"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

