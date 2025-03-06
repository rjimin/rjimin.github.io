import React from "react";
import { Introduction as introData } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Introduction.scss";

function Introduction() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "./Jimin_Ryu_CV.pdf";
        link.download = "Jimin_Ryu_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="about" className="fade-in">
            <h1>
                <span className="hello">Hello, I'm</span>
                <br/>
                <span className="name">{introData.username}</span>
            </h1>
            <p className="intro-text">{introData.subTitle}</p>

            {/* Social Media Links */}
            <div className="social-links">
                <a href="https://github.com/rjimin" className="social-btn github" target="_blank"
                   rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a href="https://www.linkedin.com/in/jimin-ryu/" className="social-btn linkedin" target="_blank"
                   rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn}/>
                </a>
                <a href="mailto:jiminaryu@gmail.com" className="social-btn gmail">
                    <FontAwesomeIcon icon={faEnvelope}/>
                </a>
            </div>

            {/* Buttons */}
            <div className="intro-buttons">
                {/*<button className="contact-btn">CONTACT ME</button>*/}
                <button className="download-cv-btn" onClick={handleDownload}>
                    <FontAwesomeIcon icon={faDownload} className="icon"/> Download CV
                </button>
            </div>
        </section>
    );
}

export default Introduction;
