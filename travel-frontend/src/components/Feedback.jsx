import React from "react";

const Feedback = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-4 my-20">
      <div className="w-full max-w-2xl bg-gray-100 p-6 sm:p-8 md:p-10 rounded-xl shadow-md border border-yellow-300 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-yellow-500">
          Share Your Experience
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Your review helps others discover our service!
        </p>
        <a
          href="https://g.page/r/CU-jH965gqwvEAI/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 text-white font-semibold py-3 px-6 rounded hover:bg-yellow-600 transition"
        >
          🌟 Leave a Google Review
        </a>
      </div>
    </section>
  );
};

export default Feedback;
