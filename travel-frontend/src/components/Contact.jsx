import { useEffect, useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    people: "",
    days: "",
    pickup: "",
    destination: "",
    email: "",
    contact: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!validateEmail(form.email)) {
      setStatus(false);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setForm({
          name: "",
          people: "",
          days: "",
          pickup: "",
          destination: "",
          email: "",
          contact: "",
        });
        setStatus(true);
      } else {
        setStatus(false);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus(false);
    } finally {
      setLoading(false);
    }
  };

  const renderFormFields = () => (
    <>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="w-full p-3 border rounded-md"
        disabled={loading}
      />
      <input
        type="number"
        name="people"
        value={form.people}
        onChange={handleChange}
        placeholder="No of People"
        required
        className="w-full p-3 border rounded-md"
        disabled={loading}
      />
      <input
        type="number"
        name="days"
        value={form.days}
        onChange={handleChange}
        placeholder="No of Days"
        required
        className="w-full p-3 border rounded-md"
        disabled={loading}
      />
      <input
        type="text"
        name="pickup"
        value={form.pickup}
        onChange={handleChange}
        placeholder="Pickup Point"
        required
        className="w-full p-3 border rounded-md"
        disabled={loading}
      />
      <textarea
        name="destination"
        value={form.destination}
        onChange={handleChange}
        placeholder="Travel Destination Places"
        required
        rows={3}
        className="w-full p-3 border rounded-md"
        disabled={loading}
      ></textarea>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full p-3 border rounded-md"
        disabled={loading}
      />
      <input
        type="text"
        name="contact"
        value={form.contact}
        onChange={handleChange}
        placeholder="Contact Number"
        required
        className="w-full p-3 border rounded-md"
        disabled={loading}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md hover:opacity-90"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      {status === true && (
        <p className="text-green-600 text-center mt-2 font-semibold animate-pulse">
          ✅ Registered successfully! We'll get back to you shortly.
        </p>
      )}
      {status === false && (
        <p className="text-red-600 text-center mt-2 font-medium">
          ❌ Submission failed. Please check the form and try again.
        </p>
      )}
    </>
  );

  return (
    <>
      <section className="py-12 px-4 md:px-10 bg-white">
        <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-[#fceabb] via-[#f8b500] to-[#ffdd95] shadow-md hover:shadow-xl transition duration-300 max-w-xl mx-auto">
          <div className="bg-[#fffdf7] rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-yellow-600 font-kui">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 font-lui font-bold">
              {renderFormFields()}
            </form>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-[#fceabb] via-[#f8b500] to-[#ffdd95] shadow-2xl w-[90%] max-w-md sm:max-w-lg md:max-w-xl">
            <div className="bg-[#fffdf7] rounded-2xl p-8">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-2 right-4 text-gray-600 text-xl"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold text-center mb-4 text-yellow-600 font-kui">
                Quick Contact
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 font-cui font-bold">
                {renderFormFields()}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
