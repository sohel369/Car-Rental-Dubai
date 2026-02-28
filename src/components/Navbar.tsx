'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Car } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useI18n } from '@/context/I18nContext';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

export default function Navbar() {
    const { t } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { lang, toggleLang } = useI18n();
    const { user, logOut } = useAuth();

    const navLinks = [
        { label: t('nav.home'), href: '/' },
        { label: t('nav.cars'), href: '/cars' },
        { label: t('nav.about'), href: '/about' },
        { label: t('nav.blog'), href: '/blog' },
        { label: t('nav.contact'), href: '/contact' },
    ];

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const handleLogout = async () => {
        await logOut();
        toast.success(t('nav.signOut') + ' ' + t('common.success', { defaultValue: 'successfully' }));
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{
                        width: 40, height: 40, borderRadius: '50%',
                        background: 'linear-gradient(135deg, #c9a227, #e8c84d)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 0 15px rgba(201,162,39,0.4)',
                        marginLeft: lang?.startsWith('ar') ? '0' : '0',
                        marginRight: lang?.startsWith('ar') ? '0' : '0',
                    }}>
                        <Car size={20} color="#000" />
                    </div>
                    <div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>
                            {t('nav.brandName')}
                        </div>
                        <div style={{ fontSize: '0.65rem', color: '#a07d1c', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{t('nav.carRental')}</div>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="navbar-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} >
                    {navLinks.map((l) => (
                        <Link key={l.href} href={l.href} style={{
                            color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem',
                            fontWeight: 500, transition: 'color 0.2s',
                        }}
                            onMouseEnter={e => (e.currentTarget.style.color = '#c9a227')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                        >{l.label}</Link>
                    ))}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {/* Language Toggle */}
                    <button onClick={toggleLang} className="btn btn-ghost btn-sm" style={{ padding: '0.45rem 0.85rem', gap: '0.35rem' }}>
                        <Globe size={14} />
                        {lang === 'en' ? 'عربي' : 'EN'}
                    </button>

                    {user ? (
                        <>
                            <Link href="/dashboard" className="btn btn-ghost btn-sm">{t('nav.dashboard')}</Link>
                            <button onClick={handleLogout} className="btn btn-outline btn-sm">{t('nav.signOut')}</button>
                        </>
                    ) : (
                        <>
                            <Link href="/auth/login" className="btn btn-ghost btn-sm">{t('nav.signIn')}</Link>
                            <Link href="/auth/register" className="btn btn-primary btn-sm">{t('nav.signUp')}</Link>
                        </>
                    )}

                    {/* Mobile menu toggle */}
                    <button onClick={() => setMobileOpen(!mobileOpen)} style={{
                        display: 'none', background: 'none', border: 'none', color: '#fff', cursor: 'pointer',
                    }} className="mobile-menu-btn">
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{
                            background: 'rgba(10,10,15,0.98)', backdropFilter: 'blur(20px)',
                            borderTop: '1px solid rgba(201,162,39,0.15)', overflow: 'hidden'
                        }}
                    >
                        <div className="container" style={{ paddingTop: '1rem', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {navLinks.map((l) => (
                                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                                    style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '1rem', fontWeight: 500, padding: '0.5rem 0' }}>
                                    {l.label}
                                </Link>
                            ))}
                            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                                {user ? (
                                    <>
                                        <Link href="/dashboard" className="btn btn-ghost btn-sm w-full">{t('nav.dashboard')}</Link>
                                        <button onClick={handleLogout} className="btn btn-outline btn-sm w-full">{t('nav.signOut')}</button>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/auth/login" className="btn btn-ghost btn-sm" style={{ flex: 1 }}>{t('nav.signIn')}</Link>
                                        <Link href="/auth/register" className="btn btn-primary btn-sm" style={{ flex: 1 }}>{t('nav.signUp')}</Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 900px) {
          .navbar-links { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </nav>
    );
}
