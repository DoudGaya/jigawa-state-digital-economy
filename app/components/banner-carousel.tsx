'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CarouselItem {
  id: number
  heading: string
  subheading: string
  imageUrl: string
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    heading: "Welcome to Our World",
    subheading: "Discover amazing experiences",
    imageUrl: "/placeholder.svg?height=1080&width=1920"
  },
  {
    id: 2,
    heading: "Innovate with Us",
    subheading: "Pushing boundaries, creating futures",
    imageUrl: "/placeholder.svg?height=1080&width=1920"
  },
  {
    id: 3,
    heading: "Embrace the Journey",
    subheading: "Every step counts towards success",
    imageUrl: "/placeholder.svg?height=1080&width=1920"
  }
]

export default function AnimatedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        {carouselItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-50">
                <div className="text-center">
                  <motion.h1
                    className="mb-4 text-4xl font-bold text-white md:text-6xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    {item.heading}
                  </motion.h1>
                  <motion.p
                    className="text-xl text-white md:text-2xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    {item.subheading}
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white/10 text-white hover:bg-white/20"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 transform bg-white/10 text-white hover:bg-white/20"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </Button>
    </div>
  )
}