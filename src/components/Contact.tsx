import { motion } from 'framer-motion';
import { contact } from '../data';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
import ShootingStars from './ShootingStars';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    'service_2jep1ne',
                    'template_7v5udri',
                    form.current,
                    'user_your_emailjs_key'
                )
                .then(
                    () => {
                        toast.success('Message sent successfully!');
                        if (form.current) form.current.reset();
                    },
                    () => {
                        toast.error('Something went wrong. Please try again.');
                    }
                );
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
                        Ready to bring your digital vision to life? Whether you need a scalable web application, a robust API, or a complete full-stack solution, I'm here to help transform your ideas into high-performing, user-friendly applications.
                    </motion.p>
                </div>

                <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
                    <motion.div 
                        className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
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
                        ref={form}
                        onSubmit={sendEmail}
                        className='space-y-8 w-full max-w-[780px]'
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className='flex gap-8'>
                            <input className='input' type='text' name='name' placeholder='Name' />
                            <input className='input' type='email' name='email' placeholder='Email' />
                        </div>
                        <input type='text' className='input' name='subject' placeholder='Subject' />
                        <textarea className='textarea' name='message' placeholder='Message'></textarea>
                        <button type='submit' className='btn btn-lg bg-accent hover:bg-accent-hover'>
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
            <Toaster position="bottom-right" />
        </section>
    );
};

export default Contact; 