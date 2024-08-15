"use client"; // Enables client-side rendering for this component
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image'; // Optimized image component from Next.js
import Link from 'next/link'; // Link component from Next.js for client-side navigation
import { ChevronRightIcon } from "@heroicons/react/24/outline"; // ChevronRightIcon for link arrows
import { Fade } from "react-awesome-reveal"; // React animation library for fade-in effects

// Defining the type for the card data
interface cardDataType {
  imgSrc: string; // Image source for each feature card
  heading: string; // Heading text for the feature card
  subHeading: string; // Subheading text for the feature card
  link: string; // Text for the card link
}

// Array containing the data for each feature card
const cardData: cardDataType[] = [
  {
    imgSrc: '/images/Features/featureOne.svg',
    heading: "Menu variations",
    subHeading: "Craisin relish . sweet potato butter",
    link: 'Learn more'
  },
  {
    imgSrc: '/images/Features/featureTwo.svg',
    heading: "Cooking Raw",
    subHeading: "Harissa ali . moody blue labneh",
    link: 'Learn more'
  },
  {
    imgSrc: '/images/Features/featureThree.svg',
    heading: "Best Spicy",
    subHeading: "Avocado . kumquats . quinoa crunch",
    link: 'Learn more'
  },
  {
    imgSrc: '/images/Features/featureFour.svg',
    heading: "Fast Food",
    subHeading: "Pickled veggies . limey-herby dressing",
    link: 'Learn more'
  }
];

// Feature component that displays the feature section
const Feature = () => {
  return (
    // Main container for the feature section
    <div id='about-section' className='mx-auto max-w-7xl py-40 px-6'>
      {/* Heading Section */}
      <div className='text-center mb-14'>
        {/* Fading in the heading using the Fade animation */}
        <Fade direction='down' delay={400} cascade damping={0.1} triggerOnce={true}>
          <h3 className='text-pink text-lg font-semibold mb-3 ls-51 uppercase'>
            Features
          </h3>
        </Fade>
        <Fade direction='left' delay={800} cascade damping={0.1} triggerOnce={true}>
          <p className='text-3xl lg:text-6xl font-normal text-lightgrey'>
            Get many interesting <br /> features
          </p>
        </Fade>
      </div>

      {/* Card Section */}
      <Fade direction='right' delay={1000} cascade damping={0.1} triggerOnce={true}>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32'>
          {
            // Mapping over the cardData array to generate the feature cards
            cardData.map((item, i) => (
              <div key={i} className='card-b p-8 relative rounded-3xl'>
                {/* Image for the feature card */}
                <div className='work-img-bg mb-4 rounded-full flex justify-center absolute top-[-50%] sm:top-[-40%] md:top-[55%] lg:top-[-45%] left-[0%]'>
                  <Image
                    src={item.imgSrc} // Dynamic image source from the card data
                    alt={item.imgSrc}
                    width={510}
                    height={10}
                  />
                </div>

                {/* Card Heading */}
                <h3 className='text-2xl text-black font-semibold text-center mt-20'>
                  {item.heading} {/* Dynamic heading from the card data */}
                </h3>

                {/* Card Subheading */}
                <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>
                  {item.subHeading} {/* Dynamic subheading from the card data */}
                </p>

                {/* Card Link */}
                <div className='flex items-center justify-center'>
                  <Link href='/'>
                    <p className='text-center text-lg font-medium text-pink mt-2 hover-underline'>
                      {item.link} {/* Dynamic link text */}
                      <ChevronRightIcon width={20} height={20} /> {/* Chevron icon */}
                    </p>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </Fade>
    </div>
  );
}

export default Feature; // Exporting the Feature component as default
