import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Bus 10 Images & Video (imported from src)
import img1 from "../assets/gallery/bus10/1b10.jpeg";
import img2 from "../assets/gallery/bus10/2b10.jpeg";
import img3 from "../assets/gallery/bus10/3b10.jpeg";
import img4 from "../assets/gallery/bus10/4b10.jpeg";
import img5 from "../assets/gallery/bus10/5b10.jpeg";
import img6 from "../assets/gallery/bus10/6b10.jpeg";
import img7 from "../assets/gallery/bus10/7b10.jpeg";
import img8 from "../assets/gallery/bus10/8b10.jpeg";
import img9 from "../assets/gallery/bus10/9b10.jpeg";
import img10 from "../assets/gallery/bus10/10b10.jpeg";
// import bus10Video from "../assets/gallery/bus10/video.mp4";


import img21 from "../assets/gallery/bus2/2b1.jpeg";
import img22 from "../assets/gallery/bus2/2b2.jpeg";
import img23 from "../assets/gallery/bus2/2b3.jpeg";
import img24 from "../assets/gallery/bus2/2b4.jpeg";
import img25 from "../assets/gallery/bus2/2b5.jpeg";
import img27 from "../assets/gallery/bus2/2b7.jpeg";
import img26 from "../assets/gallery/bus2/2b6.jpeg";

// import img201 from "../assets/gallery/bus2/2b16.jpeg";
import img202 from "../assets/gallery/bus2/2b17.jpeg";
import img203 from "../assets/gallery/bus2/2b18.jpeg";
import img204 from "../assets/gallery/bus2/2b19.jpeg";
import img205 from "../assets/gallery/bus2/2b20.jpeg";
import img206 from "../assets/gallery/bus2/2b21.jpeg";
import img207 from "../assets/gallery/bus2/2b22.jpeg";
import img208 from "../assets/gallery/bus2/2b23.jpeg";
import img209 from "../assets/gallery/bus2/2b24.jpeg";

import img210 from "../assets/gallery/bus2/2b25.jpeg";
import img211 from "../assets/gallery/bus2/2b26.jpeg";
import img212 from "../assets/gallery/bus2/2b27.jpeg";
import img213 from "../assets/gallery/bus2/2b28.jpeg";
import img214 from "../assets/gallery/bus2/2b29.jpeg";
import img215 from "../assets/gallery/bus2/2b30.jpeg";



import img28 from "../assets/gallery/bus2/2b8.jpeg";
// import img29 from "../assets/gallery/bus2/2b9.jpeg";
import img30 from "../assets/gallery/bus2/2b10.jpeg";
import img19 from "../assets/gallery/bus2/2b11.jpeg";
import img18 from "../assets/gallery/bus2/2b12.jpeg";
import img17 from "../assets/gallery/bus2/2b13.jpeg";
import img16 from "../assets/gallery/bus2/2b14.jpeg";
import img15 from "../assets/gallery/bus2/2b15.jpeg";


import img41 from "../assets/gallery/bus9/9b1.jpeg";
import img42 from "../assets/gallery/bus9/9b2.jpeg";
import img43 from "../assets/gallery/bus9/9b3.jpeg";
import img44 from "../assets/gallery/bus9/9b4.jpeg";
import img45 from "../assets/gallery/bus9/9b5.jpeg";
import img46 from "../assets/gallery/bus9/9b6.jpeg";
import img47 from "../assets/gallery/bus9/9b7.jpeg";
import img48 from "../assets/gallery/bus9/9b8.jpeg";
import img49 from "../assets/gallery/bus9/9b9.jpeg";
import img50 from "../assets/gallery/bus9/9b10.jpeg";




import img71 from "../assets/gallery/bus7/7b1.jpeg";
import img72 from "../assets/gallery/bus7/7b2.jpeg";
import img73 from "../assets/gallery/bus7/7b3.jpeg";
import img74 from "../assets/gallery/bus7/7b4.jpeg";
import img75 from "../assets/gallery/bus7/7b5.jpeg";
import img76 from "../assets/gallery/bus7/7b6.jpeg";
import img77 from "../assets/gallery/bus7/7b7.jpeg";
import img78 from "../assets/gallery/bus7/7b8.jpeg";
import img79 from "../assets/gallery/bus7/7b9.jpeg";

import img61 from "../assets/gallery/bus6/6b1.jpeg";
import img62 from "../assets/gallery/bus6/6b2.jpeg";
import img63 from "../assets/gallery/bus6/6b3.jpeg";
import img64 from "../assets/gallery/bus6/6b4.jpeg";
import img65 from "../assets/gallery/bus6/6b5.jpeg";
import img66 from "../assets/gallery/bus6/6b6.jpeg";
import img67 from "../assets/gallery/bus6/6b7.jpeg";
import img68 from "../assets/gallery/bus6/6b8.jpeg";



import img91 from "../assets/gallery/bus4/4b1.jpeg";
import img92 from "../assets/gallery/bus4/4b2.jpeg";
import img93 from "../assets/gallery/bus4/4b3.jpeg";
import img94 from "../assets/gallery/bus4/4b4.jpeg";
import img95 from "../assets/gallery/bus4/4b5.jpeg";
import img96 from "../assets/gallery/bus4/4b6.jpeg";
import img97 from "../assets/gallery/bus4/4b7.jpeg";
import img98 from "../assets/gallery/bus4/4b8.jpeg";

