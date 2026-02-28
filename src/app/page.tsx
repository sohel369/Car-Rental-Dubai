'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CarCard from '@/components/CarCard';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import { carsData } from '@/data/cars';
import { Star, Award, Shield, Clock, ChevronRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const categories = ['all', 'economy', 'luxury', 'suv', 'sports'] as const;

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('all');

  const filteredCars = activeCategory === 'all'
    ? carsData.slice(0, 6)
    : carsData.filter(c => c.category === activeCategory);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        {/* Why Choose Us */}
        <section className="section" style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 100%)' }}>
          <div className="container">
            <motion.div className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-badge"><Award size={12} /> Why Golden Key?</span>
              <h2 className="section-title">Experience the Difference</h2>
              <div className="divider-gold"></div>
              <p className="section-subtitle">We don't just rent cars — we deliver unforgettable driving experiences.</p>
            </motion.div>

            <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              {[
                { Icon: Shield, title: 'Fully Insured', desc: 'All vehicles covered with comprehensive insurance for your peace of mind.' },
                { Icon: Clock, title: '24/7 Support', desc: 'Our team is always available to assist you anytime, day or night.' },
                { Icon: Star, title: 'Premium Fleet', desc: '200+ meticulously maintained vehicles from top global brands.' },
                { Icon: CheckCircle, title: 'Instant Booking', desc: 'Book in minutes with real-time availability and instant confirmation.' },
              ].map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  className="card"
                  style={{ padding: '2rem', textAlign: 'center' }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%', margin: '0 auto 1.25rem',
                    background: 'linear-gradient(135deg, rgba(201,162,39,0.15), rgba(201,162,39,0.05))',
                    border: '1px solid rgba(201,162,39,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={26} color="#c9a227" />
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.6rem', color: '#fff' }}>{title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Section */}
        <section className="section" style={{ background: '#0a0a0f' }}>
          <div className="container">
            <motion.div className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-badge">Our Fleet</span>
              <h2 className="section-title">Premium Vehicles for Every Journey</h2>
              <div className="divider-gold"></div>
              <p className="section-subtitle">From city cruisers to supercar experiences — find your perfect drive.</p>
            </motion.div>

            {/* Category filters */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`btn btn-sm ${activeCategory === cat ? 'btn-primary' : 'btn-ghost'}`}
                  style={{ textTransform: 'capitalize', minWidth: 90 }}
                >
                  {cat === 'all' ? 'All Cars' : cat}
                </button>
              ))}
            </div>

            <div className="grid-3">
              {filteredCars.map((car, i) => (
                <CarCard key={car.id} car={car} index={i} />
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link href="/cars" className="btn btn-primary btn-lg">
                View Full Fleet <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section" style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 100%)' }}>
          <div className="container">
            <motion.div className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-badge"><Star size={12} fill="currentColor" /> Reviews</span>
              <h2 className="section-title">What Our Customers Say</h2>
              <div className="divider-gold"></div>
            </motion.div>

            <div className="grid-3">
              {[
                { name: 'Ahmed Al-Rashidi', location: 'Dubai, UAE', rating: 5, text: 'Absolutely world class service! The Lamborghini Urus was in perfect condition and the booking process was seamless. Will definitely rent again!' },
                { name: 'Sarah Johnson', location: 'London, UK', rating: 5, text: 'Best car rental experience in Dubai. Professional staff, immaculate cars, and the WhatsApp support was instant. Highly recommended!' },
                { name: 'Mohammed Hassan', location: 'Riyadh, KSA', rating: 5, text: 'الخدمة ممتازة والسيارات فاخرة. فريق العمل محترف ومتجاوب. سأتعامل معهم دائماً في زيارتي لدبي.' },
              ].map((r, i) => (
                <motion.div key={r.name} className="card" style={{ padding: '1.75rem' }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div style={{ display: 'flex', gap: 2, marginBottom: '1rem' }}>
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="#c9a227" color="#c9a227" />)}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem', fontStyle: 'italic' }}>
                    "{r.text}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: '50%',
                      background: 'linear-gradient(135deg, #c9a227, #e8c84d)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1rem', fontWeight: 700, color: '#000',
                    }}>
                      {r.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#fff' }}>{r.name}</div>
                      <div style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.4)' }}>{r.location}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{
          padding: '5rem 0',
          background: 'linear-gradient(135deg, #1a1025 0%, #0f0a1a 100%)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            width: 600, height: 300, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
                Ready to Drive Your <span className="text-gold">Dream Car?</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: 500, margin: '0 auto 2.5rem' }}>
                Book in minutes. Drive today. Your perfect car is waiting.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/cars" className="btn btn-primary btn-lg">Browse Fleet</Link>
                <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '971500000000'}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-outline btn-lg" style={{ borderColor: '#25d366', color: '#25d366' }}>
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
