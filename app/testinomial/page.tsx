'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Building2, Menu, X, Mail } from 'lucide-react';
import Image from 'next/image';

export default function TestinomialPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const testimonials = [
    {
      name: 'Gurjot S., Leduc',
      rating: 5,
      quote: 'Excellent craftsmanship and attention to detail. Our home was completed on time and within budget — highly recommended!',
    },
    {
      name: 'Harpreet & Jaspreet S., Beaumont',
      rating: 5,
      quote: 'They made our first custom home experience stress-free and enjoyable. The quality speaks for itself.',
    },
    {
      name: 'Simran S., Edmonton',
      rating: 5,
      quote: 'We chose Future Edge Homes for our infill project, and it was the best decision. From the design stage to the final touches, they kept us informed and involved. The finishes are premium, and the workmanship is outstanding. I’ve already recommended them to friends!',
    },
    {
      name: 'Raman G., Edmonton',
      rating: 5,
      quote: 'We hired FutureEdge Homes for a 7-plex development, and the coordination was exceptional. The project was complex, but they handled every detail from permits to possession efficiently. We’ll definitely work together again on our next project.',
    },
    {
      name: 'Manpreet S., Leduc',
      rating: 5,
      quote: 'Future Edge Homes built our dream home in South Edmonton. The quality, attention to detail, and communication were outstanding!',
    },
     {
      name: 'Manpreet S., Leduc',
      rating: 5,
      quote: 'Future Edge Homes built our dream home in South Edmonton. The quality, attention to detail, and communication were outstanding!',
    } 
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* ✅ Navbar */}
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
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md px-4 py-4">
            <Link href="/about" className="block mb-2 text-yellow-700 font-semibold">
              Communities
            </Link>
            <Link href="/testinomial" className="block text-yellow-700 font-semibold">
              Testimonials
            </Link>
          </div>
        )}
      </header>

      {/* 🔙 Home Button */}
      {/* <Link
        href="/"
        className="absolute top-28 left-6 inline-flex items-center text-gray-700 hover:text-orange-500 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        <span>Home</span>
      </Link> */}

      {/* ⭐ Testimonials Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center px-4 mt-16"
      >
        {/* <div className="flex justify-center mb-4">
          <Building2 className="h-10 w-10 text-yellow-700" />
        </div> */}

        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          <span className="text-yellow-700">Testimonials</span>
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
          Hear from our valued clients about their experience working with Future Edge Homes. Your dream home journey begins with trust and quality.
        </p>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 text-left border border-gray-100 flex flex-col justify-between"
              style={{ minHeight: '250px' }}
            >
              <p className="text-yellow-700  flex-grow">
                “{testimonial.quote}”
              </p>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-800 font-semibold">— {testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ✅ Footer */}
      <footer className="bg-yellow-900 text-white py-12 mt-20">
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
                {/* <li>Phone: (780) 245-0238</li> */}
                <li>Email: futuredgehomes@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-yellow-600 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} FUTUREDGE HOMES LTD. Real
              Estate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
