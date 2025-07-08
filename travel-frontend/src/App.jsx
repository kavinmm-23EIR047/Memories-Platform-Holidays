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
    const ua = navigator.userAgent || "";
    if (ua.includes("Instagram")) {
      setIsInstagramBrowser(true);
    }
  }, []);

  if (loading) return <Loader onComplete={() => setLoading(false)} />;

  return (
    <div className="bg-white text-gray-800 relative">
      {/* 📱 Banner only in Instagram browser */}
      {isInstagramBrowser && (
        <div className="bg-yellow-300 text-black text-sm py-2 px-4 text-center fixed top-0 left-0 w-full z-50 shadow-md">
          ⚠️ For full video experience, tap <strong>•••</strong> and choose <strong>"Open in Browser"</strong>
        </div>
      )}

      {/* Adjust for banner height */}
      <div className={isInstagramBrowser ? "pt-10" : ""}>
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
