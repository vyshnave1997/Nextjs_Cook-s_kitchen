"use client"
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal'

const Gallery = () => {
  return (
    <div id='gallery-section'>
         <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 md:pt-24 lg:pt-24'>
              <div className='text-center'>
              <Fade direction='right' delay={400} cascade damping={0.1} triggerOnce={true}>
                 <h2 className='text-pink text-lg my-5 font-semibold mb-3 tracking-widest uppercase ls-51'>Our Gallery</h2>
                     <h3 className='text-4xl lg:text-5xl font-normal text-black'>Gallery of our cooked food</h3>
</Fade>
              </div>
                      <div className='grid grid-cols-1 md:grid-cols-12 my-16 sm:space-x-6 space-y-6 md:space-y-0 px-6 '>
                         <div className='col-span-12 flex justify-center'>
                             <div className='grid grid-rows-1 grid-flow-row'>
                                  <div className='row-span-1 overflow-hidden rounded-3xl mb-5'>
                                       
                                    </div>
                                             <div className='grid grid-cols-2 gap-3'>
                                                <div className='overflow-hidden rounded-3xl'>
                                                <Image 
                                            src='/images/Gallery/chicken.jpg'
                                            alt='chicken-galery'
                                            width={600}
                                            height={350}
                                            className='inner-img'
                                         />
                      
                                                </div>
                                                <div className='overflow-hidden rounded-3xl'>
                                                <Image 
                                            src='/images/Gallery/foodone.jpg'
                                            alt='chicken-galery'
                                            width={600}
                                            height={350}
                                            className='inner-img'
                                         />
                      
                                                </div>
                                                <div className='overflow-hidden rounded-2xl'>
                                                <Image 
                                            src='/images/Gallery/foodthree.jpg'
                                            alt='chicken-galery'
                                            width={600}
                                            height={350}
                                            className='inner-img'
                                         />
                      
                                                </div>
                                                <div className='overflow-hidden rounded-2xl'>
                                                <Image 
                                            src='/images/Gallery/pizza.jpg'
                                            alt='chicken-galery'
                                            width={600}
                                            height={350}
                                            className='inner-img'
                                         />
                      
                                              </div>
                                          
                             </div>
                         </div>
                       </div>
      

              </div>
              </div>
              </div>
  )
}

export default Gallery