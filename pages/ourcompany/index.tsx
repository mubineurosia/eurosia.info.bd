import Head from 'next/head'
import OurCompanys from '../../components/OurCompany/OurCompany'

export default function OurCompany() {
  return (
    <div>
      <Head>
        <title>Our Company | Eurosia Group</title>
        <link rel="icon" href="/fav.png" />
      </Head>

      <main className="bg-black text-white py-16">
        <OurCompanys />
      
      </main>
    </div>
  )
}
