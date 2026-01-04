'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function TestinomialPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommunitiesOpen, setIsCommunitiesOpen] = useState(false);

  const testimonials = [
    {
      name: 'Oliver Thompson, Leduc',
      rating: 5,
      quote: 'Excellent craftsmanship and attention to detail. Our home was completed on time and within budget — highly recommended!',
      date: 'August 2024',
    },
    {
      name: 'Lucas Carter, Beaumont',
      rating: 5,
      quote: 'They made our first custom home experience stress-free and enjoyable. The quality speaks for itself.',
      date: 'November 2024',
    },
    {
      name: 'Emma Collins, Edmonton',
      rating: 5,
      quote: 'We chose Future Edge Homes for our infill project, and it was the best decision. From the design stage to the final touches, they kept us informed and involved. The finishes are premium, and the workmanship is outstanding. I’ve already recommended them to friends!',
      date: 'Jan 2025',
    },
    {
      name: 'Benjamin Wright, Edmonton',
      rating: 5,
      quote: 'We hired FutureEdge Homes for a 7-plex development, and the coordination was exceptional. The project was complex, but they handled every detail from permits to possession efficiently. We’ll definitely work together again on our next project.',
      date: 'April 2025',
    },
    {
      name: 'Olivia Martin, Leduc',
      rating: 5,
      quote: 'Future Edge Homes built our dream home in South Edmonton. The quality, attention to detail, and communication were outstanding!',
      date: 'May 2025',
    },
    {
      name: 'Ethan McLeod, Edmonton',
      rating: 4,
      quote: 'Future Edge Homes exceeded our expectations in every way. The build quality , design, and transparency throughout the project was exceptional',
      date: 'July 2025',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between relative">
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
            <Link href="/contact-us" className="text-yellow-700">
              Contact
            </Link>
            <Link href="/about" className="text-yellow-700">
              Communities
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              if (isMenuOpen) setIsCommunitiesOpen(false);
            }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

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
            </div>
          )}
        </nav>
      </header>

      {/* Testimonials Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center px-4 mt-16"
      >
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
              <p className="text-yellow-700 flex-grow">“{testimonial.quote}”</p>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-800 font-semibold">{testimonial.name}</p>
                <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

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
