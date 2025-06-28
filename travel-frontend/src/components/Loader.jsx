// import React, { useEffect, useState } from 'react';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// interface LoaderProps {
//   onComplete?: () => void;
// }

// const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
//   const [showText, setShowText] = useState(false);
//   const [fadeOut, setFadeOut] = useState(false);

//   useEffect(() => {
//     const runLoader = async () => {
//       await new Promise((r) => setTimeout(r, 1500)); // wait for bus to start
//       setShowText(true); // show full glowing text
//       await new Promise((r) => setTimeout(r, 3000)); // hold with glow
//       setFadeOut(true); // start fade out
//       await new Promise((r) => setTimeout(r, 1000)); // complete fade
//       onComplete?.(); // go to main page
//     };

//     runLoader();
//   }, [onComplete]);

//   return (
//     <div
//       className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${
//         fadeOut ? 'opacity-0' : 'opacity-100'
//       }`}
//     >
//       {/* Background */}
//       <div className="absolute inset-0 bg-white z-0" />

//       {/* Loader Content */}
//       <div className="relative z-10 w-full flex flex-col justify-center items-center">
//         {/* Bus Lottie Animation */}
//         <div className="w-[300px] sm:w-[360px] md:w-[440px] lg:w-[520px] xl:w-[600px] animate-float-bus">
//           <DotLottieReact
//             src="https://lottie.host/807a502c-2c29-46ed-854a-0a12cdb1923b/ikv7FMeRRJ.lottie"
//             loop
//             autoplay
//             style={{ width: '100%', height: 'auto' }}
//           />
//         </div>

//         {/* Glowing Text */}
//         <div className="mt-6 text-center">
//           <div className="text-gray-800 font-bold drop-shadow-lg">
//             <div
//               className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-2 text-amber-800 font-mui transition-all duration-1000 transform ${
//                 showText ? 'opacity-100 scale-100 animate-title-glow animate-slide-up' : 'opacity-0 scale-75'
//               }`}
//             >
//               MEMORIES
//             </div>
//             <div
//               className={`text-sm sm:text-lg md:text-xl font-light tracking-wider text-gray-700 transition-all duration-1000 transform ${
//                 showText ? 'opacity-100 scale-100 animate-title-glow animate-slide-up' : 'opacity-0 scale-75'
//               }`}
//             >
//               PLATFORM
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loader;


import React, { useEffect, useState } from "react";
import busGif from "../assets/gallery/bus.gif";
import bgImage from "../assets/gallery/earth.JPEG";
import bgdImage from "../assets/gallery/earthdesk.JPEG";
import bgmImage from "../assets/gallery/earthbg.JPEG";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 800);
          }, 400);
          return 100;
        }
        return prev + 1;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* ---- Base Blurred Background ---- */}
      <img
        src={bgmImage}
        alt="Blurred Background"
        className="absolute inset-0 w-full h-full object-fill z-0"
      />

      {/* ---- Mobile Background Image ---- */}
      <img
        src={bgImage}
        alt="Mobile Background"
        className="absolute inset-0 w-full h-full object-fill block md:hidden z-10"
      />

      {/* ---- Desktop Background Image ---- */}
      <img
        src={bgdImage}
        alt="Desktop Background"
        className="absolute inset-0 w-full h-full object-fill hidden md:block z-10"
      />

      {/* ---------- Mobile Layout ---------- */}
      <div className="md:hidden flex items-end justify-center h-full relative z-20 pb-20 px-6">
        <div className="w-full max-w-md">
          <div className="relative w-full h-[64px] mb-1">
            <img
              src={busGif}
              alt="Bus"
              className="absolute w-[200px] h-auto transition-all duration-300 ease-linear"
              style={{
                left: `calc(${Math.max(progress - 5, 0)}% - 30px)`,
                bottom: 0,
              }}
            />
          </div>

          <div className="w-full bg-white/50 h-3 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-600 transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-white text-center text-sm font-semibold mt-2 drop-shadow-md">
            {progress}%
          </p>
        </div>
      </div>

      {/* ---------- Desktop Layout ---------- */}
      <div className="hidden md:flex items-end justify-center h-full relative z-20 pb-4 px-12">
        <div className="w-full max-w-5xl">
          <div className="relative w-full h-[64px] mb-2">
            <img
              src={busGif}
              alt="Bus"
              className="absolute w-[180px] lg:w-[220px] xl:w-[260px] 2xl:w-[300px] h-auto transition-all duration-300 ease-linear"
              style={{
                left: `calc(${Math.max(progress - 5, 0)}% - 60px)`,
                bottom: 0,
              }}
            />
          </div>

          <div className="w-full bg-white/50 h-4 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-600 transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-white text-center text-base font-semibold mt-3 drop-shadow-md">
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
