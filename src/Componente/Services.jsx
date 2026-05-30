import React from 'react';
import { motion } from 'framer-motion';

// --- Animation Variants ---

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each card popping in
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 12 } // Bouncy spring
  }
};

const drawPath = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" }
  }
};

// --- Components ---

const ServiceCard = ({ title, color }) => {
  return (
    <motion.div 
      variants={cardVariant}
      whileHover={{ 
        scale: 1.03, 
        y: -5,
        transition: { type: "spring", stiffness: 300 } 
      }}
      whileTap={{ scale: 0.98 }}
      className={`${color} border-2 border-brand-black rounded-2xl h-44 flex items-center justify-center relative cursor-pointer`}
    >
      {/* Little White Circle in Top Right */}
      <div className="absolute top-4 right-4 w-6 h-6 bg-white border-2 border-brand-black rounded-full"></div>
      
      {/* Text */}
      <h3 className="font-bold text-xl text-brand-black tracking-tight">
        {title}
      </h3>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-8 px-2">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section with Arrow */}
         <div className="relative inline-block mb-16">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-black bg-brand-yellow/60 border-2 border-transparent px-2 py-1"
            >
              Featured Projects
            </motion.h2>

            {/* Hand Drawn Arrow - Animated Drawing Effect */}
           <motion.svg 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="absolute -bottom-13 left-20 w-12 h-20 text-brand-black transform rotate-17" 
             viewBox="0 0 100 100" 
             fill="none" 
             stroke="currentColor" 
             strokeWidth="6" 
             strokeLinecap="round" 
             strokeLinejoin="round"
           >
              {/* Main curved shaft */}
              <motion.path variants={drawPath} d="M25,20 Q45,80 85,85" />
              {/* Arrowhead parts */}
              <motion.path variants={drawPath} d="M85,85 L65,90" />
              <motion.path variants={drawPath} d="M85,85 L75,65" />
          </motion.svg>
          </div>

        {/* 2x2 Grid Layout - Staggered Animation */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          
          {/* Card 1: Branding */}
          <ServiceCard 
            title="Branding and Identity" 
            color="bg-[#FFCcf2]" // Light Pink matching image
          />

          {/* Card 2: Print */}
          <ServiceCard 
            title="Website Design" 
            color="bg-[#FFF59E]" // Light Yellow matching image
          />

          {/* Card 3: Packaging */}
          <ServiceCard 
            title="App Design" 
            color="bg-[#8FD3F4]" // Light Blue matching image
          />

          {/* Card 4: Illustration */}
          <ServiceCard 
            title="Design Systems" 
            color="bg-[#FFCcf2]" // Light Pink matching image
          />

        </motion.div>
      </div>
    </section>
  );
};

export default Services;