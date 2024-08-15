"use client"
/* eslint-disable react/no-unescaped-entities */

import React, { Component } from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";

interface DataType{
  profession:string;
  name: string;
  imgSrc:string;
}

const postData: DataType[]= [
  {
    profession: 'Senior Chef',
    name: 'Kevin Steve',
    imgSrc:'/images/Expert/boyone.svg'
  },
  {
    profession: 'Chef',
    name: 'Viki',
    imgSrc:'/images/Expert/boytwo.svg'
  },
  {
    profession: 'Senior Chef',
    name: 'Priya ',
    imgSrc:'/images/Expert/girl.png'
  },
  {
    profession: 'junior Chef',
    name: ' Steve',
    imgSrc:'/images/Expert/boytwo.svg'
  },
  {
    profession: 'Senior Chef',
    name: 'Keeve',
    imgSrc:'/images/Expert/boytwo.svg'
  },
  {
    profession: 'Senior Chef',
    name: 'krishna',
    imgSrc:'/images/Expert/girl.png'
  },
]

//Carosel
export default class MultipleItems extends Component{
render() {

  const settings = {
    dots:true,
    infinate:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed:2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          Infinite:true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          Infinite:true,
          dots: true
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          Infinite:true,
          dots: true
        }
      }
    ]
  }
  return(


      <div className='py-10 sm:py-20 bg-darkpink'>

                <div className=' mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                    
                     <div className='text-center'>
                     <Fade direction='up' delay={400} cascade damping={0.1} triggerOnce={true}>
                              <h2 className='text-pink text-lg font-semibold mb-5 tracking-widest uppercase ls-51'>Expert chefs</h2>
                              <h3 className='text-3xl lg:text-6xl font normal text-black'>Let&apos;s meet the experts</h3>
                      </Fade>
                     </div>

                <Slider {...settings}>
                  {
                        postData.map((items, i) => (
                      <div
                          key={i}>
                            <div className='m-3 py-16 my-20 text-center'>
                                  <div className='relative' >
                                      <Image 
                                          src={items.imgSrc}
                                          alt='Expert'
                                          width={390}
                                          height={298}
                                          className='inline-block m-auto'
                                        />
                                        <div className='absolute top-[50%] right-[2%]'>
                                            <Image
                                                src={'/images/Expert/Linkedin.svg'}
                                                alt='Linkedin'
                                                width={220}
                                                height={120}
                                               className='inline-block m-auto'
                                             />
                                         </div>
                  
                                              <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                              <h4 className='text-lg font-normal text-lightblack pt-4 pb-2 opacity-50'>{items.profession}</h4>
                                   </div>
                            </div>
                      <div>
                 </div>
            </div>
          ))
        }
            </Slider>
          </div>

    </div>
  )
}
}

