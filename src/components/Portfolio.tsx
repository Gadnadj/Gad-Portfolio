import Projects from './Projects';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { projectsNav } from '../data';
import ShootingStars from './ShootingStars';

const Portfolio = () => {
    const [category, setCategory] = useState('all');

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
                <div className='flex justify-center gap-x-8 mb-12'>
                    {projectsNav.map((item, index) => (
                        <button
                            key={index}
                            className={`${
                                category === item.name.toLowerCase()
                                    ? 'text-accent'
                                    : 'text-white'
                            } cursor-pointer capitalize text-xl`}
                            onClick={() => setCategory(item.name.toLowerCase())}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
                <Reveal delay={0.2} width="100%">
                    <Projects category={category} setCategory={setCategory} />
                </Reveal>
            </div>
        </section>
    );
};

export default Portfolio; 