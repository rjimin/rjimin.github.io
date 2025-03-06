import React, { useEffect, useState } from "react";
import { experience } from "../../data";
import "./Experience.scss";

function Experience({ darkMode }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            const timelineItems = document.querySelectorAll(".timeline-item");
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("appear");
                        } else {
                            entry.target.classList.remove("appear");
                        }
                    });
                },
                { threshold: 0.3 }
            );

            timelineItems.forEach((item, index) => {
                item.style.transitionDelay = `${index * 150}ms`; // Staggered delay
                observer.observe(item);
            });

            return () => {
                timelineItems.forEach((item) => observer.unobserve(item));
            };
        }
    }, [isMobile]);

    return (
        <section id="experience">
            <h2>Work Experience</h2>
            <div className={isMobile ? "timeline mobile-view" : "timeline"}>
                {experience.map((exp, index) => (
                    <div
                        key={index}
                        className={isMobile ? "timeline-item center" : `timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                        data-index={index}
                    >
                        {!isMobile && <div className="timeline-marker"></div>}
                        <div className={`timeline-content ${darkMode ? "experience-card-dark" : "experience-card"}`}>
                            <div className="card-layout">
                                <div className="company-logo-container">
                                    <img src={exp.companylogo} alt={exp.company} className="company-logo" />
                                    <p className="company-duration">{exp.date}</p>
                                </div>
                                <div className="job-details">
                                    <h4 className="role-title">{exp.role}</h4>
                                    <h3 className="company-name"><i>{exp.company}</i></h3>
                                </div>
                            </div>
                            <p className="role-description">{exp.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
