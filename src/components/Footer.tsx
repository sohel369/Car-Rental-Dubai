'use client';
import Link from 'next/link';
import { Car, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer style={{
            background: 'linear-gradient(180deg, #0a0a0f 0%, #080808 100%)',
            borderTop: '1px solid rgba(201,162,39,0.15)',
            padding: '4rem 0 1.5rem',
        }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                            <div style={{
                                width: 40, height: 40, borderRadius: '50%',
                                background: 'linear-gradient(135deg, #c9a227, #e8c84d)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                                <Car size={20} color="#000" />
                            </div>
                            <div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>
                                    Golden <span className="text-gold">Key</span>
                                </div>
                                <div style={{ fontSize: '0.65rem', color: '#a07d1c', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Car Rental</div>
                            </div>
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                            {t('footer.description')}
                        </p>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" style={{
                                    width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,162,39,0.2)',
                                    color: '#c9a227', transition: 'all 0.2s', textDecoration: 'none',
                                }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,162,39,0.15)'; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; }}
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: '#c9a227', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>{t('footer.quickLinks')}</h4>
                        {[
                            { label: t('nav.home'), href: '/' },
                            { label: t('nav.cars'), href: '/cars' },
                            { label: t('nav.about'), href: '/about' },
                            { label: t('nav.blog'), href: '/blog' },
                            { label: t('nav.contact'), href: '/contact' },
                        ].map((l) => (
                            <Link key={l.href} href={l.href} style={{
                                display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem',
                                textDecoration: 'none', marginBottom: '0.6rem', transition: 'color 0.2s',
                            }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#c9a227')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                            >{l.label}</Link>
                        ))}
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{ color: '#c9a227', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>{t('cars.title')}</h4>
                        {[t('cars.filters.economy'), t('cars.filters.luxury'), t('cars.filters.suv'), t('cars.filters.sports'), 'Long-Term Rental', 'Airport Transfer'].map((s) => (
                            <p key={s} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', marginBottom: '0.6rem' }}>{s}</p>
                        ))}
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: '#c9a227', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>{t('footer.contact')}</h4>
                        {[
                            { Icon: MapPin, text: t('footer.address') },
                            { Icon: Phone, text: t('footer.phone') },
                            { Icon: Mail, text: t('footer.email') },
                        ].map(({ Icon, text }) => (
                            <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.85rem' }}>
                                <Icon size={15} color="#c9a227" style={{ flexShrink: 0, marginTop: 2 }} />
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem' }}>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem' }}>
                        © {new Date().getFullYear()} Golden Key Car Rental L.L.C. {t('footer.rights')}
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        {['Privacy Policy', 'Terms & Conditions'].map((t) => (
                            <Link key={t} href="#" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.2s' }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#c9a227')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
                            >{t}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
