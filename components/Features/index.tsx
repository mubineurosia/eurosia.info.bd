import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface FeaturesData {
  imgSrc: string;
  heading: string;
  subheading: string;
  price: string;
}

const featuresData: FeaturesData[] = [
  {
    imgSrc: '/images/Features/featureOne.svg',
    heading: 'School Management',
    price: '৳60000.00',
    subheading: 'Complete School Website Complete School Website',
  },
  {
    imgSrc: '/images/Features/featureTwo.svg',
    heading: 'Free to use',
    price: '৳25000.00',
    subheading: 'Top notch crypto portfolio tracking at no cost',
  },
  {
    imgSrc: '/images/Features/featureThree.svg',
    heading: 'Real-time price data',
    price: '৳25000.00',
    subheading: 'Updating 24/7 using price data from the biggest exchanges',
  },
  {
    imgSrc: '/images/Features/featureThree.svg',
    heading: 'Real-time price data',
    price: '৳25000.00',
    subheading: 'Updating 24/7 using price data from the biggest exchanges',
  },
];

const Features = () => {
  return (
    <div className="mx-auto max-w-7xl my-0 md:my-40 px-4 md:px-6 relative" id="features-section">
      <div className="radial-bg hidden lg:block"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Column-1 */}
        <div className="text-center md:text-start mb-6 md:mb-0">
          <h3 className="feature-font text-lg font-semibold mb-4">Packages</h3>
          <h2 className="text-offwhite text-2xl md:text-5xl font-bold mb-4 leading-[1.2]">Choose <br className="hidden md:block" /> your package</h2>
          <p className="text-bluish md:text-lg font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p>
          <div className="hidden md:block relative z-10">
            <div className="feature-one-bg"></div>
          </div>
        </div>

        {/* Column-2 */}
        <div className="relative z-10">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
          >
            {featuresData.map((items, i) => (
              <SwiperSlide key={i}>
                <div className="flex gap-4 items-center justify-center md:justify-start flex-col md:flex-row">
                  <Image src={items.imgSrc} alt="features-image" width={70} height={70} className="w-10 h-10 md:w-16 md:h-16 object-contain" />
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-offwhite">{items.heading}</h3>
                    <p className="text-lg text-bluish font-semibold">{items.price}</p>
                    <p className="text-bluish md:text-lg font-normal">{items.subheading}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Features;
