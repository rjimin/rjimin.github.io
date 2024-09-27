import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
    return (
        <div>
            <div className="software-skills-main-div">
                <ul className="dev-icons">
                    {skillsSection.softwareSkills.slice(0, 7).map((skills, i) => {
                        return (
                            <li
                                key={i}
                                className="software-skill-inline"
                                name={skills.skillName}
                            >
                                <i className={skills.fontAwesomeClassname}></i>
                                <p>{skills.skillName}</p>
                            </li>
                        );
                    })}
                </ul>
                <ul className="dev-icons">
                    {skillsSection.softwareSkills.slice(7, 11).map((skills, i) => {
                        return (
                            <li
                                key={i}
                                className="software-skill-inline"
                                name={skills.skillName}
                            >
                                <i className={skills.fontAwesomeClassname}></i>
                                <p>{skills.skillName}</p>
                            </li>
                        );
                    })}
                </ul>
                <ul className="dev-icons">
                    {skillsSection.softwareSkills.slice(11).map((skills, i) => {
                        return (
                            <li
                                key={i}
                                className="software-skill-inline"
                                name={skills.skillName}
                            >
                                <i className={skills.fontAwesomeClassname}></i>
                                <p>{skills.skillName}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
