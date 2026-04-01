import React from 'react';
import { motion } from 'framer-motion';

const ThemeBackground = () => {
    return (
        <div 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0,
                pointerEvents: 'none',
                overflow: 'hidden',
                background: 'var(--bg-primary)'
            }}
        >
            {/* 1. GRID PATTERN */}
            <div 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `linear-gradient(to right, var(--grid-color) 1px, transparent 1px), 
                                     linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)`,
                    backgroundSize: 'var(--grid-size) var(--grid-size)',
                    maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
                    opacity: 0.8
                }}
            />

            {/* 2. AMBIENT BLOBS */}
            
            {/* Blob 1: Top Right (Primary Red) */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '60vw',
                    height: '60vw',
                    background: 'radial-gradient(circle, rgba(212, 0, 0, 0.05) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)'
                }}
            />

            {/* Blob 2: Bottom Left (Secondary Yellow) */}
            <motion.div
                animate={{
                    x: [0, -40, 0],
                    y: [0, -60, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    bottom: '-15%',
                    left: '-10%',
                    width: '70vw',
                    height: '70vw',
                    background: 'radial-gradient(circle, rgba(255, 207, 0, 0.04) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(80px)'
                }}
            />

            {/* Blob 3: Middle Left (Navy Accent) */}
            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, 100, 0]
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: '5%',
                    width: '40vw',
                    height: '40vw',
                    background: 'radial-gradient(circle, rgba(4, 36, 147, 0.03) 0%, transparent 60%)',
                    borderRadius: '50%',
                    filter: 'blur(50px)'
                }}
            />

            {/* Blob 4: Mid Right (Primary Red Light) */}
            <motion.div
                animate={{
                    x: [0, -60, 0],
                    y: [100, 0, 100],
                    scale: [1, 1.3, 1]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: '50vw',
                    height: '50vw',
                    background: 'radial-gradient(circle, rgba(212, 0, 0, 0.03) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(70px)'
                }}
            />

            {/* 3. SUBTLE TEXTURE / NOISE (Optional but adds premium feel) */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                opacity: 0.02,
                pointerEvents: 'none',
                background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }} />
        </div>
    );
};

export default ThemeBackground;
