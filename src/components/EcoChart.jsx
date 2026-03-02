import React from 'react';
import { motion } from 'framer-motion';
import {
    AreaChart, Area, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const monthlyData = [
    { month: 'Sep', saved: 8.2, emitted: 14.5 },
    { month: 'Oct', saved: 9.5, emitted: 13.0 },
    { month: 'Nov', saved: 10.1, emitted: 12.2 },
    { month: 'Dec', saved: 11.4, emitted: 11.8 },
    { month: 'Jan', saved: 10.8, emitted: 11.5 },
    { month: 'Feb', saved: 12.0, emitted: 10.9 },
];

const categoryData = [
    { category: 'Transport', value: 4.2 },
    { category: 'Diet', value: 2.8 },
    { category: 'Energy', value: 3.1 },
    { category: 'Shopping', value: 1.9 },
    { category: 'Travel', value: 0.9 },
];

const BAR_COLORS = ['#06b6d4', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444'];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{
                background: 'rgba(10, 15, 13, 0.95)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '0.75rem',
                padding: '0.75rem 1rem',
            }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{label}</p>
                {payload.map((p, i) => (
                    <p key={i} style={{ color: p.color || p.fill, fontWeight: 600, fontSize: '0.9rem' }}>
                        {p.name}: {p.value} kg CO₂
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

const EcoChart = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Area Chart */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card"
                style={{ padding: '1.5rem' }}
            >
                <h3 style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
                    CO₂ Savings vs Emissions
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                    Monthly comparison over the last 6 months
                </p>
                <ResponsiveContainer width="100%" height={240}>
                    <AreaChart data={monthlyData}>
                        <defs>
                            <linearGradient id="savedGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="emittedGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                        <XAxis dataKey="month" stroke="var(--text-secondary)" tick={{ fontSize: 12 }} />
                        <YAxis stroke="var(--text-secondary)" tick={{ fontSize: 12 }} />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend wrapperStyle={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }} />
                        <Area
                            type="monotone" dataKey="saved" name="CO₂ Saved"
                            stroke="#10b981" strokeWidth={2.5} fill="url(#savedGradient)"
                            dot={{ fill: '#10b981', r: 4 }} activeDot={{ r: 6, strokeWidth: 0 }}
                        />
                        <Area
                            type="monotone" dataKey="emitted" name="CO₂ Emitted"
                            stroke="#ef4444" strokeWidth={2.5} fill="url(#emittedGradient)"
                            dot={{ fill: '#ef4444', r: 4 }} activeDot={{ r: 6, strokeWidth: 0 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </motion.div>

            {/* Bar Chart */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card"
                style={{ padding: '1.5rem' }}
            >
                <h3 style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
                    Emissions by Category
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                    This month's breakdown (kg CO₂)
                </p>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={categoryData} barSize={32}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                        <XAxis dataKey="category" stroke="var(--text-secondary)" tick={{ fontSize: 12 }} />
                        <YAxis stroke="var(--text-secondary)" tick={{ fontSize: 12 }} />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey="value" name="CO₂ Emitted" radius={[6, 6, 0, 0]}>
                            {categoryData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={BAR_COLORS[index % BAR_COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </motion.div>
        </div>
    );
};

export default EcoChart;
