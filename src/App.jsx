import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Leaf, Car, Zap, Droplets, User, LayoutDashboard,
  BarChart2, Trophy, ClipboardList, TrendingDown, TrendingUp, Plus, Check
} from 'lucide-react';
import StatCard from './components/StatCard';
import EcoChart from './components/EcoChart';
import GamifiedStreak from './components/GamifiedStreak';
import './index.css';

const metrics = [
  { title: 'CO₂ Saved This Month', value: '12', unit: 'kg', icon: Leaf, trend: -8 },
  { title: 'Transport Emissions', value: '4.2', unit: 'kg', icon: Car, trend: -12 },
  { title: 'Energy Saved', value: '38', unit: 'kWh', icon: Zap, trend: -5 },
  { title: 'Water Conserved', value: '210', unit: 'L', icon: Droplets, trend: -18 },
];

const tips = [
  '🚲 Bike to work today and save ~1.5kg CO₂',
  '🌱 Try a plant-based meal — save ~2kg CO₂',
  '💡 Turn off standby devices — save 0.5kg CO₂/day',
  '🛁 Take a 5-min shower instead of a bath — save 0.8kg CO₂',
];

const initialActivities = [
  { id: 1, icon: '🚴', action: 'Cycled to work', saved: 1.5, date: 'Today 8:30 AM', done: true },
  { id: 2, icon: '🌿', action: 'Plant-based lunch', saved: 2.0, date: 'Today 1:00 PM', done: true },
  { id: 3, icon: '💡', action: 'Turned off standby devices', saved: 0.5, date: 'Yesterday', done: true },
  { id: 4, icon: '🚿', action: 'Short shower (<5 min)', saved: 0.8, date: 'Yesterday', done: true },
  { id: 5, icon: '♻️', action: 'Recycled packaging', saved: 0.3, date: '2 days ago', done: true },
  { id: 6, icon: '🛒', action: 'Bought local produce', saved: 1.2, date: '3 days ago', done: true },
];

const challengeItems = [
  { id: 1, icon: '🚗', label: 'Go car-free for a day', reward: '+50 pts', done: false },
  { id: 2, icon: '🥗', label: 'Eat vegetarian for 3 meals', reward: '+30 pts', done: true },
  { id: 3, icon: '💧', label: 'Keep shower under 5 min', reward: '+20 pts', done: true },
  { id: 4, icon: '🔌', label: 'Unplug idle electronics', reward: '+15 pts', done: false },
  { id: 5, icon: '🛍️', label: 'Use reusable bag shopping', reward: '+10 pts', done: false },
];

const tabs = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'charts', label: 'Analytics', icon: BarChart2 },
  { id: 'activity', label: 'Activity Log', icon: ClipboardList },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
];

