import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download, Instagram, MessageCircle } from 'lucide-react';
import ReactGA from 'react-ga4';
import profilePhoto from '../assets/sachin.jpg';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const Hero = () => {
    const handleConnectClick = () => {
        ReactGA.event({
            category: "Engagement",
            action: "Click",
            label: "Let's Connect Button"
        });
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center pt-24 pb-20 px-6 relative overflow-hidden transition-colors duration-500"
        >
            {/* Ambient glows */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-500/15 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-pink-400/10 dark:bg-fuchsia-600/8 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-[30%] right-[30%] w-[250px] h-[250px] bg-fuchsia-400/8 dark:bg-fuchsia-500/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="container mx-auto grid md:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10">

                {/* LEFT — Content */}
                <div className="order-2 md:order-1 text-center md:text-left">
                    <motion.span
                        {...fadeUp(0)}
                        className="inline-block text-purple-600 dark:text-purple-400 font-semibold tracking-[0.25em] uppercase text-xs mb-5"
                    >
                        Hello, I'm
                    </motion.span>

                    <motion.h1
                        {...fadeUp(0.08)}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold mb-4 leading-[1.08] tracking-tight text-slate-900 dark:text-white"
                    >
                        Sachin <br />
                        <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
                            Kannaujiya
                        </span>
                    </motion.h1>

                    <motion.h2
                        {...fadeUp(0.16)}
                        className="text-xl sm:text-2xl md:text-3xl mb-3 text-slate-700 dark:text-slate-300"
                    >
                        <span className="font-bold">Data Analyst</span>
                        <span className="text-slate-300 dark:text-slate-600 mx-2">&</span>
                        <br className="sm:hidden" />
                        <span className="font-medium bg-gradient-to-r from-purple-600 to-fuchsia-500 dark:from-purple-400 dark:to-fuchsia-400 bg-clip-text text-transparent">Business Analytics Enthusiast</span>
                    </motion.h2>

                    <motion.p {...fadeUp(0.22)} className="text-slate-500 dark:text-slate-400 text-sm mb-2">
                        📍 Mumbai, Maharashtra, India
                    </motion.p>

                    <motion.p
                        {...fadeUp(0.28)}
                        className="text-slate-600 dark:text-slate-300 text-base md:text-lg mb-9 max-w-lg mx-auto md:mx-0 leading-relaxed"
                    >
                        I analyze data to uncover insights, improve decision-making,
                        and drive business growth. Passionate about transforming
                        raw data into clear, actionable strategies.
                    </motion.p>

                    <motion.div {...fadeUp(0.34)} className="flex flex-col gap-5">
                        {/* Buttons */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            <a
                                href="#projects"
                                className="group bg-purple-600/90 hover:bg-purple-600 text-white px-7 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg hover:shadow-purple-500/20 font-semibold text-sm"
                            >
                                View Work
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </a>

                            <a
                                href="#contact"
                                onClick={handleConnectClick}
                                className="group bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 hover:from-purple-700 hover:via-fuchsia-600 hover:to-pink-600 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 font-semibold text-sm"
                            >
                                Let's Connect
                                <Mail size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </a>

                            <a
                                href="/Sachin_Kannaujiya_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="group border border-slate-200 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-500/50 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white px-7 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:bg-purple-50 dark:hover:bg-white/5 font-semibold text-sm"
                            >
                                Resume
                                <Download size={18} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                            </a>
                        </div>

                        {/* Social icons — glass bar */}
                        <div className="flex justify-center md:justify-start">
                            <div className="flex items-center gap-0.5 px-3 py-2 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 shadow-sm">
                                {[
                                    { href: "https://github.com/Sachjn", icon: <Github size={17} />, hover: "hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10" },
                                    { href: "https://www.linkedin.com/in/sachin-kannaujiya-7189a62a3", icon: <Linkedin size={17} />, hover: "hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10" },
                                    { href: "https://www.instagram.com/sachinkanojia__/", icon: <Instagram size={17} />, hover: "hover:text-pink-500 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-500/10" },
                                    { href: "mailto:kanojiasachin1789@gmail.com", icon: <Mail size={17} />, hover: "hover:text-red-500 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10", noBlank: true },
                                ].map((s, i) => (
                                    <a key={i} href={s.href} target={s.noBlank ? undefined : "_blank"} rel="noopener noreferrer"
                                        className={`p-2 rounded-full text-slate-400 dark:text-slate-500 ${s.hover} hover:-translate-y-0.5 transition-all duration-300`}>
                                        {s.icon}
                                    </a>
                                ))}
                                <div className="w-px h-4 bg-slate-200 dark:bg-white/10 mx-1" />
                                <a href="https://wa.me/919129422095?text=Hi%20Sachin%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                                    target="_blank" rel="noopener noreferrer"
                                    className="p-2 rounded-full text-slate-400 dark:text-slate-500 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-500/10 hover:-translate-y-0.5 hover:shadow-md hover:shadow-green-500/10 transition-all duration-300">
                                    <MessageCircle size={17} />
                                </a>
                            </div>
                        </div>

                        <motion.p {...fadeUp(0.42)} className="text-slate-400 dark:text-slate-500 text-xs font-medium tracking-[0.15em] text-center md:text-left">
                            +91 9129422095
                        </motion.p>
                    </motion.div>
                </div>

                {/* RIGHT — Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="order-1 md:order-2 flex items-center justify-center"
                >
                    <div className="animate-float relative w-full max-w-[340px] mx-auto">
                        {/* Radial glow */}
                        <div className="absolute inset-0 scale-[1.3] bg-gradient-radial from-purple-500/20 via-fuchsia-500/10 to-transparent dark:from-purple-500/10 dark:via-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />

                        {/* Gradient border frame */}
                        <div className="relative p-[3px] rounded-3xl bg-gradient-to-tr from-purple-500 via-pink-500 to-fuchsia-500 shadow-2xl shadow-purple-500/20 dark:shadow-purple-500/10">
                            <div className="rounded-[1.35rem] bg-white dark:bg-navy p-0 overflow-hidden">
                                <img
                                    src={profilePhoto}
                                    alt="Sachin Kannaujiya"
                                    className="w-full aspect-square object-cover rounded-[1.35rem]"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
