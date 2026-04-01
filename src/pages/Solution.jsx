import React from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard, Palette, Cloud, ShieldCheck, CreditCard, MonitorSmartphone,
    Layers, Zap, Globe
} from 'lucide-react';

const Solution = ({ hideTopPadding = false, useSlider = false }) => {
    const features = [
        {
            title: "Automated Dashboard",
            desc: "Kelola puluhan event tanpa pusing. Setiap event memiliki galeri otomatis untuk tamu.",
            icon: <LayoutDashboard size={32} />,
            color: "var(--color-primary)"
        },
        {
            title: "Pay-Per-Event System",
            desc: "Bayar sesuai event yang Anda jalankan. Hemat biaya operasional bisnis Anda.",
            icon: <CreditCard size={32} />,
            color: "var(--color-secondary)"
        },
        {
            title: "Custom Branding",
            desc: "Tambahkan frame unik dan filter untuk setiap klien. Tingkatkan nilai jual jasa Anda.",
            icon: <Palette size={32} />,
            color: "var(--color-primary)"
        },
        {
            title: "Safe Cloud Storage",
            desc: "Semua foto tersimpan di cloud dengan aman. Akses galeri kapan saja, di mana saja.",
            icon: <Cloud size={32} />,
            color: "var(--color-secondary)"
        },
        {
            title: "White-Label Solution",
            desc: "Tampilkan logo dan warna brand Anda sendiri. Terlihat professional di mata klien.",
            icon: <ShieldCheck size={32} />,
            color: "var(--color-primary)"
        },
        {
            title: "Cross-Platform Access",
            desc: "Jalankan di Windows, web browser, atau tablet. Fleksibilitas tanpa batas.",
            icon: <MonitorSmartphone size={32} />,
            color: "var(--color-secondary)"
        }
    ];

    // Double for infinite marquee
    const marqueeFeatures = [...features, ...features];

    return (
        <section id="solution" className="section" style={{ 
            paddingTop: hideTopPadding ? '4rem' : undefined, 
            background: 'transparent',
            overflow: 'hidden' 
        }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <div className="premium-badge" style={{ marginBottom: '1rem' }}>
                        Platform Capabilities
                    </div>
                    <h2 style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Solusi Lengkap untuk <span className="text-gradient">Ekosistem Photobooth</span> Anda
                    </h2>
                </div>

                {/* Grid Layout (shown when useSlider is false) */}
                {!useSlider && (
                    <div className="grid-3" style={{ gap: '2rem' }}>
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="premium-card"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5rem',
                                    border: '1px solid rgba(0,0,0,0.05)'
                                }}
                            >
                                <div style={{ 
                                    background: 'var(--bg-secondary)', 
                                    width: '64px', 
                                    height: '64px', 
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: feature.color
                                }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{feature.title}</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{feature.desc}</p>
                                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem' }}>
                                    Learn more <Layers size={14} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Marquee Slider (shown when useSlider is true) */}
            {useSlider && (
                <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
                    <motion.div 
                        style={{ 
                            display: 'flex', 
                            gap: '2rem', 
                            width: 'max-content',
                            padding: '2rem'
                        }}
                        animate={{ 
                            x: [0, -((380 + 32) * features.length)] 
                        }}
                        transition={{ 
                            duration: 40, 
                            repeat: Infinity, 
                            ease: "linear" 
                        }}
                    >
                        {marqueeFeatures.map((feature, idx) => (
                            <div
                                key={idx}
                                className="premium-card"
                                style={{
                                    width: '380px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5rem',
                                    border: '1px solid rgba(0,0,0,0.05)'
                                }}
                            >
                                <div style={{ 
                                    background: 'var(--bg-secondary)', 
                                    width: '64px', 
                                    height: '64px', 
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: feature.color
                                }}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{feature.title}</h3>
                                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{feature.desc}</p>
                                </div>
                                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem' }}>
                                    Learn more <Layers size={14} />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                    
                    {/* Fade edges */}
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, bottom: 0, width: '150px',
                        background: 'linear-gradient(to right, var(--bg-primary), transparent)',
                        zIndex: 2,
                        pointerEvents: 'none'
                    }} />
                    <div style={{
                        position: 'absolute',
                        top: 0, right: 0, bottom: 0, width: '150px',
                        background: 'linear-gradient(to left, var(--bg-primary), transparent)',
                        zIndex: 2,
                        pointerEvents: 'none'
                    }} />
                </div>
            )}

            {/* NEW SECTION: THE POWER OF WHITE-LABEL */}
            <div className="container" style={{ marginTop: '10rem', paddingBottom: '6rem' }}>
                <div style={{ 
                    display: 'flex', 
                    gap: '6rem', 
                    alignItems: 'center', 
                    flexWrap: 'wrap-reverse',
                    justifyContent: 'center'
                }}>
                    {/* Visual Side (Left in this case for split balance) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ flex: '1 1 500px', position: 'relative' }}
                    >
                        <div style={{ 
                            background: 'var(--color-dark)', 
                            borderRadius: '32px', 
                            padding: '3rem',
                            boxShadow: 'var(--shadow-lg)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                             <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '100px', height: '100px', background: 'var(--color-primary)', borderRadius: '50%', opacity: 0.1, filter: 'blur(30px)' }} />
                             
                             <div className="premium-card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}>
                                <div style={{ fontSize: '0.8rem', opacity: 0.5, marginBottom: '0.5rem' }}>Browser URL:</div>
                                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Globe size={16} /> gallery.nama-vendor-anda.com
                                </div>
                             </div>

                             <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ height: '10px', width: '40%', background: 'rgba(255,255,255,0.1)', borderRadius: '5px' }} />
                                <div style={{ height: '40px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }} />
                                <div className="grid-2" style={{ gap: '1rem' }}>
                                    <div style={{ height: '100px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }} />
                                    <div style={{ height: '100px', background: 'var(--color-primary)', borderRadius: '12px', opacity: 0.2 }} />
                                </div>
                             </div>
                             
                             <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', background: 'white', color: 'var(--color-dark)', padding: '0.75rem 1.25rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 800, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                                YOUR LOGO HERE
                             </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ flex: '1 1 450px' }}
                    >
                        <div className="premium-badge" style={{ marginBottom: '1.5rem', background: 'rgba(4, 36, 147, 0.05)', color: 'var(--color-dark)' }}>
                            100% White-Label
                        </div>
                        <h2 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>
                            Software Photobooth yang <br />
                            <span style={{ color: 'var(--color-primary)' }}>100% Menjadi Milik Anda.</span>
                        </h2>
                        <p style={{ marginBottom: '3rem', fontSize: '1.15rem', color: 'var(--text-muted)' }}>
                            PixenzeBooth dirancang agar brand Anda yang bersinar. Kami memberikan kontrol penuh sehingga klien Anda tidak akan pernah tahu Anda menggunakan teknologi kami.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { t: "Custom Domain & Branding", d: "Ubah domain galeri menjadi milik Anda sendiri. Sesuaikan skema warna dashboard klien." },
                                { t: "Koleksi Email & Database", d: "Dapatkan data tamu (email/whatsapp) langsung ke dashboard Anda untuk pemasaran vendor." },
                                { t: "Invisible Platform", d: "Satu pun tidak ada watermark PixenzeBooth di foto, scan QR, maupun galeri interaktif." }
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ minWidth: '24px', height: '24px', borderRadius: '50%', background: 'rgba(212,0,0,0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.2rem' }}>
                                        <Zap size={14} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.t}</h4>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* NEW SECTION: ADVANCED ANALYTICS */}
            <div style={{ background: 'var(--bg-secondary)', padding: '8rem 0' }}>
                <div className="container">
                    <div style={{ 
                        display: 'flex', 
                        gap: '6rem', 
                        alignItems: 'center', 
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        {/* Content Side */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ flex: '1 1 450px' }}
                        >
                            <div className="premium-badge-yellow" style={{ marginBottom: '1.5rem' }}>
                                Insight & Reporting
                            </div>
                            <h2 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>
                                Data yang Berbicara. <br />
                                <span className="text-gradient">Laporan yang Profesional.</span>
                            </h2>
                            <p style={{ marginBottom: '3rem', fontSize: '1.15rem', color: 'var(--text-muted)' }}>
                                Berikan nilai lebih kepada klien Anda dengan laporan statistik yang akurat. Pantau performa event secara real-time dari manapun Anda berada.
                            </p>

                            <div className="grid-2" style={{ gap: '2rem' }}>
                                {[
                                    { t: "QR Scan Traffic", d: "Pantau seberapa banyak tamu yang melakukan scan dan mengunduh foto mereka." },
                                    { t: "Active Duration", d: "Lacak durasi operasional booth untuk memastikan tim Anda bekerja tepat waktu." },
                                    { t: "Total Shares", d: "Mengetahui sejauh mana foto event Anda tersebar di platform sosial media." },
                                    { t: "Engagement Rate", d: "Hitung rata-rata interaksi tamu per jam untuk evaluasi kesuksesan event." }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-dark)' }}>{item.t}</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Visual Side (Dashboard Mockup) */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{ flex: '1 1 500px' }}
                        >
                            <div className="premium-card" style={{ padding: '2rem', background: 'white', position: 'relative' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                                    <h4 style={{ fontSize: '1rem' }}>Event Analytics</h4>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 700 }}>Live Updates</div>
                                </div>
                                <div className="grid-2" style={{ gap: '1rem', marginBottom: '2rem' }}>
                                    <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>842</div>
                                        <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>Photos Sent</div>
                                    </div>
                                    <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>1.2k</div>
                                        <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>Total Scans</div>
                                    </div>
                                </div>
                                {/* Simple Chart Visualization */}
                                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem', height: '120px', padding: '0 1rem' }}>
                                    {[40, 70, 45, 90, 65, 80, 100, 55].map((h, i) => (
                                        <div key={i} style={{ flex: 1, background: 'var(--color-primary)', height: `${h}%`, borderRadius: '4px 4px 0 0', opacity: 0.1 + (i * 0.1) }} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
