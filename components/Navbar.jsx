"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="navbar"
        style={{
          padding: isScrolled ? '10px 0' : '20px 0',
          boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.15)' : 'none',
          background: isScrolled ? 'var(--nav-bg)' : 'transparent',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#hero" className="nav-logo" style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-heading)' }}>
            <span className="gradient-text">AS</span>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="nav-desktop">
            {NAV_LINKS.map((link, idx) => (
              <motion.a 
                key={link.name} 
                href={link.href}
                whileHover={{ scale: 1.05, color: 'var(--accent-primary)' }}
                style={{ color: 'var(--text-secondary)', fontWeight: 500, transition: 'all 0.3s' }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 30 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
              style={{
                background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                width: 42, height: 42, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)'
              }}
            >
              {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
            </motion.button>

            {/* Hamburger */}
            <button className="nav-hamburger-btn" onClick={() => setIsOpen(!isOpen)} style={{ color: 'var(--text-primary)' }}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'fixed', top: '70px', left: 0, right: 0, background: 'var(--nav-bg)',
              backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--section-divider)', zIndex: 999,
              display: 'flex', flexDirection: 'column', padding: '20px 24px', gap: '16px'
            }}
            className="nav-mobile-menu"
          >
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                style={{ color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: 500, padding: '10px 0', borderBottom: '1px solid var(--section-divider)' }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx>{`
        .nav-hamburger-btn { display: none; }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger-btn { display: block; }
        }
      `}</style>
    </>
  );
}
