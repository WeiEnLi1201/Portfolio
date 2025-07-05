import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Li Wei En's AI assistant. Ask me about my skills, experience, or projects! I am not connected to databse, so my resposne will be limited.",
      sender: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    skills: "I have experience with C#, Java, HTML, CSS, JavaScript, SQL, and various tools like Visual Studio, NetBeans, PostgreSQL, Git, and more. I'm also proficient in soft skills like communication, negotiation, collaboration, problem-solving, and time management.",
    experience: "I have experience as a Product Owner & Web Developer at ASE Singapore PTE LTD (2020-2023), where I led application development using C#, ASP.NET Core, and PostgreSQL. I also interned at DermaHealer in Barcelona (2024) and ASE Singapore (2018).",
    projects: "Some of my key projects include: NPI Customer Portal (reduced process time by 40%), ASE HR Portal, ASE Visitor Management Systems (reduced scheduling time by 50%), MES Report System, and working with SLA on Pocket One Map. Would you like to know more about any specific project?",
    education: "I have a Master's in International Business Management from Autonomous University of Barcelona (2024), a Bachelor's in Information Systems from Singapore Management University (2020), and a Diploma in Information Technology from Nanyang Polytechnic (2016).",
    contact: "You can reach me at weien.li.1201@gmail.com, call me at +34600426748, or connect with me on LinkedIn at linkedin.com/in/weienli1201/",
    languages: "I speak English (C2), Chinese Mandarin (C2), and Spanish (A1).",
    location: "I've lived in Taiwan, Singapore, Korea, and Spain, giving me multicultural experience and adaptability.",
    default: "I'm not sure about that. You can ask me about my skills, experience, projects, education, contact info, languages, or location!"
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('programming')) {
      return botResponses.skills;
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
      return botResponses.experience;
    } else if (lowerMessage.includes('project') || lowerMessage.includes('portfolio')) {
      return botResponses.projects;
    } else if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('university')) {
      return botResponses.education;
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('linkedin')) {
      return botResponses.contact;
    } else if (lowerMessage.includes('language') || lowerMessage.includes('speak')) {
      return botResponses.languages;
    } else if (lowerMessage.includes('location') || lowerMessage.includes('country') || lowerMessage.includes('live')) {
      return botResponses.location;
    } else {
      return botResponses.default;
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user'
    };

    const botMessage = {
      id: messages.length + 2,
      text: getBotResponse(inputValue),
      sender: 'bot'
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
          background: 'var(--accent)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: 60,
          height: 60,
          fontSize: 24,
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat with AI assistant"
      >
        {isOpen ? '✕' : '💬'}
      </motion.button>

      {/* Chat Interface */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'fixed',
            bottom: 100,
            right: 20,
            width: 350,
            height: 500,
            background: 'var(--card-bg)',
            borderRadius: 12,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 999,
            border: '1px solid var(--accent)'
          }}
        >
          {/* Chat Header */}
          <div style={{
            padding: '15px 20px',
            background: 'var(--accent)',
            color: 'white',
            borderRadius: '12px 12px 0 0',
            fontWeight: 'bold'
          }}>
            💬 Li Wei En's AI Assistant
          </div>

          {/* Messages Area */}
          <div style={{
            flex: 1,
            padding: '15px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%'
                }}
              >
                <div style={{
                  background: message.sender === 'user' ? 'var(--accent)' : 'var(--bg)',
                  color: message.sender === 'user' ? 'white' : 'var(--text)',
                  padding: '10px 15px',
                  borderRadius: '18px',
                  fontSize: '14px',
                  lineHeight: '1.4',
                  wordWrap: 'break-word'
                }}>
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div style={{
            padding: '15px',
            borderTop: '1px solid var(--bg)',
            display: 'flex',
            gap: '10px'
          }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                padding: '10px 15px',
                border: '1px solid var(--bg)',
                borderRadius: '20px',
                fontSize: '14px',
                background: 'var(--bg)',
                color: 'var(--text)',
                outline: 'none'
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                background: 'var(--accent)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: 40,
                height: 40,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ➤
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Chatbot; 