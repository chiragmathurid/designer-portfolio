import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiX, FiInstagram } from 'react-icons/fi';
import { TbBrandLinkedin, TbBrandDribbble } from 'react-icons/tb';

// --- Reuse same nav items & animation style ---
const navItems = [
    { label: 'Portfolio', target: '/#portfolio' },
    { label: 'FAQ', target: '/#faq' },
    { label: 'Resume', target: 'https://drive.google.com/file/d/1pJayfzDEZZgRzL9OZT4s0tc3Ua9YhXJU/view?usp=share_link' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] },
    },
};

const stagger = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const ContactPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <div
            className="min-h-screen bg-[#FFFEFA] text-brand-black font-sans flex flex-col"
            style={{
                backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
                backgroundSize: '24px 24px',
            }}
        >
            {/* ── Navbar ── */}
            <motion.nav
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full flex justify-center pt-8 pb-4 px-4"
            >
                <div className="bg-white border border-brand-black rounded-full px-6 py-5 flex items-center justify-between w-full max-w-5xl">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ rotate: 2, scale: 1.05 }}
                        onClick={() => navigate('/')}
                        className="bg-[#ffd6ed] px-3 py-1 font-bold text-base tracking-tight cursor-pointer"
                    >
                        Krishna
                    </motion.div>

                    {/* Links */}
                    <div className="hidden md:flex items-center gap-8 font-medium text-sm">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.target}
                                target={item.target.startsWith('/') || item.target.startsWith('#') ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                    if (item.target.startsWith('/#')) {
                                        e.preventDefault();
                                        navigate('/');
                                        setTimeout(() => {
                                            document.querySelector(item.target.replace('/', ''))?.scrollIntoView({ behavior: 'smooth' });
                                        }, 100);
                                    }
                                }}
                                className="hover:underline decoration-2 underline-offset-4 hover:text-brand-pink transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex gap-3 text-lg">
                        <a href="https://www.linkedin.com/in/krishnasharma28" target="_blank" rel="noopener noreferrer">
                            <TbBrandLinkedin size={24} className="cursor-pointer hover:scale-110 transition-transform stroke-[2px]" />
                        </a>
                        <a href="https://dribbble.com/Krishna2804" target="_blank" rel="noopener noreferrer">
                            <TbBrandDribbble size={24} className="cursor-pointer hover:scale-110 transition-transform stroke-[2px]" />
                        </a>
                    </div>
                </div>
            </motion.nav>

            {/* ── Main Content ── */}
            <main className="flex-grow max-w-5xl mx-auto w-full px-6 pt-20 pb-32">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-8"
                >
                    {/* Heading */}
                    <motion.h1
                        variants={fadeUp}
                        className="text-5xl md:text-6xl font-black inline-block bg-brand-yellow px-3 py-1 w-fit"
                    >
                        Contact Me
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeUp}
                        className="text-base md:text-lg font-normal leading-relaxed max-w-md text-brand-black/80"
                    >
                        Have a project in mind or a question? Reach out via email directly,
                        or connect with me on social media.
                    </motion.p>

                    {/* Divider */}
                    <motion.hr variants={fadeUp} className="border-brand-black/10 mt-4" />

                    {/* Email + Socials Row */}
                    <motion.div
                        variants={stagger}
                        className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-6"
                    >
                        {/* Email Column */}
                        <motion.div variants={fadeUp} className="flex flex-col gap-5">
                            <span className="bg-brand-blue-light/70 px-2 py-0.5 text-base font-semibold w-fit">
                                Email
                            </span>
                            <a
                                href="mailto:krishnasharma@gmail.com"
                                className="flex items-center gap-3 text-lg font-medium hover:text-brand-pink transition-colors group"
                            >
                                <FiMail size={20} className="stroke-[2px] group-hover:scale-110 transition-transform" />
                                krishna28.id@gmail.com
                            </a>
                        </motion.div>

                        {/* Socials Column */}
                        <motion.div variants={fadeUp} className="flex flex-col gap-5">
                            <span className="bg-brand-pink/55 px-2 py-0.5 text-base font-semibold w-fit">
                                Socials
                            </span>
                            <div className="flex flex-wrap items-center gap-8">
                                <a
                                    href="https://www.linkedin.com/in/krishnasharma28"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-lg font-medium hover:text-brand-pink transition-colors group"
                                >
                                    <TbBrandLinkedin size={22} className="stroke-[2px] group-hover:scale-110 transition-transform" />
                                    @krishnasharma28 {/* 👈 replace */}
                                </a>
                                <a
                                    href="https://dribbble.com/Krishna2804"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-lg font-medium hover:text-brand-pink transition-colors group"
                                >
                                    <TbBrandDribbble size={22} className="group-hover:scale-110 transition-transform" />
                                    @Krishna2804
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </main>

            {/* ── Footer ── */}
            <footer className="bg-brand-black rounded-t-xl text-white font-sans pt-8 pb-4">
                <div className="w-full mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4 mb-16">
                    <nav className="flex items-center gap-8 font-bold text-lg">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.target}
                                target={item.target.startsWith('/') || item.target.startsWith('#') ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                    if (item.target.startsWith('/#')) {
                                        e.preventDefault();
                                        navigate('/');
                                        setTimeout(() => {
                                            document.querySelector(item.target.replace('/', ''))?.scrollIntoView({ behavior: 'smooth' });
                                        }, 100);
                                    }
                                }}
                                className="hover:text-brand-pink transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-6 text-2xl">
                        <a href="#" className="hover:text-brand-pink transition-colors"><FiX /></a>
                        <a href="https://dribbble.com/Krishna2804" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors">
                            <TbBrandDribbble />
                        </a>
                        <a href="#" className="hover:text-brand-pink transition-colors"><FiInstagram /></a>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center px-4 mb-20">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Bring Your Vision to Life?</h2>
                    <p className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed text-white/90">
                        Let's make something incredible together! Reach out to discuss your project,
                        and let's create designs that resonate and inspire.
                    </p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-white text-brand-black rounded-full px-10 py-4 font-bold text-lg hover:scale-105 transition-transform"
                    >
                        Contact Me!
                    </button>
                </div>
                <div className="w-full mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="font-bold text-sm md:text-base">Krishna ©all rights reserved</div>
                </div>
            </footer>
        </div>
    );
};

export default ContactPage;