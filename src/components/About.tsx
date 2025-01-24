import { motion } from 'framer-motion';
import Image from '../assets/img/about.webp';

const About = () => {
    return (
        <section 
            id='about' 
            className='section bg-secondary'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            className='object-cover h-full w-[556px] md:mx-auto lg:mx-0 rounded-2xl'
                            src={Image}
                            alt=""
                        />
                    </motion.div>
                    <motion.div 
                        className='flex flex-col items-center text-center lg:items-start lg:text-left'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className='flex flex-col'>
                            <motion.h2 
                                className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block before:-left-[5rem]'
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                About me
                            </motion.h2>
                            <motion.hr 
                                className='mb-8 opacity-5'
                                initial={{ opacity: 0, width: 0 }}
                                whileInView={{ opacity: 0.5, width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            />
                            <motion.p 
                                className='mb-8'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Results-driven Software Engineer with a solid foundation in web development, eager to tackle challenging problems with innovative, user-centric solutions. Skilled in <span className="font-bold text-accent">React</span>, <span className="font-bold text-accent">TypeScript</span>, <span className="font-bold text-accent">JavaScript</span>, and <span className="font-bold text-accent">Node.js</span>, I enjoy building responsive and performant web applications with clean, maintainable code. Proficient in modern frontend frameworks, state management solutions, and <span className="font-bold text-accent">RESTful APIs</span>, I am passionate about creating seamless user experiences and implementing robust architectural patterns. A fast learner with a collaborative mindset, I am dedicated to staying current with web technologies and best practices to deliver scalable, production-ready applications that exceed client expectations.
                                <br /><br />
                                My approach combines technical expertise, artistic sensitivity, and a deep understanding of my clients' needs. Whether you're an established company or an ambitious startup, I am committed to transforming your ideas into impactful designs that set you apart from the competition.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;