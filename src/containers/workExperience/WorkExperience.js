import React, { useContext, useEffect } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    function adjustFontSize() {
      const elements = document.querySelectorAll('.experience-text-company');

      elements.forEach(element => {
        const parent = element.parentElement; // Assuming the parent element is the fixed-size container
        let fontSize = parseInt(window.getComputedStyle(element).fontSize);

        // Decrease font size until text fits within the container
        while (element.scrollWidth > parent.clientWidth && fontSize > 10) {
          fontSize -= 1;
          element.style.fontSize = fontSize + 'px';
        }
      });
    }

    // Adjust font size on component mount and when window is resized
    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', adjustFontSize);
    };
  }, []); // Empty dependency array to run only on mount and unmount

  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
