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
  const [isInstagramBrowser, setIsInstagramBrowser] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    console.log("User Agent →", ua); // Debug log
    if (ua.includes("instagram") || ua.includes("ig")) {
      setIsInstagramBrowser(true);
    }
  }, []);

  if (loading) return <Loader onComplete={() => setLoading(false)} />;

  return (
    <div className="bg-white text-gray-800 relative">
      {/* 📢 Instagram-only banner */}
      {isInstagramBrowser && (
        <div className="bg-yellow-100 text-yellow-800 text-sm py-2 px-4 text-center fixed top-0 left-0 w-full z-50 shadow-md">
          📢 Some features may not work inside Instagram. Tap <strong>•••</strong> and choose <strong>"Open in Browser"</strong> for best experience.
        </div>
      )}

      {/* Main content with top padding if banner is shown */}
      <div className={isInstagramBrowser ? "pt-12" : ""}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainScrollPage />} />
          <Route path="/gallery/:busId" element={<GalleryBusPage />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;



