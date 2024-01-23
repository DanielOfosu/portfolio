import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Journey from '../components/Journey'
import Hero from '../components/Hero'
import Tenets from '../components/Tenets'
import Blog from '../components/Blog'
import FeatureCard from '../components/FeatureCard'
import CircleHeatIcon from '../public/circle-heat.svg'; // Import the SVG as a React component

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Daniel Ofosu</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <div id="journey">
        <Journey />
      </div>
      <div id="tenets">
        <Tenets />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <section className="p-20 lg:p-40 text-center text-sm text-gray-400 border-t border-gray-100 w-full bg-white">
        <div className="mt-20 lg:mt-40">
          Designed and built by{' '}
          <a href="https://www.linkedin.com/in/danielofosu/">
            Daniel Ofosu
          </a>{' '}
        </div>
      </section>
    </div>
  )
}

export default Home
