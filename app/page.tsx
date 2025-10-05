"use client";

import { useState, useEffect } from "react";
import ContactModal from "./ContactModal";
import Link from 'next/link';
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Building2,
  Home,
  Wrench,
  PaintBucket,
  Phone,
  Mail,
  MapPin,
  Star,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const id = target.getAttribute("href")?.replace("#", "");
      if (id) {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleScroll));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleScroll));
    };
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50"
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Building2 className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-800">
              FUTUREDGE HOMES LTD.
            </span>
          </motion.div>

 {/* Desktop Links */}
  <div className="hidden md:flex space-x-6 text-gray-700 font-semibold">
    {/* <L</Link>ink href="/">Home</Link>
    <Link href="/#services">Services</Link>
    <Link href="/#projects">Projects</Link>
    <Link href="/#contact">Contact</Link> */}
    <Link href="/about" className="text-orange-500">
      Communities
    </Link>
  </div>

          {/* Mobile Menu Button */}
          <button
    className="md:hidden"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    {isMenuOpen ? (
      <X className="h-6 w-6" />
    ) : (
      <Menu className="h-6 w-6" />
    )}
  </button>
           {/* ✅ Add this block BELOW the closing </button> */}
  {isMenuOpen && (
    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-40 px-4 py-4">
      <Link
        href="/about"
        className="block text-orange-500 font-semibold"
        onClick={() => setIsMenuOpen(false)}
      >
        Communities
      </Link>
    </div>
  )}
        </nav>

        {/* Mobile Menu */}
      </motion.header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-600/20 z-10" />
          <Image
            src="/images/mainPhoto.JPG"
            alt="Construction site with cranes and buildings"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Building the Future with{" "}
            <span className="text-yellow-400">Precision</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Your Trusted Home Builder
          </motion.p>

          { <motion.button
          
        onClick={() => setIsContactModalOpen(true)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center space-x-2"
          >
            <span>Contact Us</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button> }
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-8"
            >
              About{" "}
              <span className="text-orange-500">
                FUTUREDGE HOMES LTD.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 mb-12 leading-relaxed"
            >
              Futuredge Homes Ltd. has been shaping the future of real estate
              through high-quality residential and commercial developments.
              Built on a foundation of integrity, innovation, and attention to
              detail, we bring our clients’ visions to life with precision and
              care.
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-8">
              <Image
                src="/images/sidePhoto.JPG"
                alt="Professional construction team"
                width={800}
                height={400}
                className="w-full max-w-2xl mx-auto rounded-xl shadow-lg object-cover"
              />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Quality Assured",
                  desc: "Every project meets our rigorous standards",
                },
                {
                  icon: Building2,
                  title: "Expert Team",
                  desc: "Skilled professionals with decades of experience",
                },
                {
                  icon: Star,
                  title: "Client Focused",
                  desc: "Your vision is our priority",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <item.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Our <span className="text-blue-600">Services</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              From concept to completion, we offer comprehensive construction
              services tailored to your needs.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Home,
                title: "Residential Construction",
                desc: "Custom homes and residential developments",
                color: "bg-orange-500",
              },
              {
                icon: Building2,
                title: "Commercial Projects",
                desc: "Office buildings, retail spaces, and warehouses",
                color: "bg-blue-600",
              },
              {
                icon: Wrench,
                title: "Renovation & Interiors",
                desc: "Modernizing and upgrading existing structures",
                color: "bg-yellow-500",
              },
              {
                icon: PaintBucket,
                title: "Architectural Design",
                desc: "Creative design solutions for unique projects",
                color: "bg-green-500",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Featured <span className="text-yellow-500">Projects</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Explore some of our recent work that showcases our commitment to
              excellence.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(() => {
              const projects = [
                {
                  image: "/images/house-1.jpg", 
                },
                {
                  image: "/images/house-2.jpg",
                },
                {
                  image: "/images/img-3.jpg",
                },
                {
                  image: "/images/img-4.jpg",
                },
                {
                  image: "/images/img-5.jpg",
                },
                {
                  image: "/images/img-6.jpg",
                },
              ];

              return projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-200">{project.category}</p>
                  </div>
                </motion.div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Get In <span className="text-orange-500">Touch</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Ready to start your next project? Contact us today for a free
              consultation.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-500 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">(780) 245-0238</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">futuredgehomes@gmail.com</p>
                    </div>
                  </div>
                  {/* <div className="flex items-center space-x-4">
                    <div className="bg-yellow-500 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">FUTUREDGE HOMES LTD.</h4>
                      <p className="text-gray-600">
                        Futuredge Homes LTD.
                        <br />
                        3736 W eidle Crescent SW,
                        <br />
                        Edmonton Alberta T6W 2E2
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold">
                  FUTUREDGE HOMES LTD.
                </span>
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
                <li>Phone : (780) 245-0238</li>
                <li>Email : futuredgehomes@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} FUTUREDGE HOMES LTD. Real
              Estate. All rights reserved.
            </p>
          </div>
        </div>
         {isContactModalOpen && (
        <ContactModal onClose={() => setIsContactModalOpen(false)} />
      )}
      </footer>
    </div>
  );
}
