
import Image from "next/image";

interface table {
    index: number;
    imgSrc: string;
    Weblink: string;
}

const tableData: table[] = [
    {
        index: 1,
        imgSrc: '/images/OurCompany/blue-1.png',
        Weblink:"https://eurosiatechnologies.com/"
      
    },
    {
        index: 2,
        imgSrc: '/images/OurCompany/blue-2.png',
        Weblink:"https://eurosiagroup.com/"
    
    },
    {
        index: 3,
        imgSrc: '/images/OurCompany/blue-3.png',
        Weblink:""
       
 
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/blue-4.png',
        Weblink:""
       
    
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/blue-4.png',
        Weblink:""
       
    
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/blue-4.png',
        Weblink:""
       
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/blue-4.png',
        Weblink:""
       
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/blue-4.png',
        Weblink:""
       
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/blue-4.png',
        Weblink:""
       
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/blue-4.png',
        Weblink:""
       
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/blue-4.png',
        Weblink:""
       
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/blue-4.png',
        Weblink:""
       
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/blue-4.png',
        Weblink:""
       
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/blue-4.png',
        Weblink:""
       
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/blue-4.png',
        Weblink:""
       
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/blue-4.png',
        Weblink:""
       
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/blue-4.png',
        Weblink:""
       
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/blue-4.png',
        Weblink:""
       
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/blue-4.png',
        Weblink:""
       
    },

]

const OurConpany = () => {
    return (     
        <>
        <div className='mx-auto max-w-7xl pt-40 px-6' id="exchange-section">
            <div className="bg-white p-8 overflow-x-auto"> 
                <h3 className="text-offblack text-2xl text-center">Our Company</h3>
                <div className="flex flex-wrap justify-center mt-10 space-x-4">
                    {tableData.map((item, i) => (
                        <div key={i} className="flex-none border mx-5 my-4 shadow-md">
                            <a href={item.Weblink} className=" " target="__blank">
                                <Image src={item.imgSrc} alt={`Image ${item.index}`} height={300} width={150} className="" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <Image src={'/images/Table/Untitled.svg'} alt="ellipse" width={2460} height={102} className="md:mb-40 md:-mt-6" />
        </div>
    
        </>

    
    )
}

export default OurConpany;
