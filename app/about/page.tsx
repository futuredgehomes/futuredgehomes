'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Building2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24 px-4 relative">
      {/* 🔙 Home Button Top-Left */}
      <Link href="/" className="absolute top-6 left-6 inline-flex items-center text-gray-700 hover:text-orange-500 transition-colors">
        <ArrowLeft className="h-5 w-5 mr-2" />
        <span>Home</span>
      </Link>

      <motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="max-w-6xl mx-auto text-center px-4"
>
  <div className="flex justify-center mb-4">
    <Building2 className="h-10 w-10 text-orange-500" />
  </div>

  <h1 className="text-4xl font-bold text-gray-800 mb-6">
    <span className="text-orange-500">Communities</span>
  </h1>

  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
    Explore the desirable communities where we proudly build, strategically chosen for their prime locations, excellent amenities, and welcoming neighbourhoods — the perfect backdrop for your dream home.
  </p>

  {/* 3-column layout */}
  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        image: "/images/IrivineCreek.jpeg",
        title: "Irvine Creek",
        description:
          "",
      },
      {
        image: "/images/WestCreek.jpeg",
        title: "West Creek, Leduc",
        description:
          "",
      },
      {
        image: "/images/Alces.jpeg",
        title: "Alces , South East Edmonton",
        description:
          "",
      },
    ].map((community, index) => (
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

    </div>
  );
}
