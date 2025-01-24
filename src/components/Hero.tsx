import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section 
            id='home' 
            className='section flex items-center bg-primary lg:h-[85vh] overflow-hidden'
        >
            <div className="container mx-auto h-full">
                <div className="flex items-center h-full pt-8">
                    <div className="flex-1 flex flex-col items-center lg:items-start">
                        <Reveal>
                            <h1 className="text-accent text-xl tracking-[4px]">
                                Hello, I am
                            </h1>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <h2 className="h2 lg:text-8xl">
                                Gad Nadjar
                            </h2>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <h3 className="h3 lg:text-6xl lg:leading-tight">
                                Full Stack Developer
                            </h3>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-start">
                                Photoshop • Illustrator • InDesign • After Effects • CapCut • Figma • Wix • WordPress
                            </p>
                        </Reveal>
                        <Reveal delay={0.5}>
                            <div className="flex gap-4">
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="inline-block"
                                >
                                    <motion.button 
                                        className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Contact me
                                    </motion.button>
                                </Link>
                                <motion.a
                                    href="/Gad Nadjar.pdf"
                                    download="Gad Nadjar.pdf"
                                    className='btn btn-md bg-transparent border border-white/50 hover:border-accent hover:bg-transparent md:btn-lg transition-all'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Download my CV
                                </motion.a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;