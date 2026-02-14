import React from 'react';
import { motion } from 'framer-motion';

const Highlight = ({ children }) => (
    <span className="font-semibold text-purple-600 dark:text-purple-400">{children}</span>
);

const About = () => {
    return (
        <section id="about" className="py-28 px-6 relative transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50/40 via-transparent to-purple-50/40 dark:from-white/[0.02] dark:via-transparent dark:to-white/[0.02] pointer-events-none" />
            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Heading */}
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-sm">
                            <span className="text-slate-900 dark:text-white">About </span>
                            <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-400 bg-clip-text text-transparent">Me</span>
                        </h2>
                        <div className="mt-3 mx-auto w-20 h-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-14 items-center">
                        {/* Left — Single premium image */}
                        <div className="relative group">
                            <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-50 blur-sm transition-all duration-500" />
                            <div className="relative overflow-hidden rounded-2xl border border-slate-200/50 dark:border-white/5 shadow-lg bg-white dark:bg-navy">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                                    alt="Dashboard Analytics"
                                    className="w-full object-cover aspect-[4/3] group-hover:scale-[1.03] transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Right — Text + Stats */}
                        <div className="space-y-6">
                            <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                As a Computer Science student at IIIT Kota, I specialize in transforming complex datasets into clear, actionable business strategies. My technical foundation in <Highlight>Python</Highlight>, <Highlight>SQL</Highlight>, and <Highlight>Power BI</Highlight> allows me to uncover hidden patterns and drive evidence-based decision-making.
                            </p>
                            <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                I am passionate about bridging the gap between data and strategy. Through advanced <Highlight>KPI Tracking</Highlight> and intuitive <Highlight>Dashboard Development</Highlight>, I help organizations optimize performance and achieve sustainable growth.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                {[
                                    { value: '3+', label: 'Data Projects Completed' },
                                    { value: 'Strong', label: 'Analytical Foundation' },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.04 }}
                                        className="relative group p-5 rounded-2xl text-center border border-slate-200/60 dark:border-white/5 bg-white/80 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-400/30 dark:hover:border-purple-500/20 transition-all duration-500 cursor-default overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <h4 className="relative text-3xl font-extrabold text-slate-900 dark:text-white mb-1">{stat.value}</h4>
                                        <div className="relative mx-auto w-10 h-0.5 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 rounded-full mb-2" />
                                        <span className="relative text-sm text-slate-500 dark:text-slate-400">{stat.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
