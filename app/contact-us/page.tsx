"use client";

import { useState } from "react";
import { Mail, Menu, Phone, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [isCommunitiesOpen, setIsCommunitiesOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          number: phone, 
          message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMsg("✅ Message sent successfully!");
        setFullName("");
        setPhone("");
        setMessage("");
      } else {
        setResponseMsg(`❌ Error: ${data.error || "Failed to send message."}`);
      }
    } catch (err) {
      setResponseMsg("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/images/futurelogo.png"
                alt="FutureEdge Logo"
                width={170}
                height={64}
                className="object-contain h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-gray-700 font-semibold">
            <Link href="/about-us" className="text-yellow-700">
              About
            </Link>
            <Link href="/about" className="text-yellow-700">
              Communities
            </Link>
            <Link href="/testinomial" className="text-yellow-700">
              Testimonials
            </Link>
             
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
       {isMenuOpen && (
            <div
              className="md:hidden absolute top-full w-1/2 bg-white shadow-lg z-40 px-4 py-4 overflow-auto rounded-b-md"
              style={{ right: 0 }}
            >
              <Link
                href="/about-us"
                className="block text-yellow-700 font-semibold mb-3 text-right hover:text-yellow-800"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div>
               <button
  onClick={() => setIsCommunitiesOpen(!isCommunitiesOpen)}
  className="w-full text-yellow-700 font-bold focus:outline-none flex items-center justify-between mb-2 hover:text-yellow-800"
>
  <span>{isCommunitiesOpen ? '▼' : '▲'}</span>
  <span>Reviews</span>
</button>


                {isCommunitiesOpen && (
                  <div className="pl-10 mt-4 border-l-2 border-yellow-700">
                    <Link
                      href="/testinomial"
                      className="block text-yellow-700 font-semibold mb-2 hover:text-yellow-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Testimonials
                    </Link>
                  </div>
                )}
              </div>
              {/* Communities Dropdown */}
              <div>
               <button
  onClick={() => setIsCommunitiesOpen(!isCommunitiesOpen)}
  className="w-full text-yellow-700 font-bold focus:outline-none flex items-center justify-between mb-2 hover:text-yellow-800"
>
  <span>{isCommunitiesOpen ? '▼' : '▲'}</span>
  <span>Communities</span>
</button>


                {isCommunitiesOpen && (
                  <div className="pl-10 mt-4 border-l-2 border-yellow-700">
                    <Link
                      href="/about"
                      className="block text-yellow-700 font-semibold mb-2 hover:text-yellow-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Communities
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get In <span className="text-yellow-700">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to bring your dream home to life? Contact us today.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
             <div className="space-y-6">
  <div className="flex items-center space-x-4">
    <div className="bg-gray-800 p-3 rounded-full">
      <Mail className="h-6 w-6 text-white" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">Email</h4>
      <p className="text-gray-600">futuredgehomes@gmail.com</p>
    </div>
  </div>

  {/* ✅ Google Map Embed */}
  <div className="mt-6">
    <h4 className="font-semibold text-gray-800 mb-2">Our Location</h4>
    <div className="w-full h-64 rounded-md overflow-hidden border border-gray-300">
   <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23053.36715013257!2d-113.49185825424703!3d53.51218954899461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0136bf6e70c23%3A0x494a8c3a90bda14!2s3277%20Parsons%20Rd%2C%20Edmonton%2C%20AB%20T6N%200A9%2C%20Canada!5e0!3m2!1sen!2sca!4v1697049999999!5m2!1sen!2sca"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

    </div>
  </div>
</div>

            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="fullname"
                >
                  Full Name
                </label>
                <input
                  id="fullname"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-700"
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-800 transition"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {responseMsg && (
                <p className="mt-2 text-sm text-gray-700">{responseMsg}</p>
              )}
            </motion.form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-yellow-800 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold">FUTUREDGE HOMES LTD.</span>
              </div>
              <p className="text-gray-400">
                Real Estate excellence. Your trusted construction partner.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Residential Construction</li>
                <li>Commercial Projects</li>
                <li>Renovation & Interiors</li>
                <li>Architectural Design</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: futuredgehomes@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-yellow-600 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} FUTUREDGE HOMES LTD. Real Estate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
