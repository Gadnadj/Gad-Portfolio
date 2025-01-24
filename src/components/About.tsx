import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <section id='about' className='section bg-secondary'>
            <div className='container mx-auto'>
                <motion.h2 
                    className='section-title text-center mb-16'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    About me
                </motion.h2>

                <div className='flex flex-col lg:flex-row gap-24'>
                    <motion.div 
                        className='flex-1'
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className='h3 mb-4'>
                            I am a passionate Full Stack Developer with a strong foundation in both front-end and back-end development. My journey in software engineering has equipped me with the skills to create seamless, user-centric web applications.
                        </h3>
                        <p className='mb-6'>
                            I specialize in building responsive web applications using modern technologies like React, Node.js, and TypeScript. My approach combines technical expertise with creative problem-solving to deliver efficient and scalable solutions.
                        </p>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="inline-block"
                        >
                            <motion.button 
                                className='btn btn-md bg-accent hover:bg-accent-hover transition-all'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact me
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;