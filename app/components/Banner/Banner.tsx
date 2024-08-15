"use client"

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";

export const Banner = () => {
  return (
    <div id='home-section' className='bg-lightpink'>
      <div className='mx-auto max-w-7xl pt-20 sm:pb-24 px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
        {/*left section */}
           <div className='col-span-6 flex flex-col justify-center'>
            <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
              <h1
              className='text-4xl lg:text-7xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center'
              >
                Cook anything <br /> with the experts
              </h1>
              </Fade>
              <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
              
               <p
               className='text-grey lg:text-lg font-normal mb-10 lg:text-start text-center'
               >

                 the Kitchen began in 2024 with a goal 
                 of serving bold, globel 
                <br /> flavors to our local community
               </p>
               </Fade>
               <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>
               <div className='md:flex align-middle justify-center lg:justify-start'>
               <button
               className='text-xl w-full  bg-pink md:w-auto font-medium rounded-full text-white py-5 px-6 lg:px-14 mr-6 '
               >
                Let's Cook
               </button>
               <button className='flex border w-full md:w-auto mt-5 md:mt-0 border-pink justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-pink hover:text-white hover:bg-pink'>
                Explore Now
                </button>
                </div>
                </Fade>
                </div>
                
                <div className='col-span-6 flex justify-center relative'>
                  <div className='flex bg-lightpink p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>  
                  <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                    <Image
                    src={'/images/Banner/pizza.svg'}
                    alt="pizza-image"
                    width={68}
                    height={68}
                    />
                    </Fade>
                  </div>
                  <Fade direction='right' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                  <Image
                  src={"/images/Banner/banner-image.png"}
                  alt="banner"
                  width={1000}
                  height={805}
                  />
                  </Fade>
                </div>
        </div>
      </div>
    </div>
  )
}
