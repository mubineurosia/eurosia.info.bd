import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string,
  href: string,
}

interface Member {
  imgsrc: string;
  href: string;
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Useful Links",
    link: ['about', 'Exchange', 'vision-mission', 'management-team'],
  }
];

const socialLinks: Social[] = [
  { imgsrc: '/images/Footer/facebook.svg',  href: "https://www.facebook.com/EurosiaGroupbd/" },
  { imgsrc: '/images/Footer/insta.svg', href: "https://www.instagram.com/eurosia.group/?hl=en" },
  { imgsrc: '/images/Footer/twitter.svg', href: "https://twitter.com/EurosiaGroup" },
  { imgsrc: '/images/Footer/linkedin.svg', href: "https://www.linkedin.com/company/eurosiagroup" },
]

const memberImages: Member[] = [
  { imgsrc: '/images/memberlogo/basis99.png', href: 'https://basis.org.bd/company-profile/22-09-038' },
  { imgsrc: '/images/memberlogo/ecab.png', href: 'https://e-cab.net/company-profile/1716/eurosia-limited' },
  { imgsrc: '/images/memberlogo/534868.png', href: 'https://bacco.org.bd/members-details/9663' },
  { imgsrc: '/images/memberlogo/dcci.png', href: 'https://www.dhakachamber.com/' },
 
];

const footer = () => {
  return (
    <div className="relative">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl mt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

          {/* COLUMN-1 */}
          <div className='col-span-4'>
            <Image
              className="block h-12 w-20px mb-4"
              src={'/images/Logo/logo.gif'}
              alt="Euroisa-Logo"
              width={150}
              height={40} 
            />
            <h3 className='text-lightblue text-sm font-normal leading-9 mb-4 lg:mb-16'>
            Eurosia | ইউরোশিয়া: We provide innovative, reliable solutions across multiple sectors with a unified dashboard for seamless business operations.
            </h3>
            <div className='flex gap-4'>
              {socialLinks.map((items, i) => (
                <Link target="_blank" href={items.href} key={i}>
                  <Image src={items.imgsrc} alt={items.imgsrc} className='footer-icons' width={40} height={40}/>
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN-2/3 */}
          {products.map((product) => (
            <div key={product.id} className="group relative col-span-3">
              <p className="text-white text-xl font-medium mb-9">{product.section}</p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className='mb-5'>
                    <Link href="/" className="text-offwhite text-sm font-normal mb-6 space-links">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* NEW MEMBER SECTION */}
          <div className="group relative col-span-3">
            <p className="text-white text-xl font-medium mb-9">Member</p>
            <div className="gap-4 mb-3">
              {memberImages.map((member, i) => (
                <Link target="_blank" href={member.href} key={i}>
                  <Image src={member.imgsrc} alt={`member-${i}`} className='member-icons mb-2 bg-white' width={100} height={100}/>
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-2">
            <h3 className="text-white text-xl font-medium mb-9">Contact Us</h3>

            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              <Image src={'/images/Footer/number.svg'} alt="number-icon" width={20} height={20} />
              (+88) 01709371514
            </h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              <Image src={'/images/Footer/number.svg'} alt="number-icon" width={20} height={20} />
              (+88) 01711-408724
            </h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              <Image src={'/images/Footer/number.svg'} alt="number-icon" width={20} height={20} />
              (+88) 01711-408725
            </h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              <Image src={'/images/Footer/number.svg'} alt="number-icon" width={20} height={20} />
             Fax# (+880) 8715960
            </h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              <Image src={'/images/Footer/number.svg'} alt="number-icon" width={20} height={20} />
             Tell# (+880) 8711849
            </h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              <Image src={'/images/Footer/email.svg'} alt="email-icon" width={20} height={20} />
              sales@eurosiatechnologies.com
            </h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              <Image src={'/images/Footer/address.svg'} alt="address-icon" width={20} height={20} />
              Eurosia,144/5G, Matikata, (Near By ECB Circle)
              Dhaka-1206, Bangladesh
            </h4>

     
          </div>

        </div>
      </div>

      {/* All Rights Reserved */}
      <div className='py-8 px-4 border-t border-t-lightblue'>
        <h3 className='text-center text-offwhite'>
          @2023 - All Rights Reserved by <Link href="https://eurosiatechnologies.com/" target="_blank">Eurosia Limited</Link>
        </h3>
      </div>
    </div>
  );
}

export default footer;
