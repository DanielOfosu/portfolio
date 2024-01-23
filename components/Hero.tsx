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
  return (
    <div
      ref={refContainer}
      className="min-h-screen w-full sticky -z-10 top-0 left-0"
      style={{ transform: `translateY(-${progress * 20}vh)` }}
    >
      <Image
        width={2400}
        height={800} // Adjusted height to be 50% shorter
        src="/zoltan-tasi-Kl-NNqvHCgw-unsplash.jpg"
        alt="hero image"
        className="object-cover absolute w-full h-full"
        style={{ filter: 'brightness(50%)' }} // Add filter to make the image darker
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold flex flex-col items-center justify-center">
        <img
          src="/memoji.png"
          alt="memoji"
          className="w-120 h-120 mb-2"
          style={{
            background: 'none',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add box shadow to memoji
          }}
        />
        <div className="flex flex-col items-center justify-center">
          <span
            className="ml-2 text-7xl font-sf-regular"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', // Add text shadow to Daniel Ofosu text
            }}
          >
            Daniel Ofosu
          </span>
        </div>
        <div className="h-16" /> 
        
        <div className="flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-12 h-12 animate-bounce"
            style={{ zIndex: -1 }} // Set the z-index to -1 to bring the arrow underneath
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Hero
