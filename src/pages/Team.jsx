import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Team = ({ hideTopPadding = false }) => {
    const testimonials = [
        {
            quote: "PixenzeBooth sangat membantu saya memulai bisnis photobooth dengan modal minim. Dashboardnya sangat intuitif dan modern!",
            author: "Andi Saputra",
            role: "Vendor Photobooth",
        },
        {
            quote: "Fitur QR gallery membuat tamu acara mudah mengakses foto secara instan. Ini adalah game-changer untuk bisnis saya.",
            author: "Hendra Wijaya",
            role: "Event Organizer",
        },
        {
            quote: "Sistem pay-per-event memberikan fleksibilitas luar biasa. Saya hanya membayar saat benar-benar ada proyek.",
            author: "Siti Aminah",
            role: "Photography Studio",
        }
    ];

    return (
        <section id="team" className="section" style={{ 
            paddingTop: hideTopPadding ? '4rem' : undefined,
            background: 'transparent'
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div className="premium-badge" style={{ marginBottom: '1rem' }}>
                        Customer Stories
                    </div>
                    <h2 style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Bergabunglah dengan <span className="text-gradient">Ratusan Vendor</span> yang Telah Sukses
                    </h2>
                </div>

                <div className="grid-3">
                    {testimonials.map((testi, idx) => (
                        <motion.div
                            key={idx}
                            className="premium-card"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div style={{ display: 'flex', gap: '4px', color: 'var(--color-primary)' }}>
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>

                            <p style={{ fontSize: '1.1rem', color: 'var(--color-dark)', lineHeight: '1.6', flex: 1 }}>
                                "{testi.quote}"
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                                <div style={{ 
                                    width: '48px', 
                                    height: '48px', 
                                    background: 'var(--bg-secondary)', 
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--color-primary)',
                                    fontWeight: 700,
                                    fontSize: '1.2rem'
                                }}>
                                    {testi.author[0]}
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1rem', color: 'var(--color-dark)' }}>{testi.author}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{testi.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
