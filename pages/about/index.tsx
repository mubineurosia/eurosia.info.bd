import Head from 'next/head'
import About from '../../components/About/About'

export default function Index() {
  return (
    <div>
      <Head>
        <title>About Us | Eurosia Group</title>
        <link rel="icon" href="/fav.png" />
      </Head>

      <main className=" ">
        <About />
      
      </main>
    </div>
  )
}