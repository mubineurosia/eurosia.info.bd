// components/Team.js
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Rita Akter',
    position: 'Chairman',
    imageUrl: '/images/BordTeam/mam.jpg',
  },
  {
    name: 'Mohi Uddin Liton',
    position: 'Managing Director of Eurosia Group',
    imageUrl: '/images/BordTeam/sir.jpg',
  },
  {
    name: 'Nasir Uddin Shipon',
    position: 'Deputy Managing Director, UK',
    imageUrl: '/images/BordTeam/shipon.jpg',
  },
  {
    name: 'Md Shoukot Alam Shopon',
    position: 'Managing Director (ADV)',
    imageUrl: '/images/BordTeam/shoukot.png',
  },
  {
    name: 'Sujon Uddin',
    position: 'Director(Business Management), UK',
    imageUrl: '/images/BordTeam/sujon.png',
  },
  
]

const Team = () => {
  return (
    <div className="bg-black text-white py-12 min-h-screen">
      <h2 className="text-5xl font-bold text-center my-20 mb-10">Board Of Directors </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="text-center custom_border py-5">
            <div className="relative w-40 h-40 mx-auto mb-4">
              <Image 
                src={member.imageUrl}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-400">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
