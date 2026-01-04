import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Database,
  ArrowRight,
  Menu,
  X,
  Monitor,
  Heart,
  Gamepad2,
  Plane,
  MessageCircle,
  Cpu,
  Layers,
  Download,
  Briefcase,
  Rocket,
  ChevronDown,
  Globe, // Added Globe import
} from "lucide-react";

/* =============================================================
  IMAGE SETUP
  
  FOR LOCAL VS CODE:
  1. Uncomment the "import" lines below.
  2. Comment out the "const ... = 'https://...'" lines.
  =============================================================
*/

// --- UNCOMMENT THESE FOR LOCAL USE ---
// import crazzzyTube from "./Assets/Projects/CrazzyTube.png";
// import ecommerceTable from "./Assets/Projects/EcommerceTable.png";
// import mealRecipe from "./Assets/Projects/MealRecipes.png";
// import timeline from "./Assets/Projects/TimelineTable.png";
// import webBlog from "./Assets/Projects/Web-Blog.png";
// import weddingSparks from "./Assets/Projects/weddingSparks.png";
// import theDailyScroll from "./Assets/Projects/TheDailyScroll.png";
// import trendyCart from "./Assets/Projects/TrendyCart.png";
// import schoolManagement from "./Assets/Projects/school.png";
import resumeFile from "./assets/Resume.pdf";
import myPhoto from "./assets/avatar.png";

import crazzzyTube from "./assets/Projects/CrazzyTube.png";
import trendyCart from "./assets/Projects/TrendyCart.png";
import schoolManagement from "./assets/Projects/school.png";
import theDailyScroll from "./assets/Projects/TheDailyScroll.png";
import weddingSparks from "./assets/Projects/weddingSparks.png";
import webBlog from "./assets/Projects/Web-Blog.png";
import mealRecipe from "./assets/Projects/MealRecipes.png";

// --- PLACEHOLDERS FOR PREVIEW ---
const ecommerceTable =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop";

const timeline =
  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1000&auto=format&fit=crop";

// const resumeFile = "#"; // Placeholder for resume link

/* =============================================================================
  CUSTOM CSS & ANIMATIONS
  =============================================================================
*/
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap');

  :root {
    --primary: #ef4444; /* Red 500 */
    --secondary: #b91c1c; /* Red 700 */
    --dark: #0a0a0a;
    --paper-texture: url("https://www.transparenttextures.com/patterns/stardust.png"); /* Subtle noise texture */
  }

  body {
    background-color: var(--dark);
    background-image: var(--paper-texture);
    font-family: 'Space Grotesk', sans-serif;
    color: #e5e5e5;
    overflow-x: hidden;
  }

  h1, h2, h3, .font-display {
    font-family: 'Syne', sans-serif;
  }

  /* STATIC RAW PAPER BACKGROUND */
  .paper-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    background-color: #050505;
    background-image: 
      radial-gradient(circle at 50% 50%, #111 0%, #000 100%),
      url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
    pointer-events: none;
  }

  /* GLITCH TEXT EFFECT */
  .glitch-text {
    position: relative;
    display: inline-block;
  }
  
  .glitch-text::before,
  .glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark);
  }

  .glitch-text::before {
    left: 2px;
    text-shadow: -1px 0 #ef4444;
    clip: rect(24px, 550px, 90px, 0);
    animation: glitch-anim-2 3s infinite linear alternate-reverse;
  }

  .glitch-text::after {
    left: -2px;
    text-shadow: -1px 0 #991b1b;
    clip: rect(85px, 550px, 140px, 0);
    animation: glitch-anim 2.5s infinite linear alternate-reverse;
  }

  @keyframes glitch-anim {
    0% { clip: rect(11px, 9999px, 89px, 0); }
    20% { clip: rect(87px, 9999px, 16px, 0); }
    40% { clip: rect(4px, 9999px, 13px, 0); }
    60% { clip: rect(48px, 9999px, 62px, 0); }
    80% { clip: rect(66px, 9999px, 34px, 0); }
    100% { clip: rect(32px, 9999px, 96px, 0); }
  }

  @keyframes glitch-anim-2 {
    0% { clip: rect(64px, 9999px, 92px, 0); }
    20% { clip: rect(15px, 9999px, 3px, 0); }
    40% { clip: rect(93px, 9999px, 66px, 0); }
    60% { clip: rect(12px, 9999px, 58px, 0); }
    80% { clip: rect(35px, 9999px, 15px, 0); }
    100% { clip: rect(74px, 9999px, 4px, 0); }
  }

  /* GLASSMORPHISM & NEON BORDERS */
  .glass-panel {
    background: rgba(20, 0, 0, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  }

  .neon-border {
    position: relative;
    border: 1px solid rgba(239, 68, 68, 0.3);
    transition: all 0.3s ease;
  }
  
  .neon-border:hover {
    border-color: #ef4444;
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.4);
  }

  /* SCROLLBAR */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #020617;
  }
  ::-webkit-scrollbar-thumb {
    background: #334155;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ef4444;
  }

  .gh-calendar {
    filter: hue-rotate(320deg) invert(1) contrast(1.2);
    opacity: 0.8;
  }
  
  .clip-path-slant {
    clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
  }
