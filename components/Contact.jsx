"use client";

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="section" id="contact" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} className="accent-line" />
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Get In Touch
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            Have a question or want to work together? Let's connect!
          </motion.p>
        </div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 50 }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            {[
              { icon: <FaEnvelope/>, title: "Email", info: "amanzzz2022@gmail.com", href: "mailto:amanzzz2022@gmail.com" },
              { icon: <FaPhone/>, title: "Phone", info: "+91 8318012467" },
              { icon: <FaGithub/>, title: "GitHub", info: "github.com/RockZoid2080", href: "https://github.com/RockZoid2080" },
              { icon: <FaLinkedin/>, title: "LinkedIn", info: "linkedin.com/in/amansingh2005", href: "https://www.linkedin.com/in/amansingh2005" },
              { icon: <FaMapMarkerAlt/>, title: "Location", info: "Phagwara, Punjab, India" },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{ width: 45, height: 45, borderRadius: '50%', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', fontSize: '1.2rem', border: '1px solid var(--glass-border)' }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-heading)', fontSize: '1rem', marginBottom: 4 }}>{item.title}</h4>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--accent-primary)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>
                      {item.info}
                    </a>
                  ) : (
                    <p style={{ color: 'var(--text-secondary)' }}>{item.info}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card contact-form" 
            action="https://formsubmit.co/amanzzz2022@gmail.com" 
            method="POST"
            style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>Your Name</label>
              <input type="text" name="name" placeholder="John Doe" required style={inputStyle} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>Email Address</label>
              <input type="email" name="email" placeholder="john@example.com" required style={inputStyle} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>Subject</label>
              <input type="text" name="subject" placeholder="Let's collaborate!" style={inputStyle} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>Message</label>
              <textarea name="message" placeholder="Tell me about your project or idea..." required style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }}></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}>
              <FaPaperPlane /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid var(--glass-border)',
  borderRadius: 8,
  color: 'var(--text-primary)',
  fontFamily: 'inherit',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.3s, background 0.3s'
};
