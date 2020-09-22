import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Miji Kim', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Miji',
  subtitle: "I'm Developer and Data Enthusiast",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'miji.png',
  paragraphOne:
    "Hello! My name is Miji Kim and I'm based in Melbourne, Victoria." +
    " I'm currently" +
    ' in my second year, studying the Master of Information Technology at Monash University ' +
    'due to graduate in December, 2020.',
  paragraphTwo:
    'I have a diverse set of skills, ranging from UI/UX to HTML + CSS + JavaScript, Python, Java, SQL, all the way to PHP and XAMPP.',
  paragraphThree: ' ',
  resume: 'https://github.com/mijikm/resume/raw/master/Resume_Miji_Kim.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'carbon_footprint.jpg',
    title: 'Eat Healthy, Live Better',
    info:
      'A full-stack web application using XAMPP stack, this app allows you to check your current ' +
      'carbon footprint produced by food and to build your low carbon foodprint recipes.',
    info2:
      'I used jQuery, Chart.js, PHP, JavaScript, HTML, and CSS in order to create this web application and it was deployed with Azure virtual machines.',
    url: 'https://github.com/mijikm/carbon-footprint/blob/master/images/carbon_footprint.gif',
    repo: 'https://github.com/mijikm/carbon-footprint', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'oscars.jpg',
    title: 'Movies & the Academy Awards',
    info:
      'An interactive narrative visualisation regarding Academy Award-winning films from 1930 to 2014, designed using the five design sheet methodology.',
    info2:
      'I used D3.js, JavaScript, HTML, SVG, and CSS to create visualisations and R for data wrangling and cleansing.',
    url: 'https://mijikm.github.io/data-visualisation-oscars/',
    repo: 'https://github.com/mijikm/data-visualisation-oscars', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: "Let's build together!",
  email: 'shelbkim@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shelkim/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mijikm',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
