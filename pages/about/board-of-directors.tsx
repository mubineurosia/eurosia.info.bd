import Head from 'next/head'
import BordOfDriector from '../../components/BordOfDriector/BordOfDriector'

export default function BordTeam() {
  return (
    <div>
      <Head>
        <title>Bord Of Driector | Eurosia Group</title>
        <link rel="icon" href="/fav.png" />
      </Head>

      <main className="bg-black text-white py-16">
        <BordOfDriector />
      
      </main>
    </div>
  )
}

