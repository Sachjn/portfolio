import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'Sales Performance Analytics',
            problem: 'Analyzed sales interaction data to improve performance visibility.',
            tools: ['Python', 'SQL', 'Power BI'],
            impact: [
                'Extracted talk-to-listen ratio and sentiment metrics',
                'Built interactive dashboards for performance tracking',
                'Identified communication bottlenecks to improve conversion rates'
            ],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
        },
        {
            title: 'Customer Churn Analysis',
            problem: 'Identified high-risk customer segments to improve retention.',
            tools: ['Python', 'SQL', 'Power BI'],
            impact: [
                'Performed exploratory data analysis and segmentation',
                'Identified key churn drivers',
                'Provided actionable retention recommendations'
            ],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
        },
        {
            title: 'Employee Payroll Analytics',
            problem: 'Designed structured payroll database for HR insights.',
            tools: ['SQL', 'Database Design'],
            impact: [
                'Built normalized payroll database',
                'Analyzed salary distribution and attendance trends',
                'Generated reports for HR decision-making'
            ],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
        }
    ];

    return (
        <section id="projects" className="py-28 px-6 relative transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50/40 via-transparent to-purple-50/40 dark:from-white/[0.02] dark:via-transparent dark:to-white/[0.02] pointer-events-none" />
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-sm">
                        <span className="text-slate-900 dark:text-white">Featured </span>
                        <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-400 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <div className="mt-3 mx-auto w-20 h-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="relative group"
                        >
                            {/* Hover glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500" />

                            <div className="relative bg-white dark:bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-500/20 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-500/40 transition-all duration-500 flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                                {/* Image */}
                                <div className="relative h-44 overflow-hidden shrink-0">
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent z-10" />
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>

                                <div className="p-6 flex flex-col h-full">
                                    <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-400 bg-clip-text text-transparent">
                                        {project.title}
                                    </h3>

                                    <div className="mb-3 text-sm">
                                        <span className="text-xs uppercase tracking-widest text-purple-600 dark:text-purple-400 font-semibold mr-2">Tools:</span>
                                        <span className="text-purple-600 dark:text-purple-400 font-medium">{project.tools.join(', ')}</span>
                                    </div>

                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-300/30 dark:via-purple-500/20 to-transparent mb-3" />

                                    <div className="mb-3">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-1">Problem</h4>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{project.problem}</p>
                                    </div>

                                    <div className="mb-4 flex-grow">
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-2">Impact</h4>
                                        <ul className="space-y-1.5">
                                            {project.impact.map((point, i) => (
                                                <li key={i} className="text-slate-600 dark:text-slate-300 text-sm flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-1.5 shrink-0" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
