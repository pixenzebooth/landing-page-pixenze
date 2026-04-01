import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Palette, Camera, QrCode, Monitor, Smartphone, Laptop, CheckCircle2, ArrowRight } from 'lucide-react';

const HardwareBooth = ({ hideTopPadding = false }) => {
    const steps = [
        {
            title: "Buat Akun & Event",
            description: "Hanya butuh 2 menit! Daftar dan persiapkan event perdana Anda melalui dashboard kami yang intuitif. Segalanya dirancang untuk kecepatan.",
            icon: <UserPlus size={28} />,
            color: "var(--color-primary)",
            visual: (
                <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src="/step1.png" alt="Buat Akun & Event" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            )
        },
        {
            title: "Kustomisasi Branding",
            description: "Unggah frame eksklusif, ubah warna tema, dan sisipkan identitas brand Anda untuk pengalaman premium yang konsisten.",
            icon: <Palette size={28} />,
            color: "var(--color-secondary)",
            visual: (
                <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src="/step2.png" alt="Kustomisasi Branding" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            )
        },
        {
            title: "Capture & Bagikan",
            description: "Tinggal jepret! Platform kami otomatis menyimpan foto ke cloud dan mengubahnya menjadi galeri QR interaktif instan untuk tamu.",
            icon: <Camera size={28} />,
            color: "var(--color-primary)",
            visual: (
                <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img src="/step3.png" alt="Capture & Bagikan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            )
        }
    ];

    const hardwares = [
        { name: "DSLR / Mirrorless", desc: "Canon, Nikon, Sony Support", icon: <Camera size={24} /> },
        { name: "Webcam Professional", desc: "Logitech, Razer, & USB Cam", icon: <Monitor size={24} /> },
        { name: "iPad / Android", desc: "Tablet & Smartphone Browser", icon: <Smartphone size={24} /> },
        { name: "Windows Native", desc: "Performance Desktop App", icon: <Laptop size={24} /> }
    ];

    return (
        <section id="hardware" className="section" style={{ 
            paddingTop: hideTopPadding ? '4rem' : undefined, 
            background: 'transparent' 
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <div className="premium-badge" style={{ marginBottom: '1.5rem' }}>
                        Operating Guide
                    </div>
                    <h2 style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Mulai Bisnis Photobooth <br />
                        <span className="text-gradient">Hanya dalam 3 Langkah</span>
                    </h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                    {steps.map((step, idx) => (
                        <div key={idx} style={{ 
                            display: 'flex', 
                            flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse', 
                            alignItems: 'center',
                            gap: '4rem',
                            flexWrap: 'wrap'
                        }}>
                            <motion.div 
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                style={{ flex: '1 1 400px' }}
                            >
                                <div style={{ 
                                    width: '56px', 
                                    height: '56px', 
                                    background: 'var(--bg-secondary)', 
                                    color: step.color,
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '2rem'
                                }}>
                                    {step.icon}
                                </div>
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                                    {idx + 1}. {step.title}
                                </h3>
                                <p style={{ marginBottom: '2rem', maxWidth: '500px' }}>
                                    {step.description}
                                </p>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--color-primary)', fontWeight: 700 }}>
                                    <CheckCircle2 size={20} /> Professional Outcome Guaranteed
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                style={{ flex: '1 1 500px', height: '400px' }}
                            >
                                {step.visual}
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Compatibility */}
                <div style={{ 
                    marginTop: '4rem', 
                    padding: '5rem 2.5rem', 
                    background: 'rgba(244, 244, 232, 0.5)', 
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(0,0,0,0.03)',
                    position: 'relative'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <div className="premium-badge-yellow" style={{ marginBottom: '1rem' }}>Device Support</div>
                        <h2 style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>Dukungan Perangkat Luas</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1rem' }}>
                            PixenzeBooth kompatibel dengan berbagai standar perangkat industri untuk memastikan stabilitas dan kualitas hasil foto terbaik.
                        </p>
                    </div>

                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
                        gap: '1.5rem' 
                    }}>
                        {hardwares.map((h, i) => (
                            <motion.div 
                                key={i}
                                className="premium-card" 
                                style={{ 
                                    textAlign: 'center',
                                    padding: '2.5rem 1.5rem',
                                    background: 'white',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    boxShadow: 'var(--shadow-sm)'
                                }}
                                whileHover={{ y: -8, boxShadow: 'var(--shadow-premium)' }}
                            >
                                <div style={{ 
                                    width: '56px', 
                                    height: '56px', 
                                    background: 'var(--bg-secondary)', 
                                    borderRadius: '16px', 
                                    marginBottom: '1.5rem', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    color: 'var(--color-primary)'
                                }}>
                                    {h.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{h.name}</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{h.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <button className="btn btn-primary" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem' }}>
                        Mulai Sekarang <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HardwareBooth;


