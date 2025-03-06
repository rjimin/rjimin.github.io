import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";

function Navbar({ darkMode, setDarkMode }) {
    const [activeSection, setActiveSection] = useState("");
    const [hoveredSection, setHoveredSection] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsVisible(scrollY < lastScrollY);
            lastScrollY = scrollY;

            ["about", "skills", "education", "experience", "projects", "contact"].forEach(section => {
                const rect = document.getElementById(section)?.getBoundingClientRect();
                if (rect && rect.top <= 150 && rect.bottom >= 150) {
                    setActiveSection(section);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [menuOpen]);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });

        setTimeout(() => {
            setActiveSection(sectionId); // Delay to ensure correct update
        }, 100);

        setMenuOpen(false); // Close menu on mobile after clicking a link
    };

    return (
        <>
            {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
            <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>

                <ul className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
                    {["about", "skills", "education", "experience", "projects", "contact"].map(section => (
                        <li key={section}>
                            <a
                                href={`#${section}`}
                                className={`nav-item 
                                ${activeSection === section ? "nav-item-active" : ""} 
                                ${hoveredSection === section ? "nav-item-hover" : ""}`}
                                onClick={(e) => scrollToSection(e, section)}
                                onMouseEnter={() => setHoveredSection(section)}
                                onMouseLeave={() => setHoveredSection("")}
                            >
                                {section[0].toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>

                <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
                    <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                </button>
            </nav>
        </>
    );
}

export default Navbar;
