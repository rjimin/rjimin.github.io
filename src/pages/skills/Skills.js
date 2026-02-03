import React, { useState, useEffect } from "react";
import { skillCategories } from "../../data";
import "./Skills.scss";

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const skillItems = document.querySelectorAll(".skill-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    skillItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 40}ms`;
      observer.observe(item);
    });

    return () => {
      skillItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  let globalIndex = 0; // 👈 ensures hover + stagger work across categories

  return (
    <section id="skills" className="fade-in">
      <h2 className="skills-title">Skills</h2>

      <div className="software-skills-main-div">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div className="skills-category" key={category}>
            <h3 className="skills-category-title">{category}</h3>

            <ul className="skills-row">
              {skills.map((skill) => {
                const index = globalIndex++;

                return (
                  <li
                    key={skill.skillName}
                    className="skill-item"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="skill-icon">
                      {React.cloneElement(skill.icon, {
                        style: {
                          color:
                            hoveredIndex === index
                              ? skill.icon.props.style.color
                              : "grey"
                        }
                      })}
                    </div>

                    <p
                      className="skill-name"
                      style={{
                        color:
                          hoveredIndex === index
                            ? skill.icon.props.style.color
                            : "grey"
                      }}
                    >
                      {skill.skillName}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
