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
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("instagram") || ua.includes("ig")) {
      setIsInstagramBrowser(true);
    }
  }, []);

  if (loading) return <Loader onComplete={() => setLoading(false)} />;

  // Determine top padding when banner is visible
  const topPadding = isInstagramBrowser && showAlert ? "pt-14 md:pt-12" : "";

  return (
    <div className="bg-white text-gray-800 relative">
      {/* ✅ Top Fixed Banner for Instagram Browsers */}
      {isInstagramBrowser && showAlert && (
        <div className="fixed top-0 left-0 w-full z-[9999] bg-[#330000] text-white px-4 py-2 shadow-md flex items-center justify-between text-sm md:text-base">
         <p className="flex-1">
  ⚠️ For the best experience, please open this page in your browser. Tap <strong>•••</strong> and select <strong>"Open in Browser"</strong>.
</p>

          <button
            onClick={() => setShowAlert(false)}
            className="ml-4 text-white text-xl font-bold hover:text-yellow-400 transition"
          >
            ×
          </button>
        </div>
      )}

      {/* ✅ Main Layout with conditional top padding */}
      <div className={`${topPadding}`}>
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

