"use client";

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';

const BLOGS = [
  {
    title: "How to Start Machine Learning the Right Way",
    date: "LinkedIn",
    read: "Article",
    desc: "A comprehensive guide on beginning your journey in Machine Learning, focusing on the essential roadmaps and avoiding common pitfalls.",
    img: "https://media.licdn.com/dms/image/v2/D5612AQFNcHfefl4pnA/article-cover_image-shrink_720_1280/B56Z0CWWAXI0AI-/0/1773860912185?e=2147483647&v=beta&t=1rWBtGO4bxUbyvZG4Qf5fvP-i5QsWxth9GKxVLkjFV4",
    link: "https://www.linkedin.com/pulse/how-start-machine-learning-right-way-without-getting-aman-singh-7f8rc"
  },
  {
    title: "Why Simple Models Often Beat Complex Ones",
    date: "LinkedIn",
    read: "Article",
    desc: "An exploration into why simpler machine learning models can sometimes outperform highly complex deep learning architectures in real-world scenarios.",
    img: "/assets/images/blog-simple-models.png",
    link: "https://www.linkedin.com/pulse/why-simple-models-often-beat-complex-ones-aman-singh-zqfzc"
  }
];

export default function Blog() {
  return (
    <section className="section" id="blog">
      <div className="container">
        <div className="section-header">
          <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} className="accent-line" />
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Blog & Articles
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            Sharing what I learn along the way
          </motion.p>
        </div>

        <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 30 }}>
          {BLOGS.map((blog, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="glass-card blog-card"
              style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ width: '100%', height: 250, overflow: 'hidden' }}>
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={blog.img} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: 16, color: 'var(--accent-secondary)', fontSize: '0.8rem', fontWeight: 500, marginBottom: 12 }}>
                  <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}><FaCalendarAlt /> {blog.date}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-heading)', marginBottom: 16, lineHeight: 1.4 }}>{blog.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: 24, flex: 1, lineHeight: 1.6 }}>{blog.desc}</p>
                <a href={blog.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Read Article <FaArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
