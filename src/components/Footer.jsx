import React from 'react';

const Footer = () => {
    return (
        <footer className="relative py-12 transition-colors duration-500 border-t border-slate-200/40 dark:border-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-50/50 to-transparent dark:from-white/[0.02] dark:to-transparent pointer-events-none" />
            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-xl font-extrabold bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent mb-5">
                    Portfolio.
                </h2>
                <div className="flex justify-center flex-wrap gap-6 mb-6 text-sm">
                    {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((label) => (
                        <a
                            key={label}
                            href={label === 'Home' ? '#' : `#${label.toLowerCase()}`}
                            className="text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 font-medium"
                        >
                            {label}
                        </a>
                    ))}
                </div>
                <div className="w-20 h-px mx-auto bg-gradient-to-r from-transparent via-purple-400/30 to-transparent mb-5" />
                <p className="text-slate-400 dark:text-slate-600 text-xs tracking-wider">
                    © 2025 Sachin Kannaujiya. Built with React & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
