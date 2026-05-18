import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaArrowRight,
  FaExternalLinkAlt,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  // SiAdobe,
  SiGithub,
} from 'react-icons/si';

import { motion } from 'framer-motion';

import './App.css';

const skillSections = [
  {
    title: 'Frontend Development',
    items: ['ReactJS', 'NextJS', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Architecture & Performance',
    items: [
      'Scalable UI Systems',
      'Design Systems',
      'Core Web Vitals',
      'Code Splitting',
      'Lazy Loading',
      'Accessibility',
    ],
  },
  {
    title: 'CMS & Platforms',
    items: ['AEM', 'Drupal', 'Sitecore', 'Micro Frontends'],
  },
  {
    title: 'State & APIs',
    items: ['Redux', 'Context API', 'REST APIs', 'Axios', 'WebSockets'],
  },
  {
    title: 'Dev Tools & CI/CD',
    items: [
      'GitHub Actions',
      'Azure DevOps',
      'Webpack',
      'Vite',
      'Storybook',
      'Jest',
    ],
  },
  {
    title: 'AI & Productivity',
    items: ['GitHub Copilot', 'OpenAI', 'Claude AI', 'AI Chatbots'],
  },
];

const projects = [
  {
    title: 'BHHS Platform',
    desc: 'Enterprise real-estate platform powered by scalable ReactJS + AEM architecture.',
    tech: 'ReactJS • AEM • NodeJS • Salesforce',
    impact: '25% performance improvement',
  },
  {
    title: 'BOSE Performance Optimization',
    desc: 'Improved Core Web Vitals and reduced bundle size significantly.',
    tech: 'ReactJS • AEM • NodeJS',
    impact: '35% faster load time',
  },
  {
    title: 'Skyller & Varuna',
    desc: 'AI dashboard and real-time map-based analytics systems.',
    tech: 'ReactJS • NodeJS • Mapbox',
    impact: 'Real-time scalable dashboards',
  },
  {
    title: 'Hindawi',
    desc: 'Reusable scalable component system with advanced variations.',
    tech: 'NextJS • Drupal',
    impact: 'Reusable architecture system',
  },
];

const experience = [
  {
    company: 'Credera',
    role: 'Senior Specialist',
    duration: '2021 - Present',
    points: [
      'Led scalable frontend architecture',
      'Built 50+ reusable components',
      'Improved accessibility and performance',
      'Mentored frontend developers',
    ],
  },
  {
    company: 'Srijan Technologies',
    role: 'JavaScript Developer L2',
    duration: '2019 - 2021',
    points: [
      'Built scalable React applications',
      'Worked with AEM & Drupal',
      'Designed reusable component libraries',
    ],
  },
  {
    company: 'Qexon Infotech',
    role: 'Frontend Developer',
    duration: '2017 - 2019',
    points: [
      'Developed responsive applications',
      'Translated UI/UX into production apps',
      'Created reusable React components',
    ],
  },
];

function App() {
  return (
    <div className="app">
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      <header className="navbar">
        <div className="logo-wrapper">
          <div className="logo">VG</div>

          <div className="logo-text">
            <h2>Vishul Garg</h2>
            <p>Frontend Tech Lead</p>
          </div>
        </div>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <p className="hero-tag">Frontend Tech Lead</p>

          <h1>
            Building scalable
            <span> React & Next.js </span>
            experiences.
          </h1>

          <p className="hero-desc">
            8+ years of experience building high-performance web
            applications with ReactJS, NextJS, AEM, scalable frontend
            architecture, accessibility, and performance engineering.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
              <FaArrowRight />
            </a>

            <a
              href="https://github.com/vishulg"
              target="_blank"
              className="secondary-btn"
            >
              <FaGithub /> GitHub
            </a>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <h2>8+</h2>
              <p>Years Experience</p>
            </div>

            <div className="stat-card">
              <h2>50+</h2>
              <p>Reusable Components</p>
            </div>

            <div className="stat-card">
              <h2>15+</h2>
              <p>Projects Delivered</p>
            </div>

            <div className="stat-card">
              <h2>35%</h2>
              <p>Performance Boost</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">ABOUT</p>
          <h2 className="section-title">Who I Am</h2>

          <div className="about-card glass-card">
            <p>
              I’m Vishul Garg, a Frontend Tech Lead specializing in
              ReactJS, NextJS, AEM frontend architecture, scalable UI
              systems, accessibility, and performance optimization.
            </p>

            <p>
              Over the past 8+ years, I’ve delivered enterprise-grade
              applications, led frontend teams, and built reusable systems
              focused on scalability, maintainability, and exceptional user
              experience.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="skills" className="section">
        <p className="section-label">SKILLS</p>
        <h2 className="section-title">Tech Stack</h2>

        <div className="skills-sections">
          {skillSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="skills-section glass-card"
            >
              <h3>{section.title}</h3>

              <div className="skills-grid">
                {section.items.map((skill) => (
                  <div className="skill-card" key={skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="tech-icons">
          <FaReact />
          <SiNextdotjs />
          <SiJavascript />
          <SiTypescript />
          <FaNodeJs />
          <SiTailwindcss />
          {/* <SiAdobe /> */}
          <SiGithub />
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-label">PROJECTS</p>
        <h2 className="section-title">Featured Work</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              key={project.title}
              className="project-card glass-card"
            >
              <div className="project-top">
                <h3>{project.title}</h3>
                <FaExternalLinkAlt />
              </div>

              <p>{project.desc}</p>

              <span className="project-tech">{project.tech}</span>

              <div className="impact-pill">{project.impact}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <p className="section-label">EXPERIENCE</p>
        <h2 className="section-title">Career Journey</h2>

        <div className="timeline">
          {experience.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="timeline-card glass-card"
              key={item.company}
            >
              <div className="timeline-header">
                <div>
                  <h3>{item.company}</h3>
                  <h4>{item.role}</h4>
                </div>

                <span>{item.duration}</span>
              </div>

              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-card glass-card"
        >
          <p className="section-label">CONTACT</p>

          <h2>
            Let’s build scalable frontend
            <span> experiences together.</span>
          </h2>

          <div className="contact-links">
            <a href="mailto:engg.vishul@gmail.com">
              engg.vishul@gmail.com
            </a>

            <a
              href="https://github.com/vishulg"
              target="_blank"
            >
              <FaGithub /> GitHub
            </a>

            <a href="#">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;