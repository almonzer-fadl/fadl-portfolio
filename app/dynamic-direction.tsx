'use client'

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export function DynamicDirection({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return <>{children}</>;
}
