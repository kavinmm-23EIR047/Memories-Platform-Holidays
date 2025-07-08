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
  const [showRedirectUI, setShowRedirectUI] = useState(false);

  useEffect(() => {
    const isInstagram = navigator.userAgent.includes("Instagram");
    if (isInstagram) {
      setShowRedirectUI(true);
    }
  }, []);

  const handleOpenInBrowser = () => {
    const androidChromeUrl = "googlechrome://memories-platform-holidays.vercel.app";
    const fallbackUrl = "https://memories-platform-holidays.vercel.app";

    // Try Chrome (Android)
    window.location.href = androidChromeUrl;

    // Fallback (iOS or other)
    setTimeout(() => {
      window.location.href = fallbackUrl;
    }, 500);
  };

  // 🔁 Show open-in-browser UI for Instagram users
  if (showRedirectUI) {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center text-white px-4 text-center">
        <h2 className="text-xl font-semibold mb-4">⚠️ Video playback is blocked in Instagram</h2>
        <p className="mb-6">To view the site properly with video, please open in your default browser.</p>
        <button
          onClick={handleOpenInBrowser}
          className="bg-white text-black px-5 py-2 rounded-full text-lg font-medium hover:bg-gray-200 transition"
        >
          🚀 Open in Browser
        </button>
      </div>
    );
  }

  // 🔄 Normal loader
  if (loading) return <Loader onComplete={() => setLoading(false)} />;

  // ✅ Main App content
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
