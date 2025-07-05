import React from "react";
import { motion } from "framer-motion";

const Experience = () => (
  <motion.section
    id="experience"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h2>Experience</h2>
    <div className="experience-item">
      <h3>DermaHealer (Remote, Barcelona)</h3>
      <p><strong>Intern, IT | July 2024 – Oct 2024</strong></p>
      <ul>
        <li>Conducted market research on Chinese skincare industry.</li>
        <li>Developed a market-aligned website mock-up with SEO.</li>
        <li>Led research phases, applying SWOT &amp; PEST analysis.</li>
      </ul>
    </div>
    <div className="experience-item">
      <h3>ASE Singapore PTE LTD</h3>
      <p><strong>Product Owner &amp; Web Developer | June 2020 – Oct 2023</strong></p>
      <ul>
        <li>Led application development using C#, ASP.NET Core, PostgreSQL.</li>
        <li>Built RESTful APIs for data flow between systems.</li>
        <li>Participated in Agile cycles for continuous improvement.</li>
        <li>Obtained letter of recommendation from IT manager.</li>
      </ul>
    </div>
    <div className="experience-item">
      <h3>ASE Singapore PTE LTD</h3>
      <p><strong>Intern | May 2018 – Aug 2018</strong></p>
      <ul>
        <li>Actively worked in the development of in-house application.</li>
        <li>Obtained great testimony from the IT section manager and Finance section Manager.</li>
      </ul>
    </div>
  </motion.section>
);

export default Experience; 