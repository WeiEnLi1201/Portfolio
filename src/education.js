// src/education.js
import React from "react";
import "./App.css"; // or create a separate CSS file if you prefer
import { motion } from "framer-motion";

const Education = () => (
  <motion.section
    id="education"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h2>Education</h2>
    <div className="education-container">
      <div className="education-card">
        <img src="/images/uab.png" alt="Autonomous University of Barcelona Logo" className="school-logo" />
        <h3>Master&apos;s in International Business Management</h3>
        <p><strong>Autonomous University of Barcelona</strong></p>
        <p>Graduated: 2024</p>
      </div>
      <div className="education-card">
        <img src="/images/smu.png" alt="Singapore Management University Logo" className="school-logo" />
        <h3>Bachelor&apos;s in Information Systems</h3>
        <p><strong>Singapore Management University (SMU)</strong></p>
        <p>Graduated: 2020</p>
      </div>
      <div className="education-card">
        <img src="/images/nyp.png" alt="Nanyang Polytechnic Logo" className="school-logo" />
        <h3>Diploma in Information Technology</h3>
        <p><strong>Nanyang Polytechnic (NYP)</strong></p>
        <p>Graduated: 2016</p>
      </div>
    </div>
  </motion.section>
);

export default Education;