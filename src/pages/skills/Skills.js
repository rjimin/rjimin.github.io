// Skills.js
import React, { useState, useEffect } from "react";
import { skills } from "../../data";
import "./Skills.scss";

export default function SoftwareSkill() {
    const [hoveredIndex, setHoveredIndex] = useState(null); // ✅ Track hover state

    // Add Scroll Observer for Icons
    useEffect(() => {
        const skillItems = document.querySelectorAll('.skill-item');

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
            { threshold: 0.2 }
        );

        skillItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 80}ms`; // Stagger effect
            observer.observe(item);
        });

        return () => {
            skillItems.forEach((item) => observer.unobserve(item));
        };
    }, []);

    return (
        <section id="skills" className="fade-in">
            <h2 className="skills-title">Skills</h2>
            <div className="software-skills-main-div">
                {/* First Row */}
                <ul className="skills-row">
                    {skills.slice(0, 8).map((skill, i) => (
                        <li
                            key={i}
                            className="skill-item"
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="skill-icon">
                                {React.cloneElement(skill.icon, {
                                    style: {
                                        color: hoveredIndex === i ? skill.icon.props.style.color : "grey"
                                    }
                                })}
                            </div>
                            <p
                                className="skill-name"
                                style={{ color: hoveredIndex === i ? skill.icon.props.style.color : "grey" }}
                            >
                                {skill.skillName}
                            </p>
                        </li>
                    ))}
                </ul>

                {/* Second Row */}
                <ul className="skills-row">
                    {skills.slice(8, 12).map((skill, i) => (
                        <li
                            key={i + 8}
                            className="skill-item"
                            onMouseEnter={() => setHoveredIndex(i + 8)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="skill-icon">
                                {React.cloneElement(skill.icon, {
                                    style: {
                                        color: hoveredIndex === i + 8 ? skill.icon.props.style.color : "grey"
                                    }
                                })}
                            </div>
                            <p
                                className="skill-name"
                                style={{ color: hoveredIndex === i + 8 ? skill.icon.props.style.color : "grey" }}
                            >
                                {skill.skillName}
                            </p>
                        </li>
                    ))}
                </ul>

                {/* Third Row */}
                <ul className="skills-row">
                    {skills.slice(12).map((skill, i) => (
                        <li
                            key={i + 12}
                            className="skill-item"
                            onMouseEnter={() => setHoveredIndex(i + 12)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="skill-icon">
                                {React.cloneElement(skill.icon, {
                                    style: {
                                        color: hoveredIndex === i + 12 ? skill.icon.props.style.color : "grey"
                                    }
                                })}
                            </div>
                            <p
                                className="skill-name"
                                style={{ color: hoveredIndex === i + 12 ? skill.icon.props.style.color : "grey" }}
                            >
                                {skill.skillName}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

// import React from "react";
// import { skills } from "../../data";
// import "./Skills.scss";
//
// export default function SoftwareSkill() {
//     return (
//         <section id="skills">
//             <h2 className="skills-title">Skills</h2>  {/* ✅ Add this title */}
//             <div className="software-skills-main-div">
//                 <ul className="dev-icons">
//                     {skills.slice(0, 7).map((skill, i) => (
//                         <li key={i} className="software-skill-inline">
//                             <i className={`${skill.fontAwesomeClassname}`} aria-hidden="true"></i>
//                             <p>{skill.skillName}</p>
//                         </li>
//                     ))}
//                 </ul>
//                 <ul className="dev-icons">
//                     {skills.slice(7, 11).map((skill, i) => (
//                         <li key={i} className="software-skill-inline">
//                             <i className={`${skill.fontAwesomeClassname}`} aria-hidden="true"></i>
//                             <p>{skill.skillName}</p>
//                         </li>
//                     ))}
//                 </ul>
//                 <ul className="dev-icons">
//                     {skills.slice(11).map((skill, i) => (
//                         <li key={i} className="software-skill-inline">
//                             <i className={`${skill.fontAwesomeClassname}`} aria-hidden="true"></i>
//                             <p>{skill.skillName}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </section>
//     );
// }
