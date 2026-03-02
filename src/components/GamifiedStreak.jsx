import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Award, Zap, Star, Trophy } from 'lucide-react';

const badges = [
    { icon: Flame, label: 'Hot Streak', color: '#f97316', description: '7 days in a row!', earned: true },
    { icon: Award, label: 'Eco Hero', color: '#10b981', description: 'Saved 50kg CO₂', earned: true },
    { icon: Zap, label: 'Quick Saver', color: '#06b6d4', description: 'Daily goal hit 5x', earned: true },
    { icon: Star, label: 'Green Star', color: '#f59e0b', description: 'Top 10% this week', earned: false },
    { icon: Trophy, label: 'Champion', color: '#8b5cf6', description: 'Save 100kg CO₂', earned: false },
];

const GoalRing = ({ percentage, label, value }) => {
    const radius = 42;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ position: 'relative', width: '100px', height: '100px' }}>
                <svg width="100" height="100" style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                    <circle
                        cx="50" cy="50" r={radius} fill="none"
                        stroke="url(#ringGrad)" strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        style={{ transition: 'stroke-dashoffset 1s ease' }}
                    />
                    <defs>
                        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                    </defs>
                </svg>
                <div style={{
                    position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center'
                }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{value}</span>
                    <span style={{ fontSize: '0.6rem', color: 'var(--text-secondary)' }}>kg CO₂</span>
                </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textAlign: 'center' }}>{label}</p>
        </div>
    );
};

const GamifiedStreak = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Streak Counter */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="glass-card"
                style={{ padding: '1.5rem' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{
                        background: 'rgba(249, 115, 22, 0.15)', padding: '0.75rem', borderRadius: '1rem',
                        border: '1px solid rgba(249, 115, 22, 0.3)'
                    }}>
                        <Flame size={28} color="#f97316" />
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.125rem' }}>
                            Current Streak
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                            Keep going, you're on fire! 🔥
                        </p>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                    <span style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1, background: 'linear-gradient(135deg, #f97316, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>7</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', fontWeight: 600 }}>days</span>
                </div>
                <div style={{ marginTop: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Toward 14-day badge</span>
                        <span style={{ color: 'var(--accent-emerald)', fontSize: '0.8rem', fontWeight: 600 }}>7/14</span>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '9999px', height: '8px', overflow: 'hidden' }}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '50%' }}
                            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                            style={{
                                height: '100%', borderRadius: '9999px',
                                background: 'linear-gradient(90deg, #10b981, #06b6d4)'
                            }}
                        />
                    </div>
                </div>
            </motion.div>

            {/* Monthly Goals */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card"
                style={{ padding: '1.5rem' }}
            >
                <h3 style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: '1.5rem' }}>
                    Monthly Goals
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem' }}>
                    <GoalRing percentage={80} label="Saved" value="12" />
                    <GoalRing percentage={60} label="Monthly Goal" value="15" />
                    <GoalRing percentage={72} label="Reduced" value="3.5" />
                </div>
            </motion.div>

            {/* Badges */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-card"
                style={{ padding: '1.5rem' }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <h3 style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Your Badges</h3>
                    <span style={{
                        background: 'rgba(16, 185, 129, 0.15)',
                        color: 'var(--accent-emerald)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.8rem',
                        fontWeight: 600
                    }}>3/5 earned</span>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    {badges.map((badge, i) => (
                        <motion.div
                            key={badge.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.08 }}
                            title={badge.description}
                            style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
                                padding: '0.75rem',
                                background: badge.earned ? `rgba(${badge.color === '#f97316' ? '249,115,22' : badge.color === '#10b981' ? '16,185,129' : badge.color === '#06b6d4' ? '6,182,212' : badge.color === '#f59e0b' ? '245,158,11' : '139,92,246'}, 0.12)` : 'rgba(255,255,255,0.04)',
                                border: `1px solid ${badge.earned ? badge.color + '40' : 'rgba(255,255,255,0.08)'}`,
                                borderRadius: '0.875rem',
                                opacity: badge.earned ? 1 : 0.4,
                                cursor: 'default',
                                minWidth: '70px',
                                textAlign: 'center'
                            }}
                        >
                            <badge.icon size={22} color={badge.earned ? badge.color : 'var(--text-secondary)'} />
                            <span style={{ fontSize: '0.7rem', color: badge.earned ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: 500 }}>
                                {badge.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default GamifiedStreak;
