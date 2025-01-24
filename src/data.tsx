import { FiFacebook, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiMapPin } from 'react-icons/fi';

import c from './assets/img/skills2/c++.png';
import cpp from './assets/img/skills2/c.png';
import css from './assets/img/skills2/css.png';
import html from './assets/img/skills2/html.png';
import python from './assets/img/skills2/python.png';
import react from './assets/img/skills2/react.png';
import javascript from './assets/img/skills2/javascript.png';
import typescript from './assets/img/skills2/typescript.png';
import node from './assets/img/skills2/node.png';
import mongodb from './assets/img/skills2/mongodb.png';
import next from './assets/img/skills2/next.png';
import tailwind from './assets/img/skills2/tailwind.png';
import git from './assets/img/skills2/git.png';
import figma from './assets/img/skills2/figma.png';

import Aeonia from './assets/img/projects2/Aeonia.png';
import Airbnb from './assets/img/projects2/Airbnb.png';
import Disney from './assets/img/projects2/Disney.png';
import Evogym from './assets/img/projects2/Evogym.png';
import Jarvis from './assets/img/projects2/Jarvis.png';
import LittleLemon from './assets/img/projects2/LittleLemon.png';
import Lumiverse from './assets/img/projects2/Lumiverse.png';
import Mealicious from './assets/img/projects2/Mealicious.png';
import Rentalcars from './assets/img/projects2/rentalCars.png';
import Steimatzky from './assets/img/projects2/Steimatzky.png';
import MyTrip from './assets/img/projects2/MyTrip.png';





// navigation
export const navigation = [
    {
        name: 'home',
        href: 'home'
    },
    {
        name: 'about',
        href: 'about'
    },

    {
        name: 'skills',
        href: 'skills'
    },
    {
        name: 'portfolio',
        href: 'portfolio'
    },
    {
        name: 'education',
        href: 'education'
    },
    {
        name: 'contact',
        href: 'contact'
    }
];

// social
export const social = [
    {
        icon: <FiLinkedin />,
        href: 'https://www.linkedin.com/in/gad-nadjar/'
    },
    {
        icon: <FiGithub />,
        href: 'https://github.com/Gadnadj'
    },
    {
        icon: <FiInstagram />,
        href: 'https://www.instagram.com/gadnadj/'
    },
    {
        icon: <FiFacebook />,
        href: 'https://www.facebook.com/gad.nadjar'
    }
];
//projects 2

export const projectData2 = [
    {
        id: '1',
        image: Jarvis,
        name: 'Jarvis | Smart Speaker',
        category: 'Full Stack',
        link: 'https://jarvis-gad.vercel.app'
    },
    {
        id: '2',
        image: MyTrip,
        name: 'MyTrip | Social Media',
        category: 'Full Stack',
        link: 'https://mytrip-gad.vercel.app'
    },
    {
        id: '3',
        image: Aeonia,
        name: 'Aeonia | AI image generator',
        category: 'Full Stack',
        link: 'https://aeonia-gad.vercel.app'
    },
    {
        id: '4',
        image: Steimatzky,
        name: 'Steimatzky | Book Store',
        category: 'Full Stack',
        link: 'https://steimatzky-gad.vercel.app'
    },
    {
        id: '5',
        image: Airbnb,
        name: 'Airbnb | Clone',
        category: 'Full Stack',
        link: 'https://airbnb-gad.vercel.app'
    },
    {
        id: '6',
        image: LittleLemon,
        name: 'Little Lemon | Restaurant',
        category: 'Full Stack',
        link: 'https://littlelemon-gad.vercel.app'
    },
    {
        id: '7',
        image: Disney,
        name: 'Disney | Clone',
        category: 'Front End',
        link: 'https://disney-gad.vercel.app'
    },
    {
        id: '8',
        image: Rentalcars,
        name: 'Rentalcars | Car Rental',
        category: 'Front End',
        link: 'https://rentalcars-gad.vercel.app'
    },
    {
        id: '9',
        image: Mealicious,
        name: 'Mealicious | Restaurant',
        category: 'Front End',
        link: 'https://mealicious-gad.vercel.app'
    },
    {
        id: '10',
        image: Lumiverse,
        name: 'Lumiverse | VR Experience',
        category: 'Front End',
        link: 'https://lumiverse-gad.vercel.app'
    },
    {
        id: '11',
        image: Evogym,
        name: 'Evogym | Gym',
        category: 'Front End',
        link: 'https://evogym-gad.vercel.app'
    }
];


// projects
export const projectsNav = [
    {
        name: 'all'
    },
    {
        name: 'Full Stack'
    },
    {
        name: 'Front End'
    }
];

// skill
export const skills = [
    {
        image: react,
        name: 'React'
    },
    {
        image: typescript,
        name: 'Typescript'
    },
    {
        image: javascript,
        name: 'Javascript'
    },
    {
        image: next,
        name: 'Next.js'
    },
    {
        image: node,
        name: 'Node.js'
    },
    {
        image: tailwind,
        name: 'Tailwind'
    },
    {
        image: css,
        name: 'CSS'
    },
    {
        image: html,
        name: 'Html'
    },
    {
        image: mongodb,
        name: 'MongoDB'
    },
    {
        image: python,
        name: 'Python'
    },
    {
        image:c ,
        name: 'C'
    },
    {
        image: cpp,
        name: 'C++'
    },
    {
        image: git,
        name: 'Git'
    },
    {
        image: figma,
        name: 'Figma'
    }
];

// contact
export const contact = [
    {
        icon: <FiMapPin />,
        title: 'Current Location',
        subtitle: 'Haifa, Israel'
    }
];