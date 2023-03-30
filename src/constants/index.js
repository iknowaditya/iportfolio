import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Tripsology",
    company_name: "A Travel Website",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2023",
    points: [
      "Tripsolodgy is a travel website that has been developed using React and Tailwind CSS.",
      "The website offers various travel services to its users and makes it easy for users to find the information they need and get in touch with the company.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      
    ],
  },
  {
    title: "Homeland",
    company_name: "Real Estate Website",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2022",
    points: [
      "In terms of design, a real estate website built with Tailwind CSS could have a modern and clean look, with a color scheme that reflects the agency's branding.",
      "This website is fully responsive, meaning it adapts to different screen sizes and devices and could incorporate animations and other interactive elements to engage users.",
      "Overall, the goal would be to create a user-friendly and visually appealing website that helps buyers and sellers connect with the right properties and agents.",
    ],
  },
  {
    title: "IMDb",
    company_name: " A Clone App",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2022",
    points: [
      "This is an IMDb Clone App. Where users can search movies with movie names or movie genres using API fetching.",
      "IMDb clone app could have a sleek and modern look, with a dark color scheme and bold typography.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "The goal would be to create a user-friendly and visually appealing app that allows users to discover and explore movies and TV shows in a fun and immersive way.",
    ],
  },
  {
    title: "Amazon",
    company_name: "A Clone App",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct 2022",
    points: [
      "This project is a comprehensive web application that seamlessly integrates JavaScript, React and Nodejs to deliver a dynamic and immersive user experience.",
      "Features an array of products that are elegantly displayed on the home page, enabling users to browse and add items to their shopping basket with ease.",
      "The website also features a secure login page that allows users to create a new account or sign in using their existing credentials.",
      "This project showcases the power of Javascript and React in delivering a rich and impressive web experience that is both user-friendly and secure.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Hanu proved me wrong.",
    name: "Atul Verma",
    designation: "Mentor",
    company: "Newton School",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Hanu does.",
    name: "Arnab Deb",
    designation: "Project lead",
    company: "Newton School",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Hanu optimized project website, the traffic increased by 50%. We can't thank them enough!",
    name: "Garima Yadav",
    designation: "Instructor",
    company: "Internshala",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tripsology",
    description:
      "The website offers various travel services to its users and makes it easy for users to find the information they need and get in touch with the company.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/iknowaditya/travel-app",
    netlify_link: "https://tripsology.netlify.app",
  },
  {
    name: "Homeland",
    description:
      "This website is fully responsive, meaning it adapts to different screen sizes and devices and could incorporate animations and other interactive elements to engage users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/iknowaditya/real-estate-app",
    netlify_link: "https://homelandd.netlify.app/"
  },
  {
    name: "IMDb Clone",
    description:
      "This is an IMDb Clone App. Where users can search movies with movie names or movie genres using API fetching.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/iknowaditya/IMBD-Project-1",
    netlify_link: "https://famous-gaufre-3be515.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
