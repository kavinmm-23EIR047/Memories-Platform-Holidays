// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import MainScrollPage from "./components/MainScrollPage";
// import GalleryBusPage from "./components/GalleryBusPage";
// import Feedback from "./components/Feedback";
// import Loader from "./components/Loader.jsx";
// import { useState } from "react";
// import "./index.css";

// function App() {
//   const [loading, setLoading] = useState(true);

//   if (loading) return <Loader onComplete={() => setLoading(false)} />;

//   return (
//     <div className="bg-white text-gray-800">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<MainScrollPage />} />
//         <Route path="/gallery/:busId" element={<GalleryBusPage />} />
//         <Route path="/feedback" element={<Feedback />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainScrollPage from "./components/MainScrollPage";
import GalleryBusPage from "./components/GalleryBusPage";
import Feedback from "./components/Feedback";
import Loader from "./components/Loader.jsx";
import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // 📱 Instagram Browser Detection + Redirect
  useEffect(() => {
    const isInstagram = navigator.userAgent.includes("Instagram");

    if (isInstagram) {
      setIsRedirecting(true);

      const androidChromeUrl = "googlechrome://memories-platform-holidays.vercel.app";
      const normalUrl = "https://memories-platform-holidays.vercel.app";

      // Try Chrome deep link (Android)
      window.location.href = androidChromeUrl;

      // Fallback (iOS or failed attempt)
      setTimeout(() => {
        window.location.href = normalUrl;
      }, 1000);
    }
  }, []);

  // 🎯 Show redirect message if being redirected
  if (isRedirecting) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white text-lg animate-pulse">
        🚀 Opening in your browser for the best video experience...
      </div>
    );
  }

  // 🌀 Show loader initially
  if (loading) return <Loader onComplete={() => setLoading(false)} />;

  // ✅ Main app content
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainScrollPage />} />
        <Route path="/gallery/:busId" element={<GalleryBusPage />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
