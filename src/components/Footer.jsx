import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Youtube, Twitter, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: 'Produk',
            links: [
                { name: 'Fitur Utama', path: '/solution' },
                { name: 'Hardware', path: '/hardware' },
                { name: 'Harga', path: '/pricing' },
                { name: 'Demo Software', path: '#' }
            ]
        },
        {
            title: 'Perusahaan',
            links: [
                { name: 'Tentang Kami', path: '/team' },
                { name: 'Karir', path: '#' },
                { name: 'Blog', path: '#' },
                { name: 'Kontak', path: '/contact' }
            ]
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy Policy', path: '#' },
                { name: 'Terms of Service', path: '#' },
                { name: 'Cookie Policy', path: '#' }
            ]
        }
    ];

    return (
        <footer style={{
            background: 'var(--color-dark)',
            color: 'white',
            padding: '6rem 0 3rem 0',
            position: 'relative',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className="container">
                <div className="grid-3" style={{ gap: '4rem', marginBottom: '4rem' }}>
                    
                    {/* Brand Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <img src={logoImg} alt="Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                            <span style={{
                                fontFamily: 'var(--font-logo)',
                                fontSize: '1.4rem',
                                color: 'white'
                            }}>
                                PIXENZE<span style={{ color: 'var(--color-primary)' }}>BOOTH</span>
                            </span>
                        </Link>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', maxWidth: '300px' }}>
                            Solusi software photobooth paling modern dan handal untuk vendor kreatif di Indonesia. 
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[Instagram, Youtube, Twitter].map((Icon, i) => (
                                <a key={i} href="#" style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    transition: 'all 0.2s'
                                }}
                                onMouseEnter={e => e.currentTarget.style.background = 'var(--color-primary)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav Links */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', gridColumn: 'span 2' }}>
                        {footerLinks.map((section) => (
                            <div key={section.title}>
                                <h4 style={{ 
                                    color: 'white', 
                                    fontSize: '0.9rem', 
                                    textTransform: 'uppercase', 
                                    letterSpacing: '0.1em',
                                    marginBottom: '1.5rem'
                                }}>
                                    {section.title}
                                </h4>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link to={link.path} style={{ 
                                                color: 'rgba(255,255,255,0.6)',
                                                fontSize: '0.95rem',
                                                transition: 'color 0.2s'
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.color = 'white'}
                                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        
                        {/* Contact Info */}
                        <div>
                            <h4 style={{ 
                                color: 'white', 
                                fontSize: '0.9rem', 
                                textTransform: 'uppercase', 
                                letterSpacing: '0.1em',
                                marginBottom: '1.5rem'
                            }}>
                                Kontak
                            </h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
                                    <Mail size={16} color="var(--color-primary)" />
                                    <span>pixenzebooth@gmail.com</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
                                    <Phone size={16} color="var(--color-primary)" />
                                    <span>+62 858 7684 5192</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
                                    <MapPin size={16} color="var(--color-primary)" />
                                    <span>Malang, Indonesia</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1.5rem'
                }}>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
                        © {currentYear} PIXENZE DIGITAL PROJECT. Semua hak dilindungi selamanya.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <Link to="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>Privasi</Link>
                        <Link to="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>Ketentuan</Link>
                        <Link to="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
