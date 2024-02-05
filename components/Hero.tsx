import Image from 'next/image'
import { useContext, useRef } from 'react'
import { ScrollContext } from '../utils/scroll-observer'

const Hero = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)

  let progress = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }
  
  // Calculate opacity based on scroll progress. Elements fully visible initially and disappear as the user scrolls down one page height
  const opacity = 1 - progress;

  return (
    <div
      ref={refContainer}
      className="min-h-screen w-full sticky -z-10 top-0 left-0"
      style={{ transform: `translateY(-${progress * 20}vh)` }}
    >
      <Image
        width={2400}
        height={800}
        src="/mads-schmidt-rasmussen-6YmzwamGzCg-unsplash.jpg"
        alt="hero image"
        className="object-cover absolute w-full h-full"
        style={{ filter: 'brightness(100%)' }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold flex flex-col items-center justify-center" style={{ opacity }}>
        <img
          src="/memoji.png"
          alt="memoji"
          className="w-120 h-120 mb-2"
          style={{
            background: 'none',
            boxShadow: 'none', // Remove the box shadow
            // Apply dynamic opacity based on scroll progress
            opacity
          }}
        />
        <div className="flex flex-col items-center justify-center">
          <span
            className="ml-2 text-7xl"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', // Add text shadow to Daniel Ofosu text
              background: 'none', // Remove the background
              // Apply dynamic opacity based on scroll progress
              opacity
            }}
          >
            Daniel Ofosu
          </span>
        </div>
      </div>
    </div>
  )
}

export default Hero
