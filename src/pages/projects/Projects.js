import React, { useState, useRef, useEffect, useCallback } from "react";
import { projects } from "../../data";
import "./Projects.scss";
import { FaThLarge, FaCubes } from "react-icons/fa";

function Projects({ darkMode }) {
    const [viewMode, setViewMode] = useState("interactive");
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const videoRefs = useRef([]);
    const containerRef = useRef(null);
    const touchStartY = useRef(null);
    const scrollTimeout = useRef(null);

    /* === Detect mobile screen === */
    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (mobile) setViewMode("grid");
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    /* === Toggle view === */
    const toggleViewMode = () => {
        setViewMode(viewMode === "interactive" ? "grid" : "interactive");
    };

    /* === Video handling === */
    const stopAllVideos = useCallback(() => {
        videoRefs.current.forEach((v) => {
            if (v) {
                v.pause();
                v.currentTime = 0;
            }
        });
    }, []);

    /* === Navigation === */
    const nextProject = useCallback(() => {
        stopAllVideos();
        setActiveIndex((prev) => (prev + 1) % projects.length);
    }, [stopAllVideos]);

    const prevProject = useCallback(() => {
        stopAllVideos();
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }, [stopAllVideos]);

    const goToProject = useCallback(
        (index) => {
            stopAllVideos();
            setActiveIndex(index);
        },
        [stopAllVideos]
    );

    /* === Scroll / touch only if interactive and not mobile === */
    const handleScroll = useCallback(
        (e) => {
            if (isMobile) return;
            e.preventDefault();
            if (Math.abs(e.deltaY) < 30) return;
            if (scrollTimeout.current) return;

            if (e.deltaY > 0) nextProject();
            else prevProject();

            scrollTimeout.current = setTimeout(() => {
                scrollTimeout.current = null;
            }, 800);
        },
        [nextProject, prevProject, isMobile]
    );

    const handleTouchStart = useCallback((e) => {
        if (isMobile) return;
        touchStartY.current = e.touches[0].clientY;
    }, [isMobile]);

    const handleTouchEnd = useCallback(
        (e) => {
            if (isMobile) return;
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY.current - touchEndY;
            if (Math.abs(diff) < 50) return;
            if (diff > 0) nextProject();
            else prevProject();
        },
        [nextProject, prevProject, isMobile]
    );

    useEffect(() => {
        const el = containerRef.current;
        if (viewMode !== "interactive" || !el || isMobile) return;

        const onWheel = (e) => {
            e.preventDefault();
            e.stopPropagation();
            handleScroll(e);
        };

        const onTouchStart = (e) => {
            e.stopPropagation();
            handleTouchStart(e);
        };

        const onTouchEnd = (e) => {
            e.stopPropagation();
            handleTouchEnd(e);
        };

        el.addEventListener("wheel", onWheel, { passive: false });
        el.addEventListener("touchstart", onTouchStart, { passive: false });
        el.addEventListener("touchend", onTouchEnd, { passive: false });

        return () => {
            el.removeEventListener("wheel", onWheel);
            el.removeEventListener("touchstart", onTouchStart);
            el.removeEventListener("touchend", onTouchEnd);
        };
    }, [viewMode, handleScroll, handleTouchStart, handleTouchEnd, isMobile]);

    /* === Fade-in animation for grid === */
    useEffect(() => {
        if (viewMode !== "grid") return;

        const cards = document.querySelectorAll(".project-card.grid-view");

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
            { threshold: 0.15 } // ✅ triggers when 15% of card is visible
        );

        cards.forEach((c) => observer.observe(c));

        return () => cards.forEach((c) => observer.unobserve(c));
    }, [viewMode]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // === Interactive mode: dynamically match active card height ===
        if (viewMode === "interactive") {
            const activeCard = container.querySelector(".project-card.active");
            if (activeCard) {
                const rect = activeCard.getBoundingClientRect();
                container.style.height = `${rect.height}px`;
            }
        } else {
            // === Grid mode: reset to auto ===
            container.style.height = "auto";
        }
    }, [activeIndex, viewMode]);

    /* === Render === */
    return (
        <section id="projects" className="fade-in">
            <h2 className="projects-title">Projects</h2>

            {/* hide toggle on mobile */}
            {!isMobile && (
                <div className="projects-buttons">
                    <button onClick={toggleViewMode} className="toggle-button">
                        {viewMode === "interactive" ? (
                            <FaThLarge size={24} />
                        ) : (
                            <FaCubes size={24} />
                        )}
                    </button>
                </div>
            )}

            {/* === INTERACTIVE MODE === */}
            {!isMobile && viewMode === "interactive" ? (
                <div className="carousel vertical" ref={containerRef}>
                    {projects.map((project, index) => {
                        const offset = index - activeIndex;
                        const transformStyle = `translate(-50%, calc(-50% + ${offset * 100}%))`;
                        const opacity = offset === 0 ? 1 : 0;
                        const zIndex = offset === 0 ? 3 : 1;

                        return (
                            <div
                                key={index}
                                className={`project-card interactive vertical ${
                                    darkMode ? "dark" : ""
                                } ${offset === 0 ? "active" : ""}`}
                                style={{ transform: transformStyle, zIndex, opacity }}
                            >
                                <div className="project-content">
                                    <div className="project-media">
                                        {project.video ? (
                                            <video
                                                ref={(el) => (videoRefs.current[index] = el)}
                                                controls
                                            >
                                                <source
                                                    src={project.video}
                                                    type="video/mp4"
                                                />
                                            </video>
                                        ) : (
                                            <img
                                                src={project.image}
                                                alt={project.projectName}
                                            />
                                        )}
                                    </div>
                                    <div className="project-info">
                                        <h3>{project.projectName}</h3>
                                        {project.languages && (
                                            <p className="project-languages">
                                                {project.languages.join(", ")}
                                            </p>
                                        )}
                                        <p>{project.projectDesc}</p>
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
                                </div>
                            </div>
                        );
                    })}

                    <div className="nav-dots-vertical">
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                className={`dot ${i === activeIndex ? "active" : ""}`}
                                onClick={() => goToProject(i)}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                /* === GRID MODE (default for mobile) === */
                <div className="projects-container grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-card grid-view ${
                                darkMode ? "dark" : ""
                            }`}
                        >
                            <div className="project-content">
                                <div className="project-media">
                                    {project.video ? (
                                        <video
                                            ref={(el) => (videoRefs.current[index] = el)}
                                            controls
                                        >
                                            <source
                                                src={project.video}
                                                type="video/mp4"
                                            />
                                        </video>
                                    ) : (
                                        <img
                                            src={project.image}
                                            alt={project.projectName}
                                        />
                                    )}
                                </div>
                                <div className="project-info">
                                    <h3>{project.projectName}</h3>
                                    {project.languages && (
                                        <p className="project-languages">
                                            {project.languages.join(", ")}
                                        </p>
                                    )}
                                    <p>{project.projectDesc}</p>
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
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Projects;
