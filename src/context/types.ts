export type Language = 'en' | 'he';

export interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    translations: {
        nav: {
            home: string;
            about: string;
            portfolio: string;
            services: string;
            contact: string;
        };
        hero: {
            greeting: string;
            title: string;
            subtitle: string;
            services: string;
            cta: string;
            downloadCV: string;
        };
        about: {
            title: string;
            description: string;
            description2: string;
            cta: string;
        };
        portfolio: {
            title: string;
            subtitle: string;
            categories: {
                all: string;
                logo: string;
                branding: string;
                website: string;
                magazine: string;
                flyer: string;
                brochure: string;
                poster: string;
                menu: string;
                businesscard: string;
            };
            loadMore: string;
        };
        services: {
            title: string;
            services: {
                logo: {
                    title: string;
                    description: string;
                };
                businessCard: {
                    title: string;
                    description: string;
                };
                magazine: {
                    title: string;
                    description: string;
                };
                flyer: {
                    title: string;
                    description: string;
                };
                video: {
                    title: string;
                    description: string;
                };
                website: {
                    title: string;
                    description: string;
                };
            };
        };
        contact: {
            title: string;
            subtitle: string;
            form: {
                name: string;
                email: string;
                subject: string;
                message: string;
                send: string;
                success: string;
                error: string;
            };
            info: {
                question: {
                    title: string;
                    subtitle: string;
                };
                location: {
                    title: string;
                    subtitle: string;
                    description: string;
                };
            };
        };
    };
} 