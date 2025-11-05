/* eslint-disable @next/next/no-img-element */
'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { experiences } from '@/lib/data'
import { useTranslation } from 'react-i18next'

export function Experience() {
  const { t, i18n } = useTranslation();
  const workExperiences = experiences.filter(exp => exp.type === 'work');
  const educationExperiences = experiences.filter(exp => exp.type === 'education');

  return (
    <div>
      <p className="font-bold font-instrument italic text-2xl sm:text-3xl md:text-4xl mb-6">Experience</p>
      
      <Tabs defaultValue="work" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
          <TabsTrigger value="work">{t('experience.workTab')}</TabsTrigger>
          <TabsTrigger value="education">{t('experience.educationTab')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="work" className="mt-2">
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="p-0">
              <ul className={i18n.language === 'ar' ? 'mr-10 border-r' : 'ml-10 border-l'}>
                {workExperiences.map((experience, index) => (
                  <li key={index} className={`relative ${i18n.language === 'ar' ? 'mr-10' : 'ml-10'} py-4`}>
                    <div className={`absolute ${i18n.language === 'ar' ? '-right-16' : '-left-16'} top-4 flex items-center justify-center rounded-full bg-white dark:bg-black border`}>
                      <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                        <div className="aspect-square h-full w-full bg-background object-contain flex items-center justify-center text-xs font-bold">
                          {experience.logo ? (
                            <img src={experience.logo} alt={experience.company} className="object-cover h-full w-full" />
                          ) : (
                            experience.company.substring(0, 2).toUpperCase()
                          )}
                        </div>
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col justify-start gap-1" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
                      <time className="text-xs text-muted-foreground">
                        <span>{experience.period}</span>
                      </time>
                      <h2 className="font-semibold leading-none">{experience.company}</h2>
                      <p className="text-sm text-muted-foreground">{experience.title}</p>
                      <p className="prose pr-8 text-sm dark:prose-invert">
                        {i18n.language === 'ar' ? experience.translations.ar.description : i18n.language === 'tr' ? experience.translations.tr.description : experience.description}
                      </p>
                      <ul className="ml-4 list-outside list-disc">
                        {(i18n.language === 'ar' ? experience.translations.ar.achievements : i18n.language === 'tr' ? experience.translations.tr.achievements : experience.achievements).map((achievement, i) => (
                          <li key={i} className="prose pr-8 text-sm dark:prose-invert">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="education" className="mt-2">
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="p-0">
              <ul className={i18n.language === 'ar' ? 'mr-10 border-r' : 'ml-10 border-l'}>
                {educationExperiences.map((experience, index) => (
                  <li key={index} className={`relative ${i18n.language === 'ar' ? 'mr-10' : 'ml-10'} py-4`}>
                    <div className={`absolute ${i18n.language === 'ar' ? '-right-16' : '-left-16'} top-4 flex items-center justify-center rounded-full bg-white dark:bg-black border`}>
                      <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                        <div className="aspect-square h-full w-full bg-white object-contain flex items-center justify-center text-xs font-bold">
                          {experience.logo ? (
                            <img src={experience.logo} alt={experience.company} className="object-contain h-full w-full" />
                          ) : (
                            experience.company.substring(0, 2).toUpperCase()
                          )}
                        </div>
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col justify-start gap-1" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
                      <time className="text-xs text-muted-foreground">
                        <span>{experience.period}</span>
                      </time>
                      <h2 className="font-semibold leading-none">{experience.company}</h2>
                      <p className="text-sm text-muted-foreground">{experience.title}</p>
                      <p className="prose pr-8 text-sm dark:prose-invert">
                        {i18n.language === 'ar' ? experience.translations.ar : i18n.language === 'tr' ? experience.translations.tr : experience.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}