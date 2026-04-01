import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, QrCode, MonitorSmartphone, LayoutDashboard, ChevronDown, Download, Laptop, Smartphone, Globe, X, ArrowRight, Palette, Layers, Zap, ShieldCheck, Star } from 'lucide-react';
import Solution from './Solution';
import HardwareBooth from './HardwareBooth';
import Pricing from './Pricing';
import Team from './Team';

// Generated Mockup Path
const heroMockup = 'file:///C:/Users/Nanda%20Addi/.gemini/antigravity/brain/778559f8-1549-4ad7-9c13-adacd2d5df3b/pixenzebooth_mockup_hero_1774923066229.png';

const Home = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

    const faqs = [
        {
            q: "Bagaimana sistem pembayarannya?",
            a: "Kami menggunakan sistem pay-per-event yang sangat fleksibel. Anda hanya membayar saat ada acara, tanpa biaya langganan bulanan yang memberatkan."
        },
        {
            q: "Apakah mendukung kamera DSLR/Mirrorless?",
            a: "Ya, PixenzeBooth mendukung berbagai kamera profesional termasuk Canon EOS, Nikon, dan Sony untuk hasil foto terbaik."
        },
        {
            q: "Bisakah saya menggunakan brand saya sendiri?",
            a: "Tentu! Platform kami sepenuhnya white-label. Anda bisa menggunakan logo, warna, dan domain Anda sendiri di galeri online."
        },
        {
            q: "Berapa lama waktu setup untuk satu event?",
            a: "Sangat cepat. Dengan dashboard kami yang intuitif, Anda bisa menyiapkan satu event dalam waktu kurang dari 5 menit."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
        }
    };

    return (
        <main>
            {/* 1. HERO SECTION (STRIPE-STYLE) */}
            <section className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10rem', paddingBottom: '5rem', overflow: 'hidden', background: 'transparent' }}>
                <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    
                    {/* Centered Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '5rem' }}
                    >
                        <motion.div variants={itemVariants} className="premium-badge" style={{ marginBottom: '1.5rem', background: 'rgba(233, 61, 68, 0.05)', color: 'var(--color-primary)', border: '1px solid rgba(233, 61, 68, 0.1)' }}>
                            ✨ Rebranding Photobooth Bisnis Anda
                        </motion.div>
                        <motion.h1 variants={itemVariants} style={{ marginBottom: '1.5rem', lineHeight: '1.1', maxWidth: '900px', letterSpacing: '-0.02em' }}>
                            Software Photobooth <br />
                            <span className="text-gradient">Professional & Modern.</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} style={{ marginBottom: '3rem', fontSize: '1.25rem', maxWidth: '640px', color: 'var(--color-dark-muted)' }}>
                            Tinggalkan software lama yang kaku. Kelola event, galeri interaktif, dan kustomisasi brand Anda dari satu dashboard ultra-modern dengan sistem Pay-Per-Event.
                        </motion.p>
                        
                        <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4rem' }}>
                            <motion.button 
                                whileHover={{ scale: 1.05, y: -2 }} 
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsDownloadModalOpen(true)}
                                className="btn btn-primary glow-pulse" 
                                style={{ padding: '1.1rem 3.5rem', fontSize: '1.1rem' }}
                            >
                                Coba Sekarang <ArrowRight size={20} />
                            </motion.button>
                            <a href="#features">
                                <button className="btn btn-outline" style={{ padding: '1.1rem 3.5rem', fontSize: '1.1rem', background: 'white' }}>
                                    Lihat Fitur
                                </button>
                            </a>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2.5rem', width: '100%', maxWidth: '400px' }}>
                            <div className="avatar-stack">
                                <div className="avatar-placeholder">A</div>
                                <div className="avatar-placeholder" style={{ background: 'var(--color-secondary)', color: 'var(--color-dark)' }}>P</div>
                                <div className="avatar-placeholder">X</div>
                                <div className="avatar-placeholder" style={{ background: 'var(--color-dark)', color: 'white' }}>+</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', color: 'var(--color-secondary)', marginBottom: '6px' }}>
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                                    Dipercaya <span style={{ color: 'var(--color-dark)', fontWeight: 700 }}>500+ Vendor</span> di Indonesia
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Centered Video Showcase */}
                    <div style={{ position: 'relative', width: '100%', maxWidth: '900px' }}>
                        {/* Floating Decorative Icons (Re-positioned for centered layout) */}
                        <motion.div 
                            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{ position: 'absolute', top: '10%', left: '-40px', zIndex: 15, background: 'white', padding: '14px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', color: 'var(--color-primary)' }}
                        >
                            <Camera size={28} />
                        </motion.div>
                        <motion.div 
                            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            style={{ position: 'absolute', top: '20%', right: '-40px', zIndex: 15, background: 'white', padding: '14px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', color: 'var(--color-secondary)' }}
                        >
                            <QrCode size={28} />
                        </motion.div>
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', zIndex: 1, color: 'var(--color-accent-blue)' }}
                        >
                            <Zap size={200} strokeWidth={0.5} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            style={{ position: 'relative', zIndex: 10 }}
                        >
                            <div className="animate-float" style={{ position: 'relative' }}>
                                {/* Video Container with Glow */}
                                <div style={{ 
                                    position: 'relative', 
                                    paddingBottom: '56.25%', 
                                    height: 0, 
                                    overflow: 'hidden', 
                                    borderRadius: 'var(--radius-xl)',
                                    boxShadow: '0 50px 100px -20px rgba(50,50,93,0.25), 0 30px 60px -30px rgba(0,0,0,0.3)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    background: '#000',
                                    outline: '1px solid rgba(0,0,0,0.05)'
                                }}>
                                    {/* "Live/Featured" Indicator */}
                                    <div style={{ 
                                        position: 'absolute', top: '24px', left: '24px', zIndex: 10,
                                        background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.6), rgba(0, 85, 255, 0.4))', backdropFilter: 'blur(12px)',
                                        color: 'white', padding: '8px 18px', borderRadius: '100px',
                                        fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px',
                                        border: '1px solid rgba(255,255,255,0.3)',
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                    }}>
                                        <div style={{ width: '10px', height: '10px', background: '#ff3b30', borderRadius: '50%', boxShadow: '0 0 12px #ff3b30' }}></div>
                                        FEATURED SHOWCASE
                                    </div>

                                    <iframe 
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            border: 0
                                        }}
                                        src="https://www.youtube.com/embed/VHDJdr_yM4g?autoplay=1&mute=1&rel=0" 
                                        title="PixenzeBooth Product Showcase"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            
                            {/* Decorative Background Glow */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '100%',
                                height: '100%',
                                background: 'radial-gradient(circle, rgba(233, 61, 68, 0.1) 0%, transparent 70%)',
                                filter: 'blur(60px)',
                                zIndex: 0,
                                pointerEvents: 'none'
                            }} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. FEATURES GRID (CLEAN BENTO) */}
            <section id="features" className="section" style={{ background: 'rgba(246, 249, 252, 0.7)', backdropFilter: 'blur(10px)' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '5rem' }}>
                        <div className="premium-badge-yellow" style={{ marginBottom: '1rem', padding: '0.5rem 1.5rem', borderRadius: '30px' }}>
                            FITUR UNGGULAN
                        </div>
                        <h2 style={{ maxWidth: '700px', margin: '0 auto' }}>
                            Segala yang Anda Butuhkan untuk <span className="text-gradient">Sukses</span>
                        </h2>
                    </div>

                    <div className="grid-3">
                        <motion.div whileHover={{ y: -10 }} className="premium-card">
                            <div style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                                <LayoutDashboard size={40} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Dashboard All-in-One</h3>
                            <p style={{ fontSize: '1rem' }}>Kelola ratusan event, ribuan galeri foto, dan monitoring pendapatan secara real-time dari satu tempat.</p>
                        </motion.div>

                        <motion.div whileHover={{ y: -10 }} className="premium-card">
                            <div style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
                                <Palette size={40} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Full Branding</h3>
                            <p style={{ fontSize: '1rem' }}>Kustomisasi frame, galeri, dan domain sesuai brand Anda. Buat bisnis Anda terlihat lebih professional.</p>
                        </motion.div>

                        <motion.div whileHover={{ y: -10 }} className="premium-card">
                            <div style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                                <Zap size={40} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Pay-Per-Event</h3>
                            <p style={{ fontSize: '1rem' }}>Tanpa modal investasi besar di awal. Hanya bayar saat Anda mendapatkan project. Efisien dan menguntungkan.</p>
                        </motion.div>

                        <motion.div whileHover={{ y: -10 }} className="premium-card">
                            <div style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
                                <QrCode size={40} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Instant QR Gallery</h3>
                            <p style={{ fontSize: '1rem' }}>Tamu bisa langsung mendapatkan hasil foto hanya dengan scan QR code instan yang muncul di layar booth.</p>
                        </motion.div>

                        <motion.div whileHover={{ y: -10 }} className="premium-card">
                            <div style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                                <Smartphone size={40} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Multi-Platform</h3>
                            <p style={{ fontSize: '1rem' }}>Jalankan di Windows untuk booth utama, atau gunakan tablet Android/iPad untuk galeri interaktif berjalan.</p>
                        </motion.div>

                        <motion.div whileHover={{ y: -10 }} className="premium-card">
                            <div style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>
                                <ShieldCheck size={40} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Keamanan Data</h3>
                            <p style={{ fontSize: '1rem' }}>Semua data foto dan histori event tersimpan aman di cloud storage premium kami selamanya.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Inner Pages as Sections (Already styled correctly or will be) */}
            <Solution hideTopPadding={true} useSlider={true} />
            <HardwareBooth hideTopPadding={true} />
            <Team hideTopPadding={true} />
            <Pricing hideTopPadding={true} />

            {/* 7. FAQ SECTION (CLEAN ACCORDION) */}
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>Pertanyaan <span className="text-gradient">Populer</span></h2>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {faqs.map((faq, idx) => (
                            <div 
                                key={idx} 
                                className="premium-card" 
                                style={{ 
                                    padding: '1.5rem 2rem', 
                                    cursor: 'pointer',
                                    background: openFaq === idx ? 'var(--bg-secondary)' : 'white'
                                }}
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--color-dark)' }}>{faq.q}</h4>
                                    <ChevronDown 
                                        size={20} 
                                        style={{ 
                                            transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0)', 
                                            transition: 'transform 0.3s',
                                            color: 'var(--text-muted)'
                                        }} 
                                    />
                                </div>
                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <p style={{ marginTop: '1rem', fontSize: '1rem', color: 'var(--text-muted)' }}>{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA (ULTRA IMPACT - RED) */}
            <section className="section" style={{ 
                background: 'var(--color-primary)', 
                color: 'white', 
                overflow: 'hidden', 
                padding: 'clamp(8rem, 15vw, 12rem) 0',
                position: 'relative',
                textAlign: 'center'
            }}>
                {/* Massive Animated Mesh Glows - Navy & Yellow for high contrast on red */}
                <motion.div 
                    animate={{ 
                        x: [0, 30, 0], 
                        y: [0, -50, 0],
                        scale: [1, 1.15, 1]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: 'absolute', top: '-10%', right: '-5%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(4, 36, 147, 0.4) 0%, transparent 70%)', filter: 'blur(120px)', pointerEvents: 'none' }}
                />
                <motion.div 
                    animate={{ 
                        x: [0, -30, 0], 
                        y: [0, 50, 0],
                        scale: [1.15, 1, 1.15]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(255, 207, 0, 0.3) 0%, transparent 70%)', filter: 'blur(120px)', pointerEvents: 'none' }}
                />

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Live Indicator Badge */}
                        <div style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '0.75rem', 
                            background: 'rgba(255,255,255,0.15)', 
                            padding: '0.7rem 1.8rem', 
                            borderRadius: '100px', 
                            border: '1px solid rgba(255,255,255,0.25)', 
                            marginBottom: '3.5rem', 
                            fontSize: '0.9rem', 
                            fontWeight: 700, 
                            letterSpacing: '2px', 
                            textTransform: 'uppercase',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <span style={{ display: 'inline-block', width: '10px', height: '10px', background: 'var(--color-secondary)', borderRadius: '50%', boxShadow: '0 0 15px var(--color-secondary)' }}></span>
                            Join the Revolution
                        </div>

                        {/* Ultra Large Typography */}
                        <h2 style={{ 
                            color: 'white', 
                            fontSize: 'clamp(3.5rem, 10vw, 6.5rem)', 
                            lineHeight: '0.85', 
                            fontWeight: 900, 
                            marginBottom: '3rem', 
                            letterSpacing: '-0.06em' 
                        }}>
                            Elevate Your <br />
                            <span style={{ 
                                color: 'var(--color-secondary)',
                                display: 'inline-block',
                                textShadow: '0 20px 40px rgba(0,0,0,0.1)'
                            }}>Photobooth IQ.</span>
                        </h2>

                        <p style={{ 
                            fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', 
                            color: 'rgba(255,255,255,0.9)', 
                            maxWidth: '850px', 
                            margin: '0 auto 5rem auto', 
                            lineHeight: '1.5',
                            fontWeight: 400
                        }}>
                            Hentikan software kaku masa lalu. Bergabunglah dengan ekosistem SaaS Photobooth paling canggih di Indonesia. Kelola event lebih mudah, tampil lebih pro, raup profit lebih besar.
                        </p>

                        {/* High Impact Actions */}
                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <motion.button 
                                whileHover={{ scale: 1.05, y: -8 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsDownloadModalOpen(true)}
                                className="btn" 
                                style={{ 
                                    padding: '1.8rem 5rem', 
                                    fontSize: '1.5rem', 
                                    background: 'white', 
                                    color: 'var(--color-primary)', 
                                    borderRadius: '24px',
                                    fontWeight: 900,
                                    boxShadow: '0 30px 60px -12px rgba(0,0,0,0.2)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Coba Gratis Sekarang <ArrowRight size={32} />
                            </motion.button>
                            
                            <motion.button 
                                whileHover={{ scale: 1.05, y: -8 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn" 
                                style={{ 
                                    padding: '1.8rem 5rem', 
                                    fontSize: '1.5rem', 
                                    background: 'var(--color-dark)', 
                                    color: 'white', 
                                    borderRadius: '24px',
                                    fontWeight: 900,
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    boxShadow: '0 30px 60px -12px rgba(0,0,0,0.3)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Jadwalkan Demo
                            </motion.button>
                        </div>

                        {/* Social Proof Stats */}
                        <div style={{ 
                            marginTop: '8rem', 
                            display: 'flex', 
                            gap: 'clamp(2rem, 8vw, 6rem)', 
                            justifyContent: 'center', 
                            opacity: 0.9, 
                            borderTop: '1px solid rgba(255,255,255,0.2)', 
                            paddingTop: '5rem',
                            flexWrap: 'wrap'
                        }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'white', lineHeight: '1' }}>500+</div>
                                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '0.5rem', fontWeight: 700 }}>Active Vendors</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'white', lineHeight: '1' }}>15k+</div>
                                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '0.5rem', fontWeight: 700 }}>Events Scaled</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'white', lineHeight: '1' }}>1.2M+</div>
                                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '0.5rem', fontWeight: 700 }}>Photos Shared</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* DOWNLOAD MODAL */}
            <AnimatePresence>
                {isDownloadModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex-center"
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(10, 37, 64, 0.4)',
                            backdropFilter: 'blur(8px)',
                            zIndex: 9999,
                            padding: '1rem'
                        }}
                        onClick={() => setIsDownloadModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="premium-card"
                            style={{ maxWidth: '800px', width: '100%', textAlign: 'center', padding: '4rem 2rem' }}
                        >
                            <button
                                onClick={() => setIsDownloadModalOpen(false)}
                                style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                            >
                                <X size={24} />
                            </button>

                            <h2 style={{ marginBottom: '1rem' }}>Pilih Platform Anda</h2>
                            <p style={{ marginBottom: '3rem' }}>Unduh aplikasi atau gunakan versi web demo kami secara instan.</p>

                            <div className="grid-3" style={{ width: '100%' }}>
                                <motion.div whileHover={{ y: -5 }} className="premium-card" style={{ padding: '2rem 1.5rem', background: 'var(--bg-secondary)', border: 'none' }}>
                                    <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} className="flex-center">
                                        <Laptop size={36} />
                                    </div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Windows</h4>
                                    <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem' }}>Untuk PC & Laptop</p>
                                    <a href="https://storage.pixenzebooth.com/PixenzeBooth%20Setup.exe">
                                        <button className="btn btn-dark" style={{ width: '100%', fontSize: '0.9rem' }}>Download .exe</button>
                                    </a>
                                </motion.div>

                                <motion.div whileHover={{ y: -5 }} className="premium-card" style={{ padding: '2rem 1.5rem', background: 'var(--bg-secondary)', border: 'none' }}>
                                    <div style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }} className="flex-center">
                                        <Smartphone size={36} />
                                    </div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Android</h4>
                                    <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem' }}>Untuk Tablet & HP</p>
                                    <button className="btn btn-dark" style={{ width: '100%', fontSize: '0.9rem' }}>Download .apk</button>
                                </motion.div>

                                <motion.div whileHover={{ y: -5 }} className="premium-card" style={{ padding: '2rem 1.5rem', background: 'var(--color-primary)', color: 'white', border: 'none' }}>
                                    <div style={{ color: 'white', marginBottom: '1rem' }} className="flex-center">
                                        <Globe size={36} />
                                    </div>
                                    <h4 style={{ marginBottom: '0.5rem', color: 'white' }}>Web Demo</h4>
                                    <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)' }}>Coba Langsung</p>
                                    <a href="https://app.pixenzebooth.com" target="_blank" rel="noopener noreferrer">
                                        <button className="btn btn-secondary" style={{ width: '100%', fontSize: '0.9rem' }}>Buka Demo</button>
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default Home;
