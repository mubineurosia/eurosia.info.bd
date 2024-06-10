import Head from 'next/head'
import TeamSection from '../../components/Team/index'


export default function Contact() {
  return (
    <div>
      <Head>
        <title>Management-Team | Eurosia Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black text-white py-16">
        <TeamSection />
      
      </main>
    </div>
  )
}
