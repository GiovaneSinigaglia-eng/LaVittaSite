"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

interface ContentCarouselProps {
  phrases: string[]
  interval?: number // Intervalo em milissegundos
}

export function ContentCarousel({ phrases, interval = 3000 }: ContentCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length)
    }, interval)

    return () => clearInterval(timer)
  }, [phrases.length, interval])

  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1.0 }}
        className="absolute px-4 text-center text-xl font-semibold md:text-2xl lg:text-3xl"
      >
        {phrases[currentIndex]}
      </motion.p>
    </AnimatePresence>
  )
}
