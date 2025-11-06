import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

export const useResumePath = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return useCallback(() => {
    switch (lang) {
      case 'ar':
        return '/resume_ar.pdf';
      case 'tr':
        return '/resume_tr.pdf';
      default:
        return '/resume_en.pdf';
    }
  }, [lang]);
};