import { motion } from 'framer-motion';
import ShootingStars from './ShootingStars';
import HeroImage from '../assets/img/sidewalk.png';

const Hero = () => {
    return (
        <section 
            id='home' 
            className='min-h-screen flex items-center bg-primary relative overflow-hidden'
        >
            <ShootingStars containerId="hero-particles" />
            <div className='container mx-auto relative z-20'>
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                    <div className='flex-1 text-center lg:text-left'>
                        <motion.h1 
                            className='text-[16px] leading-[0.8] lg:text-[20px] mb-4'
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Hey, I am <span>Gad Nadjar</span> 👋
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 className='mb-6 text-[30px] lg:text-[45px] font-semibold uppercase leading-[1]'>
                                <span className='text-accent mr-4'>Full Stack</span>
                                Developer
                            </h2>
                        </motion.div>
                        <motion.p 
                            className='mb-8 max-w-lg mx-auto lg:mx-0'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Clean code. Intuitive design. Efficient solutions.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex justify-center lg:justify-start"
                        >
                            <a
                                href="/Gad Nadjar.pdf"
                                download="Gad Nadjar.pdf"
                                className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all w-fit px-6'
                            >
                                Download my CV
                            </a>
                        </motion.div>
                    </div>
                    <div className='hidden lg:flex flex-1 justify-end items-end'>
                        <img src={HeroImage} alt='Sidewalk' className='w-[400px]' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;