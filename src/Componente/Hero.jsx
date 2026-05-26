import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { TbBrandLinkedin, TbBrandDribbble } from "react-icons/tb";
import { LuCalendarCheck } from "react-icons/lu";

import { motion } from 'framer-motion';

// --- Animation Variants (Premium & Bouncy Settings) ---

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 20, duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each item
      delayChildren: 0.1
    }
  }
};

const popIn = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 }
  }
};

const navAnimation = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 }
  }
};

// --- Components ---

const Navbar = () => {
  return (
    <motion.nav
      variants={navAnimation}
      initial="hidden"
      animate="visible"
      className="w-full flex justify-center pt-8 pb-4"
    >
      {/* The "Pill" Container */}
      <div className="bg-white border-[1px] border-brand-black rounded-full px-6 py-5 flex items-center justify-between w-full max-w-5xl ">

        {/* Left: Logo */}
        <motion.div
          whileHover={{ rotate: 2, scale: 1.05 }}
          className="bg-[#ffd6ed] px-3 py-1 font-bold text-base tracking-tight cursor-default"
        >
          Krishna
        </motion.div>

        {/* Middle: Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          {['Portfolio', 'FAQ', 'Resume'].map((item) => (
            <a key={item} href="#" className="hover:underline decoration-2 underline-offset-4 hover:text-brand-pink transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Right: Icons & CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-3 text-lg">
            <a href='https://www.linkedin.com/in/krishnasharma28' target='_blank'><TbBrandLinkedin size={24} className="cursor-pointer hover:scale-110 transition-transform stroke-[2px]" /></a>
            <a href='https://dribbble.com/Krishna2804' target='_blank'><TbBrandDribbble size={24} className="cursor-pointer hover:scale-110 transition-transform stroke-[2px]" /></a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const ProjectCard = ({
  bgColor,
  imageSrc,
  imageAlt,
  title,
  buttonText = 'See Project',
  onAction,
}) => {
  return (
    <motion.div
      variants={fadeInUp} // Applies the stagger animation
      whileHover={{ y: -5, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
      className={`relative flex flex-col p-3 border-[1.2px] border-brand-black rounded-2xl gap-3 ${bgColor} cursor-pointer h-full`}
    >
      {/* Inner Image Container - Fixed height forces identical grid sizes */}
      <div className="w-full h-44 sm:h-48 overflow-hidden rounded-xl flex-shrink-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Content */}
      <div className="flex flex-col items-center justify-between pb-1 flex-grow">
        <h3 className="font-medium text-base md:text-lg text-center leading-snug mt-1 mb-3 text-brand-black">
          {title}
        </h3>

        <button
          type="button"
          onClick={onAction}
          className="bg-white border-[1.2px] border-brand-black rounded-full px-5 py-1 text-sm font-medium hover:-translate-y-0.5 transition-transform"
        >
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
};

const Hero = ({ onOpenCaseStudy }) => {
  return (
    <div
      className="min-h-screen bg-[#FFFEFA] text-brand-black font-sans selection:bg-brand-pink -mb-12 overflow-x-hidden"
      style={{
        backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    >

      <Navbar />

      <main className="max-w-6xl mx-auto px-4 mt-12 md:mt-16">

        {/* --- Hero Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-4 mb-32"
        >

          {/* Left Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start z-10 pl-2">

            {/* "Available for work" Badge */}
            <motion.div variants={fadeInUp} className="bg-white text-sm flex items-center gap-2 font-medium shadow-sm mb-5">
              <LuCalendarCheck size={20} className="stroke-[2px]" />
              <span>Available for work</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-5 leading-[1.1] tracking-tight text-brand-black">
              Hi, I'm
              <span className="relative inline-block bg-[#fcf084] px-2 py-1 ml-2 font-bold">
                Krishna
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-base md:text-lg font-medium leading-relaxed mb-8 max-w-md text-gray-800">
              A UX/UI Designer with 3+ years of experience designing intuitive experiences for SaaS, B2B & AI Product Platforms :)
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-10">
              <button className="bg-brand-black text-white border-2 border-brand-black rounded-full px-6 py-2 font-medium text-sm hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none">
                Get in Touch
              </button>
              <button className="bg-white text-brand-black border-2 border-brand-black rounded-full px-6 py-2 font-medium text-sm hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(200,200,200,1)] hover:shadow-none">
                See my Portfolio
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-2 font-medium text-gray-700 text-sm">
              <FiMapPin size={20} className="stroke-[2px]" />
              <span>Bangalore, Karnataka</span>
            </motion.div>
          </div>

          {/* Right Image Content */}
          <motion.div
            variants={popIn}
            className="w-full md:w-1/2 flex justify-center relative"
          >
            {/* Sparkles - Animated infinitely */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-0 right-10 text-4xl text-brand-pink"
            >✦</motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 text-4xl text-brand-yellow"
            >✦</motion.div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 right-0 text-2xl text-brand-blue-light"
            >✦</motion.div>

            {/* The Image Frame */}
            <div className="relative border-2 border-brand-black rounded-2xl bg-brand-pink p-2.5 shadow-neo rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="/krishna_image.png"
                alt="Profile"
                className="rounded-xl border-2 border-brand-black object-cover w-[380px] h-[450px] bg-white"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* --- Featured Projects Section --- */}
        <div className="mb-32">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative inline-block mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-medium bg-brand-yellow/60 border-2 border-transparent px-2 py-1 text-brand-black">
              Featured Projects
            </h2>
            {/* Hand Drawn Arrow */}
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              viewBox="0 0 60 70"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -left-10 top-20 w-16 h-50 text-brand-black -rotate-45"
            >
              <path d="M35,5 C35,5 10,25 10,55" />
              <path d="M10,55 L5,45" />
              <path d="M10,55 L20,50" />
            </motion.svg>
          </motion.div>

          {/* Projects Grid - Staggered Scroll Animation */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-2 md:px-0"
          >

            <ProjectCard
              title="AI Command Dashboard"
              bgColor="bg-[#FFCCF2]"
              imageSrc="/AI_Command_Dashboard.png"
              imageAlt="AI Command Dashboard"
              onAction={() => onOpenCaseStudy('ai')}
            />

            <ProjectCard
              title="Sustainability Dashboard"
              bgColor="bg-[#CAFF7A]"
              imageSrc="/Sustainability_Dashboard.png"
              imageAlt="Sustainability Dashboard"
              onAction={() => onOpenCaseStudy('sustainability')}
            />

            <ProjectCard
              title="Enterprise CRM Dashbaord"
              bgColor="bg-[#A2D2FF]"
              imageSrc="/Enterprise_CRM_Dashbaord.png"
              imageAlt="Enterprise CRM Dashboard"
              onAction={() => onOpenCaseStudy('crm')}
            />

            <ProjectCard
              title="Fortune Case Study"
              bgColor="bg-[#FFCCF2]"
              imageSrc="/Fortune_Case_Study.png"
              imageAlt="Fortune Case Study"
              buttonText="See Case Study"
            />

            <ProjectCard
              title="Inventory Dashboard"
              bgColor="bg-[#A2D2FF]"
              imageSrc="/Inventory_Dashboard.png"
              imageAlt="Inventory Dashboard"
            />

            <ProjectCard
              title="Video Convertor App"
              bgColor="bg-[#CAFF7A]"
              imageSrc="/Video_Convertor_App.png"
              imageAlt="Video Convertor App"
            />

          </motion.div>

          <div className="flex justify-center mt-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-[1.2px] border-brand-black text-brand-black rounded-full px-8 py-2 text-sm font-medium hover:bg-gray-50 transition-all font-sans"
            >
              View More
            </motion.button>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Hero;