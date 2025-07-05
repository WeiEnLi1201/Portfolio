import React from "react";
import { motion } from "framer-motion";

const Skills = () => (
  <motion.section
    id="skills"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h2>Skills</h2>
    <div className="experience-item">
      <h3>Programming</h3>
      <div className="programming-skills-row">
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/csharp.png"} alt="C#" />
          <span>C#</span>
        </div>
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/java.png"} alt="Java" />
          <span>Java</span>
        </div>
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/html.png"} alt="HTML" />
          <span>HTML</span>
        </div>
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/css.png"} alt="CSS" />
          <span>CSS</span>
        </div>
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/javascript.png"} alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/sql.png"} alt="SQL" />
          <span>SQL</span>
        </div>
      </div>
    </div>
    <div className="experience-item">
      <h3>Software</h3>
      <div className="programming-skills-row">
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/visualStudio.png"} alt="Visual Studio" />
          <span>Visual Studio</span>
        </div>
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/netbeans.png"} alt="NetBeans" />
          <span>NetBeans</span>
        </div>
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/postGres.png"} alt="PostgreSQL" />
          <span>PostgreSQL</span>
        </div>
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/microsoft.png"} alt="Microsoft tools" />
          <span>Microsoft tools</span>
        </div>
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/git.png"} alt="Git" />
          <span>Git</span>
        </div>
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/wireframe.png"} alt="Wireframe" />
          <span>Wireframe</span>
        </div>
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/postman.png"} alt="Postman API" />
          <span>Postman API</span>
        </div>
      </div>
    </div>
    <div className="experience-item">
      <h3>Soft Skills</h3>
      <div className="programming-skills-row">
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/commuication.png"} alt="Communication" />
          <span>Communication</span>
        </div>
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/nego.png"} alt="Negotiation" />
          <span>Negotiation</span>
        </div>
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/collab.png"} alt="Collaboration" />
          <span>Collaboration</span>
        </div>
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/problem.png"} alt="Problem-Solving" />
          <span>Problem-Solving</span>
        </div>
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/time.png"} alt="Time Management" />
          <span>Time Management</span>
        </div>
      </div>
    </div>
    <div className="experience-item">
      <h3>Language</h3>
      <div className="programming-skills-row">
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/english.png"} alt="English" />
          <span>English C2</span>
        </div>
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/taiwan.png"} alt="Chinese Mandarin" />
          <span>Chinese Mandarin C2</span>
        </div>
        <div className="skill-item">
          <img src={process.env.PUBLIC_URL + "/images/spain.png"} alt="Spanish" />
          <span>Spanish A1</span>
        </div>
      </div>
    </div>
  </motion.section>
);

export default Skills;
