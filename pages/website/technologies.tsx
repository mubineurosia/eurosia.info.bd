import Image from 'next/image';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Head from 'next/head'


const Technologies = () => {

  <Head>
  <title>Eurosia Technologies | Eurosia Group</title>
  <link rel="icon" href="/fav.png" />
 </Head>


  const [isOpen, setOpen] = useState(false)



  return (
    <div className='bg-image relative' >
      <div className='arrowOne'></div>
      <div className='radial-banner hidden lg:block'></div>
      <ModalVideo channel='youtube' isOpen={isOpen} videoId="wgQ58UEY-ME" onClose={() => setOpen(false)} />

      <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">
        <div className='height-work'>
          <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
            <div className='arrowTwo hidden md:block'></div>
            <div className='col-span-7'>
              <h1 className="text-4xl lg:text-6xl font-bold mb-5 hadding-bg-color md:4px md:text-start text-center text-pop-up-tl">
              Eurosia Technologies  <br />
              </h1>
              <p className='text-white md:text-lg font-normal mb-10 md:text-start text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo natus aperiam, consectetur laudantium eveniet necessitatibus id assumenda voluptatibus voluptates harum sint accusamus accusantium similique temporibus minus cumque?</p>
              <div className='flex align-middle justify-center md:justify-start'>
                <button className='text-xl font-semibold text-white py-2 px-6 lg:px-12 navbutton mr-6'>Get Started</button>
                <button onClick={() => setOpen(true)} className='bg-transparent flex justify-center items-center text-white'>
                  <Image src='/images/Banner/playbutton.svg' alt='button-image' className='my-6' width={47} height={47} />
                  How it works
                </button>
              </div>
            </div>

            <div className='col-span-5 '>
              <div className='arrowThree'></div>
              <div className='arrowFour'></div>
              <div className='arrowFive'></div>
              {/* <Image className='rotate-center ' src='/images/Banner/banner11.png' alt='nothing' width={750} height={300} /> */}
              <div className='arrowSix'></div>
              <div className='arrowSeven'></div>
              <div className='arrowEight'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies;
