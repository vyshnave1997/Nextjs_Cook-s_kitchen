"use client"
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal'

export const Cook = () => {
  return (
    <div className='relative' id='recipe-section'>
        <div className='mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6'>
<div className='absolute right-0 bottom-[-18%] hidden lg:block'>
<Fade direction='right' delay={500} cascade damping={0.1} triggerOnce={true}>
  <Image
  src={'/images/Cook/burger.png'}
  alt='Burger-image'
  width={463}
  height={622}
  />
  </Fade>
</div>

          <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
            {/* left section*/}
            <div className='col-span-6 flex justify-start'>
            <Fade direction='left' delay={800} cascade damping={0.1} triggerOnce={true}>
              <Image 
              src="/images/Cook/cook.png"
              alt="experts"
              width={635}
            height={808}              
              />
              </Fade>
            </div>
             {/* right section*/}
             <div className='col-span-6 flex flex-col justify-center'>
             <Fade direction='right' delay={400} cascade damping={0.1} triggerOnce={true}>
              <h2
              className='text-pink text-lg font-semibold mb-3 ls-51 uppercase'>
                Cook with us
              </h2>
              <h3 className='text-3xl lg:text-6xl font-normal text-black text-start'>
                Cooking together with the expert.
              </h3>
              </Fade>
              <Fade direction='right' delay={400} cascade damping={0.1} triggerOnce={true}>
              <p className='text-grey md:text-lg font-normal mb-10 text-start mt-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim amet porro quia,
                 nulla quisquam doloremque fugit sunt laudantium quis? Nulla temporibus saepe unde. Exc
                 nulla quisquam doloremque fugit sunt laudantium quis? Nulla temporibus saepe unde. Exc
                 epturi eos obcaecati iusto, nobis qui est.
                 nulla quisquam doloremque fugit sunt laudantium quis? Nulla temporibus saepe unde. Exc
              </p>
              <p className='text-gray md:text-lg font-normal mb-10 text-start mt-1'>
                Lorem adipisicing elit. Enim amet porro quia, nulla quisquam doloremque 
                fugit sunt laudantium quos obcaecation..
              </p>
              </Fade>
              <Fade direction='right' delay={400} cascade damping={0.1} triggerOnce={true}>
              <div className='flex align-middle justify-center md:justify-start'>
                <button className='text-xl font-medium bg-pink rounded-full text-white py-5 px-6 lg:px-10'>
                  Learn more
                </button>
                
              </div>
              </Fade>
             </div>
          </div>
        </div>

    </div>
  )
}
