/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mohamed Hedi Abdessalem",
  title: "Hi, I'm Hedi",
  subTitle: emoji(
    "A passionate Full Stack Software Engineering student 🚀   My main focus is building Web and Mobile applications with JavaScript / Angular 🅰️  / Node / React ⚛️  and some other cool libraries and frameworks. Interested in Code Testing 🧪  and exploring Algorithms  🌌 🚀"  ),
  resumeLink:
    "https://1drv.ms/b/s!AsPEuRdLa6YLhut0dZ86yd_gVq3R7A?e=bCHCAK", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/FighterSoul",
  linkedin: "https://www.linkedin.com/in/Mohamed Hedi Abdessalem/",
  gmail: "hedi.abdessalem@gmail.com",
  gitlab: "https://gitlab.com/FighterSoul",
  stackoverflow: "https://stackoverflow.com/users/23220852/hediabdessalem",
  facebook: "https://www.facebook.com/mohamedhedi.abdessalem.1",
  kaggle: "https://www.kaggle.com/hedisimba",
  medium: "https://medium.com/@hedi.abdessalem",
  twitter: "https://twitter.com/yourusername",
  instagram: "https://www.instagram.com/hedi.abdessalem/",
  youtube: "https://www.youtube.com/channel/UC4EGCEcOCQULqStVSsSLMAw",
  spotify: "https://open.spotify.com/user/yourusername",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A SOFTWARE ENGINEERIGN STUDENT WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Developing highly interactive Front-end / User Interfaces for web and mobile applications"
    ),
    emoji(
      "⚡ Integrating Back-end technologies creating full stack applications"
    ),
    emoji("⚡ Solving complex algorithm challenges, and achieving top-tier rankings in competitive programming"),
    emoji(
      "⚡ Passionate about Ethical Hacking, learning and applying security skills  "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fab fa-js-square"
    },
    {
      skillName: "oracle",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "overleaf",
      fontAwesomeClassname: "ai ai-overleaf"
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "kali-linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "express.js",
      fontAwesomeClassname: "fab fa-node-js" // There's no specific Express.js icon in FontAwesome, so we use the Node.js icon
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "International Multidisciplinary School",
      logo: require("./assets/images/epii-removebg-preview.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2022 - Juin 2025",
      desc: "Software Engineer Diploma.",
      descBullets: [
        "Front & Backe End Development",
        "Programming",
      ]
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
      progressPercentage: "90%"
    },
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Dundill",
      companylogo: require("./assets/images/DundillLogo.png"),
      date: "April 01 – Present",
      desc: "Front end web development.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME TECH THAT I HELPED CREATE",
  projects: [
    {
      image: require("./assets/images/EPI.png"),
      projectName: "EPIverse",
      projectDesc: "Created a Social App for my University that has alot of cool features like creating study groups, following what's trending, and much more",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
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
      title: "IEEEXtreme 17.0 finalist",
      subtitle:
        "Silver Medal in IEEEXtreme 17.0 competition in EPI.",
      image: require("./assets/images/IEEE.png"),
      imageAlt: "IEEE SB EPI",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "IEEE SB EPI",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "2Fast Coding Challenge finalist",
      subtitle:
        "Silver Medal in 2Fast Coding Challenge competition in EPI.",
      image: require("./assets/images/2Fast.jpg"),
      imageAlt: "2Fast challenge",
      footerLink: [
        {
          name: "Certification",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        },
        {
          name: "EPI CO-PRO",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Coursera Meta Front-End Developer Professional Certificate",
      subtitle: "Completed Certifcation from Meta for Front-End Developer.",
      image: require("./assets/images/Meta.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
      ]
    },
    {
      title: "Responsive Web Design",
      subtitle: "freeCodeCamp Certificate. This certification covers basic HTML, CSS, and JavaScript to build responsive web designs.",
      image: require("./assets/images/fcc.png"),
      imageAlt: "fcc Logo",
      footerLink: [
        {name: "Certification", url: ""},
      ]
    },
    {
      title: "Quick Sort Algorithm Workshop",
      subtitle: "I held a Workshop and a Competition on Quick Sort Algorithm for students in EPI.",
      image: require("./assets/images/quicksort.png"), // replace with the path to your image
      imageAlt: "Quick Sort Logo", // replace with appropriate alt text
      footerLink: [
        {name: "Certification", url: ""}, // replace with the URL to your certificate
        {
          name: "EPI CO-PRO",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
    {
      title: "Basic Problem Solving",
      subtitle: "HackerRank Certificate. This certification validates basic problem solving skills using programming.",
      image: require("./assets/images/hackerrank.png"), // replace with the path to your image
      imageAlt: "HackerRank Logo", // replace with appropriate alt text
      footerLink: [
        {name: "Certification", url: ""}, // replace with the URL to your certificate
      ]
    },
    {
      title: "Event Organization and Film Discussion Certificate",
      subtitle:
        "'Sair Movie' event coordination and participation certificate in EPI.",
      image: require("./assets/images/readers.png"),
      imageAlt: "readersEPI",
      footerLink: [
        {
          name: "Certification",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        },
        {
          name: "Readers EPI",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@hedi.abdessalem/navigating-the-code-best-practices-for-aspiring-software-engineers-f9d3849ce4b8",
      title: "Coding best practices",
      description:
        "Coding standards, clean code principles, and best practices: How to write efficient, maintainable, and scalable code."
    },
    
    
  ],
  display: true // Set false to hide this section, defaults to true
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
  title: emoji("My Speech🎙️"),
  subtitle: "JUST ME TALKING ABOUT MYSELF, TECHNOLOGY, LIFE AND STUFF",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+216- 50443767",
  email_address: "hedi.abdessalem@gmail.com"
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
  isHireable
};
