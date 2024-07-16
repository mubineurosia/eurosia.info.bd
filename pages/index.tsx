
import Head from 'next/head';
import dynamic from 'next/dynamic';
// const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });
const Banner = dynamic(() => import('../components/Banner'), { ssr: false });
// const Companies = dynamic(() => import('../components/Companies'), { ssr: false });
const Work = dynamic(() => import('../components/Work'), { ssr: false });
// const Table = dynamic(() => import('../components/Table'), { ssr: false });
const Features = dynamic(() => import('../components/Features'), { ssr: false });
const Simple = dynamic(() => import('../components/Simple'), { ssr: false });
const Trade = dynamic(() => import('../components/Trade'), { ssr: false });
// const Faq = dynamic(() => import('../components/Faq'), { ssr: false });
// const Footer = dynamic(() => import('../components/Footer'), { ssr: false });
// const ContactForm = dynamic(() => import('../components/Contact'), { ssr: false });
// const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), { ssr: false });



export default function Home() {

  return (
    <>
      <Head>

        <title>Eurosia</title>
        <meta name="description" content="Eurosia | ইউরোশিয়া, we strive to provide exceptional service and innovation across various sectors including Real Estate, Technologies, Restaurants, Hotels, Travel Agencies, Food, Home Appliances, Newspapers, and Agro-businesses. Our mission is to empower brand partners with a unified dashboard for seamless searching, comparing, and managing their operations. We are committed to delivering reliable solutions and enhancing efficiency in every aspect of our clients' business ventures." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.png" />

        {/* Open Graph metadata for social sharing */}
        <meta property="og:title" content="Eurosia" />
        <meta property="og:description" content="Eurosia | ইউরোশিয়া, we strive to provide exceptional service and innovation across various sectors including Real Estate, Technologies, Restaurants, Hotels, Travel Agencies, Food, Home Appliances, Newspapers, and Agro-businesses. Our mission is to empower brand partners with a unified dashboard for seamless searching, comparing, and managing their operations. We are committed to delivering reliable solutions and enhancing efficiency in every aspect of our clients' business ventures." />
        <meta property="og:url" content="http://eurosia.com.bd/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://eurosia.com.bd/image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card metadata for social sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eurosia" />
        <meta name="twitter:description" content="Eurosia | ইউরোশিয়া, we strive to provide exceptional service and innovation across various sectors including Real Estate, Technologies, Restaurants, Hotels, Travel Agencies, Food, Home Appliances, Newspapers, and Agro-businesses. Our mission is to empower brand partners with a unified dashboard for seamless searching, comparing, and managing their operations. We are committed to delivering reliable solutions and enhancing efficiency in every aspect of our clients' business ventures." />
        <meta name="twitter:image" content="http://eurosia.com.bd/image.jpg" />
      </Head>
      <main>
      
       {/*  <Navbar /> */}
        <Banner  title='Welcome to Eurosia' description='Eurosia | ইউরোশিয়া , we strive to provide exceptional service and innovation across various sectors including Real Estate, Technologies, Restaurants, Hotels, Travel Agencies, Food, Home Appliances, Newspapers, and Agro-businesses. Our mission is to empower brand partners with a unified dashboard for seamless searching, comparing, and managing their operations. We are committed to delivering reliable solutions and enhancing efficiency in every aspect of our clients business ventures.' leftImage=''/>
        {/* <Companies /> */}
        <Work />
        {/* <Table /> */}
        <Features />
        <Simple />
        <Trade />
        {/* <ContactForm/> */}
        {/* <Faq /> */}
       
      </main>
    </>
  )
}