function App() {
  const [activeTip, setActiveTip] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState('overview');
  const [challenges, setChallenges] = React.useState(challengeItems);
  const [activities] = React.useState(initialActivities);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveTip(prev => (prev + 1) % tips.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleChallenge = (id) => {
    setChallenges(prev =>
      prev.map(c => c.id === id ? { ...c, done: !c.done } : c)
    );
  };

  const totalPoints = challenges.filter(c => c.done).reduce((sum, c) => {
    return sum + parseInt(c.reward.replace(/\D/g, ''));
  }, 0);

  return (
    <div className="app-wrapper">
      {/* ── Header ────────────────────────────────────────────── */}
      <header className="app-header">
        <div className="header-brand">
          <div className="brand-icon">
            <Leaf size={20} color="white" fill="white" />
          </div>
          <div>
            <h1 className="brand-name">EcoTrack</h1>
            <p className="brand-sub">Carbon Footprint Dashboard</p>
          </div>
        </div>

        <nav className="tab-nav">
          {tabs.map(tab => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              className={`tab-btn${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon size={15} />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="header-user">
          <div className="user-info">
            <p className="user-name">Harshith Palan</p>
            <p className="user-level">Eco Level 8 🌿</p>
          </div>
          <div className="user-avatar"><User size={18} color="white" /></div>
        </div>
      </header>

      {/* ── Hero Banner (Overview only) ──────────────────────── */}
      {activeTab === 'overview' && (
        <motion.div
          key="hero"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-banner"
        >
          <p className="hero-date">March 2026</p>
          <h2 className="hero-title">
            🌍 You've saved{' '}
            <span className="gradient-text">12 kg CO₂</span>{' '}
            this month!
          </h2>
          <p className="hero-sub">
            That's equivalent to planting <strong className="hero-highlight">2 trees</strong>. Keep it up!
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTip}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="tip-pill"
            >
              {tips[activeTip]}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}

      {/* ── Main Content ─────────────────────────────────────── */}
      <main className="main-content">
        <AnimatePresence mode="wait">

          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <motion.div key="overview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="stat-grid">
                {metrics.map((m, i) => (
                  <motion.div key={m.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                    <StatCard {...m} />
                  </motion.div>
                ))}
              </div>
              <div className="two-col-grid">
                <EcoChart />
                <GamifiedStreak />
              </div>
            </motion.div>
          )}

          {/* ANALYTICS TAB */}
          {activeTab === 'charts' && (
            <motion.div key="charts" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="section-header">
                <h2 className="section-title">Analytics</h2>
                <p className="section-sub">Your detailed eco-impact data</p>
              </div>
              <div className="stat-grid" style={{ marginBottom: '2rem' }}>
                {metrics.map((m, i) => (
                  <motion.div key={m.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                    <StatCard {...m} />
                  </motion.div>
                ))}
              </div>
              <EcoChart />
            </motion.div>
          )}

          {/* ACTIVITY LOG TAB */}
          {activeTab === 'activity' && (
            <motion.div key="activity" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="section-header">
                <h2 className="section-title">Activity Log</h2>
                <p className="section-sub">Track every eco-friendly action you've taken</p>
              </div>
              <div className="glass-card activity-log">
                {activities.map((a, i) => (
                  <motion.div
                    key={a.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="activity-row"
                  >
                    <div className="activity-icon-wrap">{a.icon}</div>
                    <div className="activity-info">
                      <p className="activity-action">{a.action}</p>
                      <p className="activity-date">{a.date}</p>
                    </div>
                    <div className="activity-saved">
                      <TrendingDown size={14} color="#10b981" />
                      <span>-{a.saved} kg CO₂</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Summary block */}
              <div className="glass-card" style={{ marginTop: '1.5rem', padding: '1.5rem' }}>
                <h3 style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: '1rem' }}>Weekly Summary</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                  {[
                    { label: 'Total saved', value: '6.3 kg', color: '#10b981' },
                    { label: 'Actions taken', value: '6', color: '#06b6d4' },
                    { label: 'Best day', value: 'Monday', color: '#8b5cf6' },
                  ].map(s => (
                    <div key={s.label} style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255,255,255,0.04)', borderRadius: '1rem' }}>
                      <p style={{ fontSize: '1.5rem', fontWeight: 700, color: s.color }}>{s.value}</p>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ACHIEVEMENTS TAB */}
          {activeTab === 'achievements' && (
            <motion.div key="achievements" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="section-header">
                <h2 className="section-title">Achievements</h2>
                <p className="section-sub">Complete challenges to earn points and badges</p>
              </div>

              {/* Points banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card points-banner"
              >
                <div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Total Points Earned</p>
                  <p style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1 }} className="gradient-text">
                    {totalPoints} pts
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Challenges done</p>
                  <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>
                    {challenges.filter(c => c.done).length}/{challenges.length}
                  </p>
                </div>
              </motion.div>

              {/* Daily challenges */}
              <h3 style={{ color: 'var(--text-primary)', fontWeight: 600, margin: '1.5rem 0 0.75rem' }}>
                Today's Challenges
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {challenges.map((c, i) => (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={`glass-card challenge-row${c.done ? ' done' : ''}`}
                    onClick={() => toggleChallenge(c.id)}
                  >
                    <span className="challenge-icon">{c.icon}</span>
                    <span className="challenge-label">{c.label}</span>
                    <span className="challenge-reward">{c.reward}</span>
                    <div className={`challenge-check${c.done ? ' checked' : ''}`}>
                      {c.done && <Check size={14} color="white" />}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Badges section */}
              <div style={{ marginTop: '2rem' }}>
                <GamifiedStreak />
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="app-footer">
        🌿 EcoTrack — Helping you build a greener future, one action at a time.
      </footer>
    </div>
  );
}

export default App;
