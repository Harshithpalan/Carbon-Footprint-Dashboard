import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ title, value, unit, icon: Icon, trend }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 flex flex-col gap-4"
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem',
        gap: '1rem'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ 
          background: 'rgba(16, 185, 129, 0.1)', 
          padding: '0.75rem', 
          borderRadius: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Icon size={24} color="var(--accent-emerald)" />
        </div>
        {trend && (
          <span style={{ 
            fontSize: '0.875rem', 
            color: trend > 0 ? '#ef4444' : '#10b981',
            fontWeight: '600'
          }}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      <div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: '500' }}>{title}</p>
        <h3 className="stat-value">
          {value} <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>{unit}</span>
        </h3>
      </div>
    </motion.div>
  );
};

export default StatCard;
