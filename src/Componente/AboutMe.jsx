import React from 'react';
import { motion } from 'framer-motion';

// --- Variants ---

// 1. Text Stagger Container
const contentContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

// 2. Text Slide Up
const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

// 3. Arrow Draw
const drawPath = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 0.5 }
  }
};

// 4. Card Animations (The Stack)
const cardStackVariant = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 } 
  }
};

const backCardLeft = {
  hidden: { x: -50, rotate: -20, opacity: 0 },
  visible: { 
    x: 0, 
    rotate: -6, 
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 12 }
  }
};

const backCardRight = {
  hidden: { x: 50, rotate: 20, opacity: 0 },
  visible: { 
    x: 0, 
    rotate: 6, 
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 12 }
  }
};

const frontCard = {
  hidden: { y: -50, scale: 0.9, opacity: 0 },
  visible: { 
    y: 0, 
    scale: 1, 
    opacity: 1,
    transition: { type: "spring", stiffness: 150, damping: 15 }
  }
};

const AboutMe = () => {
  return (
    <section className="py-24 px-4 bg-[#FFFEFA] overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* --- LEFT SIDE: Image Stack --- */}
        <div className="relative w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
            
            {/* Title & Arrow Wrapper */}
            <div className="absolute -top-28 left-0 md:-left-4 z-30">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative inline-block"
                >
                    <h2 className="text-3xl font-bold bg-[#FFF59E] border-2 border-transparent px-3 py-1 text-brand-black">
                      Who I Am?
                    </h2>
                    
                    {/* Hand Drawn Arrow - Animated */}
                    <motion.svg 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="absolute top-full left-4 w-12 h-12 text-brand-black transform rotate-12 mt-2" 
                        viewBox="0 0 100 100" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="4" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <motion.path variants={drawPath} d="M20,10 Q20,60 70,70" />
                        <motion.path variants={drawPath} d="M70,70 L55,55" />
                        <motion.path variants={drawPath} d="M70,70 L50,80" />
                    </motion.svg>
                </motion.div>
            </div>

            {/* The Interactive Stack Container */}
            <motion.div 
                variants={cardStackVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
            >
                
                {/* Layer 1 (Back): Blue Card */}
                <motion.div 
                    variants={backCardLeft}
                    whileHover={{ rotate: -12, scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
                    className="absolute inset-0 bg-[#8FD3F4] border-2 border-brand-black rounded-2xl z-0 origin-bottom-right"
                ></motion.div>
                
                {/* Layer 2 (Middle): Yellow Card */}
                <motion.div 
                    variants={backCardRight}
                    whileHover={{ rotate: 12, scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
                    className="absolute inset-0 bg-[#FFF59E] border-2 border-brand-black rounded-2xl z-10 origin-bottom-left"
                ></motion.div>
                
                {/* Layer 3 (Front): Pink Frame + Image */}
                <motion.div 
                    variants={frontCard}
                    whileHover={{ scale: 1.02, rotate: 0 }}
                    className="absolute inset-0 bg-[#FFCcf2] border-2 border-brand-black rounded-2xl z-20 p-3 shadow-neo cursor-pointer"
                >
                    <img 
                      src="/krishna_image.png" 
                      alt="Krishna" 
                        className="w-full h-full object-cover rounded-xl border-2 border-brand-black bg-white" 
                    />
                </motion.div>
            </motion.div>
        </div>

        {/* --- RIGHT SIDE: Content --- */}
        <motion.div 
            variants={contentContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="w-full md:w-1/2 flex flex-col gap-6 text-brand-black"
        >
            
            <motion.p variants={textItem} className="text-base md:text-lg font-normal leading-relaxed">
              Hello, I'm Krishna - a UX/UI designer based in Bangalore.
            </motion.p>
            
            <motion.p variants={textItem} className="text-base md:text-lg font-normal leading-relaxed">
              I design digital products that feel simple, thoughtful, and easy to use. With 3+ years of experience, I've worked across SaaS and web platforms, turning complex problems into clear, usable experiences.
            </motion.p>

            <motion.p variants={textItem} className="text-base md:text-lg font-normal leading-relaxed">
              I enjoy collaborating with founders, product teams, and developers to build solutions that are not only visually strong but also practical and scalable.
            </motion.p>

            <motion.p variants={textItem} className="text-base md:text-lg font-normal leading-relaxed">
              If you're building something meaningful, I'd love to be part of it.
            </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutMe;