'use client'
import { motion } from 'framer-motion'
import { Mail, MapPin, Download, Github, Linkedin, Twitter, Send } from 'lucide-react'

export function Contact() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-normal text-center mb-12 text-black dark:text-white"
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-normal text-black dark:text-white mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I&apos;m always interested in new opportunities and collaborations. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white dark:text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-base font-normal text-black dark:text-white">almonzer@almonzerfadl.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white dark:text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-base font-normal text-black dark:text-white">Cairo, Egypt</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-3">
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 p-4 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-normal"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
              
              <a
                href="mailto:almonzer@almonzerfadl.com"
                className="flex items-center justify-center gap-2 p-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-normal"
              >
                <Send className="w-4 h-4" />
                Email
              </a>
            </div>
            
            <div>
              <h4 className="text-lg font-normal text-black dark:text-white mb-4">Follow Me</h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/almonzer-fadl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
                >
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/almonzer-fadl-55648238b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" />
                </a>
                
                <a
                  href="https://twitter.com/almonzerfadl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
                >
                  <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
