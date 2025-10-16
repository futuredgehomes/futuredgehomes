'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Building2, Menu, X } from 'lucide-react';

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [isCommunitiesOpen, setIsCommunitiesOpen] = useState(false);
  const communities = [
    {
      image: '/images/IrivineCreek.jpeg',
      title: 'Irvine Creek',
      description: '',
    },
    {
      image: '/images/WestCreek.jpeg',
      title: 'West Creek, Leduc',
      description: '',
    },
    {
      image: '/images/Alces.jpeg',
      title: 'Alces, South East Edmonton',
      description: '',
    },
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

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6 text-gray-700 font-semibold">
            <Link href="/about-us" className="text-yellow-700">About</Link>
             <Link href="/contact-us" className="text-yellow-700">Contact</Link>
            <Link href="/testinomial" className="text-yellow-700">Testimonials</Link>
            
             
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Nav */}
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

      {/* 🔙 Home Button */}
      {/* <Link href="/" className="absolute top-28 left-6 inline-flex items-center text-gray-700 hover:text-yellow-700 transition-colors">
        <ArrowLeft className="h-5 w-5 mr-2" />
        <span>Home</span>
      </Link> */}

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center px-4 mt-16"
      >
        <div className="flex justify-center mb-4">
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          <span className="text-yellow-700">Communities</span>
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
          Explore the desirable communities where we proudly build, strategically chosen for their prime locations, excellent amenities, and welcoming neighbourhoods — the perfect backdrop for your dream home.
        </p>

        {/* 3-column layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {communities.map((community, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <Image
                src={community.image}
                alt={community.title}
                width={400}
                height={250}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {community.title}
                </h3>
                <p className="text-gray-600 text-sm">{community.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ✅ Footer */}
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
