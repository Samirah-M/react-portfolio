import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        "service_mmfzuhb",
        "template_ule8gam",
        formData,
        "33MmqJiqKa0JxXmOE"
      )
      .then(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setError("Error sending email: " + error.message);
      });
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      ></motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <section id="contact">
          <div className="max-w-xl mx-auto">
            <h2 className="my-20 text-center text-4xl">
              Get
              <span className="text-neutral-500"> in touch</span>
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-50 shadow-lg rounded-2xl p-6"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black"
                  placeholder="What would you like to say?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-medium py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>

              {success && (
                <p className="text-green-600 text-center font-medium mt-4">
                  🎉 Message sent successfully!
                </p>
              )}
              {error && (
                <p className="text-red-600 text-center font-medium mt-4">
                  {error}
                </p>
              )}
            </form>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
