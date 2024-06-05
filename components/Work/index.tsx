import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    weblink: string;
    subheading: string;
    hiddenpara: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/holding.png',
        heading: 'Eurosia Holding',
        weblink:'https://eurosiaholdings.com/',
        subheading: 'Eurosia Holding Limited drives global business growth through strategic investments and innovative solutions across diverse industries.',
        hiddenpara: 'We offer reliable and responsive IT support services that help businesses keep their systems up and running smoothly.',
    },
    {
        imgSrc: '/images/Work/tech.png',
        heading: ' Eurosia Technologies',
        weblink:'https://eurosiatechnologies.com/',
        subheading: 'Eurosia Technologies drives global digital transformation with cutting-edge technological solutions and innovative services.',
        hiddenpara: 'Eurosia Technologies drives global digital transformation with cutting-edge technological solutions and innovative services.',
    },
    {
        imgSrc: '/images/Work/restaurant.png',
        heading: 'Eurosia Restaurant',
        weblink:'https://eurosiarestaurant.com/',
        subheading: 'Eurosia Restaurant offers an exquisite dining experience with a fusion of global flavors and exceptional service.',
        hiddenpara: 'Eurosia Restaurant offers an exquisite dining experience with a fusion of global flavors and exceptional service.',
    },
    {
        imgSrc: '/images/Work/app.png',
        heading: 'Eurosia App',
        weblink:'https://eurosia.app/',
        subheading: 'Eurosia App enhances your digital lifestyle with innovative features and seamless usability.',
        hiddenpara: 'Eurosia App enhances your digital lifestyle with innovative features and seamless usability.',
    },
    {
        imgSrc: '/images/Work/trip.png',
        heading: 'Eurosia Trip ',
        weblink:'https://eurosiatrip.com/',
        subheading: 'Eurosia Trip curates unforgettable travel experiences with personalized itineraries and exceptional service.',
        hiddenpara: 'Eurosia Trip curates unforgettable travel experiences with personalized itineraries and exceptional service.',
    },
    {
        imgSrc: '/images/Work/e24.png',
        heading: 'E24 Ghanta',
        weblink:'#',
        subheading: 'E24 delivers cutting-edge news and insights with a focus on innovation, culture, and global trends.',
        hiddenpara: 'E24 delivers cutting-edge news and insights with a focus on innovation, culture, and global trends.',
    },


]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>How it work</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>Our IT company specializes in helping businesses optimize their technology infrastructure. We provide IT consulting, infrastructure design and implementation, software development, and ongoing IT support. Contact us to learn how we can help your business streamline its operations and reduce costs.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

                    {workdata.map((items, i) => (
                        <a href={items.weblink} key={i} target='_blank'> 
                        <div className='card-b p-8' key={i}>
                            <div className='work-img-bg  flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={150} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                            {/* <span className="text-base font-normal m-0 text-bluish text-center hides">{items.hiddenpara}</span> */}
                        </div>
                        </a>

                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work;
