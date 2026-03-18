"use client";

import { motion } from 'framer-motion';
import { FaUniversity, FaSchool } from 'react-icons/fa';

const EDU_DATA = [
  {
    title: "B.Tech — Computer Science & Engineering",
    icon: <FaUniversity />,
    inst: "Lovely Professional University, Phagwara, Punjab",
    date: "Aug 2021 – Present • CGPA: 7.13"
  },
  {
    title: "Intermediate (12th)",
    icon: <FaSchool />,
    inst: "Bharatiya/Bhavans KDKVM, Renukoot, U.P",
    date: "Apr 2022 – Mar 2023 • Percentage: 82%"
  },
  {
    title: "Matriculation (10th)",
    icon: <FaSchool />,
    inst: "Bharatiya/Bhavans KDKVM, Renukoot, U.P",
    date: "Apr 2020 – Mar 2021 • Percentage: 92%"
  }
];

export default function Education() {
  return (
    <section className="section" id="education" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} className="accent-line" />
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Education
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            My academic journey
          </motion.p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 800, margin: '0 auto', perspective: 1500 }}>
          {EDU_DATA.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.03, 
                rotateX: 4, 
                rotateY: -2,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
              }}
              className="glass-card"
              style={{ padding: 30, borderLeft: '4px solid var(--accent-secondary)' }}
            >
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: 8 }}>{item.title}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--accent-primary)', fontWeight: 500, marginBottom: 8 }}>
                {item.icon} {item.inst}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
