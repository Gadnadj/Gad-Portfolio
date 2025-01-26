import Projects from './Projects';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { projectsNav } from '../data';
import ShootingStars from './ShootingStars';

const Portfolio = () => {
    const [category, setCategory] = useState('all');

    const handleCategoryChange = (newCategory: string) => {
        if (category === newCategory) return; // Prevent unnecessary re-renders
        setCategory(newCategory);
    };

    return (
        <section
            id='portfolio'
            className='section bg-primary min-h-[1400px] relative overflow-hidden'
        >
            <ShootingStars containerId="portfolio-particles" />
            <div className='container mx-auto relative z-20'>
                <div className='flex flex-col items-center text-center -mb-8'>
                    <motion.h2 
                        className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block before:-left-[95%]'
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        My Portfolio
                    </motion.h2>
                    <motion.p 
                        className='subtitle mb-16'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Discover my recent projects and creative work
                    </motion.p>
                </div>
                <motion.div 
                    className='flex justify-center gap-x-8 mb-12'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {projectsNav.map((item, index) => (
                        <motion.button
                            key={index}
                            className={`${
                                category === item.name.toLowerCase()
                                    ? 'text-accent'
                                    : 'text-white'
                            } cursor-pointer capitalize text-xl transition-colors`}
                            onClick={() => handleCategoryChange(item.name.toLowerCase())}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item.name}
                        </motion.button>
                    ))}
                </motion.div>
                <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Projects category={category} setCategory={setCategory} />
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio; 