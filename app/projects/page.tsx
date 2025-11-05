/* eslint-disable jsx-a11y/role-supports-aria-props */
'use client'
import { Footer } from '@/components/layout/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { allProjects } from '@/lib/data'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import DotGrid from '@/components/ui/dot-grid'
import { getIcon } from '@/components/sections/technologies'
import { LanguageSwitcher } from '@/components/ui/language-switcher'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black relative">
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={10}
          gap={15}
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-5 lg:py-10 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Projects Section */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-normal text-center mb-12 text-black dark:text-white"
          >
            All Projects
          </motion.h1>
            
            <div className="flex flex-col gap-6 sm:gap-8">
              {allProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative flex h-[250px] sm:h-[300px] md:h-[400px] cursor-pointer flex-col items-center justify-center gap-2 overflow-hidden bg-accent-foreground/10 p-1.5 sm:p-2 outline outline-accent/90 dark:bg-transparent" 
                  style={{borderRadius: '18px'}}
                >
                  <div className="absolute inset-x-0 top-0 z-[10] mb-[-1px] h-[1px] bg-[linear-gradient(to_right,#0000_20%,#f2fff4_50%,#0000_80%)]"></div>
                  <div className="relative size-full overflow-hidden rounded-xl border border-border">
                    <div className="absolute inset-x-0 top-0 z-[10] mb-[-1px] h-[1px] bg-[linear-gradient(to_right,#0000_20%,#f2fff4_50%,#0000_80%)]"></div>
                    <div className="absolute inset-0 z-0 opacity-100 transition-all duration-500 group-hover:brightness-[0.8]" style={{background: `radial-gradient(circle at 50% 0%, ${index === 0 ? '#51fbfb' : index === 1 ? '#14f195' : '#64e'}, rgb(13, 1, 60))`}}></div>
                    <div className="relative flex flex-col gap-2 sm:gap-4 px-4 sm:px-6 pb-2 pt-4 sm:pt-6 md:gap-2 md:px-8 md:pb-4 md:pt-8">
                      <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-4">
                        <p className="font-instrument font-bold italic text-xl sm:text-2xl md:text-3xl text-white drop-shadow-[rgba(255,255,255,0.2)_0px_-2px_10px]">{project.title}</p>
                        <div className="flex *:shadow-2xl">
                          {project.tech.slice(0, 4).map((tech, i) => (
                            <div key={i} className="-ml-1 sm:-ml-2 size-6 sm:size-8 rotate-3 transition-all group-hover:mx-1 sm:group-hover:mx-2 group-hover:ml-0 group-hover:rotate-0 bg-white/20 rounded-full flex items-center justify-center">
                              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-4 sm:size-5 text-white">
                                <path fill="currentColor" d={getIcon(tech)}></path>
                              </svg>
                            </div>
                          ))}
                        </div>
                      </div>
                      <p className="text-center text-xs sm:text-sm font-medium text-white md:text-justify">{project.description}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[80%] h-24 sm:h-32 bg-white/10 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs sm:text-sm">Project Preview</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-normal text-lg"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </motion.div>
        <Footer />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 transform z-50">
        <div className="flex w-full gap-0.5 sm:gap-1 rounded-lg sm:rounded-xl bg-muted/30 p-0.5 sm:p-1 backdrop-blur dark:shadow-[rgba(111,_109,_120,_0.1)_0px_0px_30px,_rgba(60,_57,_63,_0.4)_0px_0px_0px_1px]">
          <Link data-id="Home" className="relative inline-flex" aria-selected="false" data-checked="false" href="/">
            <span className="z-10">
              <button type="button" className="inline-flex size-8 sm:size-9 items-center justify-center text-foreground transition-colors duration-100 focus-visible:outline-2" data-state="closed">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house h-4 w-4 sm:h-5 sm:w-5">
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
              </button>
            </span>
          </Link>
          <a data-id="Projects" className="relative inline-flex" aria-selected="true" data-checked="true" href="/projects">
            <div className="absolute inset-0 rounded-lg bg-foreground/10 dark:bg-background" style={{opacity: 1}}></div>
            <span className="z-10">
              <button type="button" className="inline-flex size-8 sm:size-9 items-center justify-center text-foreground transition-colors duration-100 focus-visible:outline-2" data-state="closed">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-projector h-4 w-4 sm:h-5 sm:w-5">
                  <path d="M5 7 3 5"></path>
                  <path d="M9 6V3"></path>
                  <path d="m13 7 2-2"></path>
                  <circle cx="9" cy="13" r="3"></circle>
                  <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"></path>
                  <path d="M16 16h2"></path>
                </svg>
              </button>
            </span>
          </a>
          <div className="relative cursor-pointer select-none inline-flex size-8 sm:size-9 items-center justify-center text-foreground transition-colors duration-100 focus-visible:outline-2">
            <ThemeToggle />
          </div>
          <div className="relative cursor-pointer select-none inline-flex size-8 sm:size-9 items-center justify-center text-foreground transition-colors duration-100 focus-visible:outline-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </main>
  )
}