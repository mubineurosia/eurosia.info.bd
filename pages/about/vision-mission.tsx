
import VisionMission from '@/components/VisionMisson/VisionMisson'
import Head from 'next/head'



export default function VisionMissionPage() {
  return (
    <div>
      <Head>
        <title>Vision and Mission | Eurosia Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black text-white py-16">
        <VisionMission />
      
      </main>
    </div>
  )
}
