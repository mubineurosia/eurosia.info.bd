// pages/vision-mission.js
import Head from 'next/head'

const VisionMission = () => {
  return (
    <div>
      <Head>
        <title>Vision and Mission | Eurosia Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-center text-white mb-12">About</h1>
          
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="custom_border p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold mb-4">Vision</h2>
              <p className="text-lg leading-7 mb-8">
                Eurosia Group is the largest B2B Brand tech company providing brand partners with a single dashboard to search, compare to Real Estate, Technology, Restaurant, Hotels, Travels Agency, food, home appliances Newspaper and Agro Firming. We aim to build sustainability for our customers. So no more thinking, I think that it is the turn to fulfill the dream...
              </p>
            </div>
            <div className="custom_border p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold mb-4">Mission</h2>
              <p className="text-lg leading-7">
                Eurosia Group is the largest B2B Brand tech company providing brand partners with a single dashboard to search, compare to Real Estate, Technology, Restaurant, Hotels, Travels Agency, food, home appliances Newspaper and Agro Firming. We aim to build sustainability for our customers. So no more thinking, I think that it is the turn to fulfill the dream...
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default VisionMission
