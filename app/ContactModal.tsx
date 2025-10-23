"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);
    setSuccess(null);

    if (!name || !number || !message) {
      setError("Please fill in all fields.");
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, number, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to send message.");
      } else {
        setSuccess("Message sent successfully!");
        setName("");
        setNumber("");
        setMessage("");

        setTimeout(() => {
          setSuccess(null);
          onClose();
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
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            aria-label="Close Modal"
            disabled={isSending}
          >
            &times;
          </button>

          {/* Heading */}
          <h2 className="text-yellow-700 text-2xl font-bold mb-6">Contact Us</h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-yellow-600 disabled:opacity-50"
              disabled={isSending}
            />
            <input
              type="number"
              name="number"
              placeholder="Phone Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-yellow-600 disabled:opacity-50"
              disabled={isSending}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-yellow-600 disabled:opacity-50"
              disabled={isSending}
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-700 hover:bg-yellow-800 text-white px-6 py-3 rounded font-semibold w-full disabled:opacity-50"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Messages */}
          {error && (
            <p className="mt-4 text-red-600 text-sm" role="alert">
              {error}
            </p>
          )}
          {success && (
            <p className="mt-4 text-green-600 text-sm" role="status">
              {success}
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
