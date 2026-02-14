import React from 'react';
import { motion } from 'framer-motion';

const BackgroundParticles = () => {
    // Generate random positions for particles
    const particles = [...Array(20)].map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 10,
    }));

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-purple-500/10"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, 50, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/20" />
        </div>
    );
};

export default BackgroundParticles;
