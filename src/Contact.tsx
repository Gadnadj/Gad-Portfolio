import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'success' | 'error' | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus(null);

        try {
            await emailjs.send(
                'service_your_service_id',
                'template_your_template_id',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                },
                'your_public_key'
            );
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section id='contact' className='section bg-primary'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <motion.h2 
                        className='section-title'
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
                    <motion.form 
                        className='space-y-8 w-full max-w-[780px] mx-auto'
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className='flex gap-8'>
                            <input
                                className='input'
                                type='text'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Name'
                                required
                            />
                            <input
                                className='input'
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='Email'
                                required
                            />
                        </div>
                        <input
                            className='input'
                            type='text'
                            name='subject'
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder='Subject'
                            required
                        />
                        <textarea
                            className='textarea'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Message'
                            required
                        />
                        <motion.button
                            className='btn btn-lg bg-accent hover:bg-accent-hover'
                            type='submit'
                            disabled={isLoading}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </motion.button>
                        {status === 'success' && (
                            <p className='text-green-500'>Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className='text-red-500'>Something went wrong. Please try again.</p>
                        )}
                    </motion.form>

                    <motion.div
                        className='flex flex-col lg:flex-row gap-x-8 lg:gap-y-8 mb-12 lg:mb-24'
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div>
                            <h4 className='text-xl mb-2 font-medium'>Location</h4>
                            <p>Israel</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;