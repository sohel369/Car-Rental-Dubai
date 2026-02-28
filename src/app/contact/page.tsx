'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise(r => setTimeout(r, 1200));
        toast.success('Message sent! We\'ll contact you within 2 hours.');
        setForm({ name: '', email: '', phone: '', message: '' });
        setLoading(false);
    };

    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '80px', minHeight: '100vh', background: '#0a0a0f' }}>
                {/* Header */}
                <div style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1025 100%)', padding: '4rem 0 3rem', borderBottom: '1px solid rgba(201,162,39,0.1)' }}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="section-badge">Get In Touch</span>
                            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', margin: '1rem 0 0.75rem' }}>
                                Contact <span className="text-gold">Us</span>
                            </h1>
                            <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 500, margin: '0 auto' }}>
                                Have a question or need a custom quote? Our team is available 24/7 to help.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="container" style={{ padding: '4rem 1.5rem' }}>
                    <div className="contact-grid">
                        {/* Info */}
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Reach Us Anytime</h2>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                                Whether you want to book, inquire about pricing, or need roadside assistance — we're here for you.
                            </p>

                            {[
                                { Icon: Phone, label: 'Phone', value: '+971 XX XXX XXXX' },
                                { Icon: Mail, label: 'Email', value: 'info@goldenkey.ae' },
                                { Icon: MapPin, label: 'Address', value: 'Sheikh Zayed Road, Dubai, UAE' },
                                { Icon: Clock, label: 'Hours', value: '24/7 — We never close' },
                            ].map(({ Icon, label, value }) => (
                                <div key={label} style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem', padding: '1.5rem', background: 'rgba(18,18,26,0.6)', border: '1px solid rgba(201,162,39,0.1)', borderRadius: 18 }}>
                                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Icon size={20} color="#c9a227" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.78rem', color: 'rgba(201,162,39,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '0.25rem' }}>{label}</div>
                                        <div style={{ fontWeight: 600, color: '#fff', fontSize: '1rem' }}>{value}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Form */}
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                            style={{ background: 'rgba(18,18,26,0.8)', border: '1px solid rgba(201,162,39,0.2)', borderRadius: 24, padding: '2.5rem', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                    <div className="form-group">
                                        <label className="form-label">Full Name</label>
                                        <input type="text" className="form-input" placeholder="John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-input" placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Phone Number</label>
                                    <input type="tel" className="form-input" placeholder="+971 XX XXX XXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Message</label>
                                    <textarea className="form-input" placeholder="How can we help you?" rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required style={{ resize: 'vertical' }} />
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg" disabled={loading} style={{ gap: '0.75rem', justifyContent: 'center', marginTop: '0.5rem' }}>
                                    {loading ? <span className="spinner" style={{ width: 20, height: 20, borderWidth: 2 }} /> : <><Send size={18} /> Send Message</>}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppFAB />
            <style>{`
                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.4fr;
                    gap: 4rem;
                    align-items: start;
                }
                @media (max-width: 900px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    main { padding-top: 70px !important; }
                }
            `}</style>
        </>
    );
}
