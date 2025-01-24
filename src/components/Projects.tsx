import { useState } from 'react';
import { motion } from 'framer-motion';
import { projectData2 as projects } from '../data';

type Project = {
    id: string;
    name: string;
    image: string;
    category: string;
};

type ProjectsProps = {
    category: string;
    setCategory: (category: string) => void;
};

const Projects = ({ category, setCategory }: ProjectsProps) => {
    const [showAll, setShowAll] = useState(false);

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'logo', name: 'Logo' },
        { id: 'branding', name: 'Branding' },
        { id: 'website', name: 'Website' },
        { id: 'magazine', name: 'Magazine' },
        { id: 'flyer', name: 'Flyer' },
        { id: 'brochure', name: 'Brochure' },
        { id: 'poster', name: 'Poster' },
        { id: 'menu', name: 'Menu' },
        { id: 'businesscard', name: 'Business Card' }
    ];

    const filteredProjects = category === 'all' 
        ? projects 
        : projects.filter((item: Project) => item.category === category);

    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

    return (
        <>
            <motion.div 
                className='flex flex-wrap justify-center gap-2 mb-8'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setCategory(cat.id)}
                        className={`btn btn-sm ${category === cat.id ? 'bg-accent' : 'bg-secondary'} hover:bg-accent-hover`}
                    >
                        {cat.name}
                    </button>
                ))}
            </motion.div>

            <motion.div 
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
            >
                {displayedProjects.map((item: Project, index: number) => (
                    <motion.div
                        key={index}
                        className='group relative overflow-hidden rounded-xl'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <div className='group relative overflow-hidden rounded-xl'>
                            <div className='relative'>
                                <img 
                                    className='w-full h-[300px] object-cover transition-all duration-300 group-hover:scale-110'
                                    src={item.image} 
                                    alt={item.name} 
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300' />
                            </div>
                            <div className='absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-all duration-300'>
                                <h4 className='text-xl font-bold text-white mb-2'>{item.name}</h4>
                                <p className='text-sm text-white/80'>{item.category}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {filteredProjects.length > 6 && (
                <motion.div 
                    className='text-center mt-8'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className='btn btn-lg bg-accent hover:bg-accent-hover'
                    >
                        {showAll ? 'Show Less' : 'Load More'}
                    </button>
                </motion.div>
            )}
        </>
    );
};

export default Projects;