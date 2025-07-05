import React from "react";
import { motion } from "framer-motion";

const Projects = () => (
  <motion.section
    id="projects"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h2>Projects</h2>
    <div className="project-item">
      <h3>Market Research & Website Mock-up</h3>
      <p>Conducted in-depth market analysis of Chinese skincare industry; designed a localized website mock-up for Baidu SEO, resulting in strategic insights and a visual prototype.</p>
    </div>
    <div className="project-item">
      <h3>NPI Customer Portal</h3>
      <p>Developed a B2B web portal to streamline New Product Introduction, reducing process time by 40% and enhancing collaboration.</p>
      <p><a href="https://customerportal.aseglobal.com.sg/Account/Login?ReturnUrl=%2F" target="_blank" rel="noopener noreferrer">NPI Portal</a></p>
    </div>
    <div className="project-item">
      <h3>ASE HR Portal</h3>
      <p>Developed a web portal to streamline recrutiment process. Improving scheduling, document collection, and communication with candidates.</p>
      <p><a href="https://myportal.aseglobal.com.sg/Account/Login?ReturnUrl=%2FHr%2FHodTable" target="_blank" rel="noopener noreferrer">HR Portal</a></p>
    </div>
    <div className="project-item">
      <h3>ASE Visitor Management Systems</h3>
      <p>A web portal using ASP.NET Core and PostgreSQL, allowing visitors and hosts to schedule appointments and upload documents directly. Automated Excel report generation.</p>
      <p>Reduced scheduling time by 50%, improved visitor tracking during COVID-19, and enhanced overall efficiency.</p>
    </div>
    <div className="project-item">
      <h3>MES Report System Lot Genealogy</h3>
      <p>A program using C# and SQL to track lots from receiving to delivery, ensuring accurate monitoring at every phase.</p>
      <p>Improved audit efficiency by 30%, enhanced operational transparency, and ensured accurate oversight of the lot lifecycle.</p>
    </div>
    <div className="project-item">
      <h3>Process Improvement – ART Test Submission Management</h3>
      <p>Improve efficiency by automating submissions, reducing HR's manual workload, and ensuring a seamless experience for employees.</p>
      <p>Reduced HR workload, minimized weekend maintenance issues, and improved submission efficiency, ensuring uninterrupted compliance tracking.</p>
      <p>The application is no longer avaible as the pandenmic is over.</p>
      <p><a href="https://asesgart.paperform.co/." target="_blank" rel="noopener noreferrer">App link</a></p>
    </div>
    <div className="project-item">
      <h3>Pocket One Map</h3>
      <p>Worked with SLA to develop an application for tracking locations and land services across Singapore.</p>
      <p><a href="https://www.onemap.gov.sg" target="_blank" rel="noopener noreferrer">One Map</a></p>
    </div>
  </motion.section>
);

export default Projects;
