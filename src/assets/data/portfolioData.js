import campus from "../images/campus.jpg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import nextstop from "../images/nextstop.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/portfolio-05.jpg";
import portfolioImg06 from "../images/portfolio-06.jpg";


const portfolios = [

{
  id: "01",
  imgUrl: campus,
  category: "Web App",
  title: "CampusXchange",
  description:
    "CampusXchange is a full-stack campus marketplace web application designed exclusively for university students to securely buy, sell, and exchange second-hand books, electronics, and academic resources. It features real-time chat, Razorpay payment integration, order tracking, and buyer–seller dashboards for seamless digital transactions within the campus community.",
  technologies: [
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.IO",
    "Razorpay",
    "JWT",
    "Tailwind CSS"
  ],
  siteUrl: "https://campus-x-change-gamma.vercel.app/auth/login",
},
{
  id: "02",
  imgUrl: nextstop, // use your CampusXchange thumbnail here
  category: "Web",
  title: "NextStop",
  description:
    "Developed a responsive travel web application enabling users to explore Indian destinations, discover events, and seamlessly plan trips with integrated hotel and guide booking options. The platform integrates destination exploration, trip planning with bookings, bucket list & visited tracking, event discovery, and secure Firebase authentication into a single seamless experience.",
  technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript", "HTML", "Firebase", "Framer Motion"],
  siteUrl: "https://next-stop-two.vercel.app/",
},
{
    id: "03",
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
    id: "04",
    imgUrl: portfolioImg04,
    category: "Ux",
    title: "RU Dine",
    description:
      "This is a group Figma project with prototyping assigned in our Principles of Design (POD) course. We're designing an app interface aimed at reducing food wastage in our university by creating a user-friendly solution to track, manage, and minimize leftovers in the mess system.",
    technologies: ["Figma"],
    siteUrl: "https://www.figma.com/design/03CydG0vUkqhu5V8Eua6AS/Untitled?node-id=0-1&p=f&t=xuIuUW20xfZnuuIN-0",
  },



];

export default portfolios;