'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from '@/lib/theme-context'

export default function Loading() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Image
          src={theme === 'light' ? '/logos/logoBlackTextNoBg.png' : '/logos/logoWhiteTextNoBg.png'}
          alt="FADL Logo"
          width={64}
          height={64}
          priority
        />
      </motion.div>
    </div>
  )
}
