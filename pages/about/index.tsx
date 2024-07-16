import Head from 'next/head'
import About from '../../components/About/About'

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About Us | Eurosia Group</title>
        <meta name="description" content="Learn more about Eurosia Group, the largest B2B Brand tech company in various sectors including Real Estate, Technology, Restaurants, and more." />
        <link rel="icon" href="/fav.png" />
      </Head>

      <main>
        <About />
      </main>
    </div>
  )
}
