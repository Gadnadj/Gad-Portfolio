import { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../translations';

type Language = 'en' | 'he';

export type LanguageContextType = {
    language: Language;
    toggleLanguage: () => void;
    translations: {
        nav: {
            home: string;
            about: string;
            portfolio: string;
            skills: string;
            experience: string;
            contact: string;
        };
        hero: {
            greeting: string;
            title: string;
            subtitle: string;
            experience: string;
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
                location: {
                    title: string;
                    subtitle: string;
                };
            };
        };
    };
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [language, setLanguage] = useState<Language>('en');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'he' : 'en');
    };

    const value = {
        language,
        toggleLanguage,
        translations: translations[language]
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}; 