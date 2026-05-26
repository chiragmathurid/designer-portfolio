import React from 'react';
import { FiX, FiInstagram, FiZap } from 'react-icons/fi';
import { FaDribbble } from 'react-icons/fa'; // Using FaDribbble for the icon
import { SiFramer } from 'react-icons/si'; // Using SiFramer for the icon

const Footer = () => {
    return (
        <footer className="bg-brand-black rounded-t-xl text-white font-sans pt-8 pb-4">
            {/* Top Navigation & Icons */}
            <div className="w-full mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4 mb-16">
                {/* Navigation Links */}
                <nav className="flex items-center gap-8 font-bold text-lg">
                    <a href="#portfolio" className="hover:text-brand-pink transition-colors">Portfolio</a>
                    <a href="#faq" className="hover:text-brand-pink transition-colors">FAQ</a>
                    <a href="#resume" className="hover:text-brand-pink transition-colors">Resume</a>
                </nav>

                {/* Social Icons */}
                <div className="flex items-center gap-6 text-2xl">
                    <a href="#" className="hover:text-brand-pink transition-colors"><FiX /></a>
                    <a href="#" className="hover:text-brand-pink transition-colors"><FaDribbble /></a>
                    <a href="#" className="hover:text-brand-pink transition-colors"><FiInstagram /></a>
                </div>
            </div>

            {/* Main Call to Action Section */}
            <div className="flex flex-col items-center text-center px-4 mb-20">
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                    Ready to Bring Your Vision to Life?
                </h2>
                <p className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed text-white/90">
                    Let’s make something incredible together! Reach out to discuss your project, and let’s create designs that resonate and inspire.
                </p>
                <button className="bg-white text-brand-black rounded-full px-10 py-4 font-bold text-lg hover:scale-105 transition-transform">
                    Hire Me!
                </button>
            </div>

            {/* Bottom Bar */}
            <div className="w-full mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Copyright */}
                <div className="font-bold text-sm md:text-base">
                    Monica ©all rights reserved
                </div>

                {/* Template & Framer Buttons */}
                <div className="flex items-center gap-4">
                    <a href="#" className="bg-white text-brand-black rounded-full px-4 py-2 font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
                        <FiZap className="text-brand-black" />
                        Get Template
                    </a>
                    <a href="#" className="bg-white text-brand-black rounded-full px-4 py-2 font-bold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
                        <SiFramer className="text-brand-black" />
                        Made in Framer
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;