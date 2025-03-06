import { FaPython, FaJs, FaReact, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaAws, FaUnity, FaHashtag } from "react-icons/fa";
import { SiGoland, SiC, SiCplusplus, SiHaskell, SiDart, SiFlutter, SiPytorch } from "react-icons/si";

const Introduction = {
    username: "Jimin",
    title: "Hello, I'm Jimin",
    subTitle: "Passionate about crafting innovative solutions and solving complex problems through technology. With a strong collaborative spirit and effective communication skills, I drive projects forward, delivering impactful results through creativity and technical expertise."
};

const skills = [
    { skillName: "Python", icon: <FaPython style={{ color: "#3776AB" }} /> },
    { skillName: "Java", icon: <FaJava style={{ color: "#007396" }} /> },
    { skillName: "Golang", icon: <SiGoland style={{ color: "#00ADD8" }} /> },
    { skillName: "C", icon: <SiC style={{ color: "#A8B9CC" }} /> },
    { skillName: "C++", icon: <SiCplusplus style={{ color: "#00599C" }} /> },
    { skillName: "C#", icon: <FaHashtag style={{ color: "#239120" }} /> },
    { skillName: "Dart", icon: <SiDart style={{ color: "#0175C2" }} /> },
    { skillName: "Haskell", icon: <SiHaskell style={{ color: "#5D4F85" }} /> },
    { skillName: "JavaScript", icon: <FaJs style={{ color: "#F7DF1E" }} /> },
    { skillName: "React", icon: <FaReact style={{ color: "#61DAFB" }} /> },
    { skillName: "HTML", icon: <FaHtml5 style={{ color: "#E34F26" }} /> },
    { skillName: "CSS", icon: <FaCss3Alt style={{ color: "#1572B6" }} /> },
    { skillName: "Git", icon: <FaGitAlt style={{ color: "#F05032" }} /> },
    { skillName: "AWS", icon: <FaAws style={{ color: "#FF9900" }} /> },
    { skillName: "Unity", icon: <FaUnity style={{ color: "#000000" }} /> },
    { skillName: "PyTorch", icon: <SiPytorch style={{ color: "#EE4C2C" }} /> },
    { skillName: "Flutter", icon: <SiFlutter style={{ color: "#02569B" }} /> }
];

// const skills = [
//     {
//         skillName: "Python",
//         fontAwesomeClassname: "fab fa-python"
//     },
//     {
//         skillName: "Java",
//         fontAwesomeClassname: "fab fa-java"
//     },
//     {
//         skillName: "Golang",
//         fontAwesomeClassname: "fab fa-golang"
//     },
//     {
//         skillName: "C",
//         fontAwesomeClassname: "fas fa-c"
//     },
//     {
//         skillName: "C++",
//         fontAwesomeClassname: "fas fa-file-code"
//     },
//     {
//         skillName: "C#",
//         fontAwesomeClassname: "fas fa-hashtag"
//     },
//     {
//         skillName: "Haskell",
//         fontAwesomeClassname: "fas fa-code"
//     },
//     {
//         skillName: "JavaScript",
//         fontAwesomeClassname: "fab fa-js"
//     },
//     {
//         skillName: "React",
//         fontAwesomeClassname: "fab fa-react"
//     },
//     {
//         skillName: "HTML",
//         fontAwesomeClassname: "fab fa-html5"
//     },
//     {
//         skillName: "CSS",
//         fontAwesomeClassname: "fab fa-css3-alt"
//     },
//     {
//         skillName: "Git",
//         fontAwesomeClassname: "fab fa-git-alt"
//     },
//     {
//         skillName: "AWS",
//         fontAwesomeClassname: "fab fa-aws"
//     },
//     {
//         skillName: "Unity",
//         fontAwesomeClassname: "fab fa-unity"
//     }
// ];

const education = [
    {
        schoolName: "University of Bristol",
        logo: require("./assets/images/uobLogo.png"),
        subHeader: "BSc Computer Science",
        duration: "September 2022 - June 2025",
        desc: "Studying advanced topics in machine learning, computer vision, and software engineering.",
    },
];

