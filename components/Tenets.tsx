import { useContext, useRef } from 'react'
import { ScrollContext } from '../utils/scroll-observer'
import Navbar from './Navbar';
import FeatureCard from '../components/FeatureCard'
const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress < 1) return 1
  return 0.2
}

const Tenets = () => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  const numOfPages = 4
  let progress = 0

  const features = [
    {
      iconSrc: "/rocket.svg",
      title: "Pursue Meaning",
      description: "Engage in activities with purpose."
    },
    {
      iconSrc: "/circle-heat.svg",
      title: "Hold High Conviction",
      description: "Have high conviction, but be open to new ideas."
    },
    {
      iconSrc: "/fire.svg",
      title: "Be Relentless",
      description: "Push forward with determination to overcome challenges."
    },
    {
      iconSrc: "/hammer.svg",
      title: "Value Discipline",
      description: "Stay disciplined to ensure great results."
    },
    {
      iconSrc: "/sphere.svg",
      title: "View Objectively",
      description: "Most adversities are simply a result of chance."
    }
  ];


  return (
    <>
    <section className={`w-full bg-gray-900 bg-opacity-100`}>
    <div className="text-4xl lg:text-7xl px-5 font-semibold text-white leading-none tracking-tight py-5 lg:py-40 mx-auto max-w-3xl">
    Guided by tenets that enable action, insightful dialogue, and pathways to growth.
        </div>
      <div
        ref={refContainer}
        className="h-full bg-black bg-opacity-0 backdrop-filter backdrop-blur-lg rounded-lg w-full max-w-7xl mx-auto p-3 md:p-6"
        style={{
          borderBottom: '1px solid #ccc',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              iconSrc={feature.iconSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Tenets
