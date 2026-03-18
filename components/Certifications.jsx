"use client";

import { motion } from 'framer-motion';
import { FaRobot, FaSitemap, FaJava, FaProjectDiagram, FaCubes, FaComments, FaExternalLinkAlt } from 'react-icons/fa';

const CERTS = [
  {
    title: "ChatGPT-4 Prompt Engineering | Generative AI & LLM",
    issuer: "Infosys Springboard",
    date: "August 2025",
    icon: <FaRobot size={24} />,
    link: "https://drive.google.com/file/d/1DSaaT-VYXaG7tIPn_VGEJtpaNJGDL8z1/view?usp=drive_link"
  },
  {
    title: "Basics of Data Structures & Algorithms",
    issuer: "Centre for Professional Enhancement",
    date: "July 2025",
    icon: <FaSitemap size={24} />,
    link: "https://drive.google.com/file/d/1OUxQEHo_OITaSYJD0Idw7usLBYiHZGnY/view?usp=drive_link"
  },
  {
    title: "Java Programming Course",
    issuer: "Neocolab",
    date: "July 2025",
    icon: <FaJava size={24} />,
    link: "https://drive.google.com/file/d/1FQsmBFkxurlNu3pgEL3LvSfBFux_1fpc/view?usp=drive_link"
  },
  {
    title: "Data Structures & Algorithms (C++)",
    issuer: "Neocolab",
    date: "August 2024",
    icon: <FaProjectDiagram size={24} />,
    link: "https://drive.google.com/file/d/1mqMILrR96ACs_uRugGF3drzFI37XZSka/view?usp=drive_link"
  },
  {
    title: "Object Oriented Programming (C++)",
    issuer: "Neocolab",
    date: "August 2024",
    icon: <FaCubes size={24} />,
    link: "https://drive.google.com/file/d/1GHK-dgmzq40GMOpIwvfqIiwR9Pp93NIL/view?usp=drive_link"
  },
  {
    title: "English Communication & Public Speaking",
    issuer: "Professional Enhancement Program",
    date: "August 2024",
    icon: <FaComments size={24} />,
    link: "https://drive.google.com/file/d/17dpY8l6eIEGzYJ16P6t_oGEi6ucoSYjP/view?usp=drive_link"
  }
];

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-header">
          <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} className="accent-line" />
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Certifications
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            Credentials that validate my skills
          </motion.p>
        </div>

        <div className="certifications-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {CERTS.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -8, boxShadow: 'var(--glow-hover)' }}
              className="glass-card cert-card"
              style={{ padding: 24, display: 'flex', gap: 16, alignItems: 'flex-start' }}
            >
              <div style={{ padding: 12, background: 'rgba(108, 92, 231, 0.15)', borderRadius: 12, color: 'var(--accent-primary)' }}>
                {cert.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-heading)', marginBottom: 8, lineHeight: 1.4 }}>{cert.title}</h3>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: 4 }}>{cert.issuer}</div>
                <div style={{ color: 'var(--accent-secondary)', fontSize: '0.8rem', fontWeight: 500, marginBottom: 12 }}>{cert.date}</div>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 600, transition: 'color 0.3s' }}>
                  <FaExternalLinkAlt size={12} /> View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
