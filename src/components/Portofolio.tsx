import { useState } from 'react';
import { motion } from 'framer-motion';
import Projects from './Projects';

const Portfolio = () => {
    const [category, setCategory] = useState('all');

    return (
        <section id='portfolio' className='section bg-tertiary min-h-[1400px]'>
            <div className='container mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='flex flex-col items-center text-center'
                >
                    <h2 className='section-title'>
                        My Portfolio
                    </h2>
                    <p className='subtitle'>
                        Recent Work
                    </p>
                </motion.div>
                <Projects category={category} setCategory={setCategory} />
            </div>
        </section>
    );
};

export default Portfolio;