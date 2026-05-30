import { FiArrowLeft, FiDribbble, FiInstagram, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { TbBrandLinkedin, TbBrandDribbble } from "react-icons/tb";
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const navItems = ['Portfolio', 'FAQ', 'Resume'];

const toneClasses = {
  pink: 'bg-brand-pink/55',
  yellow: 'bg-brand-yellow/65',
  blue: 'bg-brand-blue-light/70',
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] },
  },
};

function CaseStudyPage() {

  const navigate = useNavigate();
  const { type } = useParams();
  const projectType = type;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Define data for the AI command centre
  const dataAI = {
    title: 'AI Command Centre',
    description: 'AI-driven command centre with human-in-the-loop control, ensuring every action is intelligent, validated, and execution-ready.',
    meta: [
      { label: 'Date', value: 'Mar, 2026', tone: 'pink' },
      { label: 'Service', value: 'Dashboard Design', tone: 'yellow' },
      { label: 'Client', value: 'Lyzr AI', tone: 'blue' },
      { label: 'Build in', value: 'Figma', tone: 'pink' },
    ],
    sections: [
      { src: '/AI_command_Center_1.png', bg: 'bg-brand-blue-light/85', alt: 'AI Command Dashboard' },
      { src: '/AI_command_Center_2.png', bg: 'bg-brand-pink/55', alt: 'Sustainability Dashboard view 2' }
    ]
  };

  // Define data for the Sustainability Dashboard
  const dataSustainability = {
    title: 'Sustainability Dashboard',
    description: 'AI-driven sustainability dashboard—transforming complex emissions data into clear, actionable insights for smarter, measurable impact decisions.',
    meta: [
      { label: 'Date', value: 'Jan, 2025', tone: 'pink' },
      { label: 'Service', value: 'Dashboard Design', tone: 'yellow' },
      { label: 'Client', value: 'GreenStitch', tone: 'blue' },
      { label: 'Build in', value: 'Figma', tone: 'pink' },
    ],
    sections: [
      { src: '/Sustainability_Dashboard_1.png', bg: 'bg-[#A2D2FF]', alt: 'Sustainability Dashboard Overview' },
      {
        src: '/Sustainability_Dashboard_2.png', bg: 'bg-[#FFCCF2]', alt: 'Sustainability Dashboard Details',  // Re-using as placeholder image 2 from screenshot
      },
      {
        src: '/Sustainability_Dashboard_3.png', bg: 'bg-[#CAFF7A]', alt: 'Sustainability Dashboard Analytics' // Re-using as placeholder image 3 from screenshot
      }
    ]
  };

  // Define data for the CRM Dashboard
  const dataCRM = {
    title: 'CRM Dashboard',
    description: 'AI-driven sustainability dashboard—transforming complex emissions data into clear, actionable insights for smarter, measurable impact decisions.',
    meta: [
      { label: 'Date', value: 'Feb, 2025', tone: 'pink' },
      { label: 'Service', value: 'Dashboard Design', tone: 'yellow' },
      { label: 'Client', value: 'Greenstitch', tone: 'blue' },
      { label: 'Build in', value: 'Figma', tone: 'pink' },
    ],
    sections: [
      { src: '/Enterprise_CRM_Dashbaord.png', bg: 'bg-[#A2D2FF]', alt: 'CRM Dashboard Overview' },
      { src: '/Enterprise_CRM_Dashbaord_2.png', bg: 'bg-[#FFCCF2]', alt: 'CRM Dashboard Dark Theme' }
    ]
  };

  // Define data for the Inventory
  const dataInventory = {
    title: 'Inventory Dashboard',
    description: 'An AI-powered inventory dashboard designed to simplify stock monitoring, order tracking, and performance analysis through real-time insights and intuitive data visualization.',
    meta: [
      { label: 'Date', value: 'Feb, 2025', tone: 'pink' },
      { label: 'Service', value: 'Dashboard Design', tone: 'yellow' },
      { label: 'Client', value: 'ServiceNow', tone: 'blue' },
      { label: 'Build in', value: 'Figma', tone: 'pink' },
    ],
    sections: [
      { src: '/Inventory_Dashboard_1.png', bg: 'bg-brand-blue-light/85', alt: 'Inventory Dashboard Overview 1' },
      { src: '/Inventory_Dashboard_2.png', bg: 'bg-brand-pink/55', alt: 'Inventory Dashboard Details 2' },
      { src: '/Inventory_Dashboard_3.png', bg: 'bg-brand-blue-light/85', alt: 'Inventory Dashboard Details 3' },
      { src: '/Inventory_Dashboard_4.png', bg: 'bg-brand-pink/55', alt: 'Inventory Dashboard Details 4' },
      { src: '/Inventory_Dashboard_5.png', bg: 'bg-brand-blue-light/85', alt: 'Inventory Dashboard Details 5' },
    ]
  };

  //Define data for the Aroma
  const dataAroma = {
    title: 'Aroma Cafe',
    description: 'A premium cafe website concept crafted to blend aesthetics with usability, featuring menu highlights, product discovery, and an immersive coffee-inspired visual experience.',
    meta: [
      { label: 'Date', value: 'Feb, 2025', tone: 'pink' },
      { label: 'Service', value: 'Web Design', tone: 'yellow' },
      { label: 'Client', value: 'Aroma Cafe', tone: 'blue' },
      { label: 'Build in', value: 'Figma', tone: 'pink' },
    ],
    sections: [
      { src: '/aroma_cafe.png', bg: 'bg-brand-blue-light/85', alt: 'Inventory Dashboard Overview' },
    ]
  };

  //Define data for the Video Convertor
  const dataVideo = {
    title: '3D Video Convertor App',
    description: 'An app with a simple, user-friendly interface for all ages to easily convert 2D videos into 3D. It offers trim/edit tools, video status tracking, advanced editing options, and high-quality output in multiple formats.',
    meta: [
      { label: 'Date', value: 'Nov, 2023', tone: 'pink' },
      { label: 'Service', value: 'App Design', tone: 'yellow' },
      { label: 'Client', value: 'Assignment', tone: 'blue' },
      { label: 'Build in', value: 'Figma', tone: 'pink' },
    ],
    sections: [
      { src: '/video_convertor.png', bg: 'bg-[#CAFF7A]', alt: 'Video Convertor App Overview' },
    ]
  };

  const dataMap = {
    ai: dataAI,
    sustainability: dataSustainability,
    crm: dataCRM,
    inventory: dataInventory,
    aroma: dataAroma,
    video: dataVideo,
  };

  const data = dataMap[projectType] || dataAI;

  return (
    <div className="text-brand-black">
      <header className="mx-auto w-full max-w-[1180px] px-5 pt-6 md:pt-8">
        <motion.nav
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full border border-brand-black/70 bg-white/85 px-4 py-3 backdrop-blur md:px-6"
        >
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 rounded-full border border-brand-black/70 bg-white px-3 py-1 text-sm font-medium hover:bg-brand-yellow/30"
            >
              <FiArrowLeft /> Back
            </button>
            <div className="hidden items-center gap-8 text-sm font-medium md:flex">
              {navItems.map((item) => (
                <a key={item} href="#" className="transition hover:opacity-70">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 text-[1.1rem]">
              <a href='https://www.linkedin.com/in/krishnasharma28' aria-label="LinkedIn" className="transition hover:scale-110">
                <TbBrandLinkedin size={24} />
              </a>
              <a href='https://dribbble.com/Krishna2804' aria-label="Dribbble" className="transition hover:scale-110">
                <TbBrandDribbble size={24} />
              </a>
            </div>
          </div>
        </motion.nav>
      </header>

      <main className="mx-auto w-full max-w-[1180px] px-5 pb-20 pt-12 md:pt-14">
        <section className="grid gap-10 md:grid-cols-[1.15fr_1fr] md:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.45 }}
          >
            <h1 className="inline-block bg-brand-yellow/70 px-2 py-1 text-[2rem] font-semibold leading-none md:text-[2.2rem]">
              {data.title}
            </h1>
            <p className="mt-5 max-w-[33ch] text-lg leading-relaxed text-brand-black/85">
              {data.description}
            </p>
            <button className="mt-8 rounded-full border border-brand-black bg-white px-6 py-2.5 text-lg font-medium transition hover:-translate-y-0.5 hover:shadow-neo-sm">
              See Project
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.45 }}
            transition={{ delay: 0.1 }}
            className="pt-1"
          >
            <ul className="space-y-2.5">
              {data.meta.map((item) => (
                <li
                  key={item.label}
                  className="grid grid-cols-[110px_1fr] items-center border-b border-dashed border-brand-black/15 pb-2.5 text-lg"
                >
                  <span className={`w-fit px-1 ${toneClasses[item.tone]}`}>{item.label}</span>
                  <span className="justify-self-end px-1 font-medium">
                    <span className={toneClasses[item.tone]}>{item.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {data.sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className={`mt-${index === 0 ? '14' : '8'} mt-10 rounded-[2px] border border-brand-black/50 ${section.bg} p-4 md:p-6 lg:p-10`}
          >
            <motion.img
              src={section.src}
              alt={section.alt}
              className="w-full rounded-xl border border-brand-black/70 shadow-sm"
              whileHover={{ scale: 1.012 }}
              transition={{ duration: 0.28 }}
            />
          </motion.section>
        ))}
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="rounded-t-lg bg-brand-black pb-12 pt-7 text-white"
      >
        <div className="mx-auto w-full max-w-[1280px] px-5">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[15px]">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item} href="#" className="transition hover:text-brand-yellow">
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 text-[1.25rem]">
              <a aria-label="X" href="#" className="transition hover:opacity-70">
                <FiX />
              </a>
              <a aria-label="Dribbble" href="#" className="transition hover:opacity-70">
                <FiDribbble />
              </a>
              <a aria-label="Instagram" href="#" className="transition hover:opacity-70">
                <FiInstagram />
              </a>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-[560px] text-center">
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="mt-5 text-xl leading-relaxed text-white/75">
              Let&apos;s make something incredible together. Reach out to discuss your project,
              and let&apos;s create designs that resonate and inspire.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default CaseStudyPage;