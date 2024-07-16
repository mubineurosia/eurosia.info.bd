import Head from 'next/head'
import TeamSection from '../../components/Team'

export default function ManagementTeamPage() {
  return (
    <div>
      <Head>
        <title>Management Team | Eurosia Group</title>
        <meta name="description" content="Meet the management team at Eurosia Group, dedicated to providing exceptional service and innovation." />
        <link rel="icon" href="/fav.png" />
      </Head>

      <main className="bg-black text-white py-16">
        <TeamSection />
      </main>
    </div>
  )
}