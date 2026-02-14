import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Briefcase, Code2 } from 'lucide-react';

const Skills = () => {
    const skills = [
        {
            name: 'Data Analytics & BI',
            icon: <LineChart />,
            items: [
                'Python', 'SQL', 'MySQL', 'Power BI', 'Advanced Excel',
                'Exploratory Data Analysis (EDA)', 'Data Cleaning',
                'KPI Tracking', 'Dashboard Development', 'Business Intelligence',
                'Data Visualization', 'Statistical Analysis'
            ]
        },
        {
            name: 'Business Analysis',
            icon: <Briefcase />,
            items: [
                'Requirement Analysis', 'Data Interpretation', 'Stakeholder Communication',
                'Business Process Understanding', 'Problem Structuring', 'Insight Generation'
            ]
        },
        {
            name: 'Technical & Tools',
            icon: <Code2 />,
            items: [
                'HTML', 'CSS', 'JavaScript', 'React (Basic)', 'Git',
                'GitHub', 'VS Code', 'Jupyter Notebook', 'Linux (Basic)',
                'Microsoft Excel', 'Power BI Service'
            ]
        },
    ];

    return (
        <section id="skills" className="py-28 px-6 relative transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:from-transparent dark:via-white/[0.01] dark:to-transparent pointer-events-none" />
            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-sm">
                        <span className="text-slate-900 dark:text-white">Technical </span>
                        <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-400 bg-clip-text text-transparent">Expertise</span>
                    </h2>
                    <div className="mt-3 mx-auto w-20 h-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12, duration: 0.5 }}
                            className="relative group"
                        >
                            <div className="h-full p-8 rounded-2xl bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-500/40 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden">
                                {/* Top gradient line */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-fuchsia-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                                    {skill.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-5 text-slate-900 dark:text-white">{skill.name}</h3>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {skill.items.map((item) => (
                                        <span
                                            key={item}
                                            className="text-sm px-4 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-400/30 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-500/20 hover:scale-105 transition-all duration-300 cursor-default"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
