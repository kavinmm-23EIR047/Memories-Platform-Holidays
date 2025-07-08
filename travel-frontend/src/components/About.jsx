import { motion } from "framer-motion";
import aboutImage from "../assets/logos/about.jpeg";
import { FaTelegramPlane } from "react-icons/fa";
const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-8 font-['Open_Sans']"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-3xl font-bold text-[#fecc00] font-lui">
            Your journey<span className="text-[#060304] font-semibold"> start's here</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto font-kui font-bold">
            Learn more about who we are and why book with us and what we do.
          </p>
        </motion.div>

        {/* Image + Description */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.img
            src={aboutImage}
            alt="About Bus"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:max-w-md rounded-2xl shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center"
          >
            <p className="text-lg leading-relaxed text-gray-700 font-medium font-lui">
              We provide <span className="text-amber-600 font-semibold">budget-friendly premium packages</span> for college IVs, school trips, family vacations, and group events across South India. Our focus: safety, comfort & unforgettable journeys.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="bg-[#691303] border border-[#fecc00]/30 backdrop-blur-md bg-opacity-95 p-6 md:p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 max-w-5xl mx-auto"
>
    <FaTelegramPlane className="mx-auto text-[#fecc00] mb-4" size={36} />

  <h3 className="text-2xl font-bold text-[#fecc00] mb-6 font-kui text-center">
    Every trip tells a story <span className="text=[#691303]">crafted with care and creativity</span>
  </h3>

  <p className="text-[#e0e0e0] text-base text-justify leading-relaxed font-lui">
    At <strong>MEMORIESPLATFORM - HOLIDAYS</strong>, we believe that every journey should be as unique and unforgettable as the traveler embarking on it. We design fully tailored multi‑destination trips that blend personalized accommodations, curated activities, and seamless transportation. A trained staff member ensures you enjoy your travel without stress, with safety guarantees, insider local insights, and engaging updates throughout the trip.
    We're not just a travel company — we’re storytellers. We guide journeys and craft dreams, where every destination becomes a story. This is where technology meets wonder, and every step forward is sparked by a natural sense of discovery. From the first moment to the last, we’re committed to transforming your dream vacation into a meaningful, immersive, and inspiring experience.
  </p>
</motion.div>



        </div>

    </section>
  );
};
export default About;

