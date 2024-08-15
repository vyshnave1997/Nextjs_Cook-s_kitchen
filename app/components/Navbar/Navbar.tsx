/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Disclosure } from '@headlessui/react'; // Disclosure component from Headless UI for handling dropdowns
import Image from 'next/image'; // Next.js Image component for optimized images
import Link from 'next/link'; // Next.js Link component for client-side navigation
import { Bars3Icon } from '@heroicons/react/24/outline'; // Importing a hamburger icon for the mobile menu
import Drawer from './Drawer'; // Custom Drawer component for the mobile menu
import Data from './DrawerData'; // Data component to populate the Drawer with navigation links

// Interface defining the structure of each navigation item
interface NavigationItem {
  name: string; // Display name of the navigation item
  href: string; // Target section on the page this item links to
  current: boolean; // Boolean indicating if this item is currently active
}

// Array of navigation items for the menu
const navigation: NavigationItem[] = [
  { name: 'Home', href: '#home-section', current: false },
  { name: 'About', href: '#about-section', current: false },
  { name: 'Recipe', href: '#recipe-section', current: false },
  { name: 'Gallery', href: '#gallery-section', current: false },
];

// Utility function to conditionally join CSS classes
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// Navbar component definition
const Navbar = () => {
  // State to control the visibility of the Drawer (mobile menu)
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    // Disclosure component used to create a responsive navbar
    <Disclosure as="nav" className="navbar">
      <>
        {/* Main container for the navbar */}
        <div className="mx-auto max-w-7xl p-3 lg:px-8">
          <div className="relative flex items-center">
            {/* Flex container to align items horizontally */}
            <div className="flex flex-1 items-center sm:justify-between">
              {/* Logo section */}
              <div className="flex sm:hidden flex-shrink-0 items-center border-right">
                {/* Displayed only on mobile (sm:hidden) */}
                <Image
                  src="/images/Logo/Logo.svg"
                  alt="logo"
                  width={36}
                  height={36}
                />
                <Link href="/" className="text-2xl font-semibold text-black ml-4">
                  Cook&apos;s Kitchen
                </Link>
              </div>
              <div className="hidden sm:flex flex-shrink-0 items-center border-right">
                {/* Displayed on larger screens (hidden on mobile) */}
                <Image
                  src="/images/Logo/Logo.svg"
                  alt="logo"
                  width={36}
                  height={36}
                />
                <Link href="/" className="text-2xl font-semibold text-black ml-4">
                  Cook&apos;s Kitchen
                </Link>
              </div>
              {/* Menu section */}
              <div className="hidden lg:flex items-center border-right">
                {/* Navigation links, displayed on large screens */}
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-black' : 'navlinks hover:opacity-100', // Conditional classes for active/inactive items
                        'px-3 py-4 rounded-md text-lg font-normal opacity-50 hover:text-black space-links' // Common classes for all items
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Button section */}
              <div className="gap-6 hidden lg:flex">
                {/* Contact information, displayed on large screens */}
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/Navbar/phone.svg"
                    alt="phone-img"
                    width={18}
                    height={18}
                  />
                  <p className="text-lg font-medium">+91 98479 35233</p>
                </div>
                {/* Sign In button, hidden on mobile */}
                <div className="hidden md:block">
                  <button
                    type="button"
                    className="flex justify-end text-xl font-medium bg-bgpink text-pink py-2 px-4 lg:px-8 navbutton rounded-full hover:text-white hover:bg-pink"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
            {/* Drawer for mobile view */}
            {/* Hamburger icon to open the Drawer */}
            <div className="block lg:hidden">
              <Bars3Icon
                className="block w-6 h-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)} // Open the Drawer when clicked
              />
            </div>
            {/* Drawer component, containing navigation links for mobile */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Data /> {/* Pass navigation data to the Drawer */}
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar; // Export the Navbar component as the default export
