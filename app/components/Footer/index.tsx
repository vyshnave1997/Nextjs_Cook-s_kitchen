import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
/* eslint-disable react/no-unescaped-entities */

interface ProductType {
  id:number;
  section:string;
  link:string[];
}

interface socialLinks{
  imgSrc: string;
  link:string;
  width:number;
}

const socialLinks: socialLinks[] = [
{
 imgSrc: '/images/Footer/facebook.svg',
 link: 'https://facebook.com',
 width:10
},
{
  imgSrc: '/images/Footer/insta.svg',
  link: 'https://instagram.com',
  width:14
 },
 {
  imgSrc: '/images/Footer/twitter.svg',
  link: 'https://x.com',
  width:14
 },
]
const products: ProductType[] = [
  {
    id:1,
    section: "Company",
    link: ['About', 'Careers', 'Mobile', 'Blog', 'How we work'],
  },
  {
    id:2,
    section: "Contact",
    link: ['Help/FAQ', 'Press', 'Affiliates', 'Hotel owners', 'Partners'],
  },
  {
    id:3,
    section: "More",
    link: ['Rescipe', 'Chef', 'Food', 'Support'],
  },
]

const Footer = () => {
  return (
    <div className='mx-auto max-w-2xl pt-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12'>
        {/* colunm 1*/}
        <div className='sm:col-span-6 lg:col-span-5'>
          <div className='flex flex-shrink-0 items-center border-right'>
            <Image 
            src={'/images/Logo/Logo.svg'}
            alt='logo'
            width={56}
            height={56} 
            />
            <Link href="/" className='text-black ml-4 font-semibold'>Cook&apos;s Kitchen</Link>
          </div>
          <h3 className='text-textbl text-xs font-medium mt-5 mb-4 lg:mb-16'>
            Open an account in minutes, get full financials<br /> control for much longer.
          </h3>
          <div className='flex gap-4'>
            {
              socialLinks.map((items, i) =>(
                <Link href={items.link} key={i}>
                  <div className='bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink'>
                    <Image 
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={items.width}
                    height={2}
                    className='sepiaa'
                    />
                  </div>
                </Link>
              ) )
            }
          </div>
        </div>
        {
        products.map((product) => (
          <div key={product.id} className='sm:col-span-2'>
            <p className='text-black text-xl font-semibold mb-9'>{product.section}</p>
            <ul>
              {product.link.map((link:string, index: number) => (
                <li key={index} className='mb-5'>
                <Link href='/' className='text-footerlinks text-base font-normal mb-6 space-links'>{link}
                </Link>
                </li>
              ))}
            </ul>
            </div>
        ))}
        
      </div>
      <div className='py-10 md:flex items-center justify-between border-t border-t-bordertop'>
        <h4 className='text-darkgrey text-sm text-center md:text-start font-normal'>@2024 - Cook&apos;s kitchen. All rights reserved</h4>
        <div className='flex gap-5 mt-5 md:mt-0 justify-center md:justify-start'>
          <h4 className='text-darkgrey text-sm font-normal'>
            <Link href="/"
            target='_blank'
            >
              Privacy Policy
            </Link>
          </h4>
          <div className='h-5 bg-bordertop w-0.5'></div>
            <h4 className='text-darkgrey text-sm font-normal'>
            Terms & Conditions
            </h4>
        </div>
      </div>
    </div>
  )
}

export default Footer