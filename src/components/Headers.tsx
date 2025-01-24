import { useEffect, useState } from 'react';
import Nav from './NavBar';
import NavMobile from './NavMobile';
import Socials from './Socials';
import { motion } from 'framer-motion';

const Headers = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });

    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${
                bg ? 'bg-tertiary h-20' : 'h-24'
            } flex items-center fixed top-0 w-full text-white z-50 transition-all duration-300`}
        >
            <div className='container mx-auto h-full flex items-center justify-between'>
                <motion.a 
                    href="#"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="hover:text-accent transition-all duration-300"
                >
                    <h2 className="text-3xl lg:text-3xl font-extrabold tracking-[2px] uppercase">
                        <span className="text-accent font-black">Gad</span>
                        <span className="font-light"> Nadjar</span>
                    </h2>
                </motion.a>
                <div className='hidden lg:block'>
                    <Nav />
                </div>
                <div className='hidden lg:block'>
                    <Socials />
                </div>
                <div className='lg:hidden'>
                    <NavMobile />
                </div>
            </div>
        </motion.header>
    );
};

export default Headers;