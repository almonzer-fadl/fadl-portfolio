"use client";

/* eslint-disable jsx-a11y/role-supports-aria-props */
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Technologies } from '@/components/sections/technologies'
import { About } from '@/components/sections/about'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { LanguageSwitcher } from '@/components/ui/language-switcher';


import Squares from '@/components/ui/squares';


export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black relative">
      <div className="relative fade-out-bottom">
        <div className="absolute inset-0 z-0">
          <Squares 
            speed={0.5} 
            squareSize={100}
            direction='down'
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-5 lg:py-10 relative z-20">
          <div className="flex h-full flex-col gap-12 sm:gap-16 py-8 sm:py-12">
            <div id="home">
              <Hero />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="technologies">
              <Technologies />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-5 lg:py-10 relative z-20">
        <div className="flex h-full flex-col gap-12 sm:gap-16 py-8 sm:py-12">
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
        </div>
        <Footer />
      </div>
      
      {/* Bottom Navigation */}
      <div className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 transform z-50">
        <div className="flex w-full gap-0.5 sm:gap-1 rounded-lg sm:rounded-xl bg-muted/30 p-0.5 sm:p-1 backdrop-blur dark:shadow-[rgba(111,_109,_120,_0.1)_0px_0px_30px,_rgba(60,_57,_63,_0.4)_0px_0px_0px_1px]">
          <a data-id="Home" className="relative inline-flex" aria-selected="true" data-checked="true" href="#home">
            <div className="absolute inset-0 rounded-lg bg-foreground/10 dark:bg-background" style={{opacity: 1}}></div>
            <span className="z-10">
              <button type="button" className="inline-flex size-8 sm:size-9 items-center justify-center text-foreground transition-colors duration-100 focus-visible:outline-2" data-state="closed">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house h-4 w-4 sm:h-5 sm:w-5">
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
              </button>
            </span>
          </a>
          <a data-id="Projects" className="relative inline-flex" aria-selected="false" data-checked="false" href="/projects">
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
          <LanguageSwitcher />
        </div>
      </div>
    </main>
  )
}
