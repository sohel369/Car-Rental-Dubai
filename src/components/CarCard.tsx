'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star, Users, Fuel, Settings, ArrowRight } from 'lucide-react';
import type { Car } from '@/data/cars';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface CarCardProps {
    car: Car;
    index?: number;
}

export default function CarCard({ car, index = 0 }: CarCardProps) {
    const { t } = useTranslation();
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
            style={{ display: 'flex', flexDirection: 'column' }}
        >
            {/* Image */}
            <div style={{ position: 'relative', height: 200, overflow: 'hidden', background: '#0f0f1a' }}>
                <img
                    src={car.image}
                    alt={`${car.brand} ${car.name}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                />
                {/* Category badge */}
                <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                    <span className="badge badge-gold" style={{ textTransform: 'capitalize' }}>{car.category}</span>
                </div>
                {/* Availability */}
                <div style={{ position: 'absolute', top: '0.75rem', [t('dir') === 'rtl' ? 'left' : 'right']: '0.75rem' }}>
                    <span className={`badge ${car.available ? 'badge-green' : 'badge-red'}`}>
                        {car.available ? t('cars.available') : t('cars.unavailable')}
                    </span>
                </div>
                {/* Gold shimmer overlay */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(10,10,15,0.9) 0%, rgba(10,10,15,0.1) 60%, transparent 100%)',
                }} />
            </div>

            {/* Content */}
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Brand & Name */}
                <div style={{ marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.78rem', color: '#c9a227', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                        {car.brand}
                    </div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>{car.name}</div>
                </div>

                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem' }}>
                    <div className="stars" style={{ display: 'flex', gap: 1 }}>
                        {[1, 2, 3, 4, 5].map(s => (
                            <Star key={s} size={12} fill={s <= Math.floor(car.rating) ? '#c9a227' : 'transparent'} color="#c9a227" />
                        ))}
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>{car.rating} ({car.reviews})</span>
                </div>

                {/* Specs */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '1.25rem' }}>
                    {[
                        { Icon: Users, text: `${car.seats} ${t('cars.specs.seats')}` },
                        { Icon: Fuel, text: car.fuel },
                        { Icon: Settings, text: car.transmission },
                        { Icon: Settings, text: `${car.doors} ${t('cars.specs.doors')}` },
                    ].map(({ Icon, text }) => (
                        <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
                            <Icon size={13} color="#c9a227" />
                            {text}
                        </div>
                    ))}
                </div>

                {/* Price & CTA */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                    <div>
                        <span style={{ fontSize: '1.6rem', fontWeight: 800, background: 'linear-gradient(135deg,#c9a227,#e8c84d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            {t('common.currency')} {car.pricePerDay.toLocaleString()}
                        </span>
                        <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', [t('dir') === 'rtl' ? 'marginRight' : 'marginLeft']: '0.25rem' }}>/{t('cars.perDay')}</span>
                    </div>
                    <Link
                        href={car.available ? `/cars/${car.id}` : '#'}
                        className={`btn btn-sm ${car.available ? 'btn-primary' : 'btn-ghost'}`}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', opacity: car.available ? 1 : 0.5, flexDirection: t('dir') === 'rtl' ? 'row-reverse' : 'row' }}
                    >
                        {t('cars.bookNow')} <ArrowRight size={14} style={{ transform: t('dir') === 'rtl' ? 'rotate(180deg)' : 'none' }} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
