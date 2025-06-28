import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const bus1 = "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1750562996/bus1_seckuv.jpg";
const bus2 = "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1750562997/bus2_dddqem.jpg";
const bus3 = "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1750562990/bus3_u1xs03.jpg";
const bus4 = "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1750562993/bus4_wiikbr.jpg";
const bus6 = "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1750562992/bus6_nhl2zl.jpg";
const bus7 = "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1750562993/bus7_eucgcz.jpg";
const bus8 = "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1750563004/bus8_u9cbs7.jpg";
const bus9 = "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1750563001/bus9_yqanji.jpg";
const bus10 = "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1750563003/bus10_ebl418.jpg";


const buses = [
  { id: "bus1", name: "RKG", image: bus1 },
  { id: "bus2", name: "Sabari", image: bus2 },
  { id: "bus6", name: "Mano", image: bus6 },
  { id: "bus10", name: "Pettakarran", image: bus10 },
  { id: "bus9", name: "Jai Sri", image: bus9 },
  { id: "bus4", name: "Murugan", image: bus4 },
  { id: "bus7", name: "Traveller", image: bus7 },
];

const notes = [
  { id: 1, name: "BB-Toys", img: "/logo.jpg", to: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MTY0OTQyNjE3MzA1OTUw?story_media_id=3171922247084441712_59797187139&igsh=MTFxYmtoM3cyNzc0cQ==", internal: false },
  { id: 2, name: "Keralam", img: "/logo.jpg", to: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4Mjc4MTI4OTY2MjA3MDgw?story_media_id=3223703601796731400_59797187139&igsh=MWZqYzFtd3NvaHZwZw==", internal: false },
  { id: 3, name: "TN", img: "/logo.jpg", to: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTI2MjA3MDk0Nzc4NTQz?story_media_id=3171922247084441712_59797187139&igsh=MWJiZDNrcjFoMHR2Yw==", internal: false },
  { id: 4, name: "Goa", img: "/logo.jpg", to: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDI2NTIwNzY3NjI0NzY0?story_media_id=3521934005876765091_59797187139&igsh=MWR1dnZ5Zm45MzRnNg==", internal: false },
  { id: 5, name: "Karnataka", img: "/logo.jpg", to: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTk2MTc1OTgwMzgxMDkw?story_media_id=3238565676645816877_59797187139&igsh=MWE0MGp4N2xyYTR1cg==", internal: false },
  { id: 6, name: "Logo", img: "/logo.jpg", to: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDIwNDA3MjY1NDc3NDE4?story_media_id=3345796277264467759_59797187139&igsh=MWU1ZGIwcGF4bXMz", internal: false },
];

const Gallery = () => {
  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 font-['Open_Sans']">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-10 max-w-4xl mx-auto shadow-md text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#060304] font-['Poppins'] p-4 md-7 font-edu">
          Our <span className="text-[#fecc00] font-semibold font-edu">Bus Gallery</span>
        </h2>

        {/* Swiper Gallery */}
        <Swiper
          pagination={{ el: ".custom-swiper-pagination", clickable: true }}
          navigation={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          modules={[Pagination, Navigation, Autoplay]}
          className="pb-12"
        >
          {buses.map((bus) => (
            <SwiperSlide key={bus.id}>
              <div className="relative w-full h-[350px] sm:h-[400px] max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={bus.image}
                  alt={`${bus.name} Bus - Gallery`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-center p-6 text-white text-center">
                  <h3 className="text-3xl sm:text-4xl font-bold mb-6 font-mai">{bus.name}</h3>
                  <Link
                    to={`/gallery/${bus.id}`}
                    onClick={handleExploreClick}
                    className="bg-gradient-to-r from-[#060304] via-[#fecc00] to-[#060304] text-white px-6 py-3 rounded-md hover:opacity-90 transition bg-[length:200%_200%] animate-gradient-x font-cui"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="custom-swiper-pagination mt-6 flex justify-center items-center gap-2" />
      </div>

      {/* Quick Access Section (outside the white card) */}
      <div className="mt-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8 text-center font-['Poppins'] text-[#060304] font-edu">
          Quick <span className="text-[#fecc00] font-mui">Access</span>
        </h3>

        {/* Mobile Swiper */}
        <div className="block lg:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, Navigation]}
            className="pb-6"
          >
            {notes.map((note) => (
              <SwiperSlide key={note.id}>
                {note.internal ? (
                  <Link to={note.to} className="flex flex-col items-center group">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf] rounded-full p-[3px] group-hover:scale-105 transition-transform duration-300">
                      <div className="bg-white rounded-full w-full h-full overflow-hidden">
                        <img src={note.img} alt={note.name} className="w-full h-full object-cover rounded-full" />
                      </div>
                    </div>
                    <p className="mt-2 text-base font-semibold text-center text-[#060304] w-24 truncate font-mui">{note.name}</p>
                  </Link>
                ) : (
                  <a href={note.to} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf] rounded-full p-[3px] group-hover:scale-105 transition-transform duration-300">
                      <div className="bg-white rounded-full w-full h-full overflow-hidden">
                        <img src={note.img} alt={note.name} className="w-full h-full object-cover rounded-full" />
                      </div>
                    </div>
                    <p className="mt-2 text-sm font-medium text-center text-[#060304] font-mai w-20 truncate">{note.name}</p>
                  </a>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-6 gap-6 justify-center">
          {notes.map((note) =>
            note.internal ? (
              <Link key={note.id} to={note.to} className="flex flex-col items-center group">
                <div className="relative w-20 h-20 bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf] rounded-full p-[3px] group-hover:scale-105 transition-transform duration-300">
                  <div className="bg-white rounded-full w-full h-full overflow-hidden">
                    <img src={note.img} alt={note.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                <p className="mt-2 text-base font-semibold text-center text-[#060304] max-w-[6.5rem] leading-tight break-words font-mui">{note.name}</p>
              </Link>
            ) : (
              <a key={note.id} href={note.to} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <div className="relative w-20 h-20 bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf] rounded-full p-[3px] group-hover:scale-105 transition-transform duration-300">
                  <div className="bg-white rounded-full w-full h-full overflow-hidden">
                    <img src={note.img} alt={note.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                <p className="mt-2 text-sm font-medium text-center text-[#060304] font-mai w-20 truncate">{note.name}</p>
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
