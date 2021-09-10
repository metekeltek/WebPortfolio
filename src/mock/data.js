import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Mete Keltek', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Mete Keltek',
  subtitle: 'I\'m a Software Developer from Germany.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am Mete Keltek, and I am studying IT & Buisness at University Cologne. I have 4 years experience working in a software company and I am developing Websites and Apps on part-time basis.',
  paragraphTwo: 'I started off my career in software development as a .Net Developer and quickly expanded my horizon, learning new programming languages, new Frameworks and all the Aspects of the tech industry.',
  paragraphThree: 'Now I am a full stack web developer having experience with Frameworks like React, Flutter, .Net, Unity and others.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpeg',
    title: 'Shufflechat',
    info: 'Shufflechat is a place where you can meet new people. You get matched with a random person and can chat with him/her or skip to the next random chat partner. With the premium filter you can decide with what kind of person you want to match.',
    info2: 'This project is still in work and coming in the Future.',
    url: '',
    repo: 'https://github.com/metekeltek/shufflechat', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpeg',
    title: 'iamsad.club',
    info: 'With iamsad.club you can share your sadness with others, totally anonymous.',
    info2: 'This project is still in work and coming this year.',
    url: '',
    repo: 'https://github.com/metekeltek/iamsad', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpeg',
    title: 'pixiPets',
    info: 'A virtual pet for IOS and Android.',
    info2: 'This project is still in work and coming this year.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'keltekm@googlemail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/metekeltek',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/metekeltek',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
