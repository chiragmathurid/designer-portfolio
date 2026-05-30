import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

// --- Variants ---

// 1. Stagger the entrance of the list items
const listContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// 2. Fly in items from the right
const itemVariant = {
  hidden: { x: 50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

// 3. Floating Sparkles (Infinite)
const floatVariant = (delay) => ({
  animate: {
    y: [0, -10, 0],
    rotate: [0, 5, -5, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  },
});

// 4. Arrow Draw
const drawPath = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.5 }
  }
};

// Custom Component for the "Hand Drawn" Sparkle Star
const SparkleStar = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C12 0 13.5 8.5 22 12C13.5 15.5 12 24 12 24C12 24 10.5 15.5 2 12C10.5 8.5 12 0 12 0Z" />
  </svg>
);

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div 
      layout /* This prop makes siblings move smoothly when this item expands */
      variants={itemVariant}
      onClick={onClick}
      whileHover={{ scale: 1.02, x: 5 }}
      transition={{ layout: { duration: 0.3, type: "spring" } }}
      className={`
        bg-[#9EDFFF] /* Exact light blue from screenshot */
        border-2 border-brand-black rounded-xl 
        mb-4 cursor-pointer 
        overflow-hidden
        relative
        z-10
      `}
    >

      <motion.button 
        layout="position" 
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-brand-black pr-4 leading-tight">
          {question}
        </span>
        <div className="flex-shrink-0 ml-4">
           {/* Plus icon rotates to X with a spring */}
           <motion.div
             animate={{ rotate: isOpen ? 45 : 0 }}
             transition={{ type: "spring", stiffness: 300, damping: 20 }}
           >
             <FiPlus className="text-2xl stroke-[2.5px]" />
           </motion.div>
        </div>
      </motion.button>
      
      {/* Answer Section with AnimatePresence for smooth mounting/unmounting */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              <p className="font-normal text-brand-black/80 leading-relaxed text-sm md:text-base">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { 
      question: "What services do you offer?", 
      answer: "I offer a wide range of creative services including Logo Design, Brand Identity, Web Design, Packaging, and Print Materials." 
    },
    { 
      question: "How do I start a project with you?", 
      answer: "Starting is easy! Just click the 'Contact Me' button above or send an email. We'll schedule a quick call to discuss your vision." 
    },
    { 
      question: "How long does a typical project take?", 
      answer: "Timelines depend on the scope. A logo project might take 2 weeks, while a full brand identity could take 4-6 weeks." 
    },
    { 
      question: "Can you work within my budget?", 
      answer: "I believe good design should be accessible. I offer different packages and am happy to discuss options that fit your specific budget needs." 
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 relative overflow-visible">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 relative">
        
        {/* --- DECORATIVE STARS (Animated Floating) --- */}
        
        {/* Pink Sparkle */}
        <motion.div 
          variants={floatVariant(0)}
          animate="animate"
          className="absolute top-32 left-0 md:-left-8 text-[#FFCcf2] z-0"
        >
           <SparkleStar className="w-12 h-12 transform -rotate-12" />
        </motion.div>
        
        {/* Yellow Sparkle */}
        <motion.div 
          variants={floatVariant(1)}
          animate="animate"
          className="absolute bottom-0 left-10 md:left-24 text-[#FFF59E] z-0"
        >
           <SparkleStar className="w-10 h-10" />
        </motion.div>

        {/* Blue Sparkle */}
        <motion.div 
          variants={floatVariant(0.5)}
          animate="animate"
          className="absolute top-1/2 -right-4 md:-right-16 text-[#8FD3F4] z-0"
        >
           <SparkleStar className="w-14 h-14 transform rotate-12" />
        </motion.div>


        {/* --- LEFT COLUMN: Title & Arrow --- */}
        <div className="w-full md:w-1/4 relative flex flex-col items-start pt-4 z-10">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative inline-block"
          >
            <h2 className="text-3xl font-black bg-[#FFF59E] border-2 border-transparent px-3 py-1 text-brand-black">
              FAQ
            </h2>
            
            {/* Hand Drawn Arrow */}
            <motion.svg 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute top-full left-1/2 mt-2 w-16 h-16 text-brand-black transform -translate-x-1/2 rotate-12" 
              viewBox="0 0 100 100" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <motion.path variants={drawPath} d="M10,10 Q40,50 80,50" />
              <motion.path variants={drawPath} d="M80,50 L65,40" />
              <motion.path variants={drawPath} d="M80,50 L70,65" />
            </motion.svg>
          </motion.div>
        </div>

        {/* --- RIGHT COLUMN: Accordion List --- */}
        <div className="w-full md:w-3/4 relative z-20">
           <motion.div 
             variants={listContainer}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.2 }}
             className="flex flex-col w-full"
           >
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;