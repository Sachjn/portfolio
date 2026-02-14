import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles.jsx';

function App() {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }, []);

    return (
        <div className="bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 dark:bg-none dark:bg-navy min-h-screen text-slate-800 dark:text-slate-200 selection:bg-purple-500 selection:text-white relative overflow-hidden transition-colors duration-500">
            <BackgroundParticles />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
