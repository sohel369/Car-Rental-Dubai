'use client';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, ChevronRight, Star, Shield, Clock } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
    const { t, i18n } = useTranslation();
    const [pickup, setPickup] = useState('');
    const [dropDate, setDropDate] = useState('');
    const [pickDate, setPickDate] = useState('');

    return (
        <section style={{
            position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center',
            background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1025 40%, #0f0a1a 70%, #0a0a0f 100%)',
            overflow: 'hidden', paddingTop: '6rem',
        }}>
            {/* Animated background orbs */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                <div style={{
                    position: 'absolute', top: '15%', left: '8%', width: 500, height: 500,
                    borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,162,39,0.12) 0%, transparent 70%)',
                    animation: 'float 8s ease-in-out infinite',
                }} />
                <div style={{
                    position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400,
                    borderRadius: '50%', background: 'radial-gradient(circle, rgba(120,80,200,0.08) 0%, transparent 70%)',
                    animation: 'float 10s ease-in-out infinite 2s',
                }} />
                <div style={{
                    position: 'absolute', top: '50%', left: '50%', width: 600, height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.2), transparent)',
                    transform: 'translate(-50%, -50%) rotate(-5deg)',
                }} />
            </div>

            {/* Grid overlay */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.03,
                backgroundImage: `
          linear-gradient(rgba(201,162,39,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)
        `,
                backgroundSize: '80px 80px',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '2rem', paddingBottom: '4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    {/* Left content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="section-badge">
                                <Star size={12} fill="currentColor" />
                                {t('hero.badge')}
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 900, lineHeight: 1.05, marginTop: '1.25rem', marginBottom: '0.5rem' }}
                        >
                            {t('hero.title', { defaultValue: 'Drive Your' })}{' '}
                            <span className="text-gold">Dream</span>
                            <br />{t('hero.subtitle', { defaultValue: 'in Dubai' })}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: 480 }}
                        >
                            {t('hero.description')}
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem' }}
                        >
                            {[
                                { value: '200+', label: t('cars.title') },
                                { value: '10K+', label: t('nav.home') },
                                { value: '5★', label: t('hero.badge') },
                            ].map(({ value, label }) => (
                                <div key={label}>
                                    <div style={{ fontSize: '1.6rem', fontWeight: 800, background: 'linear-gradient(135deg,#c9a227,#e8c84d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                        {value}
                                    </div>
                                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{label}</div>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                        >
                            <Link href="/cars" className="btn btn-primary btn-lg">
                                {t('hero.cta')} <ChevronRight size={18} />
                            </Link>
                            <Link href="/contact" className="btn btn-outline btn-lg">
                                {t('nav.contact')}
                            </Link>
                        </motion.div>

                        {/* Trust badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}
                        >
                            {[
                                { Icon: Shield, text: t('common.confirm') },
                                { Icon: Clock, text: '24/7 Support' },
                                { Icon: Star, text: 'Best Prices' },
                            ].map(({ Icon, text }) => (
                                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem' }}>
                                    <Icon size={14} color="#c9a227" />
                                    {text}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right – Search Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div style={{
                            background: 'rgba(18,18,26,0.8)', backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(201,162,39,0.2)', borderRadius: 24,
                            padding: '2.5rem', boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff' }}>{t('hero.searchCars')}</h2>
                                <span className="badge badge-gold">Instant Booking</span>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div className="form-group">
                                    <label className="form-label">{t('hero.pickupLabel')}</label>
                                    <div style={{ position: 'relative' }}>
                                        <MapPin size={16} color="#c9a227" style={{ position: 'absolute', [i18n.language?.startsWith('ar') ? 'right' : 'left']: '0.9rem', top: '50%', transform: 'translateY(-50%)' }} />
                                        <input
                                            type="text"
                                            className="form-input"
                                            placeholder="Dubai Airport, Downtown..."
                                            value={pickup}
                                            onChange={e => setPickup(e.target.value)}
                                            style={{ paddingLeft: i18n.language?.startsWith('ar') ? '0.9rem' : '2.5rem', paddingRight: i18n.language?.startsWith('ar') ? '2.5rem' : '0.9rem' }}
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div className="form-group">
                                        <label className="form-label">{t('hero.pickupDate')}</label>
                                        <div style={{ position: 'relative' }}>
                                            <Calendar size={16} color="#c9a227" style={{ position: 'absolute', [i18n.language?.startsWith('ar') ? 'right' : 'left']: '0.9rem', top: '50%', transform: 'translateY(-50%)' }} />
                                            <input type="date" className="form-input" value={pickDate} onChange={e => setPickDate(e.target.value)} style={{ paddingLeft: i18n.language?.startsWith('ar') ? '0.9rem' : '2.5rem', paddingRight: i18n.language?.startsWith('ar') ? '2.5rem' : '0.9rem' }} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">{t('hero.dropoffDate')}</label>
                                        <div style={{ position: 'relative' }}>
                                            <Calendar size={16} color="#c9a227" style={{ position: 'absolute', [i18n.language?.startsWith('ar') ? 'right' : 'left']: '0.9rem', top: '50%', transform: 'translateY(-50%)' }} />
                                            <input type="date" className="form-input" value={dropDate} onChange={e => setDropDate(e.target.value)} style={{ paddingLeft: i18n.language?.startsWith('ar') ? '0.9rem' : '2.5rem', paddingRight: i18n.language?.startsWith('ar') ? '2.5rem' : '0.9rem' }} />
                                        </div>
                                    </div>
                                </div>

                                <Link href={`/cars?pickup=${pickup}&from=${pickDate}&to=${dropDate}`} className="btn btn-primary w-full" style={{ marginTop: '0.5rem', justifyContent: 'center', padding: '1rem' }}>
                                    <Search size={18} />
                                    {t('hero.searchCars')}
                                </Link>
                            </div>

                            {/* Popular locations */}
                            <div style={{ marginTop: '1.5rem' }}>
                                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', marginBottom: '0.6rem' }}>Popular Locations:</p>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {['Dubai Airport', 'Downtown', 'JBR', 'Palm Jumeirah'].map((loc) => (
                                        <button key={loc} onClick={() => setPickup(loc)}
                                            style={{
                                                padding: '0.3rem 0.8rem', borderRadius: 20, fontSize: '0.78rem',
                                                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                                                color: 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'all 0.2s',
                                            }}
                                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#c9a227'; (e.currentTarget as HTMLElement).style.color = '#c9a227'; }}
                                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}
                                        >{loc}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          section > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
