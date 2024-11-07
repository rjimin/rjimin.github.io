/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2100 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jimin Ryu",
  title: "Hello, I'm Jimin",
  subTitle: emoji(
    "As a proactive and creative final-year computer science student, I thrive on solving complex problems through innovative solutions. My collaborative nature and strong communication skills enable me to work effectively within teams, driving projects forward with a focus on achieving impactful results."
  ),
  resumeLink: true,
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rjimin",
  linkedin: "https://www.linkedin.com/in/jimin-ryu/",
  gmail: "jiminaryu@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fad fa-c"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-hashtag"
    },
    {
      skillName: "Haskell",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Bristol",
      logo: require("./assets/images/uobLogo.png"),
      subHeader: "BSc Computer Science",
      duration: "September 2022 - June 2025",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
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
      company: "University of Bristol",
      companylogo: require("./assets/images/uobLogorm.png"),
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
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
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
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  // subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+44 7774 119401",
  email_address: "jiminaryu@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
