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
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("instagram") || ua.includes("ig")) {
      setIsInstagramBrowser(true);
    }
  }, []);

  if (loading) return <Loader onComplete={() => setLoading(false)} />;

  return (
    <div className="bg-white text-gray-800 relative">
      {/* 📢 Full-screen Alert for Instagram Browser */}
      {isInstagramBrowser && showAlert && (
        <div className="fixed inset-0 z-[9999] bg-[#330000] text-white flex items-center justify-center text-center px-6">
          <div>
            <h2 className="text-2xl font-bold mb-3">🚫 Limited in Instagram</h2>
            <p className="mb-4 text-lg">
              Please tap <strong>•••</strong> and select <strong>"Open in Browser"</strong> to enjoy the full experience (video, buttons, sound).
            </p>
            <p className="text-sm opacity-70">(Instagram’s in-app browser blocks some features)</p>
            <button
              onClick={() => setShowAlert(false)}
              className="mt-5 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition"
            >
              Close and Continue Anyway
            </button>
          </div>
        </div>
      )}

      {/* Main App UI */}
      <div>
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
