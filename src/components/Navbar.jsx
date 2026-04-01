import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Fitur Utama', path: '/solution' },
        { name: 'Cara Kerja', path: '/hardware' },
        { name: 'Harga', path: '/pricing' },
        { name: 'Testimoni', path: '/team' },
    ];

    const isHomePage = location.pathname === '/';
    // On Home page, navbar starts transparent. On other pages, it starts white.
    const isTranslucent = isHomePage && !scrolled;

    return (
        <header
            style={{
                position: 'fixed',
                top: '1.5rem',
                left: 0,
                right: 0,
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'center',
                pointerEvents: 'none'
            }}
        >
            <motion.div
                layout
                className="container"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'rgba(4, 36, 147, 0.85)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    padding: scrolled ? '0.6rem 1.25rem' : '0.8rem 2.5rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: 'var(--shadow-lg)',
                    width: '95%',
                    maxWidth: scrolled ? '860px' : '1400px',
                    margin: '0 auto',
                    pointerEvents: 'auto',
                    gap: scrolled ? '1rem' : '2.5rem',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    flexWrap: 'nowrap'
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                    layout: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
                }}
            >
                {/* Logo Section */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
                    <motion.div
                        layout="position"
                        whileHover={{ scale: 1.05 }}
                        style={{ width: scrolled ? '28px' : '32px', height: scrolled ? '28px' : '32px', flexShrink: 0 }}
                    >
                        <img src={logoImg} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </motion.div>
                    <AnimatePresence mode="popLayout">
                        {!scrolled && (
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                style={{
                                    fontFamily: 'var(--font-logo)',
                                    fontSize: '1.2rem',
                                    color: 'white',
                                    letterSpacing: '0.04em',
                                    whiteSpace: 'nowrap',
                                    flexShrink: 0
                                }}>
                                PIXENZE<span style={{ color: 'var(--color-secondary)' }}>BOOTH</span>
                            </motion.span>
                        )}
                    </AnimatePresence>
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', position: 'relative' }}>
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                onMouseEnter={() => setHoveredLink(link.name)}
                                onMouseLeave={() => setHoveredLink(null)}
                                style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    color: isActive || hoveredLink === link.name ? 'white' : 'rgba(255, 255, 255, 0.7)',
                                    padding: scrolled ? '0.5rem 1rem' : '0.6rem 1.2rem',
                                    borderRadius: 'var(--radius-full)',
                                    transition: 'all 0.3s',
                                    position: 'relative',
                                    zIndex: 1,
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {(isActive || hoveredLink === link.name) && (
                                    <motion.div
                                        layoutId="nav-bg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'rgba(255, 255, 255, 0.12)',
                                            borderRadius: 'var(--radius-full)',
                                            zIndex: -1,
                                            border: '1px solid rgba(255, 255, 255, 0.1)'
                                        }}
                                        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                                    />
                                )}
                                <motion.span layout="position">{link.name}</motion.span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Side Actions */}
                <motion.div layout style={{ display: 'flex', alignItems: 'center', gap: scrolled ? '0.5rem' : '1rem', flexShrink: 0 }}>
                    <Link to="/contact" className="contact-btn-desktop">
                        <motion.button layout className="btn btn-secondary" style={{ padding: scrolled ? '0.6rem 1.2rem' : '0.75rem 1.75rem', fontSize: scrolled ? '0.85rem' : '0.95rem', borderRadius: 'var(--radius-full)' }}>
                            Mulai Bisnis <ArrowRight size={scrolled ? 14 : 18} />
                        </motion.button>
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="mobile-nav-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            display: 'none',
                            background: 'rgba(255,255,255,0.1)',
                            padding: '0.5rem',
                            borderRadius: '10px',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer'
                        }}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </motion.div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: '1rem',
                            right: '1rem',
                            background: 'var(--color-dark)',
                            borderRadius: 'var(--radius-lg)',
                            padding: '1.5rem',
                            boxShadow: 'var(--shadow-lg)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            zIndex: 999
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        padding: '1rem',
                                        borderRadius: '12px',
                                        color: 'white',
                                        fontWeight: 600,
                                        fontSize: '1.1rem',
                                        transition: 'background 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/contact" onClick={() => setIsOpen(false)} style={{ marginTop: '1rem' }}>
                                <button className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                                    Mulai Sekarang
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 1024px) {
                    .desktop-nav, .contact-btn-desktop { display: none !important; }
                    .mobile-nav-toggle { display: block !important; }
                }
            `}</style>
        </header>
    );
};

export default Navbar;

