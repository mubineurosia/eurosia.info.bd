import React from 'react';
import Image from 'next/image';

const Index: React.FC = () => {
  return (
    <div className="text-white  w-screen  font-Poppins mx-auto px-6 py-16">
      
      {/* Hero Section */}
      <section className="text-center container py-10 mb-16 bg-black bg-opacity-50 rounded-lg shadow-lg mx-auto px-6 py-16">
        <h1 className="text-4xl lg:text-6xl font-bold my-8 bg-clip-text text-transparent bg-gradient-to-r from-[#eaaaff] via-[#b5acff] to-[#b5acff]">
          About
        </h1>
        <p className="text-lg lg:text-xl text-gray-400">
          Eurosia Group is the largest B2B Brand tech company providing brand partners with a single dashboard to search, compare & Real Estate, Technology, Restaurant, Hotels, Travels Agency, food, home appliances Newspaper and Agro bees.
        </p>
      </section>

      {/* History Section */}
      <section className="mb-12 flex container flex-col lg:flex-row p-2 items-center lg:items-start border mx-auto px-6 py-16">
        <div className="lg:basis-2/3 mb-8 lg:mb-0 lg:pr-8">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#eaaaff] via-[#b5acff] to-[#b5acff]">
            History
          </h2>
          <p className="text-lg lg:text-xl p-2 border text-gray-400 mb-4">
            Eurosia Group is the largest B2B Brand tech company providing brand partners with a single dashboard to search, compare & Real Estate, Technology, Restaurant, Hotels, Travels Agency, food, home appliances Newspaper and Agro bees. Eurosia Group Sister concern of Eurosia Holdings Limited is the largest B2B Brand Tech company providing brand partners with a single dashboard to search, compare & Real Estate, Luxury Apartments, commercial flat sale. So no more thinking, I think that it is the turn to fulfill the dream. Eurosia Technologies Limited Sister concern of Eurosia Group. Eurosia Technologies Limited is the largest B2B Brand Tech company providing brand partners with a single dashboard to search, compare & Technologies, software, Advertising Agency, Brand Promotion Creator, Digital Multimedia Agency And IT Training Center. We make sure and we call to again we make a Digital Bangladesh. Eurosia Group sister concern of Eurosia Restaurant Limited. Eurosia Restaurant is born is 19 November. Eurosia Restaurant Limited is the largest B2B Brand Tech company providing brand partners with a single dashboard to search, compare & Restaurant, Luxury Hotels, food, and party center. Welcome to our Eurosia Restaurant. Our Best Achievement, Healthy food, Stylish Interior, Good Environment, Large Menu, Good Wine list, Big Dining and Creative Cuisine. Indian cuisine, Chinese and Creative unique food.
          </p>
        </div>
        <div className="lg:basis-1/3">
          <Image src="/images/About/3d6.png" alt="Our Logo" width={500} height={500} className="mx-auto mb-8 about_image shadow-lg rounded-lg" />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="mb-12 container mx-auto px-6 py-16">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#eaaaff] via-[#b5acff] to-[#b5acff]">
          Who we are!
        </h2>
        <p className="text-lg lg:text-xl text-gray-400">
          A powerful portfolio of the country’s most distinctive and selective developments, with an excellent reputation in the Real Estate market, and enviable relationships that give our clients exclusive access to the ultimate in luxury apartments and exquisite commercial spaces, all in prime locations of Dhaka city. Our promise remains to develop a portfolio of luxury spaces and offer investors as well as buyers an unparalleled quality of service, inimitable by competitors. It is the commitment to both impeccably high standards and attention to detail that drive us to our success. Besides building beyond expectation, Eurosia Group moreover sets standards for itself, for you and for others, which is why we proudly declare our driving philosophy to be "Setting Standards".
        </p>
      </section>

      {/* Our Logo Section */}
      <section className="mb-12 container mx-auto px-6 py-16 ">
  <div className="mb-12 flex flex-col lg:flex-row p-2 items-center container our_logo lg:items-start  mx-auto px-6 py-16">
    <div className="lg:basis-1/2 mb-8 lg:mb-0 lg:pr-8">
      <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-center text-white">
        Our Logo
      </h2>
      <p className="text-lg lg:text-xl text-gray-400">
        The concept for our logo is derived from the shape of human hands, the shape they make when held with the palms facing each other. Usually, when we hold an object in our palms, it is something we care about, something valuable to us. Like when a blow of air attempts to put off a candle that gives us light, we protect it with our palms. When a tiny bird falls from its nest, we hold it up and protect it in our palms. When a sculptor sculpts a masterpiece, he shapes it using his fingers and palms. Hence, our logo depicts the amount of care and emotion we put into each and every creation. Moreover, it is a symbol that inspires us on a daily basis to be caring towards our clients and protect their interests by providing an uncompromising level of service and superior products.
      </p>
    </div>
    <div className="lg:basis-1/2 flex  justify-center items-center ">
      <Image src="/images/Logo/tm-logo.png" alt="Our Logo" width={500} height={500} className="p-5 mb-8 shadow-lg rounded-lg  custom_border" />
    </div>
  </div>
</section>

      {/* Our Colors Section */}
      <section id="logo-description" className="relative bg-cover bg-no-repeat " style={{ backgroundImage: "url('/images/stry-bg.jpg')" }}>
        <div className="px-4 relative h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <Image src="/images/logo/tm-logo.png" alt="Eurosia Logo" width={1000} height={400} className="mx-auto" />
          </div>
          <div className="absolute top-[60px] left-[40px] h-[220px] w-[350px]  p-6 rounded-lg ">
            <h2 className="font-philosopher text-2xl relative">
              <span className="text-red">Red</span>
              <span className="border-red-line"></span>
            </h2>
            <p className="font-josefin text-lg font-normal text-[#212529]">
              The Red represents Eurosia Brand color. We are focused on our brand red and provided so it is associated with energy, war, strength, power, determination as well as passion, desire, and also love our passion. Red is a very emotionally intense color.
            </p>
          </div>
          <div className="absolute bottom-[60px] right-[40px] h-[220px] w-[350px] bg-opacity-75 p-6 rounded-lg text-right">
            <h2 className="font-philosopher text-2xl relative">
              <span className="text-[#000033]">Dark Blue</span>
              <span className="border-blue-line"></span>
            </h2>
            <p className="font-josefin text-lg font-normal text-[#212529]">
              Dark Blue color is a premium brand color. It is often associated with depth and stability. It symbolizes trust, loyalty, wisdom, confidence, intelligence, faith, truth, and heaven. Dark blue is associated with depth, expertise, and stability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
