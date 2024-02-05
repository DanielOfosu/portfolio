import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollObserver from '../utils/scroll-observer'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <div className={inter.className} style={{ scrollBehavior: 'smooth' }}>
        <Component {...pageProps} />
      </div>
    </ScrollObserver>
  )
}

export default MyApp
