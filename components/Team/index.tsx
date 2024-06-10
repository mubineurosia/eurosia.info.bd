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
];

const TeamSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl lg:text-4xl font-semibold my-10 mb-8 text-center">
        Our Team
      </h2>
      <div className="flex flex-wrap justify-center">
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
