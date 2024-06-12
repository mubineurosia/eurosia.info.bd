
import Image from "next/image";

interface table {
    index: number;
    imgSrc: string;
    Weblink: string;
}

const tableData: table[] = [
    {
        index: 1,
        imgSrc: '/images/OurCompany/tech.png',
        Weblink:"https://eurosiatechnologies.com/"
      
    },
    {
        index: 2,
        imgSrc: '/images/OurCompany/holding.png',
        Weblink:"https://eurosiagroup.com/"
    
    },
    {
        index: 3,
        imgSrc: '/images/OurCompany/res.png',
        Weblink:"https://eurosiarestaurant.com/"
       
 
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/tirp.png',
        Weblink:"https://eurosiatrip.com/"
       
    
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/electornics.png',
        Weblink:"#"
       
    
    },
    {
        index: 4,
        imgSrc: '/images/OurCompany/app.png',
        Weblink:""
       
    },


]

const OurConpany = () => {
    return (     
        <>
      <section className="text-center container py-10 mb-16 bg-black bg-opacity-50 rounded-lg shadow-lg mx-auto px-6 py-16">
        <h1 className="text-4xl lg:text-6xl font-bold my-8 bg-clip-text text-transparent bg-gradient-to-r from-[#eaaaff] via-[#b5acff] to-[#b5acff]">
        Our Company
        </h1>
    </section>
<div className='mx-auto max-w-7xl pt-10 px-6' id="exchange-section">
    <div className="p-8 overflow-x-auto"> 
                           {/* Hero Section */}

        <div className="flex flex-wrap justify-center mt-10 space-x-4 ">
            {tableData.map((item, i) => (
                <div key={i} className="flex-none pro-panel mx-5 my-4 shadow-md client-logo company_logo">
                    <a href={item.Weblink} className="" target="__blank">
                        <Image src={item.imgSrc} alt={`Image ${item.index}`} height={100} width={300} className="" />
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
