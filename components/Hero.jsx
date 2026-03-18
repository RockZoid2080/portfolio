"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaChevronDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const TYPING_PHRASES = [
  "Data Science Enthusiast",
  "Machine Learning Engineer",
  "B.Tech CSE Student"
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex(prev => (prev + 1) % TYPING_PHRASES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero section" id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      
      {/* Animated Background Orbs */}
      <div className="hero-bg" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <motion.div 
          animate={{ x: [0, 40, -40, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'var(--accent-primary)', filter: 'blur(120px)', opacity: 0.3, top: '-10%', right: '-5%' }}
        />
        <motion.div 
          animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'var(--accent-secondary)', filter: 'blur(100px)', opacity: 0.25, bottom: '-10%', left: '-5%' }}
        />
      </div>

      <div className="hero-content" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 800, padding: '0 24px', marginTop: 60 }}>
        
        {/* Profile Image */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 100, delay: 0.2 }}
          style={{ width: 160, height: 160, borderRadius: '50%', margin: '0 auto 30px', position: 'relative', padding: 5, background: 'var(--accent-gradient)' }}
        >
          <img src="/assets/images/profile.png" alt="Aman Singh" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--bg-primary)' }} />
        </motion.div>

        <motion.span 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ display: 'inline-block', padding: '8px 20px', borderRadius: 50, background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', backdropFilter: 'blur(10px)', color: 'var(--accent-secondary)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 24 }}
        >
          👋 Welcome to my portfolio
        </motion.span>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ fontSize: 'Clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 800, color: 'var(--text-heading)', lineHeight: 1.1, marginBottom: 16 }}
        >
          Hi, I'm <span className="gradient-text">Aman Singh</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ fontSize: '1.4rem', fontWeight: 500, marginBottom: 12, color: 'var(--text-heading)' }}
        >
          Building Intelligent Systems & Driving Data-Driven Solutions
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{ fontSize: '1.2rem', fontWeight: 400, marginBottom: 40, color: 'var(--text-secondary)' }}
        >
          Machine Learning Engineer | Data Science Enthusiast
        </motion.div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="https://github.com/RockZoid2080" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FaGithub size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/amansingh2005" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <FaLinkedin size={18} /> LinkedIn
          </a>
          <a href="/assets/Aman_Singh_Resume.pdf" download className="btn btn-glass">
            <FaDownload size={18} /> Resume
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'var(--text-secondary)', fontSize: '0.85rem' }}
      >
        <span>Scroll Down</span>
        <FaChevronDown size={14} />
      </motion.div>
    </section>
  );
}
