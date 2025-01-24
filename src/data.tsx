import { FiFacebook, FiLinkedin } from 'react-icons/fi';
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



import Sidewalk_Media_Post from './assets/img/projects2/WhereWere.png';


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
        icon: <FiInstagram />,
        href: 'https://www.instagram.com/sidewalkmedias/'
    },
    {
        icon: <FiFacebook />,
        href: 'https://www.facebook.com/SidewalkMedias'
    },
    {
        icon: <FiLinkedin />,
        href: 'https://www.linkedin.com/in/sidewalkmedias/'
    }
];
//projects 2

export const projectData2 = [

    {
        id: '1',
        image: Sidewalk_Media_Post,
        name: 'Sidewalk Medias Post',
        category: 'Post'
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