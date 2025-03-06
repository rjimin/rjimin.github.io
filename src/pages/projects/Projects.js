import React, { useState, useRef, useEffect } from "react";
import { projects } from "../../data";
import "./Projects.scss";
import { FaThLarge, FaCubes } from "react-icons/fa";

function Projects({ darkMode }) {
    const [viewMode, setViewMode] = useState("interactive");
    const [activeIndex, setActiveIndex] = useState(0);
    const videoRefs = useRef([]);
    const projectRefs = useRef([]);

    const toggleViewMode = () => {
        setViewMode(viewMode === "interactive" ? "grid" : "interactive");
    };

    const stopAllVideos = () => {
        videoRefs.current.forEach(video => {
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });
    };

    const nextProject = () => {
        stopAllVideos();
        setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        stopAllVideos();
        setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    useEffect(() => {
        stopAllVideos();
    }, [viewMode]);

    useEffect(() => {
        if (viewMode !== "grid") return; // Apply only in grid mode

        const projectItems = document.querySelectorAll('.project-card');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        entry.target.style.transitionDelay = `${(index % 3) * 80}ms`; // Stagger effect
                    } else {
                        entry.target.classList.remove("visible");
                    }
                });
            },
            { threshold: 0.2 }
        );

        projectItems.forEach((item) => observer.observe(item));

        return () => {
            projectItems.forEach((item) => observer.unobserve(item));
        };
    }, [viewMode]);

    return (
        <section id="projects" className="fade-in">
            <h2 className="projects-title">Projects</h2>

            <div className="projects-buttons">
                <button onClick={toggleViewMode} className="toggle-button">
                    {viewMode === "interactive" ? <FaThLarge size={24} /> : <FaCubes size={24} />}
                </button>
            </div>

            {/* Interactive View (Carousel) */}
            {viewMode === "interactive" ? (
                <div className="carousel">
                    <div className="carousel-container">
                        {projects.map((project, index) => {
                            const position = (index - activeIndex + projects.length) % projects.length;
                            let transformStyle = "";
                            let zIndex = 1;
                            let opacity = 0.3;
                            let visibility = "hidden";

                            if (position === 0) {
                                // Main Card (Center)
                                transformStyle = "scale(1) translateX(0px)";
                                zIndex = 5;
                                opacity = 1;
                                visibility = "visible";
                            } else if (position === 1) {
                                // Right Side Card
                                transformStyle = "scale(0.85) rotateY(-15deg) translateX(250px)";
                                zIndex = 3;
                                opacity = 0.5;
                                visibility = "visible";
                            } else if (position === 2) {
                                // Right-Back Card
                                transformStyle = "scale(0.75) rotateY(-10deg) translateX(400px)";
                                zIndex = 2;
                                opacity = 0.3;
                                visibility = "visible";
                            } else if (position === projects.length - 1) {
                                // Left Side Card
                                transformStyle = "scale(0.85) rotateY(15deg) translateX(-250px)";
                                zIndex = 3;
                                opacity = 0.5;
                                visibility = "visible";
                            } else if (position === projects.length - 2) {
                                // Left-Back Card
                                transformStyle = "scale(0.75) rotateY(10deg) translateX(-400px)";
                                zIndex = 2;
                                opacity = 0.3;
                                visibility = "visible";
                            }

                            const isActive = position === 0;

                            return (
                                <div
                                    key={index}
                                    className={`project-card interactive ${isActive ? "active" : ""} ${
                                        darkMode ? "project-card-dark" : "project-card"
                                    }`}
                                    style={{
                                        transform: transformStyle,
                                        zIndex: zIndex,
                                        opacity: opacity,
                                        visibility: visibility, // 🟡 Only show visible cards
                                        display: isActive || visibility === "visible" ? "flex" : "none", // 🟢 Hide the stuck card
                                    }}
                                >
                                    {project.video ? (
                                        <video
                                            ref={(el) => (videoRefs.current[index] = el)}
                                            controls
                                            className="project-video"
                                        >
                                            <source src={project.video} type="video/mp4"/>
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img
                                            src={project.image}
                                            alt={project.projectName}
                                            className="project-image"
                                        />
                                    )}

                                    <h3>{project.projectName}</h3>
                                    <p>{project.projectDesc}</p>

                                    {/* Project Links */}
                                    <div className="project-links">
                                        {project.footerLink?.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-button"
                                            >
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="nav-buttons-container">
                        <button className="nav-button left" onClick={prevProject}>&lt;</button>
                        <button className="nav-button right" onClick={nextProject}>&gt;</button>
                    </div>
                </div>
            ) : (
                // Grid View
                <div className="projects-container grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => (projectRefs.current[index] = el)}
                            className={`project-card grid-view ${
                                darkMode ? "project-card-dark" : "project-card"
                            }`}
                        >
                            {project.video ? (
                                <video
                                    ref={(el) => (videoRefs.current[index] = el)}
                                    controls
                                    className="project-video"
                                >
                                    <source src={project.video} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img
                                    src={project.image}
                                    alt={project.projectName}
                                    className="project-image"
                                />
                            )}

                            <h3>{project.projectName}</h3>
                            <p>{project.projectDesc}</p>

                            {/* Project Links */}
                            <div className="project-links">
                                {project.footerLink?.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-button"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Projects;
