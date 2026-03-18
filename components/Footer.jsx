"use client";

import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer" style={{ padding: '40px 0', background: 'var(--bg-primary)', borderTop: '1px solid var(--section-divider)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <a href="#hero" style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-heading)', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            AS
          </a>

          <div style={{ display: 'flex', gap: 16 }}>
            {[
              { icon: <FaGithub size={18} />, href: "https://github.com/RockZoid2080" },
              { icon: <FaLinkedinIn size={18} />, href: "https://www.linkedin.com/in/amansingh2005" },
              { icon: <FaEnvelope size={18} />, href: "mailto:amanzzz2022@gmail.com" },
            ].map((s, i) => (
              <a 
                key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', border: '1px solid var(--glass-border)', transition: 'all 0.3s' }}
                onMouseOver={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'var(--accent-primary)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'var(--glass-bg)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textAlign: 'center' }}>
            Made with <span style={{ color: '#e84393' }}>&hearts;</span> by Aman Singh &bull; &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
