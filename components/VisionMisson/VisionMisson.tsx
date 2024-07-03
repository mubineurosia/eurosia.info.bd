
import Head from 'next/head'

const VisionMission = () => {
  return (
    <div>

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center container py-10 mb-16 bg-black bg-opacity-50 rounded-lg shadow-lg mx-auto px-6 py-16">
        <h1 className="text-4xl lg:text-6xl font-bold my-8 bg-clip-text text-transparent bg-gradient-to-r from-[#eaaaff] via-[#b5acff] to-[#b5acff]">
        Vision & Mission
        </h1>
        <p className="text-lg lg:text-xl text-gray-400">
          Eurosia Group is the largest B2B Brand tech company providing brand partners with a single dashboard to search, compare & Real Estate, Technology, Restaurant, Hotels, Travels Agency, food, home appliances Newspaper and Agro bees.
        </p>
      </section>
      {/* History Section */}
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
    </div>
 
  )
}

export default VisionMission
