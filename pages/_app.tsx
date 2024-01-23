import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollObserver from '../utils/scroll-observer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <div style={{ scrollBehavior: 'smooth' }}>
        <Component {...pageProps} />
      </div>
    </ScrollObserver>
  )
}

export default MyApp
