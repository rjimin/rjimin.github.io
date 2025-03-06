import React, { useState, useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Introduction from "./pages/introduction/Introduction";
import Skills from "./pages/skills/Skills";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import "./styles/globals.scss";
import "./App.scss";

function App() {
    // 🟡 Sync Dark Mode with User System Preference and Local Storage
    const storedDarkMode = localStorage.getItem("darkMode");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const [darkMode, setDarkMode] = useState(
        storedDarkMode ? storedDarkMode === "true" : systemPrefersDark
    );

    // Track scroll position
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    // 🟡 Save dark mode to local storage and apply body class
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    // ✅ Fade-in effect on scroll
    useEffect(() => {
        const fadeElements = document.querySelectorAll(".fade-in");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.2 }
        );

        fadeElements.forEach((el) => observer.observe(el));

        return () => fadeElements.forEach((el) => observer.unobserve(el));
    }, []);

    return (
        <div className={`app ${darkMode ? "dark" : "light"}`}>
            {/*<Sidebar />*/}
            <div className="main-content">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
                <section className="fade-in"><Introduction/></section>
                <section className="fade-in"><Skills/></section>
                <section className="fade-in"><Education/></section>
                <section className="fade-in"><Experience darkMode={darkMode}/></section>
                <section className="fade-in"><Projects darkMode={darkMode}/></section>
                <section className="fade-in"><Contact/></section>
            </div>
        </div>
    );
}

export default App;
