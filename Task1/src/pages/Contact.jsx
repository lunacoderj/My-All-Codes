import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // For demo, just mark as submitted
    setSubmitted(true);
  }

  return (
    <section className="pt-16 pb-20 max-w-[600px] mx-auto px-6">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-8">Contact</h2>
      {submitted ? (
        <p className="text-gray-700 text-center text-lg font-semibold">Thank you for reaching out! I will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-black"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
