import '@/styles/globals.css';
import 'react-modal-video/scss/modal-video.scss';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const Provider = dynamic(() => import('@/components/Provider'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
