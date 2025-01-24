import { useState } from 'react';
import { motion } from 'framer-motion';
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

const Projects = ({ category, setCategory }: ProjectsProps) => {
    const [showAll, setShowAll] = useState(false);

    const filteredProjects = category === 'all' 
        ? projects 
        : projects.filter((project: Project) => project.category.toLowerCase() === category);

    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

    const handleClick = (link?: string) => {
        if (link) {
            console.log('Opening link:', link); // Debug log
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <>
            <div className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8'>
                {displayedProjects.map((item: Project) => {
                    const { image, category, name, link } = item;
                    return (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className='group relative overflow-hidden rounded-xl cursor-pointer'
                            onClick={() => handleClick(link)}
                            role="link"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    handleClick(link);
                                }
                            }}
                        >
                            <div className='relative'>
                                <img 
                                    className='w-full h-[300px] object-cover transition-all duration-300 group-hover:scale-110'
                                    src={image} 
                                    alt={name}
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300' />
                            </div>
                            <div className='absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-all duration-300'>
                                <h4 className='text-xl font-bold text-white mb-2'>{name}</h4>
                                <p className='text-sm text-white/80 mb-4'>{category}</p>
                                {link && (
                                    <span className='text-accent hover:text-white transition-colors'>
                                        Visit Project →
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
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