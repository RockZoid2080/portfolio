"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: 60 }} 
            viewport={{ once: true }} 
            className="accent-line" 
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Passionate about transforming data into intelligent solutions
          </motion.p>
        </div>

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 50, alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-text"
          >
            <p style={{ marginBottom: 20, color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              I am a 3rd-year <strong style={{color: 'var(--text-heading)'}}>Computer Science Engineering</strong> student at Lovely Professional University, specializing in <strong style={{color: 'var(--text-heading)'}}>Machine Learning and Computer Vision</strong>.
              I am passionate about the AI domain because I thrive on solving complex, real-world challenges—like enabling real-time sign language recognition or detecting deepfakes—using data.
              My core career goal is to build scalable, intelligent systems and robust data pipelines that drive meaningful technological impact as a Machine Learning Engineer.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="about-stats" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}
          >
            {[
               { num: '2+', label: 'ML Projects Built' },
               { num: '100+', label: 'LeetCode Problems' },
               { num: '5★', label: 'HackerRank Python' },
               { num: '6', label: 'Certifications' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card stat-card" style={{ padding: 24, textAlign: 'center' }}
              >
                <div className="stat-number" style={{ fontSize: '2.4rem', fontWeight: 800, background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'var(--font-outfit)' }}>{stat.num}</div>
                <div className="stat-label" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: 4 }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
