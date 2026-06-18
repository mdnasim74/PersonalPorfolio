// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import codealpha from "./assets/company_logo/codealpha.jpg"
import codesoft from "./assets/company_logo/codesoft.jpg";


// Education Section Logo's
import ggsestf from "./assets/education_logo/ggsestc.png"
import twelleth from "./assets/education_logo/images (1).jpg"
import tenth from "./assets/education_logo/images.png";

// Project Section Logo's
import spotify from "./assets/work_logo/spotify.png";
import calculator from "./assets/work_logo/calculator.jpg"
import airbnbclone from "./assets/work_logo/airbnbClone.jpg"
import PersonalWebpage from "./assets/work_logo/PeronalWebpage.png"

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: codesoft,
      role: "Fullstack Intern",
      company: "CodeSoft",
      date: "Dec 2025 - Jan 2026",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: codealpha,
      role: "Fullstack Intern",
      company: "Code Alpha",
      date: "June 2026 - Present",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: ggsestf,
      school: "GGSESTC College, Bokaro",
      date: "Sept 2023 - Present",
      grade: "73.2%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Tech) from GGSESTC, Bokaro. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at GGSESTC College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 1,
      img: twelleth,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2021 - March 2023",
      grade: "69.5%",
      desc: "I completed my class 12 education from S.M.S.G College, Sherghati, under the BSEB board, where I studied Physics, Chemistry, and Mathematics (PCM)",
      degree: "CBSE(XII) - PCM with Science",
    },
    {
      id: 2,
      img: tenth,
      school: "+2 High School Amas, Gaya",
      date: "Apr 2020 - March 2021",
      grade: "81%",
      desc: "I completed my class 10 education from +2 High School, Amas, under the BSEB board, where I studied Science",
      degree: "BSEB(X), Science",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Airbnb Clone",
      description:
       "Built a full-stack Airbnb clone with user authentication (login/signup), property listings, search and filtering features, responsive UI, and backend integration for dynamic data management.",
      image: airbnbclone,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/mdnasim74/delta-project",
      webapp: "https://github.com/mdnasim74/delta-project",
    },
     {
      id: 8,
      title: "Spotify Clone",
      description:
        "Developed a responsive Spotify Clone using HTML, CSS and JavaScript with an interactive and user-friendly interface. Implemented music playback features including play, pause, and track controls while using reusable React components and React Hooks for dynamic rendering and state management.",
      image: spotify,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/mdnasim74/Spotify-Clone",
      webapp: "https://removeyourbg.netlify.app/",
    },
     {
      id: 5,
      title: "A Simple Calculator",
      description:
        "Developed a responsive Calculator application using HTML, CSS, and JavaScript with a clean and interactive user interface. Implemented arithmetic operations such as addition, subtraction, multiplication, and division with real-time calculations. Applied JavaScript DOM manipulation and event handling to improve functionality and user experience.",
      image: calculator,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/mdnasim74/Calculator",
      webapp: "https://webversedigital.com/",
    },
    {
      id: 2,
      title: "Personal Webpage",
      description:
        "Built a responsive personal webpage using HTML, CSS, and JavaScript to showcase skills, projects, and personal information with an interactive user interface. Designed a clean and modern layout with smooth navigation and interactive elements to enhance user experience. Implemented responsive design techniques to ensure compatibility across desktop, tablet, and mobile devices.",
      image: PersonalWebpage,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/mdnasim74/PortFolio",
      webapp: "https://github.com/mdnasim74/PortFolio",
    },
   
   
  ];  