import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

// ✅ Video reviews data with poster images
const videoReviews = [
  {
    video: "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1750562634/review2_vtfpjx.mp4",
    poster: "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1751102028/review1_pg5x3m.jpg"
  },
  {
    video: "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1750562620/review1_de4bvw.mp4",
    poster: "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1751102028/review2_kvciiy.jpg"
  },
  {
    video: "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1750562620/review4_fta6dj.mp4",
    poster: "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1751102028/review3_jkhl8m.jpg"
  },
  {
    video: "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1750562649/review5_feu0u9.mp4",
    poster: "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1751102028/review4_a9yrro.jpg"
  },
  {
    video: "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1750562632/review3_dlb8j3.mp4",
    poster: "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1751102028/review5_dzbywx.jpg"
  }
];

const getInitials = (name = "") =>
  name
    .split(" ")
    .map((n) => n[0]?.toUpperCase())
    .join("")
    .slice(0, 2);

const Reviews = () => {
  const [textReviews, setTextReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/feedbacks`)
      .then((res) => res.json())
      .then((data) => setTextReviews(data))
      .catch((err) => {
        console.error("Failed to load feedbacks:", err);
        setTextReviews([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="reviews" className="py-20 px-4 md:px-8 font-['Open_Sans'] bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-mui text-[#ffcc00]">
          Reviews
        </h2>

        {/* 🎥 Video Reviews */}
        <div className="mb-16">
          <Swiper
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="pb-12"
          >
            {videoReviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative w-full aspect-video bg-black">
                    <video
                      src={review.video}
                      poster={review.poster}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover rounded-xl"
                      onPlay={(e) => {
                        document.querySelectorAll("video").forEach((v) => {
                          if (v !== e.target) v.pause();
                        });
                        swiperRef.current?.autoplay?.stop();
                      }}
                      onPause={() => {
                        swiperRef.current?.autoplay?.start();
                      }}
                      onEnded={() => {
                        swiperRef.current?.autoplay?.start();
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ✨ Text Reviews */}
        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 font-mui tracking-wide">
            <span className="text-[#ffcc00]">Responsible</span>{" "}
            <span className="text-[#000200]">Reviews</span>
          </h3>

          {loading ? (
            <p className="text-center text-gray-500 font-cui text-sm">Loading reviews...</p>
          ) : textReviews.length === 0 ? (
            <p className="text-center text-gray-500 font-cui text-sm">
              No reviews yet. Be the first to leave one!
            </p>
          ) : (
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              loop
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="pb-6 review-swiper"
            >
              {textReviews.map((review, index) => {
                const rating =
                  review.rating !== undefined && !isNaN(review.rating)
                    ? parseFloat(review.rating)
                    : Math.round((Math.random() * 1.5 + 3.5) * 2) / 2;

                return (
                  <SwiperSlide key={index}>
                    <div className="rounded-xl p-[2px] bg-gradient-to-br from-[#fceabb] via-[#f8b500] to-[#ffdd95] shadow-sm transition-all duration-300 hover:shadow-lg">
                      <div className="bg-[#fffdf7] rounded-xl p-6 min-h-[200px] flex flex-col justify-between">
                        <div className="flex items-center mb-4">
                          {review.image ? (
                            <img
                              src={review.image}
                              alt="reviewer"
                              className="w-10 h-10 rounded-full object-cover mr-3"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-[#f8b500] flex items-center justify-center text-white font-bold mr-3 font-cui text-sm">
                              {getInitials(review.name || "Anonymous")}
                            </div>
                          )}
                          <div>
                            <p className="font-semibold text-gray-800 font-mai text-base">
                              {review.name || "Anonymous"}
                            </p>
                            <div className="flex text-yellow-500 text-sm mt-1">
                              {[...Array(5)].map((_, i) =>
                                i + 1 <= Math.floor(rating) ? (
                                  <FaStar key={i} />
                                ) : i + 0.5 === rating ? (
                                  <FaStarHalfAlt key={i} />
                                ) : (
                                  <FaRegStar key={i} />
                                )
                              )}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-800 text-sm leading-relaxed font-mai italic">
                          {review.comment}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
