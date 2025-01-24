import { navigation } from '../data';
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <nav>
            <ul className='flex space-x-8'>
                {navigation.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                to={item.href}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className='text-white hover:text-accent cursor-pointer'
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavBar;