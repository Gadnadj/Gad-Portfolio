import { FiFacebook, FiLinkedin } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiMapPin } from 'react-icons/fi';
import Photoshop from './assets/img/skills2/photoshop.png';
import Illustrator from './assets/img/skills2/illustrator.png';
import Indesign from './assets/img/skills2/indesign.png';
import AfterEffect from './assets/img/skills2/After-Effects-Logo.png';
import CapCut from './assets/img/skills2/capcut.png';
import Figma from './assets/img/skills2/figma.png';
import Wix from './assets/img/skills2/wix.png';
import Wordpress from './assets/img/skills2/wordpress.png';
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
        name: 'portfolio',
        href: 'portfolio'
    },
    {
        name: 'skills',
        href: 'skills'
    },
    {
        name: 'experience',
        href: 'experience'
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
        image: Photoshop,
        name: 'Photoshop'
    },
    {
        image: Illustrator,
        name: 'Illustrator'
    },
    {
        image: Indesign,
        name: 'Indesign'
    },
    {
        image: AfterEffect,
        name: 'After Effects'
    },
    {
        image: CapCut,
        name: 'CapCut'
    },
    {
        image: Figma,
        name: 'Figma'
    },
    {
        image: Wix,
        name: 'Wix'
    },
    {
        image: Wordpress,
        name: 'WordPress'
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