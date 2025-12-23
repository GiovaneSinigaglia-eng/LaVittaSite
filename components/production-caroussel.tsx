import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

export interface ProductionSlide {
  video: string
  bgColor: string
}

interface ProductionCarouselProps {
  slides: ProductionSlide[]
  interval?: number
}

export function ProductionCarousel({ slides, interval = 10000 }: ProductionCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [slides.length, interval])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const currentSlide = slides[currentIndex]

  return (
    <div className="relative mx-auto h-[500px] w-full max-w-4xl overflow-hidden rounded-xl shadow-lg md:h-[600px]">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 flex flex-col items-center justify-center md:flex-row ${currentSlide.bgColor}`}
        >
          <div className="relative h-full w-full">
            <video className="h-full w-full object-center" autoPlay muted loop>
              <source src={currentSlide.video} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <Button
        variant={"ghost"}
        size="icon"
        className="absolute top-1/2 left-4 z-20 -translate-y-1/2 rounded-full bg-background/50 hover:bg-background/70"
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant={"ghost"}
        size="icon"
        className="absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded-full bg-background/50 hover:bg-background/70"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            } transition-colors`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
