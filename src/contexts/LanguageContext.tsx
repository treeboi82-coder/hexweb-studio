import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'ar'

type Translations = {
  [key in Language]: {
    navbar: {
      services: string
      portfolio: string
      about: string
      contact: string
      letsTalk: string
    }
    hero: {
      title: string
      subtitle: string
      viewPortfolio: string
      startProject: string
    }
    about: {
      title: string
      subtitle: string
    }
    portfolio: {
      title: string
      subtitle: string
      viewMore: string
      seeAllProjects: string
    }
    contact: {
      title: string
      subtitle: string
    }
    footer: {
      copyright: string
    }
  }
}

const translations: Translations = {
  en: {
    navbar: {
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact',
      letsTalk: "Let's Talk",
    },
    hero: {
      title: 'Hex Web Studio',
      subtitle: 'Hex Web Studio creates fast, modern, and visually stunning websites for businesses and startups in Jordan and beyond.',
      viewPortfolio: 'View Portfolio',
      startProject: 'Start a Project',
    },
    about: {
      title: 'About Me',
      subtitle: 'Building digital experiences that matter.',
    },
    portfolio: {
      title: "Projects I'm",
      subtitle: 'A glimpse at what we\'ve built. Follow',
      viewMore: 'View More',
      seeAllProjects: 'See All Projects on Instagram',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Have a project in mind? Let\'s create something amazing together.',
    },
    footer: {
      copyright: '© {year} Hex Web Studio. All rights reserved.',
    },
  },
  ar: {
    navbar: {
      services: 'الخدمات',
      portfolio: 'أعمالي',
      about: 'نبذة عني',
      contact: 'التواصل',
      letsTalk: 'لنتحدث',
    },
    hero: {
      title: 'ستوديو هيكس ويب',
      subtitle: 'ستوديو هيكس ويب يصنع مواقع سريعة، حديثة، وجذابة بصرياً للشركات والشركات الناشئة في الأردن وخارجها.',
      viewPortfolio: 'عرض الأعمال',
      startProject: 'ابدأ مشروع',
    },
    about: {
      title: 'نبذة عني',
      subtitle: 'نبني تجارب رقمية تهم.',
    },
    portfolio: {
      title: 'مشاريع أفتخر',
      subtitle: 'نظرة على ما بنيناه. تابع',
      viewMore: 'عرض المزيد',
      seeAllProjects: 'شاهد جميع المشاريع على انستغرام',
    },
    contact: {
      title: 'تواصل معي',
      subtitle: 'لديك مشروع في ذهنك؟ دعنا نصنع شيئاً رائعاً معاً.',
    },
    footer: {
      copyright: '© {year} ستوديو هيكس ويب. جميع الحقوق محفوظة.',
    },
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations[Language]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
