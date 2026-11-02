import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import {
  FaPython,
  FaDatabase,
  FaBrain,
  FaChartLine,
  FaChartBar,
  FaChartPie,
  FaAws,
  FaNetworkWired,
  FaFileExcel,
  FaGithub,
  FaRobot,
  FaServer,
  FaCode,
  FaLaptopCode,
} from 'react-icons/fa';
import { SiMysql, SiMongodb, SiJupyter } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

/**
 * Skills Component
 * Displays categorized technical competencies with clean individual cards,
 * icons, proficiency indicators, and category filter pills.
 */
const Skills = ({ data }) => {
  const { skills } = data;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skills.items
      : skills.items.filter((item) => item.category === activeCategory);

  const renderSkillIcon = (type) => {
    switch (type) {
      case 'python':
        return <FaPython />;
      case 'sql':
        return <SiMysql />;
      case 'ml':
        return <FaBrain />;
      case 'analytics':
        return <FaChartLine />;
      case 'ai':
        return <FaRobot />;
      case 'oracle':
        return <FaDatabase />;
      case 'mongodb':
        return <SiMongodb />;
      case 'dbms':
        return <FaServer />;
      case 'cloud':
        return <FaAws />;
      case 'network':
        return <FaNetworkWired />;
      case 'powerbi':
        return <FaChartBar />;
      case 'excel':
        return <FaFileExcel />;
      case 'tableau':
        return <FaChartPie />;
      case 'git':
        return <FaGithub />;
      case 'notebook':
        return <SiJupyter />;
      case 'tools':
        return <VscCode />;
      default:
        return <FaDatabase />;
    }
  };

  return (
    <section id="skills" className="portfolio-section">
      <div className="container">
        <SectionHeading
          label={skills.label || 'TECHNICAL EXPERTISE'}
          title={skills.heading}
          subtitle={skills.subheading}
          notice={skills.notice}
        />

        {/* Category Filter Pills */}
        <div className="skills-filter-wrapper">
          {skills.categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Responsive Grid with 3D Tilt */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <TiltCard
              key={index}
              maxTilt={8}
              perspective={900}
              scale={1.02}
              style={{ borderRadius: '16px', height: '100%' }}
            >
              <div className="skill-card h-100">
                <div className="skill-card-top">
                  <div className="skill-icon-wrap">{renderSkillIcon(skill.iconType)}</div>
                  <span className="skill-badge">{skill.category}</span>
                </div>

                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-desc">{skill.description}</p>

                {/* Proficiency Level Bar */}
                {skill.proficiency && (
                  <div className="skill-progress-container">
                    <div className="skill-progress-label">
                      <span>Proficiency</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <div className="skill-progress-bar">
                      <div
                        className="skill-progress-fill"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
