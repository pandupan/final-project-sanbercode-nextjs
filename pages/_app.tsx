import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'


const robtRoboto = Roboto({ subsets: ['latin'], weight: ['500'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={`overflow-x-hidden ${robtRoboto.className}`}>
        <Header/>
          <Component {...pageProps} />
        <Footer/>
      </div>
    </>
  )
}
