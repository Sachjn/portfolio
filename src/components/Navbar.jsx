import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
            ? 'bg-white/70 dark:bg-navy/80 backdrop-blur-2xl shadow-sm shadow-purple-500/5 py-3 border-b border-slate-200/40 dark:border-white/5'
            : 'bg-transparent py-5'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-xl font-extrabold bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                    Portfolio.
                </a>

                {/* Desktop */}
                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative px-4 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-white transition-all duration-300 group"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 rounded-full transition-all duration-300" />
                        </a>
                    ))}

                    <div className="ml-4 pl-4 border-l border-slate-200 dark:border-white/10">
                        <motion.button
                            onClick={toggleTheme}
                            whileTap={{ scale: 0.85, rotate: 20 }}
                            className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-yellow-400 hover:bg-purple-50 dark:hover:bg-white/10 border border-slate-200/50 dark:border-white/5 transition-all duration-300"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile */}
                <div className="flex items-center gap-3 md:hidden">
                    <motion.button
                        onClick={toggleTheme}
                        whileTap={{ scale: 0.85, rotate: 20 }}
                        className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-yellow-400 border border-slate-200/50 dark:border-white/5"
                    >
                        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                    </motion.button>
                    <button className="text-slate-700 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 w-full bg-white/90 dark:bg-navy/95 backdrop-blur-2xl border-b border-slate-200/40 dark:border-white/5 md:hidden shadow-xl"
                        >
                            <div className="flex flex-col items-center py-8 space-y-5">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
