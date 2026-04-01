import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
    return (
        <section className="section" style={{ minHeight: '100vh', paddingTop: '10rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="premium-badge" 
                        style={{ marginBottom: '1.5rem' }}
                    >
                        Hubungi Kami
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-shadow-hard"
                    >
                        Let's Start <span className="text-gradient">Talking</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '1.5rem', maxWidth: '600px', margin: '1.5rem auto 0' }}
                    >
                        Punya pertanyaan tentang API, harga khusus, atau fitur custom? Tim kami siap membantu kesuksesan bisnis photobooth Anda.
                    </motion.p>
                </div>

                <div className="contact-grid">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }} 
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 style={{ fontSize: '2.2rem', marginBottom: '2.5rem', color: 'var(--color-dark)' }}>Jalur Komunikasi</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div className="icon-box-accent flex-center" style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'rgba(212,0,0,0.08)', border: '1px solid rgba(212,0,0,0.1)', color: 'var(--color-primary)', flexShrink: 0 }}>
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.3rem', marginBottom: '0.4rem' }}>Email Support</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>pixenzebooth@gmail.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div className="flex-center" style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'rgba(255,207,0,0.1)', border: '1px solid rgba(255,207,0,0.2)', color: '#c9a500', flexShrink: 0 }}>
                                    <MessageSquare size={28} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.3rem', marginBottom: '0.4rem' }}>WhatsApp Center</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>+62 858 7684 5192</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div className="flex-center" style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'rgba(4,36,147,0.08)', border: '1px solid rgba(4,36,147,0.1)', color: 'var(--color-dark)', flexShrink: 0 }}>
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.3rem', marginBottom: '0.4rem' }}>Headquarters</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Malang, Indonesia</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(4, 36, 147, 0.03)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(4, 36, 147, 0.05)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: 'var(--color-dark)', fontWeight: 700 }}>
                                <CheckCircle2 size={20} className="text-accent" />
                                Respon Cepat & Professional
                            </div>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                                Tim support kami beroperasi setiap hari pukul 09.00 - 21.00 WIB untuk menjawab seluruh kebutuhan operasional event Anda.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="glass-panel"
                        style={{ padding: '3.5rem', display: 'flex', flexDirection: 'column', gap: '1.8rem', position: 'relative', overflow: 'hidden' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <label className="form-label">Nama Lengkap</label>
                            <input type="text" placeholder="Masukkan nama Anda..." className="form-input" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <label className="form-label">Email Aktif</label>
                            <input type="email" placeholder="example@email.com" className="form-input" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            <label className="form-label">Pesan / Pertanyaan</label>
                            <textarea rows="5" placeholder="Bagaimana kami bisa membantu Anda?" className="form-input" style={{ resize: 'none' }}></textarea>
                        </div>
                        <button type="button" className="btn btn-primary" style={{ padding: '1.25rem', marginTop: '1rem', width: '100%', fontSize: '1.1rem' }}>
                            Kirim Pesan <Send size={20} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