const experience = [
    {
        role: "Research Assistant",
        company: "Hanyang University",
        companylogo: require("./assets/images/hyusimpleLogo.png"),
        date: "July 2024 – Sep 2024",
        desc: "Contributed to research and development projects focused on reducing cybersickness and enhancing VR experiences.",
        // descBullets: [
        //   "Developed a VR 3D FPS game in Unity, utilizing Meta Quest 3 and Omni Treadmill, as part of research on reducing cybersickness through vibrotactile feedback.",
        //   "Conducted a comprehensive literature review, participated in experiment design, data collection, and statistical analysis.",
        //   "Reviewed and revised the thesis based on iterative feedback, and created supplementary materials to support it.",
        //   "Led a seminar to present research findings and methodologies to peers."
        // ]
    },
    {
        role: "Co-creator",
        company: "Royal Academy of Engineering",
        companylogo: require("./assets/images/the_royal_academy_of_engineering_logo.png"),
        date: "Oct 2023 – Mar 2024",
        desc: "Facilitated specialized workshops to support intersectionally disadvantaged students, focusing on creating an inclusive and liberatory university environment.",
        // descBullets: [
        //   "Tailored workshop content to address the specific challenges faced by disadvantaged students.",
        //   "Led mentor sessions, emphasizing the understanding of intersectionality and microaggressions.",
        //   "Collaborated with peers to enhance workshop effectiveness and relevance."
        //   ]
    },
    {
        role: "UX Research Assistant",
        company: "Global Research",
        companylogo: require("./assets/images/globalresearchLogo.png"),
        date: "Jul 2023 – Sep 2023",
        desc: "Conducted software testing and user experience research to ensure seamless operations and align platform design with user needs.",
        // descBullets: [
        //   "Analyzed and prioritized platform UI/UX designs for optimal user experience.",
        //   "Performed user research using diverse methodologies to inform development.",
        //   "Created data visualizations to facilitate data-driven decision-making.",
        //   "Researched AI applications, assessing their impact on usability and future trends."
        //   ]
    },
    {
        role: "Database Assistant",
        company: "Testing Certification Institute",
        companylogo: require("./assets/images/ktcLogo.png"),
        date: "Jan 2022 – Sep 2022",
        desc: "Responsible for maintaining and optimizing company databases, ensuring data accuracy, and enhancing data processing efficiency.",
        // descBullets: [
        //   "Streamlined data analysis using advanced Excel techniques.",
        //   "Collaborated with team members to tailor Excel functions to specific data needs.",
        //   "Ensured database integrity by promptly resolving issues."
        // ]
    },
    {
        role: "Project Assistant",
        company: "Railroad Research Institute",
        companylogo: require("./assets/images/krriLogo.png"),
        date: "May 2020 – Aug 2020",
        desc: "Proactively engaged with external stakeholders and managed project-related tasks to ensure successful outcomes and high-quality deliverables.",
        // descBullets: [
        //   "Collaborated with stakeholders to identify and address project challenges, continuously adapting requirements.",
        //   "Conducted comprehensive literature reviews to curate the latest relevant research and industry insights.",
        //   "Enhanced the quality of research papers through meticulous review and proofreading.",
        //   "Applied linguistic expertise for document translation, facilitating seamless cross-language communication."
        // ]
    }
];

const projects = [
    {
        image: require("./assets/images/cg.gif"),
        projectName: "Computer Graphics",
        projectDesc: "3D rendering engine with a Cornell Box simulation",
        footerLink: [
            {
                name: "GitHub",
                url: "https://github.com/rjimin/CG"
            }
            //  you can add extra buttons here.
        ]
    },
    {
        image: require("./assets/images/haunted.gif"),
        projectName: "Haunted Escape",
        projectDesc: "15-stage suspense game set in a haunted environment, challenging players to navigate and escape dynamic traps and ghostly encounters",
        footerLink: [
            {
                name: "GitHub",
                url: "https://github.com/rjimin/GameJam2024.git"
            }
            //  you can add extra buttons here.
        ]
    },
    {
        video: require("./assets/videos/fps.mp4"),
        projectName: "VR 3D FPS Game",
        projectDesc: "Utilising Meta Quest 3 and Omni Treadmill for immersive and realistic gameplay experiences"
        // footerLink: [
        //   {
        //     name: "GitHub",
        //     url: "https://github.com/rjimin/BrisHack"
        //   }
        // ]
    },
    {
        image: require("./assets/images/ibm.png"),
        projectName: "Edutopia",
        projectDesc: "Map-based city-building combat game, enhancing engagement and promoting student involvement in IBM SkillsBuild"
        // footerLink: [
        //   {
        //     name: "GitHub",
        //     url: "https://github.com/rjimin/EncodeAI"
        //   }
        //   //  you can add extra buttons here.
        // ]
    },
    {
        image: require("./assets/images/TheraGoLogo.png"),
        projectName: "Therago",
        projectDesc: "AI Assisted Mental Wellbeing WebApp",
        footerLink: [
            {
                name: "GitHub",
                url: "https://github.com/rjimin/EncodeAI"
            }
            //  you can add extra buttons here.
        ]
    },
    {
        image: require("./assets/images/moodtracker.gif"),
        projectName: "Mood Tracker",
        projectDesc: "Emotion-tracking platform",
        footerLink: [
            {
                name: "GitHub",
                url: "https://github.com/rjimin/BrisHack"
            }
        ]
    },
    {
        image: require("./assets/images/gameoflife.png"),
        projectName: "Game of Life",
        // projectDesc: "Platform game set in a mystery-contaminated world",
        footerLink: [
            {
                name: "Document",
                url: "/game_of_life.pdf"
            }
        ]
    },
    {
        image: require("./assets/images/contaminatedworld.png"),
        projectName: "Contaminated World",
        projectDesc: "Platform game set in a mystery-contaminated world",
        footerLink: [
            {
                name: "GitHub",
                url: "https://github.com/rjimin/GameJam2023"
            }
        ]
    },
    {
        image: require("./assets/images/scotlandyard.png"),
        projectName: "Scotland Yard Board Game",
        // projectDesc: "Platform game set in a mystery-contaminated world",
        footerLink: [
            {
                name: "Document",
                url: "/scotland_yard.pdf"
            }
        ]
    }
];

const contact = {
    number: "+44 7774 119401",
    email_address: "jiminaryu@gmail.com"
};

export { Introduction, skills, education, experience, projects, contact };
