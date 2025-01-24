import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import MetaLogo from '../assets/img/meta-logo.png';

const educations = {
    en: [
        {
            date: '2024',
            company: 'Meta',
            position: 'Front-End Developer Professional Certificate',
            description: 'Professional certification in Front-End Development from Meta, covering advanced React, responsive design, and modern web development practices.',
            logo: MetaLogo
        },
        {
            date: '2024',
            company: 'Meta',
            position: 'Back-End Developer Professional Certificate',
            description: 'Professional certification in Back-End Development from Meta, focusing on server-side programming, databases, and API development.',
            logo: MetaLogo
        },
        {
            date: '2020 - 2024',
            company: 'SCE - Shamoon College of Engineering',
            position: 'B.Sc. Software Engineering',
            description: 'Bachelor of Science in Software Engineering, with focus on software development, algorithms, and system architecture.'
        }
    ],
    he: [
        {
            date: '2024',
            company: 'Meta',
            position: 'תעודה מקצועית בפיתוח צד לקוח',
            description: 'הסמכה מקצועית בפיתוח צד לקוח מ-Meta, כולל React מתקדם, עיצוב רספונסיבי ושיטות פיתוח ווב מודרניות.',
            logo: MetaLogo
        },
        {
            date: '2024',
            company: 'Meta',
            position: 'תעודה מקצועית בפיתוח צד שרת',
            description: 'הסמכה מקצועית בפיתוח צד שרת מ-Meta, התמקדות בתכנות צד שרת, בסיסי נתונים ופיתוח API.',
            logo: MetaLogo
        },
        {
            date: '2020 - 2024',
            company: 'SCE - המכללה האקדמית להנדסה ע״ש סמי שמעון',
            position: 'תואר ראשון בהנדסת תוכנה',
            description: 'תואר ראשון בהנדסת תוכנה, עם התמקדות בפיתוח תוכנה, אלגוריתמים וארכיטקטורת מערכות.'
        }
    ]
};

const Education = () => {
    const { language, translations } = useLanguage();
    const isRTL = language === 'he';

    return (
        <section id='education' className='section bg-secondary' dir={isRTL ? 'rtl' : 'ltr'}>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <motion.h2 
                        className='section-title'
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {translations.nav.education}
                    </motion.h2>
                </div>
                <div className='space-y-8 mt-12'>
                    {educations[language].map((edu, index) => (
                        <motion.div
                            key={index}
                            className='bg-tertiary p-6 rounded-2xl'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className='flex items-center gap-4'>
                                {edu.logo && (
                                    <img 
                                        src={edu.logo} 
                                        alt={edu.company} 
                                        className='w-10 h-10 object-contain'
                                    />
                                )}
                                <div>
                                    <div className='text-accent text-sm'>{edu.date}</div>
                                    <h3 className='text-xl font-bold mt-2'>{edu.position}</h3>
                                    <div className='text-accent/80 mt-1'>{edu.company}</div>
                                </div>
                            </div>
                            <p className='mt-4'>{edu.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education; 