"use client"
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const Newsletter = () => {
  return (
    <div className='relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-3xl'>
      <div className='bg-pink mx-auto max-w-2xl br-50 md:max-w-6xl rounded-lg'>
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8'>
          {/* colunm 1 */}
          <div className='col-span-7'>
            <div className='m-10 lg:ml-32 lg:mt-20 lg:mb-20'>
            <Fade direction='up' delay={400} cascade damping={0.1} triggerOnce={true}>
              <h3 className='text-lg font-semibold mb-3 ls-51 text-white uppercase'>Newsletter</h3>
              </Fade>
              <h3 className='text-3xl md:text-6xl font-normal mb-8 text-white'>Subscribe our <br /> newsletter</h3>


            <div className='relative'>
              <input className='py-6 sm:py-8 text-sm w-full text-black bg-gray-900 rounded-full pl-4 par-87 focus:outline-none focus:text-black' type='Email address' name='q' placeholder='@ enter your email-address'  autoComplete='off'/>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
                <button type='submit' className='p-1 focus-outline-none focus:shadow-outline'>
                  <Image 
                  src={'/images/Newsletter/arrow.svg'}
                  alt='inputicon'
                  width={57}
                  height={71}
                  />
                </button>
              </div>
            </div>
            </div>

          </div>
          {/* colunm 2 */}
          <div className='col-span-5 relative hidden md:block'>
            <div>
            <Fade direction='right' delay={400} cascade damping={0.1} triggerOnce={true}>
              <Image 
              src={'/images/NewsLetter/soup.svg'}
              alt='soup'
              width={626}
              height={602}
              className='-mt-15'
              />
              </Fade>
            </div>
            <div className='absolute top-[78%]'>
              <Image 
              src={'/images/Newsletter/onion.svg'}
              alt='onion'
              width={300}
              height={122}
              />
            </div>
            
            <div className='absolute top-[38%] left-[-20%]'>
              <Image 
              src={'/images/Newsletter/lec.svg'}
              alt='latuce'
              width={300}
              height={122}
              />
            </div>
            <div className='absolute bottom-[15%]'>
              <Image 
              src={'/images/Newsletter/yellow.svg'}
              alt='yellow'
              width={50}
              height={22}
              />
            </div>
            <div className='absolute bottom-[20%] left-[-10%]'>
              <Image 
              src={'/images/Newsletter/blue.svg'}
              alt='yellow'
              width={25}
              height={25}
              />
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Newsletter