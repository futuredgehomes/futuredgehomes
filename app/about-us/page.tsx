"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Assuming you're using Lucide icons. Install with `npm install lucide-react`

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [isCommunitiesOpen, setIsCommunitiesOpen] = useState(false);
  return (
    <div className="bg-white min-h-screen pt-32">

      {/* Header */}
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
            <Link href="/about" className="text-yellow-700">
              Communities
            </Link>
            <Link href="/testinomial" className="text-yellow-700">
              Testimonials
            </Link>
            <Link href="/contact-us" className="text-yellow-700">
              Contact
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
                href="/contact-us"
              className="block text-yellow-700 font-semibold mb-3 text-right hover:text-yellow-800"

                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

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
            </div>
          )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 max-w-5xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-yellow-700">FuturEdge Homes</span>
          </h1>
          <p className="text-lg text-gray-600">
            Building Today for a Better Tomorrow
          </p>
        </motion.div>

        {/* Company Intro */}
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 space-y-4 text-gray-700 leading-relaxed"
        >
          <p>
            At <strong>FuturEdge Homes</strong>, we believe every home should reflect the people who live in it — their lifestyle, their vision, and their dreams. Based in Edmonton and surrounding regions, we are a trusted home builder known for our commitment to quality craftsmanship, innovative design, and an exceptional client experience.
          </p>
          <p>
            From pre-construction and modern infills to multiplexes (MLI), our projects blend smart layouts, high-end finishes, and energy-efficient construction. Every home we build is thoughtfully planned and meticulously executed — because we know it’s more than just a house, it’s your future.
          </p>
        </motion.section>

        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            FuturEdge Homes was founded with one clear purpose: to redefine what homeowners expect from a builder. With years of experience in the Alberta housing market, we’ve developed a reputation for transparency, reliability, and attention to detail.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            We manage every stage of the process — from design and permits to the final finishing touches — ensuring your vision becomes reality on time and on budget. Our hands-on approach means you’re never just another project; you’re a partner in creating something lasting and personal.
          </p>
        </motion.section>

        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To build high-quality, modern homes that combine functionality, style, and long-term value — while providing an honest, stress-free building experience for every client.
          </p>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose Us</h2>
          <ul className="space-y-4 text-gray-700 list-disc list-inside">
            <li>
              <strong>Quality Construction:</strong> Built with top-tier materials and trusted trades.
            </li>
            <li>
              <strong>Innovative Design:</strong> Homes that are both beautiful and practical.
            </li>
            <li>
              <strong>Transparent Process:</strong> Open communication from start to finish.
            </li>
            <li>
              <strong>Client-Focused Service:</strong> We build relationships as strong as our homes.
            </li>
          </ul>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Let’s Build Your Future
          </h3>
          <p className="text-gray-700 mb-6">
            Whether you're dreaming of a custom home or looking to invest in a new community build, FuturEdge Homes is here to make it happen.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-yellow-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-800 transition"
          >
            Contact Us Today
          </Link>
        </motion.div>
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
                <li>Phone: (780)-729-7000</li> 
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
