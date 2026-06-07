import React from 'react';
import { motion } from 'framer-motion';

// --- Animation Variants ---

// 1. The "Card Deal" Effect: Slides in from bottom/left with a tilt, then snaps straight
const cardVariant = {
  hidden: { 
    y: 50, 
    opacity: 0, 
    rotate: -4, 
    x: -20 
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    rotate: 0, 
    x: 0,
    transition: { 
      type: "spring", 
      bounce: 0.4, 
      duration: 0.8 
    }
  }
};

// 2. Floating Animation for Stars (Infinite Loop)
const floatVariant = (delay) => ({
  animate: {
    y: [0, -15, 0],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  },
});

// 3. Arrow Drawing
const drawPath = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut", delay: 0.2 }
  }
};

const ExperienceCard = ({ date, title, description, color }) => {
  return (
    <motion.div 
      variants={cardVariant}
      whileHover={{ 
        scale: 1.02, 
        y: -8, 
        rotate: 1,
        boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" // Hard shadow adds "Pop"
      }}
      className={`relative ${color} border-2 border-brand-black max-w-3xl w-full rounded-2xl p-6 md:p-8 cursor-default transition-shadow`}
    >
      {/* White Circle in Top Right */}
      <div className="absolute top-6 right-6 w-6 h-6 bg-white border-2 border-brand-black rounded-full"></div>
      
      {/* Header Section with Divider */}
      <div className="border-b-[1.5px] border-brand-black pb-4 mb-4 pr-8">
        <span className="font-bold text-brand-black text-sm mb-1 block">
          {date}
        </span>
        <h3 className="font-black text-xl md:text-2xl text-brand-black leading-tight">
          {title}
        </h3>
      </div>
      
      {/* Description Text */}
      <p className="font-normal text-brand-black leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
     {
      date: "April 2026 - Present",
      title: "UI Designer at Lyzr AI",
      description: "As a UI Designer at Lyzr AI, I craft intuitive interfaces for agentic workflows, AI automation, and smart dashboards. I simplify complex AI interactions, create scalable design systems, and work closely with product and engineering to deliver seamless, user-centric experiences.",
      color: "bg-[#8FD3F4]" // Light Blue
    },
    {
      date: "May 2025 - April 2026",
      title: "UX Designer at JobTwine",
      description: "I lead end-to-end UX for an AI-powered hiring platform, designing intuitive recruiter and candidate workflows. I simplify complex journeys, build scalable design systems, and collaborate with product and engineering to deliver clear, accessible, and user-friendly experiences.",
      color: "bg-[#D1FF8C]" // Light Green
    },
    {
      date: "Oct 2023 - Apr 2025",
      title: "UX/UI Designer at Simpliaxis.",
      description: "Designed UX for Ed-tech and business platforms, focusing on usability and structured information architecture. Created wireframes, user flows, and high-fidelity UI while collaborating with cross-functional teams to align with product and business goals.",
      color: "bg-[#FFF59E]" // Light Yellow
    },
    {
      date: "May 2023 - Sep 2023",
      title: "UX Intern at JobTwine",
      description: "Contributed to user flows, wireframes, and UI improvements for a SaaS hiring platform, collaborating closely with product and engineering.",
      color: "bg-[#FFCcf2]" // Light Pink
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden flex justify-center">
      
      <div className="max-w-7xl mx-auto relative w-full flex flex-col items-center">
        
        {/* --- DECORATIVE STARS (Animated Floating) --- */}
        
        {/* Pink Star (Left) */}
        <motion.div 
          variants={floatVariant(0)}
          animate="animate"
          className="hidden md:block absolute -left-32 top-0 text-[#FFCcf2]"
        >
           <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
           </svg>
        </motion.div>

        {/* Yellow Star (Bottom Left) */}
        <motion.div 
          variants={floatVariant(1.5)}
          animate="animate"
          className="hidden md:block absolute -left-20 bottom-10 text-[#FFF59E]"
        >
            <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
           </svg>
        </motion.div>

        {/* Blue Star (Right) */}
        <motion.div 
          variants={floatVariant(0.5)}
          animate="animate"
          className="hidden md:block absolute -right-32 top-1/3 text-[#8FD3F4]"
        >
            <svg width="55" height="55" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
           </svg>
        </motion.div>


        {/* --- TITLE SECTION --- */}
        <div className="relative mb-24 w-full max-w-3xl pl-4 md:pl-0"> 
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block relative"
          >
            <h2 className="text-3xl bg-[#FFF59E]/80 border-2 border-transparent px-3 py-1 text-brand-black relative z-10 font-bold">
              Career Journey
            </h2>
          
            {/* Hand Drawn Arrow - Animated */}
            <motion.svg 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              viewBox="0 0 60 70" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="absolute left-10 top-16 w-16 h-50 text-brand-black -rotate-90"
            >
              {/* The main curve */}
              <motion.path variants={drawPath} d="M35,5 C35,6 7,15 10,65" />
              
              {/* The arrow tip */}
              <motion.path variants={drawPath} d="M10,65 L1,55" />
              <motion.path variants={drawPath} d="M10,65 L20,60" />
            </motion.svg>
            </motion.div>
          </div>

          {/* --- EXPERIENCE CARDS --- */}
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }} // Triggers when 100px into view
            transition={{ staggerChildren: 0.3 }} // Delays each card by 0.3s
            className="flex flex-col gap-6 w-full items-center justify-center"
        >
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              {...exp}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;