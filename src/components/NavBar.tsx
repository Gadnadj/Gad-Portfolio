import { navigation } from '../data';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navigation.map(item => {
                const element = document.getElementById(item.href);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return {
                        id: item.href,
                        distance: Math.abs(rect.top)
                    };
                }
                return null;
            }).filter(Boolean);

            const closest = sections.reduce((prev, curr) => {
                return prev.distance < curr.distance ? prev : curr;
            });

            setActiveSection(closest.id);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav>
            <ul className='flex space-x-8'>
                {navigation.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                to={item.href}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className={`cursor-pointer transition-colors ${
                                    activeSection === item.href 
                                        ? 'text-accent' 
                                        : 'text-white hover:text-accent'
                                }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBar;