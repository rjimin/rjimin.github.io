import React from "react";
import { education } from "../../data";
import "./Education.scss";

function Education() {
    return (
        <section id="education" className="fade-in">
            <h2>Education</h2>
            {education.map((edu, index) => (
                <div key={index} className="education-card">
                    <img src={edu.logo} alt={edu.schoolName} className="school-logo" />
                    <div className="education-details">
                        <h3>{edu.schoolName}</h3>
                        <h4>{edu.subHeader}</h4>
                        <p>{edu.duration}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Education;