`;

/**
 * PROJECT DATA
 */
const projects = [
  {
    id: 1,
    title: "Trendy Cart",
    category: "E-Commerce",
    description:
      "Futuristic shopping platform with seamless cart management and secure checkout flows.",
    tech: ["React", "Redux", "Node.js"],
    image: trendyCart,
    github: "https://github.com/githubRahuld/TrendyCart",
    demo: "https://trendy-cart-murex.vercel.app",
  },
  {
    id: 2,
    title: "School System",
    category: "EdTech",
    description:
      "Advanced dashboard for managing student lifecycles and administrative tasks.",
    tech: ["React", "MERN", "Dashboard"],
    image: schoolManagement,
    github: "https://github.com/githubRahuld/sandipani-frontend",
    demo: "https://sandipani-frontend.vercel.app",
  },
  {
    id: 3,
    title: "The Daily Scroll",
    category: "News Feed",
    description:
      "Infinite scroll news aggregator delivering real-time global stories.",
    tech: ["React", "NewsAPI", "Tailwind"],
    image: theDailyScroll,
    github: "https://github.com/githubRahuld/The-Dailly-Scroll",
    demo: "https://the-dailly-scroll.vercel.app",
  },
  {
    id: 4,
    title: "CrazzzyTube",
    category: "Streaming",
    description:
      "Next-gen video sharing platform with high-speed playback capabilities.",
    tech: ["MongoDB", "Express", "React"],
    image: crazzzyTube,
    github: "https://github.com/githubRahuld/Crazzzy-Tube",
    demo: "https://crazzzy-tube.vercel.app/users/login",
  },
  {
    id: 5,
    title: "Meal Recipes",
    category: "Lifestyle",
    description:
      "Smart culinary companion for discovering recipes based on your inventory.",
    tech: ["React.js", "Food API"],
    image: mealRecipe,
    github: "https://github.com/githubRahuld/MealRecipes",
    demo: "https://meal-recipes-delta.vercel.app/",
  },
  {
    id: 6,
    title: "WebBlog",
    category: "CMS",
    description: "Robust blogging architecture powered by Appwrite and React.",
    tech: ["React.js", "Appwrite"],
    image: webBlog,
    github: "https://github.com/githubRahuld/Web-Blog-Apprite",
    demo: "https://web-blog-apprite-githubrahuld.vercel.app/",
  },
  {
    id: 7,
    title: "React Table",
    category: "Components",
    description:
      "High-performance data grid with advanced sorting and filtering algorithms.",
    tech: ["React.js", "UI Kit"],
    image: ecommerceTable,
    github: "https://github.com/githubRahuld/Advanced-React-Table",
    demo: "https://advanced-react-table.vercel.app/",
  },
  {
    id: 8,
    title: "Timeline Chart",
    category: "Data Viz",
    description: "Interactive temporal visualization for project schedules.",
    tech: ["React", "Chart.js"],
    image: timeline,
    github: "https://github.com/githubRahuld/Timeline-Chart-",
    demo: "https://timeline-chart-iota.vercel.app/",
  },
  {
    id: 9,
    title: "Wedding Sparks",
    category: "Events",
    description: "Elegant event management suite for modern wedding planning.",
    tech: ["React.js", "Firebase"],
    image: weddingSparks,
    github: "https://github.com/githubRahuld/weddingSpark-frontend",
    demo: "https://wedding-spark-frontend.vercel.app/",
  },
];

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "work", "arcy", "resume", "about", "contact"];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= -300 && rect.top <= 400) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <style>{styles}</style>

      {/* STATIC PAPER BACKGROUND */}
      <div className='paper-bg' />

      <div className='relative z-10 min-h-screen'>
        {/* NAVBAR */}
        <header
          className={`fixed top-6 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled ? "px-4 md:px-8 translate-y-[-10px]" : "px-6 md:px-12"
          }`}
        >
          <div
            className={`mx-auto max-w-6xl rounded-full border border-white/5 backdrop-blur-2xl transition-all duration-500 shadow-2xl shadow-red-900/10 ${
              scrolled ? "bg-black/90 py-2" : "bg-white/5 py-4"
            }`}
          >
            <div className='px-6 md:px-8 flex items-center justify-between'>
              {/* Logo */}
              <div
                className='flex items-center gap-3 cursor-pointer group'
                onClick={() => scrollTo("home")}
              >
                <div className='relative'>
                  <div className='w-10 h-10 bg-gradient-to-tr from-red-600 to-red-800 rounded-full flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-700'>
                    <Code2 size={20} className='text-white' />
                  </div>
                  <div className='absolute inset-0 border border-white/20 rounded-full animate-ping opacity-20' />
                </div>
                <span className='text-lg font-bold text-white tracking-widest font-display hidden sm:block'>
                  RAHUL<span className='text-red-500'>.DEV</span>
                </span>
              </div>

              {/* Desktop Menu */}
              <div className='hidden md:flex items-center gap-1 bg-black/40 p-1.5 rounded-full border border-white/5'>
                {["Home", "Work", "Arcy", "Resume", "About", "Contact"].map(
                  (item) => {
                    const id = item.toLowerCase();
                    const isActive = activeSection === id;
                    return (
                      <button
                        key={item}
                        onClick={() => scrollTo(id)}
                        className={`relative px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden ${
                          isActive
                            ? "text-white"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {isActive && (
                          <span className='absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-full -z-10 animate-fade-in' />
                        )}
                        {item === "Arcy" ? "Arcy Digital" : item}
                      </button>
                    );
                  }
                )}
              </div>

              {/* Action Buttons */}
              <div className='flex items-center gap-4'>
                <a
                  href='https://github.com/githubrahuld'
                  target='_blank'
                  rel='noreferrer'
                  className='hidden sm:flex p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors'
                >
                  <Github size={20} />
                </a>
                <button
                  className='md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors'
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className='fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl pt-32 px-8 flex flex-col gap-6 animate-fade-in'>
            {["Home", "Work", "Arcy Digital", "Resume", "About", "Contact"].map(
              (item, idx) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollTo(
                      item
                        .toLowerCase()
                        .replace(" ", "-")
                        .replace("digital", "")
                    );
                    setIsMenuOpen(false);
                  }}
                  className='text-4xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 hover:to-red-500 text-left uppercase transition-all transform hover:translate-x-4'
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {item}
                </button>
              )
            )}
          </div>
        )}

        {/* HERO SECTION */}
        <section
          id='home'
          className='min-h-screen flex items-center pt-24 md:pt-20 px-6 relative overflow-hidden lg:mt-10'
        >
          <div className='max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center'>
            {/* LEFT SIDE - TEXT CONTENT */}
            <div className='relative z-10 flex flex-col items-start gap-8 text-left'>
              {/* Badge */}
              {/* Main Title */}
              <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] md:leading-[0.9] font-display tracking-tighter mix-blend-overlay'>
                <span
                  className='block hover:text-red-200 transition-colors duration-700 animate-slide-up'
                  style={{ animationDelay: "0.1s" }}
                >
                  CRAFTING
                </span>
                <span
                  className='block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/10 animate-slide-up'
                  style={{ animationDelay: "0.2s" }}
                >
                  DIGITAL
                </span>
                <span
                  className='block text-red-500 glitch-text animate-slide-up'
                  data-text='REALITY'
                  style={{ animationDelay: "0.3s" }}
                >
                  REALITY
                </span>
              </h1>

              {/* Subtext */}
              <p
                className='text-base md:text-xl text-slate-400 max-w-lg leading-relaxed animate-fade-in md:border-l-2 md:border-red-500/20 md:pl-6'
                style={{ animationDelay: "0.5s" }}
              >
                I am <strong className='text-white'>Rahul Dhakad</strong>. A
                visionary Full Stack Developer engineering the bridge between
                raw data and immersive user experiences.
              </p>

              {/* CTA Buttons */}
              <div
                className='flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in w-full sm:w-auto'
                style={{ animationDelay: "0.7s" }}
              >
                <button
                  onClick={() => scrollTo("work")}
                  className='group relative px-8 py-4 bg-white text-black font-bold font-display uppercase tracking-widest overflow-hidden rounded-full transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] w-full sm:w-auto'
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                  <span className='relative z-10 flex items-center justify-center gap-3'>
                    Explore Work{" "}
                    <ArrowRight
                      size={18}
                      className='group-hover:translate-x-1 transition-transform'
                    />
                  </span>
                </button>

                <button
                  onClick={() => scrollTo("contact")}
                  className='px-8 py-4 bg-white/5 border border-white/10 text-white font-bold font-display uppercase tracking-widest rounded-full hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-3 w-full sm:w-auto'
                >
                  <Mail size={18} /> Initiate Comms
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <div
              className='relative z-10 flex justify-center md:justify-end animate-fade-in order-1 md:order-2'
              style={{ animationDelay: "0.9s" }}
            >
              <div className='relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px]'>
                {/* Decorative Elements */}
                <div className='absolute inset-0 bg-red-600/10 rounded-full blur-[80px] animate-pulse-slow' />
                <div className='absolute -inset-4 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]' />
                <div className='absolute -inset-8 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]' />

                {/* Image Container */}
                <div className='absolute inset-0 rounded-full overflow-hidden border-2 border-white/10 grayscale hover:grayscale-0 transition-all duration-700'>
                  <img
                    src={myPhoto}
                    alt='Rahul Dhakad'
                    className='w-full h-full object-cover transform scale-110 hover:scale-100 transition-transform duration-700'
                  />
                  {/* Glitch Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60' />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className='absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer'
            onClick={() => scrollTo("work")}
          >
            <span className='text-[10px] uppercase tracking-[0.2em]'>
              Scroll
            </span>
            <ChevronDown size={24} />
          </div>
        </section>

        {/* WORK SECTION */}
        <section id='work' className='py-32 px-6'>
          <div className='max-w-7xl mx-auto'>
            <div className='mb-20 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-white/10 pb-8'>
              <div>
                <h2 className='text-4xl md:text-6xl font-bold text-white mb-2 font-display uppercase'>
                  Selected <span className='text-red-500'>Projects</span>
                </h2>
                <p className='text-slate-500 font-mono'>
                  deployments // 2024-2025
                </p>
              </div>
              <a
                href='https://github.com/githubrahuld'
                target='_blank'
                rel='noreferrer'
                className='hidden md:flex items-center gap-2 text-red-400 hover:text-white transition-colors uppercase font-bold tracking-widest text-sm mt-4 md:mt-0'
              >
                View Repository <ArrowRight size={16} />
              </a>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projects.map((project) => (
                <div
                  key={project.id}
                  className='group relative bg-slate-900/40 border border-white/5 overflow-hidden hover:border-red-500/50 transition-all duration-500 rounded-none'
                >
                  <div className='aspect-video relative overflow-hidden'>
                    <div className='absolute inset-0 bg-red-900/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay' />
                    <img
                      src={project.image}
                      alt={project.title}
                      className='w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 grayscale group-hover:grayscale-0'
                    />
                    <div className='absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                      <div className='flex gap-4 justify-end'>
                        {project.github && (
                          <a
                            href={project.github}
                            className='text-white hover:text-red-400'
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            className='text-white hover:text-red-400'
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='p-6 relative'>
                    <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/10 to-transparent -mr-10 -mt-10 rounded-full blur-xl group-hover:bg-red-500/20 transition-all' />
                    <div className='text-red-400 text-xs font-mono mb-2 uppercase tracking-widest'>
                      {project.category}
                    </div>
                    <h3 className='text-2xl font-bold text-white mb-2 font-display uppercase'>
                      {project.title}
                    </h3>
                    <p className='text-slate-400 text-sm mb-4 line-clamp-2'>
                      {project.description}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className='px-2 py-1 bg-white/5 text-[10px] text-slate-300 uppercase tracking-wider border border-white/10'
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARCY DIGITAL BUSINESS SECTION (New) */}
        <section id='arcy' className='py-32 px-6 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-b from-red-900/20 to-black pointer-events-none' />
          <div className='max-w-7xl mx-auto relative z-10'>
            <div className='glass-panel p-8 md:p-16 border border-red-500/30 rounded-2xl relative overflow-hidden group'>
              <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[100px] group-hover:bg-red-600/20 transition-all duration-1000' />

              <div className='grid md:grid-cols-2 gap-12 items-center'>
                <div>
                  <div className='inline-flex items-center gap-2 mb-6 px-3 py-1 rounded border border-red-500 text-red-400 text-xs font-bold tracking-[0.2em] uppercase'>
                    <Rocket size={14} /> Freelance Agency
                  </div>
                  <h2 className='text-4xl md:text-6xl font-bold text-white mb-6 font-display'>
                    ARCY{" "}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600'>
                      BUSINESS
                    </span>{" "}
                    <br /> SOLUTIONS
                  </h2>
                  <p className='text-xl text-slate-300 mb-8 leading-relaxed'>
                    My dedicated agency for delivering high-impact web
                    solutions. We transform complex requirements into sleek,
                    functional digital products for businesses worldwide.
                  </p>
                  <ul className='space-y-4 mb-10'>
                    {[
                      "Custom Web Development",
                      "UI/UX Design Systems",
                      "Performance Optimization",
                    ].map((item) => (
                      <li
                        key={item}
                        className='flex items-center gap-3 text-slate-400 font-mono text-sm'
                      >
                        <span className='w-1.5 h-1.5 bg-red-500' /> {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href='https://arcy-digital.vercel.app/'
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]'
                  >
                    Visit Agency <ExternalLink size={20} />
                  </a>
                </div>

                <div className='relative mt-8 md:mt-0'>
                  {/* Holographic Card Effect */}
                  <div className='relative z-10 bg-black/80 border border-red-500/50 p-8 rounded-xl transform rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl shadow-red-900/20'>
                    <div className='flex items-center justify-between mb-8 border-b border-white/10 pb-4'>
                      <div className='text-2xl font-bold text-white'>ARCY.</div>
                      <div className='flex gap-2'>
                        <div className='w-3 h-3 rounded-full bg-red-500' />
                        <div className='w-3 h-3 rounded-full bg-yellow-500' />
                        <div className='w-3 h-3 rounded-full bg-green-500' />
                      </div>
                    </div>
                    <div className='space-y-4 font-mono text-sm text-red-300'>
                      <div className='flex justify-between'>
                        <span>Status:</span>{" "}
                        <span className='text-green-400'>Online</span>
                      </div>
                      <div className='flex justify-between'>
                        <span>Projects:</span>{" "}
                        <span className='text-white'>Active</span>
                      </div>
                      <div className='flex justify-between'>
                        <span>Tech:</span>{" "}
                        <span className='text-white'>Next.js / React</span>
                      </div>
                      <div className='h-32 bg-red-900/20 border border-red-500/30 rounded mt-4 flex items-center justify-center'>
                        <Globe
                          size={48}
                          className='text-red-500 animate-pulse'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='absolute inset-0 border-2 border-red-500 rounded-xl transform -rotate-3 z-0 opacity-50' />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESUME SECTION (New) */}
        <section
          id='resume'
          className='py-20 px-6 bg-slate-900/50 border-y border-white/5'
        >
          <div className='max-w-5xl mx-auto text-center'>
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-8 font-display uppercase'>
              Professional <span className='text-red-500'>Dossier</span>
            </h2>

            <div className='glass-panel p-10 max-w-3xl mx-auto rounded-xl flex flex-col md:flex-row items-center justify-between gap-8'>
              <div className='text-left'>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  Rahul Dhakad
                </h3>
                <p className='text-slate-400 mb-4'>
                  Full Stack Developer & Solutions Architect
                </p>
                <div className='flex gap-2 text-xs font-mono text-red-500'>
                  <span>REACT</span> • <span>NODE</span> • <span>MERN</span>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 w-full md:w-auto'>
                <a
                  href={resumeFile}
                  className='flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-red-400 transition-colors w-full sm:w-auto'
                >
                  <Download size={20} /> Download CV
                </a>
                <a
                  href='#' /* Link to actual PDF here */
                  className='flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors w-full sm:w-auto'
                >
                  <ExternalLink size={20} /> View Online
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id='about' className='py-32 px-6 relative'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid md:grid-cols-12 gap-16'>
              <div className='md:col-span-7 space-y-10'>
                <h2 className='text-4xl md:text-6xl font-bold text-white font-display uppercase'>
                  The <span className='text-red-500'>Human</span> <br /> Element
                </h2>

                <div className='text-lg text-slate-300 leading-relaxed space-y-6 border-l-2 border-red-500/20 pl-6'>
                  <p>
                    Hi Everyone, I am{" "}
                    <strong className='text-white'>Rahul Dhakad</strong> from{" "}
                    <span className='text-red-500'>Indore, India</span>. I
                    graduated with a B.Tech in CSE from Jaypee University of
                    Engineering and Technology.
                  </p>
                  <p>
                    Currently deployed as a{" "}
                    <strong className='text-white'>Backend Developer</strong> at{" "}
                    <span className='text-red-500'>BluePhant Pvt Ltd</span>. My
                    mission is to engineer systems that are robust, scalable,
                    and aesthetically superior.
                  </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4'>
                  <div className='p-4 bg-slate-900 border border-white/10 text-center hover:border-red-500/50 transition-colors'>
                    <Gamepad2 className='mx-auto text-red-400 mb-2' />
                    <span className='text-sm font-bold text-white uppercase tracking-wider'>
                      Gaming
                    </span>
                  </div>
                  <div className='p-4 bg-slate-900 border border-white/10 text-center hover:border-red-500/50 transition-colors'>
                    <Plane className='mx-auto text-red-400 mb-2' />
                    <span className='text-sm font-bold text-white uppercase tracking-wider'>
                      Travel
                    </span>
                  </div>
                  <div className='p-4 bg-slate-900 border border-white/10 text-center hover:border-red-500/50 transition-colors'>
                    <MessageCircle className='mx-auto text-red-400 mb-2' />
                    <span className='text-sm font-bold text-white uppercase tracking-wider'>
                      Connect
                    </span>
                  </div>
                </div>
              </div>

              <div className='md:col-span-5 space-y-8'>
                <div className='glass-panel p-8 rounded-none border-l-4 border-l-red-500'>
                  <h3 className='text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-2'>
                    <Layers size={20} className='text-red-400' /> Tech Arsenal
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {[
                      "React",
                      "Node.js",
                      "Express",
                      "MongoDB",
                      "Redux",
                      "Tailwind",
                      "Git",
                      "Java",
                      "C++",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className='px-3 py-2 bg-black/50 text-red-100 font-mono text-sm border border-red-500/20 hover:border-red-500/80 transition-colors cursor-default'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='glass-panel p-8 rounded-none border-l-4 border-l-white'>
                  <h3 className='text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-2'>
                    <Github size={20} /> Code Frequency
                  </h3>
                  <div className='bg-black p-4 border border-white/10 overflow-hidden'>
                    <img
                      src='https://ghchart.rshah.org/ef4444/githubrahuld'
                      alt='Github Chart'
                      className='gh-calendar w-full'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id='contact' className='py-32 px-6 bg-black relative'>
          <div className='max-w-4xl mx-auto text-center relative z-10'>
            <h2 className='text-5xl md:text-8xl font-bold text-white font-display uppercase mb-8'>
              System <br />{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600'>
                Handshake
              </span>
            </h2>
            <p className='text-xl text-slate-400 mb-12 max-w-xl mx-auto'>
              Initiate connection for collaborations, freelance inquiries, or
              technical discussions.
            </p>

            <a
              href='mailto:rahuldhakad201.rd@gmail.com'
              className='inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-red-400 transition-all hover:scale-105'
            >
              <Mail className='mr-3' size={20} /> Initialize Chat
            </a>

            <div className='mt-20 flex justify-center gap-12'>
              <SocialLink
                href='https://github.com/githubrahuld'
                icon={<Github size={32} />}
                label='GITHUB'
              />
              <SocialLink
                href='https://www.linkedin.com/in/rahuldhakad201/'
                icon={<Linkedin size={32} />}
                label='LINKEDIN'
              />
              <SocialLink
                href='https://x.com/RahulDh94738879'
                icon={<Terminal size={32} />}
                label='TWITTER'
              />
            </div>

            <footer className='mt-24 text-slate-600 font-mono text-xs uppercase tracking-widest'>
              <p>System Architecture by Rahul Dhakad © 2026</p>
              <p className='mt-2 text-red-900'>End of Line</p>
            </footer>
          </div>
        </section>
      </div>
    </>
  );
};

/* --- Subcomponents --- */

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target='_blank'
    rel='noreferrer'
    className='group flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors'
  >
    <div className='transform group-hover:-translate-y-2 transition-transform duration-300'>
      {icon}
    </div>
    <span className='text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
      {label}
    </span>
  </a>
);

export default App;
