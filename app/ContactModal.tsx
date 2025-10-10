"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
const [success, setSuccess] = useState<string | null>(null);

  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSending(true);
  setError(null);

  const form = e.currentTarget;
  const formData = new FormData(form);

  const name = formData.get("name")?.toString().trim();
  const number = formData.get("number")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !number || !message) {
    setError("Please fill in all fields.");
    setIsSending(false);
    return;
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, number, message }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error || "Failed to send message.");
    } else {
      // Show success message and optionally clear the form
      setError(null);
      form.reset(); // Clear the fields
      setSuccess("Message sent successfully!");
      setTimeout(() => {
        setSuccess(null);
        onClose(); // Close the modal after 2s
      }, 2000);
    }
  } catch (err) {
    console.error("Fetch error:", err);
    setError("Something went wrong. Please try again later.");
  } finally {
    setIsSending(false);
  }
};


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close Modal"
          disabled={isSending}
        >
          ✕
        </button>

       <h2 className="text-yellow-700 text-2xl font-bold mb-6" style={{ color: '' }}>
  Contact Us
</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
          style={{ color: 'black' }}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
          />
          <input
          style={{ color: 'black' }}
            type="number"
            name="number"
            placeholder="Phone Number"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
          />
          <textarea
          style={{ color: 'black' }}
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
          />
          <button
            type="submit"
            className="bg-yellow-700 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold disabled:opacity-50"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>

        {error && (
          <p className="mt-4 text-red-500 text-sm" role="alert" aria-live="assertive">
            {error}
          </p>
        )}
      </motion.div>
    </div>
  );
}
