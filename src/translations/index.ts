export type ServiceType = 'logo' | 'businessCard' | 'magazine' | 'flyer' | 'video' | 'website';

export interface ServicesTranslations {
    services: {
        [K in ServiceType]: {
            title: string;
            description: string;
        };
    };
}

export const translations = {
    en: {
        nav: {
            home: 'home',
            about: 'about',
            portfolio: 'portfolio',
            services: 'services',
            contact: 'contact'
        },
        hero: {
            greeting: 'Hey, I am Gad Nadjar 👋',
            title: 'Cross the street',
            subtitle: 'with us.',
            services: 'Logo • Business card • Flyer • Magazine • Video • Social Media • Website • Menu',
            cta: 'Contact Me',
            downloadCV: 'Download my CV'
        },
        about: {
            title: 'About me',
            description: 'Passionate about graphic design and visual communication, I create unique and memorable brand identities. From designing elegant logos to captivating magazine layouts, modern websites, and engaging social media content, I bring your projects to life with creativity and professionalism.',
            description2: 'My approach combines technical expertise, artistic sensitivity, and a deep understanding of my clients\' needs. Whether you\'re an established company or an ambitious startup, I am committed to transforming your ideas into impactful designs that set you apart from the competition.',
            cta: 'Contact Me'
        },
        portfolio: {
            title: 'My latest work',
            subtitle: 'Discover a selection of my creations, ranging from striking logos to elegant magazines and innovative web designs. Each project reflects my passion for design and my commitment to creating visual solutions that captivate and communicate effectively.',
            categories: {
                all: 'all',
                logo: 'logo',
                branding: 'branding',
                website: 'website',
                magazine: 'magazine',
                flyer: 'flyer',
                brochure: 'brochure',
                poster: 'poster',
                menu: 'menu',
                businesscard: 'business card'
            },
            loadMore: 'More Projects'
        },
        services: {
            title: 'What I Do',
            services: {
                logo: {
                    title: 'Logo',
                    description: 'Creation of unique and memorable logos that embody the essence of your brand. A professional design that sets you apart from the competition and remains etched in the minds of your clients.'
                },
                businessCard: {
                    title: 'Business Card',
                    description: 'Elegant and impactful business cards that make a strong impression. A carefully crafted design that reflects your professionalism and strengthens your brand image.'
                },
                magazine: {
                    title: 'Magazine',
                    description: 'Creative and professional magazine layout that captivates your readers. A perfect harmony between text and images for an optimal reading experience.'
                },
                flyer: {
                    title: 'Flyer',
                    description: 'Design of eye-catching flyers that attract attention and effectively convey your message. A striking design to maximize the impact of your promotional campaigns.'
                },
                video: {
                    title: 'Video',
                    description: 'Production of dynamic and engaging video content for your social media and communications. Animations that bring your message to life and captivate your audience.'
                },
                website: {
                    title: 'Website',
                    description: 'Creation of modern and responsive websites that reflect your identity. An optimized user experience combined with aesthetic design for an effective online presence.'
                }
            }
        },
        contact: {
            title: 'Contact me',
            subtitle: "Let's bring your vision to life! Whether you have a specific project in mind or just want to explore possibilities, I'm here to help transform your ideas into stunning visual realities.",
            form: {
                name: 'Your name',
                email: 'Your email',
                subject: 'Subject',
                message: 'Your message',
                send: 'Send message',
                success: 'Message sent successfully!',
                error: 'Error sending message. Please try again.'
            },
            info: {
                question: {
                    title: 'Have a question?',
                    subtitle: 'I am here to help you.'
                },
                location: {
                    title: 'Current Location',
                    subtitle: 'Ashdod, Israel',
                    description: 'Serving clients worldwide'
                }
            }
        }
    },
    he: {
        nav: {
            home: 'בית',
            about: 'אודות',
            portfolio: 'תיק עבודות',
            services: 'שירותים',
            contact: 'צור קשר'
        },
        hero: {
            greeting: 'היי, אני גד נגר 👋',
            title: 'חצה את הכביש',
            subtitle: 'איתנו.',
            services: 'לוגו • כרטיס ביקור • פלייר • מגזין • וידאו • רשתות חברתיות • אתר אינטרנט • תפריט',
            cta: 'צור קשר',
            downloadCV: 'הורד את קורות החיים שלי'
        },
        about: {
            title: 'אודותיי',
            description: 'בתור מעצב גרפי ומומחה לתקשורת חזותית, אני יוצר זהויות מותג ייחודיות וזכירות. החל מעיצוב לוגואים אלגנטיים ועד לעימוד מגזינים מרתקים, אתרי אינטרנט מודרניים ותוכן מעורר לרשתות חברתיות, אני מביא את הפרויקטים שלכם לחיים עם יצירתיות ומקצועיות.',
            description2: 'הגישה שלי משלבת מומחיות טכנית, רגישות אמנותית והבנה מעמיקה של צרכי הלקוחות שלי. בין אם אתם חברה מבוססת או סטארט-אפ שאפתני, אני מחויב להפוך את הרעיונות שלכם לעיצובים משפיעים שיבדילו אתכם מהתחרות.',
            cta: 'צור קשר'
        },
        portfolio: {
            title: 'העבודות האחרונות שלי',
            subtitle: 'גלו מבחר מהיצירות שלי, החל מלוגואים מרשימים ועד למגזינים אלגנטיים ועיצובי אתרים חדשניים. כל פרויקט משקף את התשוקה שלי לעיצוב ואת המחויבות שלי ליצירת פתרונות חזותיים שמושכים ומתקשרים ביעילות.',
            categories: {
                all: 'הכל',
                logo: 'לוגו',
                branding: 'מיתוג',
                website: 'אתר',
                magazine: 'מגזין',
                flyer: 'פלייר',
                brochure: 'חוברת',
                poster: 'כרזה',
                menu: 'תפריט',
                businesscard: 'כרטיס ביקור'
            },
            loadMore: 'עוד פרויקטים'
        },
        services: {
            title: 'השירותים שלי',
            services: {
                logo: {
                    title: 'לוגו',
                    description: 'יצירת לוגואים ייחודיים וזכירים המגלמים את מהות המותג שלך. עיצוב מקצועי שמבדיל אותך מהתחרות ונשאר חרוט בזיכרון הלקוחות שלך.'
                },
                businessCard: {
                    title: 'כרטיס ביקור',
                    description: 'כרטיסי ביקור אלגנטיים ומרשימים שיוצרים רושם חזק. עיצוב מוקפד המשקף את המקצועיות שלך ומחזק את תדמית המותג שלך.'
                },
                magazine: {
                    title: 'מגזין',
                    description: 'עימוד מגזינים יצירתי ומקצועי שמרתק את הקוראים שלך. הרמוניה מושלמת בין טקסט לתמונות לחוויית קריאה אופטימלית.'
                },
                flyer: {
                    title: 'פלייר',
                    description: 'עיצוב פליירים מושכי עין שמושכים תשומת לב ומעבירים את המסר שלך ביעילות. עיצוב מרשים למקסום ההשפעה של הקמפיינים הפרסומיים שלך.'
                },
                video: {
                    title: 'וידאו',
                    description: 'הפקת תוכן וידאו דינמי ומעורר עניין לרשתות החברתיות והתקשורת שלך. אנימציות שמחיות את המסר שלך ומרתקות את הקהל שלך.'
                },
                website: {
                    title: 'אתר אינטרנט',
                    description: 'יצירת אתרי אינטרנט מודרניים ורספונסיביים המשקפים את הזהות שלך. חווית משתמש מותאמת בשילוב עיצוב אסתטי לנוכחות אונליין אפקטיבית.'
                }
            }
        },
        contact: {
            title: 'צור קשר',
            subtitle: 'בואו ניתן חיים לחזון שלכם! בין אם יש לכם פרויקט ספציפי בראש או שאתם רק רוצים לחקור אפשרויות, אני כאן כדי לעזור להפוך את הרעיונות שלכם למציאות חזותית מרהיבה.',
            form: {
                name: 'השם שלך',
                email: 'האימייל שלך',
                subject: 'נושא',
                message: 'ההודעה שלך',
                send: 'שלח הודעה',
                success: 'ההודעה נשלחה בהצלחה!',
                error: 'שגיאה בשליחת ההודעה. אנא נסה שוב.'
            },
            info: {
                question: {
                    title: 'יש לך שאלה?',
                    subtitle: 'אני כאן כדי לעזור לך.'
                },
                location: {
                    title: 'המיקום הנוכחי',
                    subtitle: 'אשדוד, ישראל',
                    description: 'משרת לקוחות בכל העולם'
                }
            }
        }
    }
}; 