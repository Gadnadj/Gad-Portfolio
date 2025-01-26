import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectData2 as projects } from '../data';

type Project = {
    id: string;
    image: string;
    name: string;
    category: string;
    link?: string;
};

type ProjectsProps = {
    category: string;
    setCategory: (category: string) => void;
};

const Projects = ({ category }: ProjectsProps) => {
    const [showAll, setShowAll] = useState(false);

    const filteredProjects = useMemo(() => {
        return category === 'all' 
            ? projects 
            : projects.filter((project: Project) => project.category.toLowerCase() === category);
    }, [category]);

    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

    const getProjectDescription = (name: string) => {
        switch (name) {
            case 'Jarvis | Smart Speaker':
                return 'Built a social media platform for travelers using React, Node.js and MongoDB enabling real-time sharing of experiences, photos and travel tips among growing community of adventurers. Integrates real-time updates and personalized recommendations based on user preferences to enhance engagement. Designed a scalable architecture using microservices and caching strategies, reducing backend response times by 30% and ensuring a seamless user experience.';
            case 'MyTrip | Social Media':
                return 'A social platform for travelers to share their experiences, connect with fellow adventurers, and discover new destinations.';
            case 'Aeonia | AI image generator':
                return 'An AI-powered image generation tool that creates unique artwork based on text descriptions using advanced machine learning.';
            case 'Steimatzky | Book Store':
                return 'A modern e-commerce platform for books featuring a rich catalog, user reviews, and personalized recommendations.';
            case 'Airbnb | Clone':
                return 'A full-featured accommodation booking platform with search, filters, and secure payment processing.';
            case 'Little Lemon | Restaurant':
                return 'An elegant restaurant website with online ordering, table reservations, and menu management.';
            case 'Disney | Clone':
                return 'A streaming platform clone featuring a vast library of content with categories and user profiles.';
            case 'Rentalcars | Car Rental':
                return 'A car rental service platform with booking management and vehicle tracking features.';
            case 'Mealicious | Restaurant':
                return 'A modern restaurant website showcasing menu items, online ordering, and delivery tracking.';
            case 'Lumiverse | VR Experience':
                return 'An immersive virtual reality platform offering unique interactive experiences and storytelling.';
            case 'Evogym | Gym':
                return 'A fitness center website with class scheduling, membership management, and progress tracking.';
            default:
                return 'An innovative project showcasing modern web development techniques and user-centric design.';
        }
    };

    const getProjectTechnologies = (name: string) => {
        switch (name) {
            case 'Jarvis | Smart Speaker':
                return ['React', 'JavaScript', 'Python','Flask', 'HTLM', 'CSS', 'API', 'Raspberry Pi'];
            case 'MyTrip | Social Media':
                return ['React', 'JavaScript', 'Node.js', 'Express', 'CSS','HTML', 'MongoDB', 'JWT'];
            case 'Aeonia | AI image generator':
                return ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'API', 'JWT', 'Framer Motion'];
            case 'Steimatzky | Book Store':
                return ['React', 'TypeScript', 'Node.js','Express', 'MongoDB', 'Tailwind CSS', 'Framer Motion'];
            case 'Airbnb | Clone':
                return ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'JWT', 'Framer Motion'];
            case 'Little Lemon | Restaurant':
                return ['React', 'JavaScript', 'Python', 'Django', 'Tailwind CSS'];
            case 'Disney | Clone':
                return ['React', 'TypeScript', 'Tailwind CSS', 'API', 'Framer Motion'];
            case 'Rentalcars | Car Rental':
                return ['React', 'TypeScript', 'Tailwind CSS', 'API', 'Framer Motion'];
            case 'Mealicious | Restaurant':
                return ['React', 'Typescript', 'Tailwind CSS', 'Framer Motion'];
            case 'Lumiverse | VR Experience':
                return ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'];
            case 'Evogym | Gym':
                return ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'];
            default:
                return ['React', 'JavaScript', 'CSS', 'HTML'];
        }
    };

    const getTechColor = (tech: string) => {
        switch (tech.toLowerCase()) {
            case 'react':
                return 'text-[#61DAFB] hover:text-[#61DAFB]/80'; // React blue
            case 'javascript':
                return 'text-[#F7DF1E] hover:text-[#F7DF1E]/80'; // JavaScript yellow
            case 'typescript':
                return 'text-[#3178C6] hover:text-[#3178C6]/80'; // TypeScript blue
            case 'python':
                return 'text-[#3776AB] hover:text-[#3776AB]/80'; // Python blue
            case 'node.js':
                return 'text-[#339933] hover:text-[#339933]/80'; // Node.js green
            case 'express':
                return 'text-red-500 hover:text-red-700/80'; // Express black
            case 'mongodb':
                return 'text-[#47A248] hover:text-[#47A248]/80'; // MongoDB green
            case 'tailwind css':
                return 'text-[#06B6D4] hover:text-[#06B6D4]/80'; // Tailwind cyan
            case 'css':
                return 'text-[#1572B6] hover:text-[#1572B6]/80'; // CSS blue
            case 'html':
                return 'text-[#E34F26] hover:text-[#E34F26]/80'; // HTML orange
            case 'api':
                return 'text-[#4CAF50] hover:text-[#4CAF50]/80'; // API green
            case 'jwt':
                return 'text-[#D63AFF] hover:text-[#D63AFF]/80'; // JWT purple
            case 'framer motion':
                return 'text-[#FF4F8B] hover:text-[#FF4F8B]/80'; // Framer Motion pink
            case 'flask':
                return 'text-orange-300 hover:text-orange-500/80'; // Flask black
            case 'django':
                return 'text-[#092E20] hover:text-[#092E20]/80'; // Django dark green
            case 'next.js':
                return 'text-[#000000] hover:text-[#000000]/80'; // Next.js black
            case 'raspberry pi':
                return 'text-[#C51A4A] hover:text-[#C51A4A]/80'; // Raspberry Pi red
            default:
                return 'text-white/60 hover:text-accent';
        }
    };

    return (
        <>
            <motion.div 
                className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'
                layout
            >
                <AnimatePresence mode="wait">
                    {displayedProjects.map((item: Project) => {
                        const { image, name, link } = item;
                        const technologies = getProjectTechnologies(name);

                        return (
                            <motion.div
                                key={name}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ 
                                    duration: 0.3,
                                    layout: { duration: 0.3 }
                                }}
                                className='group relative overflow-hidden rounded-xl'
                            >
                                <div className='relative'>
                                    <img 
                                        className='w-full h-[300px] object-cover transition-all duration-300 group-hover:scale-110'
                                        src={image} 
                                        alt={name}
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300' />
                                </div>
                                <div className='absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-all duration-300'>
                                    <h4 className='text-xl font-bold text-white mb-3'>{name}</h4>
                                    <p className='text-sm text-white/90 mb-4 line-clamp-3'>
                                        {getProjectDescription(name)}
                                    </p>
                                    <div className="flex flex-col gap-4">
                                        {link && (
                                            <a 
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='inline-block text-accent hover:text-white transition-colors'
                                            >
                                                Visit Project →
                                            </a>
                                        )}
                                        <div className="flex flex-wrap gap-2">
                                            {technologies.map((tech, index) => (
                                                <span 
                                                    key={index} 
                                                    className={`text-xs ${getTechColor(tech)} transition-colors`}
                                                >
                                                    #{tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </motion.div>
            {filteredProjects.length > 6 && (
                <motion.div 
                    className='flex justify-center mt-16'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className='btn btn-lg bg-accent hover:bg-accent-hover transition-all'
                    >
                        {showAll ? 'Show Less' : 'View More'}
                    </button>
                </motion.div>
            )}
        </>
    );
};

export default Projects;