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
    <section className={`w-full`} style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95), black)', backgroundSize: 'cover', backgroundPosition: 'center', borderBottom: '1px solid gray'}}>
      <div
        ref={refContainer}
        className="h-full bg-black bg-opacity-0 backdrop-filter backdrop-blur-lg rounded-lg w-full max-w-7xl mx-auto p-3 md:p-6 mb-10"
      >
        <div className="text-4xl lg:text-7xl px-5 font-semibold text-white leading-none tracking-tight py-5 lg:py-40 mx-auto max-w-3xl">
          Experienced in strategy, tech and data science.
        </div>
        <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 flex flex-col text-black border border-gray-600/30 rounded-3xl p-5 text-center items-center justify-center place-items-center place-content-center [text-wrap:balance] backdrop-filter backdrop-blur-lg bg-opacity-80 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.40)_0%,rgba(255,255,255,0.05)_100%)] shadow-lg">
            <img src="/Boston_Consulting_Group_2020_logo.svg.png" alt="BCG Logo" className="h-32 w-42 mb-7" />
            <p className="text-xl/tight font-light font-sfpro text-white mb-7 mt-1 mr-10 ml-10">
              Accelerated the <span style={{ color: 'green', fontWeight: 'bold' }}>completion of a major Finnish energy project</span>, ensuring its timely success.
              <span style={{ color: 'green', fontWeight: 'bold' }}> Developed a Zero Trust-based strategic architecture</span> for a leading Nordic bank, boosting security and efficiency.
              Contributed to the <span style={{ color: 'green', fontWeight: 'bold' }}>retail and hydrogen strategies</span> of a key consumer energy company, fostering innovation.
              Led a <span style={{ color: 'green', fontWeight: 'bold' }}>large-scale tech architecture assessment</span>, providing strategic recommendations for a major project.
            </p>
          </div>
          <div className="col-span-1 flex flex-col text-white  border border-gray-600/30 rounded-3xl p-5  text-center items-center justify-center place-items-center place-content-center [text-wrap:balance] backdrop-filter backdrop-blur-lg bg-opacity-100 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.40)_0%,rgba(255,255,255,0.05)_100%)] shadow-lg">
          <img src="/2560px-Neste_logo.svg.png" alt="Neste Logo" className="h-22 w-25 mb-7 mt-20" />
          <p className="text-xl/tight font-light font-sfpro text-white mb-7 mt-1 mr-10 ml-10">
            Data Scientist at the<span style={{ color: '#0066B2', fontWeight: 'bold' }}> leading Energy firm in Finland. </span> Contributed to building data pipelines and developing ML models.
            Utilized <span style={{ color: '#0066B2', fontWeight: 'bold' }}>SQL, BigQuery, and Python Data Science tools</span> extensively, alongside Google productivity tools.
            Collaborated in a <span style={{ color: '#0066B2', fontWeight: 'bold' }}>self-sufficient Agile team</span>, executing plans and partnering with stakeholders.
          </p>

          </div>
          <div className="col-span-3 flex flex-col text-white  border border-gray-600/30 rounded-3xl p-35  text-center items-center justify-center place-items-center place-content-center [text-wrap:balance] backdrop-filter backdrop-blur-lg bg-opacity-100 bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.40)_0%,rgba(255,255,255,0.05)_100%)] shadow-lg">
          <img src="/Amazon_logo.svg.png" alt="Amazon Logo" className="h-32 w-42 mb-7 mt-20" />
          <p className="text-xl/tight font-light font-sfpro text-white mb-7 mt-1 mr-10 ml-10">
            Spearheaded the <span style={{ color: '#FF9900', fontWeight: 'bold' }}>release of a global application pipeline</span> at Amazon, enhancing transportation planning.
            Achieved <span style={{ color: '#FF9900', fontWeight: 'bold' }}>AWS Solutions Architect Associate Certification</span>, showcasing expertise.
            Mastered <span style={{ color: '#FF9900', fontWeight: 'bold' }}>Scala, Spark, and AWS services</span>, improving data handling and analysis.
          </p>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Journey
