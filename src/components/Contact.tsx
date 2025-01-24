import { FormEvent, useState } from 'react';
import { contact } from '../data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import ShootingStars from './ShootingStars';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        try {
            const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                toast.success('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                toast.error('Something went wrong. Please try again.');
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        }
    };

    return (
        <section id='contact' className='section bg-primary min-h-[800px] relative overflow-hidden'>
            <ShootingStars containerId="contact-particles" />
            <div className='container mx-auto relative z-20'>
                <div className='flex flex-col items-center text-center'>
                    <motion.h2 
                        className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Contact Me
                    </motion.h2>
                    <motion.p 
                        className='subtitle'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                    </motion.p>
                </div>

                <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
                    <motion.div 
                        className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {contact.map((item, index) => {
                            const { icon, title, subtitle } = item;
                            return (
                                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                                    <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                                        {icon}
                                    </div>
                                    <div>
                                        <h4 className='font-body text-xl mb-1'>{title}</h4>
                                        <p className='mb-1'>{subtitle}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>

                    <motion.form
                        className='space-y-8 w-full max-w-[780px]'
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='flex gap-8'>
                            <input
                                className='input'
                                type='text'
                                placeholder='Name'
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                            />
                            <input
                                className='input'
                                type='email'
                                placeholder='Email'
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                        </div>
                        <input
                            className='input'
                            type='text'
                            placeholder='Subject'
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            required
                        />
                        <textarea
                            className='textarea'
                            placeholder='Message'
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            required
                        ></textarea>
                        <motion.button 
                            type='submit' 
                            className='btn btn-lg bg-accent hover:bg-accent-hover'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </div>
            <ToastContainer position="bottom-right" />
        </section>
    );
};

export default Contact; 