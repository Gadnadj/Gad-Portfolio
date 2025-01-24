import { navigation } from '../data';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const NavBar = () => {
    const { translations } = useLanguage();

    return (
        <nav>
            <ul className='flex space-x-8 capitalize text-[15px]'>
                {navigation.map((item, index) => {
                    return (
                        <motion.li
                            className='text-white hover:text-accent cursor-pointer'
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to={item.href}
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className='transition-all duration-300'
                            >
                                {translations.nav[item.name as keyof typeof translations.nav]}
                            </Link>
                        </motion.li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBar;