import { useContext, useRef } from 'react'
import { ScrollContext } from '../utils/scroll-observer'
import Navbar from './Navbar';
const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress < 1) return 1
  return 0.2
}

const Journey = () => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  const numOfPages = 4
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
      <section className={`w-full`} style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.75), #151515, #121212)', backgroundSize: 'cover', backgroundPosition: 'center', borderBottom: '1px solid black'}}>
        <div
          ref={refContainer}
          className="h-full bg-black bg-opacity-0 backdrop-filter backdrop-blur-lg rounded-lg w-full max-w-7xl mx-auto p-3 md:p-6 mb-10"
        >
          <div className="text-4xl lg:text-7xl px-5 font-semibold text-white leading-none tracking-tight py-5 lg:py-40 mx-auto max-w-3xl">
            Experienced in tech strategy, data engineering and machine learning.
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 flex flex-col text-black border border-gray-600/30 rounded-3xl p-5 text-center items-center justify-center place-items-center place-content-center [text-wrap:balance] backdrop-filter backdrop-blur-lg bg-opacity-80 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,128,0,0.05)_0%,rgba(204,255,204,0.0)_100%)] shadow-lg">
              <img src="/Boston_Consulting_Group_2020_logo.svg.png" alt="BCG Logo" className="h-32 w-42 mb-7" />
              <p className="text-2xl/tight font-light  text-[#E0E0E0] mb-7 mt-1 mr-10 ml-10">
                Accelerated major Finnish energy projects. Designed significant CRM architecture changes.
              </p>
            </div>
            <div className="col-span-1 flex flex-col text-white  border border-gray-600/30 rounded-3xl p-5  text-center items-center justify-center place-items-center place-content-center [text-wrap:balance] backdrop-filter backdrop-blur-lg bg-opacity-100 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,255,0.05)_0%,rgba(204,204,255,0.0)_100%)]
 shadow-lg">
              <img src="/2560px-Neste_logo.svg.png" alt="Neste Logo" className="h-22 w-25 mb-7 mt-20" />
              <p className="text-2xl/tight font-light  text-[#E0E0E0] mb-7 mt-1 mr-10 ml-10">
                Developed Machine Learning Models and Pipelines.
              </p>
            </div>
            <div className="col-span-1 flex flex-col text-white  border border-gray-600/30 rounded-3xl p-5  text-center items-center justify-center place-items-center place-content-center [text-wrap:balance] backdrop-filter backdrop-blur-lg bg-opacity-100 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(128,128,128,0.05)_0%,rgba(245,245,245,0.0)_100%)]

 shadow-lg">
              <img src="/Aalto_University_logo.svg.png" alt="Aalto University Logo" className="h-32 w-42 mb-7 mt-20" />
              <p className="text-2xl/tight font-light  text-[#E0E0E0] mb-7 mt-1 mr-10 ml-10">
                Degrees in Computer Science & Management. Studying Degree #3 in Computational Methods.
              </p>
            </div>
            <div className="col-span-2 flex flex-col text-white  border border-gray-600/30 rounded-3xl p-5  text-center items-center justify-center place-items-center place-content-center [text-wrap:balance] backdrop-filter backdrop-blur-lg bg-opacity-100 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(255,165,0,0.05)_0%,rgba(255,255,204,0.0)_100%)]
 shadow-lg">
              <img src="/Amazon_logo.svg.png" alt="Amazon Logo" className="h-32 w-42 mb-7 mt-20" />
              <p className="text-2xl/tight font-light  text-[#E0E0E0] mb-7 mt-1 mr-10 ml-10">
                Programming a global petabyte-scale pipeline in Scala. Key role in full release of given pipeline.
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Journey
