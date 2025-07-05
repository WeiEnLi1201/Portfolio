// src/about.js
import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <motion.section
    id="about"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <h2>About Me</h2>
    <div style={{ textAlign: "center", marginBottom: 20 }}>
      <img
        src="/images/profile.png"
        alt="Li Wei En Profile Picture"
        style={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      />
      {/* Flags Row */}
      <div style={{ marginTop: 10 }}>
        <img src="/images/taiwan.png" alt="Taiwan Flag" style={{ width: 30, height: 20, margin: "0 5px" }} />
        <img src="/images/singapore.png" alt="Singapore Flag" style={{ width: 30, height: 20, margin: "0 5px" }} />
        <img src="/images/korea.png" alt="Korea Flag" style={{ width: 30, height: 20, margin: "0 5px" }} />
        <img src="/images/spain.png" alt="Spain Flag" style={{ width: 30, height: 20, margin: "0 5px" }} />
      </div>
    </div>
    <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
      <p>
        Experienced web developer transitioning into product ownership, passionate about bridging technical teams and business goals to deliver impactful products.
      </p>
      <br />
      <p>
        Having worked as a web developer, I am passionate about technology and its potential to transform businesses and society. My experience has taught me the importance of leadership and management alongside technical skills. I aim to leverage my expertise in software development, data transformation, and process automation to drive innovation and growth in the tech industry.
      </p>
      <br />
      <p>
        In addition to my technical background, I've had the opportunity to live in Taiwan, Singapore, Korea, and Spain. These multicultural experiences have shaped my worldview and strengthened my adaptability, communication, and cross-cultural collaboration skills.
      </p>
    </div>
  </motion.section>
);

export default About;