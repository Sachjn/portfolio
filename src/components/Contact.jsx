import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ReactGA from 'react-ga4';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: null, message: '' });

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: null, message: '' });

        // Validate env vars
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const autoReplyId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS config missing:', { serviceId: !!serviceId, templateId: !!templateId, publicKey: !!publicKey });
            setLoading(false);
            setStatus({ type: 'error', message: 'Contact form is not configured. Please try again later.' });
            return;
        }

        const formData = new FormData(form.current);
        const userName = formData.get('name');
        const userEmail = formData.get('email');
        const userMessage = formData.get('message');

        try {
            // Send main email
            const result = await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
            console.log('EmailJS SUCCESS:', result.status, result.text);

            // Auto-reply (non-blocking — main email already succeeded)
            if (autoReplyId) {
                try {
                    await emailjs.send(serviceId, autoReplyId, {
                        name: userName,
                        email: userEmail,
                        title: formData.get('title'),
                        message: userMessage,
                    }, publicKey);
                    console.log('Auto-reply sent successfully');
                } catch (replyErr) {
                    console.warn('Auto-reply failed (main email still sent):', replyErr);
                }
            }

            setLoading(false);
            setStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' });

            ReactGA.event({
                category: "Contact",
                action: "Form Submitted",
                label: "Contact Form"
            });

            form.current.reset();
            setTimeout(() => setStatus({ type: null, message: '' }), 5000);

        } catch (error) {
            console.error('EmailJS FAILED:', error);
            setLoading(false);
            setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        }
    };

    const inputClasses = "w-full bg-white dark:bg-[#0F172A] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 focus:shadow-lg focus:shadow-purple-500/10 transition-all duration-300";

    return (
        <section id="contact" className="py-28 px-6 relative transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:from-transparent dark:via-white/[0.01] dark:to-transparent pointer-events-none" />
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-purple-600 dark:text-purple-400">Get In Touch</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold mt-2 tracking-wide drop-shadow-sm">
                        <span className="text-slate-900 dark:text-white">Let's Work </span>
                        <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-400 bg-clip-text text-transparent">Together</span>
                    </h2>
                    <div className="mt-3 mx-auto w-20 h-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-7"
                    >
                        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                            I am actively seeking Data Analyst and Business Analyst opportunities.
                            Open to internships and entry-level roles. Feel free to connect.
                        </p>

                        <div className="space-y-5">
                            {[
                                { icon: <Mail size={18} />, label: 'Email', value: 'kanojiasachin1789@gmail.com', href: 'mailto:kanojiasachin1789@gmail.com' },
                                { icon: <Phone size={18} />, label: 'Phone', value: '+91 9129422095' },
                                { icon: <MapPin size={18} />, label: 'Location', value: 'Mumbai, Maharashtra, India' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                                    <div className="w-11 h-11 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-fuchsia-500/10 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 border border-purple-200/50 dark:border-white/5 shadow-sm">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-purple-600 dark:text-purple-400 font-semibold">{item.label}</p>
                                        {item.href ? (
                                            <a href={item.href} className="font-medium text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">{item.value}</a>
                                        ) : (
                                            <p className="font-medium text-sm">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-3">
                            <div className="relative p-5 rounded-2xl border border-purple-200/50 dark:border-white/5 bg-white/60 dark:bg-white/5 backdrop-blur-sm shadow-sm overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 opacity-70" />
                                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Open to Opportunities</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    Actively seeking roles in{' '}
                                    <span className="text-purple-600 dark:text-purple-400 font-semibold">Data Analytics</span> and{' '}
                                    <span className="text-purple-600 dark:text-purple-400 font-semibold">Business Analysis</span>.
                                    Ready to contribute to data-driven decision making.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form — Glass */}
                    <motion.form
                        ref={form}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-5 p-7 rounded-2xl bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl shadow-purple-500/5"
                        onSubmit={sendEmail}
                    >
                        <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold uppercase tracking-widest text-purple-600 dark:text-purple-400">Name</label>
                                <input name="name" type="text" required className={inputClasses} placeholder="Your Name" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold uppercase tracking-widest text-purple-600 dark:text-purple-400">Email</label>
                                <input name="email" type="email" required className={inputClasses} placeholder="your.email@example.com" />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold uppercase tracking-widest text-purple-600 dark:text-purple-400">Subject</label>
                            <input name="title" type="text" required className={inputClasses} placeholder="Regarding Opportunity / Collaboration" />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold uppercase tracking-widest text-purple-600 dark:text-purple-400">Message</label>
                            <textarea name="message" required rows="4" className={`${inputClasses} resize-none`} placeholder="Write your message here..." />
                        </div>

                        <button
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 hover:from-purple-700 hover:via-fuchsia-600 hover:to-pink-600 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm"
                        >
                            {loading ? (
                                <>Sending... <Loader2 size={18} className="animate-spin" /></>
                            ) : (
                                <>Send Message <Send size={18} /></>
                            )}
                        </button>

                        {status.message && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-3.5 rounded-xl flex items-center gap-2 text-sm ${status.type === 'success'
                                    ? 'bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/20'
                                    : 'bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-500/20'
                                    }`}
                            >
                                {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                                {status.message}
                            </motion.div>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
