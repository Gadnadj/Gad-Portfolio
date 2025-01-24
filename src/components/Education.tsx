import { motion } from 'framer-motion';
import MetaLogo from '../assets/img/meta-logo.png';
import SCE from '../assets/img/sce.png';

const Education = () => {
    return (
        <section id='education' className='section bg-secondary'>
            <div className='container mx-auto'>
                <motion.h2 
                    className='section-title text-center mb-16'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Education
                </motion.h2>

                <div className='grid grid-cols-1 gap-8'>
                    <motion.div
                        className='bg-tertiary p-6 rounded-2xl'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className='flex items-center gap-4'>
                            <img 
                                src={SCE} 
                                alt="SCE" 
                                className='w-12 h-12 object-contain'
                            />
                            <div>
                                <div className='text-accent text-md'>2020 - 2024</div>
                                <h3 className='text-xl font-bold mt-2'>B.Sc. Software Engineering</h3>
                                <div className='text-accent/80 mt-1'>SCE - Shamoon College of Engineering</div>
                            </div>
                        </div>
                        <p className='mt-4'>Bachelor of Science in Software Engineering, with focus on software development, algorithms, and system architecture.</p>
                    </motion.div>

                    <motion.div
                        className='bg-tertiary p-6 rounded-2xl'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className='flex items-center gap-4'>
                            <img 
                                src={MetaLogo} 
                                alt="Meta" 
                                className='w-12 h-12 object-contain'
                            />
                            <div>
                                <div className='text-accent text-md'>2024</div>
                                <h3 className='text-xl font-bold mt-2'>Front-End Developer Professional Certificate</h3>
                                <div className='text-blue-500/80 mt-1 text-xl'>Meta</div>
                            </div>
                        </div>
                        <p className='mt-4'>Professional certification in Front-End Development from Meta, covering advanced React, responsive design, and modern web development practices.</p>
                    </motion.div>

                    <motion.div
                        className='bg-tertiary p-6 rounded-2xl'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className='flex items-center gap-4'>
                            <img 
                                src={MetaLogo} 
                                alt="Meta" 
                                className='w-12 h-12 object-contain'
                            />
                            <div>
                                <div className='text-accent text-md'>2024</div>
                                <h3 className='text-xl font-bold mt-2'>Back-End Developer Professional Certificate</h3>
                                <div className='text-blue-500/80 mt-1 text-xl'>Meta</div>
                            </div>
                        </div>
                        <p className='mt-4'>Professional certification in Back-End Development from Meta, focusing on server-side programming, databases, and API development.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education; 