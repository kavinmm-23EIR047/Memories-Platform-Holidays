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
  const [showAlert, setShowAlert] = useState(true); // Controls banner visibility

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("instagram") || ua.includes("ig")) {
      setIsInstagramBrowser(true);
    }
  }, []);

  if (loading) return <Loader onComplete={() => setLoading(false)} />;

  return (
    <div className="bg-white text-gray-800 relative">
      {/* 📢 Instagram-only Alert Banner */}
      {isInstagramBrowser && showAlert && (
        <div className="fixed top-0 left-0 w-full z-50 bg-yellow-100 text-yellow-900 px-4 py-3 shadow-md flex items-center justify-between">
          <p className="text-sm">
            📢 This site may not work fully inside Instagram. Tap <strong>•••</strong> and select <strong>"Open in Browser"</strong> for full experience.
          </p>
          <button
            onClick={() => setShowAlert(false)}
            className="text-yellow-900 font-bold text-xl ml-4"
          >
            ×
          </button>
        </div>
      )}

      {/* Add padding if alert is shown */}
      <div className={isInstagramBrowser && showAlert ? "pt-14" : ""}>
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




