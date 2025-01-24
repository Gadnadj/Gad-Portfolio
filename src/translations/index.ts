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
            education: 'education',
            contact: 'contact'
        },
        hero: {
            greeting: 'Hey, I am Gad Nadjar 👋',
            title: 'Full Stack',
            subtitle: 'Developer',
            experience: 'Clean code. Intuitive design. Efficient solutions.',
            cta: 'Contact Me',
            downloadCV: 'Download my CV'
        },
        about: {
            title: 'About me',
            description: 'Results-driven Software Engineer with a solid foundation in web development, eager to tackle challenging problems with innovative, user-centric solutions. Skilled in <span class="font-bold text-accent">React</span>, <span class="font-bold text-accent">TypeScript</span>, <span class="font-bold text-accent">JavaScript</span>, and <span class="font-bold text-accent">Node.js</span>, I enjoy building responsive and performant web applications with clean, maintainable code. Proficient in modern frontend frameworks, state management solutions, and <span class="font-bold text-accent">RESTful APIs</span>, I am passionate about creating seamless user experiences and implementing robust architectural patterns. A fast learner with a collaborative mindset, I am dedicated to staying current with web technologies and best practices to deliver scalable, production-ready applications that exceed client expectations.',
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
            subtitle: "Ready to bring your digital vision to life? Whether you need a scalable web application, a robust API, or a complete full-stack solution, I'm here to help transform your ideas into high-performing, user-friendly applications.",
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
                location: {
                    title: 'Current Location',
                    subtitle: 'Haifa, Israel'
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
            education: 'השכלה',
            contact: 'צור קשר'
        },
        hero: {
            greeting: 'היי, אני גד נגר 👋',
            title: 'Full Stack',
            subtitle: 'Developer',
            experience: 'קוד נקי. עיצוב אינטואיטיבי. פתרונות יעילים.',
            cta: 'צור קשר',
            downloadCV: 'הורד את קורות החיים שלי'
        },
        about: {
            title: 'אודותיי',
            description: 'מהנדס תוכנה מונחה תוצאות עם בסיס מוצק בפיתוח אתרים, נחוש להתמודד עם בעיות מאתגרות באמצעות פתרונות חדשניים וממוקדי משתמש. מיומן ב-<span class="font-bold text-accent">React</span>, <span class="font-bold text-accent">TypeScript</span>, <span class="font-bold text-accent">JavaScript</span> ו-<span class="font-bold text-accent">Node.js</span>, אני נהנה לבנות אפליקציות ווב רספונסיביות ובעלות ביצועים גבוהים עם קוד נקי וניתן לתחזוקה. בקיא במסגרות פרונט-אנד מודרניות, פתרונות לניהול מצבים ו-<span class="font-bold text-accent">RESTful APIs</span>, אני נלהב ליצור חוויות משתמש חלקות וליישם תבניות ארכיטקטוניות חזקות. לומד מהר ובעל גישה שיתופית, אני מחויב להישאר מעודכן בטכנולוגיות רשת ובשיטות עבודה מומלצות כדי לספק אפליקציות בקנה מידה רחב, מוכנות לייצור, שעולות על ציפיות הלקוחות.',
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
            subtitle: 'מוכן להפוך את החזון הדיגיטלי שלך למציאות? בין אם אתה זקוק לאפליקציית ווב מדרגית, ל-API חזק או לפתרון פול-סטאק מלא, אני כאן כדי לעזור להפוך את הרעיונות שלך לאפליקציות ביצועיות וידידותיות למשתמש.',
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
                location: {
                    title: 'Current Location',
                    subtitle: 'Haifa, Israel'
                }
            }
        }
    }
}; 