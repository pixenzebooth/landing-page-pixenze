import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Rocket, Crown, ShieldCheck, Star, Building, ArrowRight } from 'lucide-react';

const Pricing = ({ hideTopPadding = false }) => {
    const [activeTab, setActiveTab] = useState('pay-per-event');

    const tabs = [
        { id: 'pay-per-event', label: 'PPV', sub: 'Pay Per Event' },
        { id: 'monthly', label: 'Monthly', sub: 'Fixed Subscription' },
        { id: 'yearly', label: 'Yearly', sub: 'Save 2 Months' }
    ];

    const pricingData = {
        'pay-per-event': [
            {
                name: "Starter Bundle",
                price: "Rp30.000",
                period: "/ event",
                desc: "Solusi hemat untuk event kecil pertama Anda.",
                features: ["1 Event Aktif", "Custom Frame Dasar", "QR Gallery Interaktif", "Cloud Storage 24 Jam"],
                isPopular: false,
                icon: <Zap size={24} />,
                color: "var(--color-secondary)"
            },
            {
                name: "Pro Bundle",
                price: "Rp80.000",
                period: "/ event",
                desc: "Paket paling pas untuk vendor dengan jadwal rutin.",
                features: ["Maks 3 Event/Bulan", "Custom Frame + Branding", "Cloud Gallery 500 Foto", "Analytics Sederhana"],
                isPopular: true,
                icon: <Rocket size={24} />,
                color: "var(--color-primary)"
            },
            {
                name: "Flexi Bundle",
                price: "Rp120.000",
                period: "/ event",
                desc: "Kebebasan maksimal untuk event besar berkelanjutan.",
                features: ["Maks 5 Event/Bulan", "Full White-Label Branding", "Dashboard Vendor Lengkap", "Unlimited Foto/Event"],
                isPopular: false,
                icon: <Crown size={24} />,
                color: "var(--color-dark)"
            }
        ],
        'monthly': [
            {
                name: "Silver Monthly",
                price: "Rp250.000",
                period: "/ bln",
                desc: "Operasikan bisnis Anda tanpa batasan event.",
                features: ["Unlimited Event/Bulan", "Custom Frame Branding", "QR Gallery & Cloud Sync", "Support Email 24/7"],
                isPopular: false,
                icon: <Star size={24} />,
                color: "var(--color-secondary)"
            },
            {
                name: "Gold Monthly",
                price: "Rp400.000",
                period: "/ bln",
                desc: "Fitur pro untuk pengalaman tamu yang tak terlupakan.",
                features: ["Unlimited Event/Bulan", "Full Branding Kustom", "Export Data Tamu", "Prioritas Support Chat"],
                isPopular: true,
                icon: <Zap size={24} />,
                color: "var(--color-primary)"
            },
            {
                name: "Platinum Monthly",
                price: "Rp700.000",
                period: "/ bln",
                desc: "Opsi tertinggi untuk agensi photobooth papan atas.",
                features: ["Semua Fitur Gold", "Multiple Device Access", "Web-hook Integration", "Dedicated Manager"],
                isPopular: false,
                icon: <ShieldCheck size={24} />,
                color: "var(--color-dark)"
            }
        ]
    };

    // Add Yearly as calculated or just define
    pricingData['yearly'] = pricingData['monthly'].map(p => ({
        ...p,
        price: 'Rp' + (parseInt(p.price.replace(/[^0-9]/g, '')) * 11 / 1000000).toFixed(1) + 'JT',
        period: '/ thn'
    }));

    return (
        <section id="pricing" className="section" style={{
            paddingTop: hideTopPadding ? '4rem' : undefined,
            background: 'transparent',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ position: 'relative' }}>
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <div className="premium-badge" style={{ marginBottom: '1.5rem' }}>
                        Flexible Pricing
                    </div>
                    <h2 style={{ maxWidth: '800px', margin: '0 auto' }}>
                        Pilih Paket yang Sesuai dengan <span className="text-gradient">Skala Bisnis Anda</span>
                    </h2>
                </div>

                {/* Toggle */}
                <div className="flex-center" style={{ marginBottom: '5rem' }}>
                    <div style={{
                        display: 'flex',
                        background: 'white',
                        padding: '0.4rem',
                        borderRadius: '100px',
                        boxShadow: 'var(--shadow-sm)',
                        border: '1px solid rgba(0,0,0,0.05)'
                    }}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    padding: '0.8rem 2rem',
                                    borderRadius: '100px',
                                    border: 'none',
                                    background: activeTab === tab.id ? 'var(--color-dark)' : 'transparent',
                                    color: activeTab === tab.id ? 'white' : 'var(--text-muted)',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s'
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        className="grid-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {pricingData[activeTab].map((plan, idx) => (
                            <div
                                key={idx}
                                className="premium-card"
                                style={{
                                    border: plan.isPopular ? '2px solid var(--color-primary)' : '1px solid rgba(0,0,0,0.05)',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '2rem'
                                }}
                            >
                                {plan.isPopular && (
                                    <div style={{
                                        position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)',
                                        background: 'var(--color-primary)', color: 'white', padding: '0.4rem 1.25rem',
                                        borderRadius: '30px', fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase'
                                    }}>
                                        Most Popular
                                    </div>
                                )}

                                <div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{plan.desc}</p>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                                    <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--color-dark)' }}>{plan.price}</span>
                                    <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{plan.period}</span>
                                </div>

                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {plan.features.map((f, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                                            <Check size={18} style={{ color: 'var(--color-primary)' }} strokeWidth={3} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`btn ${plan.isPopular ? 'btn-primary' : 'btn-dark'}`} style={{ width: '100%', marginTop: 'auto', padding: '1rem' }}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Banner */}
                <div className="premium-card" style={{
                    marginTop: '8rem',
                    background: 'var(--color-dark)',
                    color: 'white',
                    padding: '4rem',
                    textAlign: 'center',
                    border: 'none'
                }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>Butuh Solusi Custom?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
                        Hubungi tim kami untuk mendiskusikan kebutuhan enterprise atau kustomisasi fitur spesifik untuk brand Anda.
                    </p>
                    <button className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
                        Hubungi Sales <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Pricing;

