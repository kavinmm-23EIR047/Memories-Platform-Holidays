import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainScrollPage from "./components/MainScrollPage";
import GalleryBusPage from "./components/GalleryBusPage";
import Feedback from "./components/Feedback";
import Loader from "./components/Loader.jsx";
import { useState } from "react";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) return <Loader onComplete={() => setLoading(false)} />;

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
