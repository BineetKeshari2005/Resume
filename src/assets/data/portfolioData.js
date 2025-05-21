import portfolioImg01 from "../images/portfolio-01.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";


const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg06,
    category: "Web Design",
    title: "Resume",
    description:
      "Created a personal portfolio website using React and Tailwind CSS to showcase my projects, achievements, and skills in a clean, responsive layout. Integrated social media links and contact options to enable easy communication and professional networking.",
    technologies: ["React", "Tailwind css","HTML"],
    siteUrl: "",
  }
,
  {
    id: "02",
    imgUrl: portfolioImg04,
    category: "Ux",
    title: "RU Dine",
    description:
      "This is a group Figma project with prototyping assigned in our Principles of Design (POD) course. We're designing an app interface aimed at reducing food wastage in our university by creating a user-friendly solution to track, manage, and minimize leftovers in the mess system.",
    technologies: ["Figma"],
    siteUrl: "https://www.figma.com/design/03CydG0vUkqhu5V8Eua6AS/Untitled?node-id=0-1&p=f&t=xuIuUW20xfZnuuIN-0",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "Ux",
    title: "Lock Screen Taskflow",
    description:
      "This is a simple  Lockscreen Taskflow made as an assignment with prototyping. ",
    technologies: ["Figma"],
    siteUrl: "https://www.figma.com/design/V1wxN1AKGv3VFCaH7MZUD6/New-Figma?t=ppLSisUq9Unmgcz8-0",
  },
  {
    id: "04",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "Anime Character Finder",
    description:
      "A basic website that allows users to find anime characters by typing their names. Users must log in before accessing the main search page.",
    technologies: ["HTML", "CSS", "Javascript"],
    siteUrl: "https://anime-character-finder.netlify.app/",
  },
  {
    id: "05",
    imgUrl: portfolioImg03,
    category: "Web Design",
    title: "Landing Page",
    description:
      "An end-semester(1st) capstone project featuring a responsive design with various animations.",
    technologies: ["HTML", "CSS"],
    siteUrl: "https://bineet-capstone.netlify.app/",
  },

  {
    id: "06",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Valentine Day Tracker",
    description:
      "A Valentine’s Day tracker that allows users to check which special day falls on a given date.",
    technologies: ["HTML", "CSS", "Javascript"],
    siteUrl: "https://valentine-day-tracker.netlify.app/",
  },


];

export default portfolios;