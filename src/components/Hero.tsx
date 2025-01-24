import { motion } from 'framer-motion';
import Reveal from './Reveal';
import HeroImage from '../assets/img/sidewalk.png';

const Hero = () => {
    return (
        <section 
            id='home' 
            className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden relative'
        >
            <div className="container mx-auto h-full">
                <div className="flex items-center h-full pt-8">
                    <div className="flex-1 flex flex-col items-center lg:items-start">
                        <Reveal>
                            <p className='text-lg text-accent mb-[22px]'>Hey, I am Gad Nadjar 👋</p>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] text-center lg:text-start'>
                                <span className='text-accent'>Full Stack</span> <br /> Developer
                            </h1>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-start'>
                                Clean code. Intuitive design. Efficient solutions.
                            </p>
                        </Reveal>
                        <motion.a
                            href="/Gad Nadjar.pdf"
                            download="Gad Nadjar.pdf"
                            className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all text-white'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download my CV
                        </motion.a>
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