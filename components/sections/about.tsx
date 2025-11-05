'use client'

import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation('common');

  return (
    <div className="border text-card-foreground shadow overflow-hidden rounded-md border-zinc-200 bg-zinc-100/30 transition-colors backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/30 p-6">
      <p className="font-bold text-2xl sm:text-3xl md:text-4xl font-instrument italic">{t('about.title')}</p>
      <div className="flex flex-col gap-4 py-3 sm:py-4 tracking-wide text-muted-foreground">
        <p className="text-justify leading-6 sm:leading-7 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
        <p className="text-justify leading-6 sm:leading-7 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
        <p className="text-justify leading-6 sm:leading-7 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: t('about.p3') }} />
      </div>
    </div>
  )
}