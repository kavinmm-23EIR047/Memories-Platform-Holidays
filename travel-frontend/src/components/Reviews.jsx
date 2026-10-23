import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const videoReviews = [
  {
    video: "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1750562634/review2_vtfpjx.mp4",
    poster: "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1751102028/review1_pg5x3m.jpg",
  },
  {
    video: "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1750562620/review1_de4bvw.mp4",
    poster: "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1751102028/review2_kvciiy.jpg",
  },
  {
    video: "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1750562620/review4_fta6dj.mp4",
    poster: "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1751102028/review3_jkhl8m.jpg",
  },
  {
    video: "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1750562649/review5_feu0u9.mp4",
    poster: "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1751102028/review4_a9yrro.jpg",
  },
  {
    video: "https://res.cloudinary.com/dpdhfrk2t/video/upload/v1750562632/review3_dlb8j3.mp4",
    poster: "https://res.cloudinary.com/dpdhfrk2t/image/upload/v1751102028/review5_dzbywx.jpg",
  },
];

// These are the 10 newest reviews supplied for the site. In the source data,
// `name` is the review text, `image` is the reviewer's name, and `comment` is
// the star rating word.
const textReviews = [
  { rating: 5, description: "semma experience", name: "Sree mathi A", date: "2025-07-01 19:05:43" },
  { rating: 5, description: "Good experience and enjoyfull journey and super driver", name: "Sathish Sathish", date: "2025-07-01 17:24:13" },
  { rating: 5, description: "Good experience and enjoyfull journey and super driver", name: "Tamil Tamil", date: "2025-07-01 16:25:14" },
  { rating: 5, description: "Great for reviews on accommodation and unique experience🩶🚌🏞️", name: "Palani Samy", date: "2025-07-01 16:15:16" },
  { rating: 5, description: "good food", name: "berry_ Xo", date: "2025-07-01 15:59:56" },
  { rating: 5, description: "Best travel agency at affordable cost", name: "Chitra", date: "2025-07-01 15:30:40" },
  { rating: 5, description: "amazing journey", name: "Pugal Sasi", date: "2025-07-01 14:37:01" },
  { rating: 5, description: "Had an amazing experience with Memories Platform Trip! The bus trip was well-organized, and the staff were friendly and helpful. The route was scenic, and we enjoyed the views along the way. Highly recommend for a comfortable and memorable journey! ❤️", name: "Renuga Priya", date: "2025-07-01 14:12:53" },
  { rating: 5, description: "Good experience", name: "Satheesh Praseetha", date: "2025-07-01 13:29:43" },
  { rating: 4, description: "better for all things", name: "kiruthika sri", date: "2025-07-01 12:58:34" },
];

const getInitials = (name = "") =>
  name.split(/\s+/).map((part) => part[0]?.toUpperCase()).join("").slice(0, 2);

const formatDate = (dateString) => {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });
};

const Stars = ({ rating }) => (
  <div className="flex text-yellow-500 text-sm mt-1" aria-label={`${rating} out of 5 stars`}>
    {[...Array(5)].map((_, index) => {
      const key = `star-${index}`;
      if (index + 1 <= Math.floor(rating)) return <FaStar key={key} />;
      if (index < rating) return <FaStarHalfAlt key={key} />;
      return <FaRegStar key={key} />;
    })}
  </div>
);

const Reviews = () => {
  const swiperRef = useRef(null);
  const googleRating = 4.7;

  return (
    <section id="reviews" className="py-20 px-4 md:px-8 font-['Open_Sans'] bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-kui text-[#ffcc00]">
          Reviews
        </h2>

        <div className="mb-16">
          <Swiper
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            modules={[Pagination, Navigation, Autoplay]}
            className="pb-12"
          >
            {videoReviews.map((review, index) => (
              <SwiperSlide key={review.video}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative w-full aspect-video bg-black">
                    <video
                      src={review.video}
                      poster={review.poster}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover rounded-xl"
                      onPlay={(event) => {
                        document.querySelectorAll("video").forEach((video) => {
                          if (video !== event.target) video.pause();
                        });
                        swiperRef.current?.autoplay?.stop();
                      }}
                      onPause={() => swiperRef.current?.autoplay?.start()}
                      onEnded={() => swiperRef.current?.autoplay?.start()}
                      aria-label={`Video review ${index + 1}`}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-12">
          <div className="flex flex-col items-center justify-center gap-2 mb-6">
            <div className="flex items-center gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                alt="Google"
                className="w-7 h-7 md:w-8 md:h-8"
              />
              <h3 className="text-2xl md:text-3xl font-bold font-kui tracking-wide text-center">
                <span className="text-[#000200]">Google</span>{" "}
                <span className="text-[#ffcc00]">Reviews</span>
              </h3>
            </div>
            <p className="text-gray-700 font-semibold text-center font-lui text-base md:text-lg">
              Memories Platform Holidays Private Limited
            </p>
            <div className="flex items-center justify-center gap-2 font-semibold text-lg font-lui text-gray-700">
              <span className="text-xl text-yellow-500 font-kui">{googleRating.toFixed(1)}</span>
              <Stars rating={googleRating} />
              <span className="text-sm text-gray-500 ml-2">45+ Google reviews</span>
            </div>
            <a
              href="https://g.page/r/CU-jH965gqwvEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md md:text-lg font-semibold text-blue-600 hover:text-blue-800 hover:underline transition duration-300"
            >
              ⭐ See More Reviews
            </a>
          </div>

          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            modules={[Pagination, Navigation, Autoplay]}
            className="pb-6 review-swiper"
          >
            {textReviews.map((review) => (
              <SwiperSlide key={`${review.name}-${review.date}`}>
                <div className="rounded-xl p-[2px] bg-gradient-to-br from-[#fceabb] via-[#f8b500] to-[#ffdd95] shadow-sm transition-all duration-300 hover:shadow-lg">
                  <div className="bg-[#fffdf7] rounded-xl p-6 min-h-[200px] flex flex-col justify-between">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#f8b500] flex items-center justify-center text-white font-bold mr-3 font-lui text-sm" aria-hidden="true">
                        {getInitials(review.name)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 font-lui text-base">{review.name}</p>
                        <p className="text-xs text-gray-500 font-lui">{formatDate(review.date)}</p>
                        <Stars rating={review.rating} />
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed font-kui italic">{review.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
