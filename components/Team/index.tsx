// components/TeamSection.js

import Image from 'next/image';

const teamMembers = [
  {
    name: "Khondoker Jalil",
    role: "Chief Advisor",
    imageUrl: "/images/Managementteam/jalil.png",
  },
  {
    name: "Imrul Qais Chowdhury",
    role: "Executive Director",
    imageUrl: "/images/Managementteam/imrul.png",
  },
  {
    name: "Tarikul Islam Mubin",
    role: "Senior Executive Officer",
    office: "Eurosia Technologies Limited",
    imageUrl: "/images/Managementteam/mubin.jpg",
  },
  {
    name: "Badsha Alom",
    role: "Financial Officer",
    office: "",
    imageUrl: "/images/Managementteam/badsha.png",
  },
  {
    name: "Eng. Mizanur Rahman",
    role: "B.Sc. in Civil Engineer",
    office: "",
    imageUrl: "/images/Managementteam/mizan.jpg",
  },
  {
    name: "Moinul Islam",
    role: "Director Of Eurosia Restaurant",
    office: "",
    imageUrl: "/images/Managementteam/moinul.png",
  },
  {
    name: 'Eng. Mehadi Hasan',
    role: 'BSC. in CSE Eurosia Technologies Limited',
    imageUrl: '/images/Managementteam/mehadi.jpg',
  },
  
  {
    name: 'Eng. Kazi Ramjan Ali',
    role: 'BSC. in CSE Eurosia Technologies Limited',
    imageUrl: '/images/Managementteam/Ramjan.jpg',
  },
  {
    name: 'Md. Raziul Islam Ashiki',
    role: 'Motion Graphics Designer Eurosia Technologies Limited',
    imageUrl: '/images/Managementteam/Ashik.jpg',
  },
  {
    name: 'Maksudul Islam',
    role: 'SEO Executive Eurosia Technologies Limited',
    imageUrl: '/images/Managementteam/Maksudul.jpg',
  },
  
  {
    name: 'Khadiza Akter',
    role: 'Graphic Designer Eurosia Technologies Limited',
    imageUrl: '/images/Managementteam/Khadiza.jpg',
  },
  {
    name: 'Md. Abir Hossain',
    role: 'Sales Executive Eurosia Technologies Limited',
    imageUrl: '/images/Managementteam/Abir.jpg',
  },
];

const TeamSection = () => {
  return (
    <section className="mb-12">

         {/* Hero Section */}
         <section className="text-center container py-10 mb-16 bg-black bg-opacity-50 rounded-lg shadow-lg mx-auto px-6 py-16">
        <h1 className="text-4xl lg:text-6xl font-bold my-8 bg-clip-text text-transparent bg-gradient-to-r from-[#eaaaff] via-[#b5acff] to-[#b5acff]">
        Our Team
        </h1>
    </section>
      <div className="flex flex-wrap justify-center container mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="profile-card m-4"
            style={{ backgroundImage: `url(${member.imageUrl})` }}
          >
            <div className="info">
              <h2 className="text-2xl font-bold">{member.name}</h2>
              <p className="text-lg">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
