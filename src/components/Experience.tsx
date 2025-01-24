import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
    {
        date: '2023 - Present',
        company: 'Sidewalk Medias',
        position: 'Founder & Creative Director',
        description: 'Leading creative projects and managing client relationships. Specializing in brand identity, web design, and digital marketing solutions.',
        skills: ['Branding', 'Web Design', 'Digital Marketing', 'UI/UX', 'Social Media']
    },
    {
        date: '2021 - 2023',
        company: 'Freelance',
        position: 'Graphic Designer',
        description: 'Collaborated with various clients on brand identity, print design, and digital media projects.',
        skills: ['Logo Design', 'Print Design', 'Digital Design', 'Client Relations']
    },
    {
        date: '2019 - 2021',
        company: 'Design Agency',
        position: 'Junior Designer',
        description: 'Worked on multiple projects for international clients, focusing on brand identity and marketing materials.',
        skills: ['Adobe Suite', 'Brand Guidelines', 'Marketing Materials']
    }
];

const Experience = () => {
    const { language } = useLanguage();
    const isRTL = language === 'he';

    return (
        <section id='experience' className='section bg-secondary'>
            <div className='container mx-auto'>
                <motion.h2 
                    className='h2 text-center mb-12'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Experience
                </motion.h2>

                {/* Desktop Timeline */}
                <div className='hidden lg:block relative'>
                    {/* Timeline line */}
                    <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/20'></div>

                    {/* Experience items */}
                    <div className='space-y-16'>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className='relative'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                {/* Timeline dot */}
                                <div className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <motion.div 
                                        className='w-8 h-8 bg-accent rounded-full flex items-center justify-center'
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <FaBriefcase className='text-white text-sm' />
                                    </motion.div>
                                </div>

                                {/* Content card */}
                                <motion.div 
                                    className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-16' : 'ml-auto pl-16'}`}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className='bg-tertiary p-8 rounded-2xl shadow-lg'>
                                        <span className='text-accent text-sm font-semibold'>{exp.date}</span>
                                        <h3 className='text-xl font-bold mt-2'>{exp.position}</h3>
                                        <div className='text-accent/80 font-medium mt-1'>{exp.company}</div>
                                        <p className='text-paragraph mt-4'>{exp.description}</p>
                                        
                                        {/* Skills tags */}
                                        <div className='flex flex-wrap gap-2 mt-4'>
                                            {exp.skills.map((skill, skillIndex) => (
                                                <motion.span
                                                    key={skillIndex}
                                                    className='bg-accent/10 text-accent px-3 py-1 rounded-full text-sm'
                                                    whileHover={{ scale: 1.1 }}
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Timeline */}
                <div className='lg:hidden'>
                    <div className='relative pl-8 border-l-2 border-accent/20 space-y-8'>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className='relative'
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                {/* Timeline dot */}
                                <div className='absolute -left-[25px] top-0'>
                                    <motion.div 
                                        className='w-6 h-6 bg-accent rounded-full flex items-center justify-center'
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <FaBriefcase className='text-white text-xs' />
                                    </motion.div>
                                </div>

                                {/* Content card */}
                                <motion.div 
                                    className='bg-tertiary p-6 rounded-2xl shadow-lg'
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className='text-accent text-sm font-semibold'>{exp.date}</span>
                                    <h3 className='text-lg font-bold mt-2'>{exp.position}</h3>
                                    <div className='text-accent/80 font-medium mt-1'>{exp.company}</div>
                                    <p className='text-paragraph mt-3 text-sm'>{exp.description}</p>
                                    
                                    {/* Skills tags */}
                                    <div className='flex flex-wrap gap-2 mt-3'>
                                        {exp.skills.map((skill, skillIndex) => (
                                            <motion.span
                                                key={skillIndex}
                                                className='bg-accent/10 text-accent px-2 py-1 rounded-full text-xs'
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience; 