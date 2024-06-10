import React from 'react';
import Image from 'next/image';

const Index: React.FC = () => {
  return (
    <div className="text-black font-Poppins container mx-auto px-6 py-16 bg-white">

      {/* Hero Section */}
      <section className="text-center py-10 mb-16 bg-black bg-opacity-50 rounded-lg shadow-lg">
        <h1 className="text-4xl lg:text-6xl font-bold my-8 bg-clip-text text-transparent bg-gradient-to-r from-[#eaaaff] via-[#b5acff] to-[#b5acff]">
          About
        </h1>
        <p className="text-lg lg:text-xl text-gray-400">
          Eurosia Group is the largest B2B Brand tech company providing brand partners with a single dashboard to search, compare & Real Estate, Technology, Restaurant, Hotels, Travels Agency, food, home appliances Newspaper and Agro bees.
        </p>
      </section>

      {/* History Section */}
      <section className="mb-12 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:basis-1/2 mb-8 lg:mb-0 lg:pr-8">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#eaaaff] via-[#b5acff] to-[#b5acff]">
            History
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 mb-4">
            Eurosia Group is the largest B2B Brand tech company providing brand partners with a single dashboard to search, compare & Real Estate, Technology, Restaurant, Hotels, Travels Agency, food, home appliances Newspaper and Agro bees. Eurosia Group Sister concern of Eurosia Holdings Limited is the largest B2B Brand Tech company providing brand partners with a single dashboard to search, compare & Real Estate, Luxury Apartments, commercial flat sale. So no more thinking, I think that it is the turn to fulfill the dream. Eurosia Technologies Limited Sister concern of Eurosia Group. Eurosia Technologies Limited is the largest B2B Brand Tech company providing brand partners with a single dashboard to search, compare & Technologies, software, Advertising Agency, Brand Promotion Creator, Digital Multimedia Agency And IT Training Center. We make sure and we call to again we make a Digital Bangladesh. Eurosia Group sister concern of Eurosia Restaurant Limited. Eurosia Restaurant is born is 19 November. Eurosia Restaurant Limited is the largest B2B Brand Tech company providing brand partners with a single dashboard to search, compare & Restaurant, Luxury Hotels, food, and party center. Welcome to our Eurosia Restaurant. Our Best Achievement, Healthy food, Stylish Interior, Good Environment, Large Menu, Good Wine list, Big Dining and Creative Cuisine. Indian cuisine, Chinese and Creative unique food.
          </p>
        </div>
        <div className="lg:basis-1/2">
          <Image src="/images/About/3d6.png" alt="Our Logo" width={500} height={500} className="mx-auto mb-8 about_image shadow-lg rounded-lg" />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#eaaaff] via-[#b5acff] to-[#b5acff]">
          Who we are!
        </h2>
        <p className="text-lg lg:text-xl text-gray-400">
          A powerful portfolio of the country’s most distinctive and selective developments, with an excellent reputation in the Real Estate market, and enviable relationships that give our clients exclusive access to the ultimate in luxury apartments and exquisite commercial spaces, all in prime locations of Dhaka city. Our promise remains to develop a portfolio of luxury spaces and offer investors as well as buyers an unparalleled quality of service, inimitable by competitors. It is the commitment to both impeccably high standards and attention to detail that drive us to our success. Besides building beyond expectation, Eurosia Group moreover sets standards for itself, for you and for others, which is why we proudly declare our driving philosophy to be "Setting Standards".
        </p>
      </section>

      {/* Our Logo Section */}
      <section className="mb-12 text-center">
        <Image src="/images/Logo/tm-logo.png" alt="Our Logo" width={500} height={500} className="mx-auto mb-8 shadow-lg rounded-lg" />
        <h2 className="text-3xl lg:text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#eaaaff] via-[#b5acff] to-[#b5acff]">
          Our Logo
        </h2>
        <p className="text-lg lg:text-xl text-gray-400">
          The concept for our logo is derived from the shape of human hands, the shape they make when held with the palms facing each other. Usually, when we hold an object in our palms, it is something we care about, something valuable to us. Like when a blow of air attempts to put off a candle that gives us light, we protect it with our palms. When a tiny bird falls from its nest, we hold it up and protect it in our palms. When a sculptor sculpts a masterpiece, he shapes it using his fingers and palms. Hence, our logo depicts the amount of care and emotion we put into each and every creation. Moreover, it is a symbol that inspires us on a daily basis to be caring towards our clients and protect their interests by providing an uncompromising level of service and superior products.
        </p>
      </section>

      {/* Our Colors Section */}
      <section className="mb-12">
  <h2 className="text-3xl lg:text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#eaaaff] via-[#b5acff] to-[#b5acff]">
    Our Colors
  </h2>
  <div className="flex flex-wrap justify-center items-center">
    <div className="text-center  bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full lg:w-1/3">
      <h3 className="text-2xl font-bold">Red</h3>
      <p className="text-lg lg:text-xl text-gray-400">
        The Red represents Eurosia Brand color. It is associated with energy, war, strength, power, determination as well as passion, desire, and also love our passion. Red is a very emotionally intense color.
      </p>
    </div>
    <div className="text-center bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full lg:w-1/3 flex justify-center">
      <Image src="/images/logo/tm-logo.png" alt="Our Logo" width={550} height={500} className="shadow-lg rounded-lg " />
    </div>
    <div className="text-center bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full lg:w-2/3">
      <div className="w-24 h-24 bg-blue-900 mx-auto mb-2 rounded-full"></div>
      <h3 className="text-2xl font-bold">Dark Blue</h3>
      <p className="text-lg lg:text-xl text-gray-400">
        Dark Blue color is our premium brand color. It is often associated with depth and stability. It symbolizes trust, loyalty, wisdom, confidence, intelligence, faith, truth, and heaven. Dark blue is associated with depth, expertise, and stability.
      </p>
    </div>
  </div>
</section>

    </div>
  );
};

export default Index;
