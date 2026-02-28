'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CarCard from '@/components/CarCard';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import { carsData } from '@/data/cars';
import { Search, SlidersHorizontal } from 'lucide-react';

const categories = ['all', 'economy', 'luxury', 'suv', 'sports'] as const;
type Category = typeof categories[number];

export default function CarsPage() {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState<Category>('all');
    const [maxPrice, setMaxPrice] = useState(3000);
    const [transmission, setTransmission] = useState('all');
    const [showFilters, setShowFilters] = useState(false);

    const filtered = carsData.filter(car => {
        const matchesSearch = car.name.toLowerCase().includes(search.toLowerCase()) ||
            car.brand.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === 'all' || car.category === category;
        const matchesPrice = car.pricePerDay <= maxPrice;
        const matchesTransmission = transmission === 'all' || car.transmission === transmission;
        return matchesSearch && matchesCategory && matchesPrice && matchesTransmission;
    });

    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '80px', minHeight: '100vh', background: '#0a0a0f' }}>
                {/* Page Header */}
                <div style={{
                    background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1025 100%)',
                    padding: '4rem 0 3rem', borderBottom: '1px solid rgba(201,162,39,0.1)',
                }}>
                    <div className="container">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="section-badge" style={{ marginBottom: '1rem' }}>Our Fleet</span>
                            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>
                                Find Your Perfect <span className="text-gold">Drive</span>
                            </h1>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>
                                {filtered.length} vehicles available · Filter to find your match
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="container" style={{ padding: '2.5rem 1.5rem' }}>
                    {/* Search & Filter Bar */}
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
                        <div style={{ position: 'relative', flex: 1, minWidth: 220 }}>
                            <Search size={16} color="rgba(255,255,255,0.3)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                            <input type="text" placeholder="Search by car or brand..." value={search} onChange={e => setSearch(e.target.value)}
                                className="form-input" style={{ paddingLeft: '2.7rem', width: '100%' }} />
                        </div>
                        <button onClick={() => setShowFilters(!showFilters)} className="btn btn-ghost" style={{ gap: '0.5rem' }}>
                            <SlidersHorizontal size={16} /> Filters
                        </button>
                    </div>

                    {/* Advanced Filters */}
                    {showFilters && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                            style={{
                                background: 'rgba(18,18,26,0.8)', border: '1px solid rgba(201,162,39,0.15)',
                                borderRadius: 16, padding: '1.5rem', marginBottom: '2rem',
                            }}
                        >
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                <div className="form-group">
                                    <label className="form-label">Max Price (AED/day): {maxPrice}</label>
                                    <input type="range" min={100} max={3000} step={50} value={maxPrice} onChange={e => setMaxPrice(+e.target.value)}
                                        style={{ width: '100%', accentColor: '#c9a227' }} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
                                        <span>AED 100</span><span>AED 3000</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Transmission</label>
                                    <select value={transmission} onChange={e => setTransmission(e.target.value)}
                                        className="form-input" style={{ cursor: 'pointer' }}>
                                        <option value="all">All</option>
                                        <option value="Automatic">Automatic</option>
                                        <option value="Manual">Manual</option>
                                    </select>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Category Pills */}
                    <div style={{ display: 'flex', gap: '0.65rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                        {categories.map(cat => (
                            <button key={cat} onClick={() => setCategory(cat)}
                                className={`btn btn-sm ${category === cat ? 'btn-primary' : 'btn-ghost'}`}
                                style={{ textTransform: 'capitalize' }}>
                                {cat === 'all' ? 'All Cars' : cat}
                            </button>
                        ))}
                    </div>

                    {/* Car Grid */}
                    {filtered.length > 0 ? (
                        <div className="grid-3">
                            {filtered.map((car, i) => (
                                <CarCard key={car.id} car={car} index={i} />
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '4rem', color: 'rgba(255,255,255,0.4)' }}>
                            <Search size={40} style={{ margin: '0 auto 1rem', display: 'block', opacity: 0.4 }} />
                            <p>No cars match your filters. Try adjusting your search.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
            <WhatsAppFAB />
        </>
    );
}
