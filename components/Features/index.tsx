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
        subheading: 'Complete School Website  Complete School Website',
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
        <div className="mx-auto max-w-7xl my-0 md:my-40  px-4 md:px-6 relative" id="features-section">
            <div className="radial-bg hidden lg:block"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Column-1 */}
                <div className="text-center md:text-start mb-6 md:mb-0">
                    <h3 className="feature-font text-lg font-semibold mb-4">Packages</h3>
                    <h2 className="text-offwhite text-3xl lg:text-5xl font-semibold leading-snug mb-6">
                        Choose a package which suits you best
                    </h2>
                </div>
                {/* Column-2 */}
                <div>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2 },
                        }}
                        pagination={{ clickable: true }}
                        navigation
                        className="swiper-container"
                    >
                        {featuresData.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="bg-blue py-6 px-4 lg:py-8 lg:px-8 rounded-lg">
                                    <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-4 lg:mb-6">
                                        <Image src={item.imgSrc} alt={item.imgSrc} width={24} height={30} />
                                    </div>
                                    <h5 className="text-offwhite text-lg font-medium mb-2 lg:mb-4">{item.heading}</h5>
                                    <h4 className="text-red text-lg font-normal mb-2 lg:mb-4">{item.price}</h4>
                                    <p className="text-lightblue text-sm font-normal">{item.subheading}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Features;
