import { motion } from 'framer-motion';

type ProjectProps = {
    item: {
        id: string;
        name: string;
        image: string;
        category: string;
    };
};

const Project = ({ item }: ProjectProps) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className='relative'
        >
            <div className='group relative overflow-hidden rounded-xl'>
                <div className='relative'>
                    <img 
                        className='w-full h-[300px] object-cover transition-all duration-300 group-hover:scale-110'
                        src={item.image} 
                        alt={item.name} 
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300' />
                </div>
                <div className='absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-all duration-300'>
                    <h4 className='text-xl font-bold text-white mb-2'>{item.name}</h4>
                    <p className='text-sm text-white/80'>{item.category}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Project;