"use client";

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const PROJECTS = [
  {
    id: 1,
    title: "DeepFake Face Swap Detection",
    desc: "Engineered a comprehensive CNN-based binary classification model to accurately detect AI-generated face swap deepfakes in both images and videos. Conducted extensive testing comparing Adam, SGD, and RMSProp optimizers to achieve optimal validation accuracy and minimize false positives.",
    tools: "Python, TensorFlow, Keras, OpenCV, NumPy",
    skills: "Deep Learning Architectures, Model Optimization, Computer Vision Preprocessing, Performance Tuning",
    link: "https://github.com/RockZoid2080/Deepfake-Face-Swap-Detection-System",
    image: "/assets/images/project-deepfake.png"
  },
  {
    id: 2,
    title: "Real-Time Sign Language Recognition",
    desc: "Built a highly responsive real-time recognition system that captures live hand-sign images and predicts the corresponding alphabet using a deep learning classification pipeline. Designed the architecture to achieve ~95% inference accuracy on live camera feeds.",
    tools: "Python, TensorFlow, OpenCV, MediaPipe, NumPy",
    skills: "Real-time Inference, Deep Convolutional Networks, Data Augmentation, Video Processing Pipelines",
    link: "https://github.com/RockZoid2080/Real-time-sign-language-management-system-",
    image: "/assets/images/project-sign-language.png"
  }
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container" style={{ maxWidth: 1000 }}>
        <div className="section-header">
          <motion.div initial={{ width: 0 }} whileInView={{ width: 60 }} viewport={{ once: true }} className="accent-line" />
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Featured Projects
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 40 }}>
          {PROJECTS.map((proj, i) => (
            <motion.div 
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ 
                scale: 1.03, 
                rotateY: 2, 
                rotateX: -2,
                boxShadow: "0 25px 50px rgba(108, 92, 231, 0.4)"
              }}
              className="glass-card" 
              style={{ padding: 0, overflow: 'hidden', perspective: 1000, display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ width: '100%', height: 220, overflow: 'hidden' }}>
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={proj.image} 
                  alt={proj.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div style={{ padding: 32, display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 16 }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-heading)', lineHeight: 1.3 }}>{proj.title}</h3>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.8rem' }}>
                    <FaGithub /> Code
                  </a>
                </div>
                
                <div style={{ marginBottom: 24, flex: 1 }}>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: 8 }}>Description:</strong>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                    {proj.desc}
                  </p>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: 8 }}>Tools Used:</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{proj.tools}</p>
                </div>

                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: 8 }}>Skills Demonstrated:</strong>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{proj.skills}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
