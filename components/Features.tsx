import { useContext, useRef } from 'react'
import { ScrollContext } from '../utils/scroll-observer'
import Navbar from './Navbar';
const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress < 1) return 1
  return 0.2
}

const Features = () => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  const numOfPages = 5
  let progress = 0

  const { current: elContainer } = refContainer

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenHeight = window.innerHeight
    const screenHalfHeight = screenHeight / 2
    const percentY =
      Math.min(
        clientHeight + screenHalfHeight,
        Math.max(-screenHeight, scrollY - offsetTop) + screenHalfHeight
      ) / clientHeight
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
  }

  return (
    <>
    <section className="w-full bg-white">
      <div
        ref={refContainer}
        className="text-4xl lg:text-6xl px-5 font-semibold leading-none tracking-tight py-20 lg:py-40 mx-auto max-w-3xl "
      >
        <span
          className={`transition-opacity ease-in-out duration-200 after:content-['_']`}
          style={{ opacity: opacityForBlock(progress, 0) }}
        >
          Skilled Technologist.
        </span>
        <span
          className={`transition-opacity ease-in-out duration-200 after:content-['_']`}
          style={{ opacity: opacityForBlock(progress, 1) }}
        >
          Innovative Builder.
        </span>
        <span
          className={`transition-opacity ease-in-out duration-200 after:content-['_']`}
          style={{ opacity: opacityForBlock(progress, 2) }}
        >
          Analytically Minded. 
        </span>
        <span
          className={`transition-opacity ease-in-out duration-200 after:content-['_']`}
          style={{ opacity: opacityForBlock(progress, 3) }}
        >
          Interpersonally Adept.
        </span>
        <span
          className={`transition-opacity ease-in-out duration-200 after:content-['_']`}
          style={{ opacity: opacityForBlock(progress, 4) }}
        >
          Committed to Excellence.
        </span>
      </div>
    </section>
    </>
  )
}

export default Features
