"use client";

import { motion } from 'framer-motion';

const SKILLS_TABLE = [
  {
    category: "Machine Learning & AI",
    items: "TensorFlow, PyTorch, Keras, Computer Vision, OpenCV, MediaPipe, DeepFake Detection"
  },
  {
    category: "OS & Scripting",
    items: "Python, C++, Bash/Shell, Linux (Ubuntu), PowerShell, HTML"
  },
  {
    category: "Data Science & Tools",
    items: "Pandas, NumPy, Matplotlib, Seaborn, MySQL, PostgreSQL"
  },
  {
    category: "Cloud, DevOps & Version Control",
    items: "Git, GitHub, Docker, CI/CD Pipelines, AWS (EC2 Basic), Google Cloud Platform"
  }
];

const SOFT_SKILLS = ["Analytical Problem Solving", "Effective Communication", "Adaptability & Resilience", "Time Management", "Team Collaboration", "Continuous Learning"];
const ACTIVITIES = ["Active LeetCode Solver (100+ Problems)", "HackerRank 5-Star Python Developer", "Open Source Contributing"];

export default function Skills() {
  return (
    <section className="section" id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="section-header">
          <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} className="accent-line" />
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Core Technical Skills
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card" style={{ padding: '0', overflow: 'hidden', marginBottom: 60 }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <tbody>
              {SKILLS_TABLE.map((row, i) => (
                <tr key={i} style={{ borderBottom: i !== SKILLS_TABLE.length - 1 ? '1px solid var(--section-divider)' : 'none' }}>
                  <td style={{ padding: '20px 24px', fontWeight: 600, color: 'var(--text-heading)', width: '35%', background: 'rgba(255,255,255,0.02)' }}>{row.category}</td>
                  <td style={{ padding: '20px 24px', color: 'var(--text-secondary)' }}>{row.items}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="section-header" style={{ marginBottom: 40 }}>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: '2rem' }}>
            Soft Skills & Activities
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30 }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card" style={{ padding: 30 }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: 16 }}>Soft Skills</h3>
            <ul style={{ color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SOFT_SKILLS.map((skill, i) => <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span style={{ color: 'var(--accent-secondary)' }}>▹</span> {skill}</li>)}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card" style={{ padding: 30 }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: 16 }}>Technical Extracurriculars</h3>
            <ul style={{ color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {ACTIVITIES.map((activity, i) => <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span style={{ color: 'var(--accent-secondary)' }}>▹</span> {activity}</li>)}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
