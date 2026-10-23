import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "919629932787";

const initialForm = {
  name: "",
  people: "",
  days: "",
  pickup: "",
  destination: "",
  email: "",
  contact: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setStatus("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "Hello Memories Platform Holidays! 👋",
      "I'd like to enquire about a trip. Please find my details below:",
      "",
      `Name: ${form.name.trim()}`,
      `Number of people: ${form.people}`,
      `Number of days: ${form.days}`,
      `Pickup point: ${form.pickup.trim()}`,
      `Destinations: ${form.destination.trim()}`,
      `Email: ${form.email.trim()}`,
      `Contact number: ${form.contact.trim()}`,
      "",
      "Please share the details and pricing when you can. Thank you!",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setStatus("Your enquiry is ready in WhatsApp. Please tap Send to share it with our team.");
  };

  const renderFormFields = () => (
    <>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
        autoComplete="name"
        required
        className="w-full p-3 border rounded-md"
      />
      <input
        type="number"
        name="people"
        value={form.people}
        onChange={handleChange}
        placeholder="Number of people"
        min="1"
        required
        className="w-full p-3 border rounded-md"
      />
      <input
        type="number"
        name="days"
        value={form.days}
        onChange={handleChange}
        placeholder="Number of days"
        min="1"
        required
        className="w-full p-3 border rounded-md"
      />
      <input
        type="text"
        name="pickup"
        value={form.pickup}
        onChange={handleChange}
        placeholder="Pickup point"
        required
        className="w-full p-3 border rounded-md"
      />
      <textarea
        name="destination"
        value={form.destination}
        onChange={handleChange}
        placeholder="Where would you like to travel?"
        required
        rows={3}
        className="w-full p-3 border rounded-md"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email address"
        autoComplete="email"
        required
        className="w-full p-3 border rounded-md"
      />
      <input
        type="tel"
        name="contact"
        value={form.contact}
        onChange={handleChange}
        placeholder="Contact number"
        autoComplete="tel"
        required
        className="w-full p-3 border rounded-md"
      />

      <button
        type="submit"
        className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md hover:bg-yellow-500 transition"
      >
        Send enquiry on WhatsApp
      </button>

      {status && (
        <p className="text-green-700 text-center mt-2 font-medium" role="status" aria-live="polite">
          {status}
        </p>
      )}
    </>
  );

  return (
    <>
      <section className="py-12 px-4 md:px-10 bg-white">
        <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-[#fceabb] via-[#f8b500] to-[#ffdd95] shadow-md hover:shadow-xl transition duration-300 max-w-xl mx-auto">
          <div className="bg-[#fffdf7] rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-3 text-yellow-600 font-kui">
              Plan Your Trip
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Share a few details and we’ll help you plan a memorable journey.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 font-lui font-bold">
              {renderFormFields()}
            </form>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4 py-6">
          <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-[#fceabb] via-[#f8b500] to-[#ffdd95] shadow-2xl w-full max-w-md sm:max-w-lg max-h-full overflow-y-auto">
            <div className="bg-[#fffdf7] rounded-2xl p-6 sm:p-8">
              <button
                type="button"
                onClick={() => setShowPopup(false)}
                aria-label="Close quick contact form"
                className="absolute top-2 right-4 text-gray-600 text-2xl"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold text-center mb-3 text-yellow-600 font-kui">
                Quick Trip Enquiry
              </h3>
              <p className="text-center text-gray-600 mb-5">
                Tell us what you’re planning. We’ll continue the conversation on WhatsApp.
              </p>
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
