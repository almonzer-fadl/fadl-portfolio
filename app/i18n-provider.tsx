'use client'

import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { useEffect } from 'react';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (i18n.language === 'ar') {
      html.dir = 'rtl';
      html.classList.add('font-arabic');
      html.classList.remove('font-english');
    } else {
      html.dir = 'ltr';
      html.classList.add('font-english');
      html.classList.remove('font-arabic');
    }

    const handleLanguageChanged = (lng: string) => {
      if (lng === 'ar') {
        html.dir = 'rtl';
        html.classList.add('font-arabic');
        html.classList.remove('font-english');
      } else {
        html.dir = 'ltr';
        html.classList.add('font-english');
        html.classList.remove('font-arabic');
      }
    };

    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
