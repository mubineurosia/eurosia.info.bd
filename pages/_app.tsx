import '@/styles/globals.css'
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '../components/Footer/index';
import Provider from '../components/Provider';

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <Provider>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </Provider>
  
  )
}