import img111 from "../assets/gallery/bus1/1b1.jpeg";
import img112 from "../assets/gallery/bus1/1b2.jpeg";
import img113 from "../assets/gallery/bus1/1b3.jpeg";
import img114 from "../assets/gallery/bus1/1b4.jpeg";
import img115 from "../assets/gallery/bus1/1b5.jpeg";
import img116 from "../assets/gallery/bus1/1b6.jpeg";
import img117 from "../assets/gallery/bus1/1b7.jpeg";
import img118 from "../assets/gallery/bus1/1b8.jpeg";
import img119 from "../assets/gallery/bus1/1b9.jpeg";

const bus5_1 = "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1751636631/WhatsApp_Image_2025-07-03_at_8.20.11_PM_2_zdgi2u.jpg";
const bus5_2 = "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1751636631/WhatsApp_Image_2025-07-03_at_9.22.13_PM_irej0j.jpg";
const bus5_3 = "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1751636632/WhatsApp_Image_2025-07-03_at_9.22.12_PM_xxa5zi.jpg";
const bus5_4 = "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1751636623/WhatsApp_Image_2025-07-03_at_8.20.11_PM_1_fohzmx.jpg";
const bus5_5 = "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1751636616/WhatsApp_Image_2025-07-03_at_8.20.12_PM_cswq9u.jpg";
const bus5_6 = "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1751636623/WhatsApp_Image_2025-07-03_at_8.20.10_PM_zm7frj.jpg";
const bus5_7 = "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1751636629/WhatsApp_Image_2025-07-03_at_8.20.10_PM_1_sx69zl.jpg";
const bus5_8 = "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1751636635/WhatsApp_Image_2025-07-03_at_8.20.11_PM_pxglq0.jpg";


const bus5Video = "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1750562840/bus4video_ixejer.mp4";
const bus4Video = "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1751948079/viralvideos_virlalvideo_trending_tamilnadutourism_trendingreels_bus_instagram_u8k0tf.mp4";
const bus2Video = "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1750562833/bus2video_njifkx.mp4";
const bus9Video = "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1751949831/WhatsApp_Video_2025-07-08_at_10.00.09_13422d67_jrnctp.mp4";
const bus10Video = "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1750562844/bus10video_rqkrhr.mp4";
const bus1Video = "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1750562853/bus1video_myjh5p.mp4";

const busData = {
  bus1: {
    name: "RKG",
    images: [img111, img112, img113, img114, img115, img116, img117, img118, img119],
    video: bus1Video,
  },
  bus2: {
    name: "Sabari",
    images: [img21, img22, img23, img24, img25, img27, img26, img202, img203, img204, img205, img206, img207, img208, img209, img28, img30, img19, img18, img17, img16, img15, img210, img211, img212, img213, img214, img215],
    video: bus2Video,
  },

  bus4: {
    name: "Murugan",
    images: [img91, img92, img93, img94, img95, img96, img97, img98],
    video: bus4Video,
  },
  bus5 : {
  name: "Coach",
  images: [
    bus5_1,
    bus5_2,
    bus5_3,
    bus5_4,
    bus5_5,
    bus5_6,
    bus5_7,
    bus5_8,
  ],
  video: bus5Video,
  },
  bus6: {
    name: "Mano",
    images: [img61, img62, img63, img64, img65, img66, img67, img68],
    // video: bus6Video,
  },
  bus7: {
    name: "Tempo Traveller",
    images: [img71, img72, img73, img74, img75, img76, img77, img78, img79],
    // video: bus7Video,
  },

  bus9: {
    name: "Jai Sri",
    images: [img41, img42, img43, img44, img45, img46, img47, img48, img49, img50],
    video: bus9Video,
  },
  bus10: {
    name: "Pettakarran",
    images: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
    video: bus10Video,
  },
   
};




const GalleryBusPage = () => {
  const { busId } = useParams();
  const bus = busData[busId];
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);

    document.body.style.overflow = selectedImage ? "hidden" : "auto";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  if (!bus) {
    return (
      <div className="p-10 text-center text-red-600 font-semibold">
        Bus not found.
      </div>
    );
  }

  return (
   <section className="pt-32 pb-16 px-6 md:px-12 bg-gray-100 scroll-mt-32">
  <div className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
    <h2 className="text-4xl md:text-5xl font-bold text-[#facc15] text-center mb-10 font-kui">
      {bus.name}
    </h2>

    {/* 🖼 Image Swiper with Autoplay */}
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Navigation, Pagination, Autoplay]}
      className="mb-12"
    >
      {bus.images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <div
            onClick={() => setSelectedImage(img)}
            className="overflow-hidden cursor-pointer"
          >
            <img
              src={img}
              alt={`Bus ${idx + 1}`}
              className="w-full h-[500px] object-cover rounded-xl transform hover:scale-105 transition duration-300 ease-in-out font-kui"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* 🎥 Video Section */}
    <div className="mt-12">
      <h3 className="text-3xl font-semibold text-gray-800 mb-6 font-kui text-center">
        Bus Video:
      </h3>

      <div className="w-[640px] max-w-full mx-auto">
        <video
          src={bus.video}
          controls
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </div>
  </div>

  {/* 🖼 Full Image Modal */}
  {selectedImage && (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative">
        <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-md rounded-full p-2 shadow-md">
          <button
            className="text-[#facc15] text-2xl font-bold leading-none"
            onClick={() => setSelectedImage(null)}
          >
            ✖
          </button>
        </div>
        <img
          src={selectedImage}
          alt="Full view"
          className="max-w-full max-h-[90vh] rounded-lg shadow-lg cursor-zoom-out"
        />
      </div>
    </div>
  )}
</section>

  );
};

export default GalleryBusPage;
