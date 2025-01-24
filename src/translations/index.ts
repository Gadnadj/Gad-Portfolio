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
            skills: 'skills',
            experience: 'experience',
            contact: 'contact'
        },
        hero: {
            greeting: 'Hey, I am Gad Nadjar 👋',
            title: 'Cross the street',
            subtitle: 'with us.',
            experience: 'Photoshop • Illustrator • InDesign • After Effects • CapCut • Figma • Wix • WordPress',
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
            skills: 'כישורים',
            experience: 'ניסיון',
            contact: 'צור קשר'
        },
        hero: {
            greeting: 'היי, אני גד נגר 👋',
            title: 'חצה את הכביש',
            subtitle: 'איתנו.',
            experience: 'פוטושופ • אילוסטרייטור • אינדיזיין • אפטר אפקטס • קאפקאט • פיגמה • וויקס • וורדפרס',
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