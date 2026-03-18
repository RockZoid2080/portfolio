"use client";

import { motion } from 'framer-motion';
import { FaStar, FaCheckCircle, FaHackerrank, FaCode } from 'react-icons/fa';

export default function Achievements() {
  return (
    <section className="section" id="achievements" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} className="accent-line" />
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Achievements
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            Milestones on my coding journey
          </motion.p>
        </div>

        <div className="achievements-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 30 }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="glass-card" style={{ padding: 32, textAlign: 'center' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>🏆</div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-heading)', marginBottom: 16 }}>HackerRank Python</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>5-Star proficiency in Python skill assessment. Continuously strengthening expertise in algorithmic patterns.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 4, color: '#f1c40f', marginBottom: 24 }}>
              {[1,2,3,4,5].map(i => <FaStar key={i} />)}
            </div>
            <a href="https://www.hackerrank.com/profile/amanzzz2022" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '8px 20px' }}>
              <FaHackerrank /> View Profile
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="glass-card" style={{ padding: 32, textAlign: 'center' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>💡</div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-heading)', marginBottom: 16 }}>LeetCode 100+</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>Solved 100+ problems covering arrays, linked lists, dynamic programming, graphs, and trees.</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, color: 'var(--accent-secondary)', marginBottom: 24, fontWeight: 600 }}>
              <FaCheckCircle size={20} /> 100+ Solved
            </div>
            <a href="https://leetcode.com/u/Void_Aman/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '8px 20px' }}>
              <FaCode /> View Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
