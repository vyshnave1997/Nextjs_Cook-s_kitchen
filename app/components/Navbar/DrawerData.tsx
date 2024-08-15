import Link from 'next/link';
import React from 'react';
/* eslint-disable react/no-unescaped-entities */

// Define the structure of a navigation item
interface NavigationItem {
  name: string; // The display name of the navigation item
  href: string; // The target section of the page this item links to
  current: boolean; // Boolean indicating if this is the currently active item
}

// Array of navigation items, each linking to a different section of the page
const navigation: NavigationItem[] = [
  { name: 'Home', href: '#home-section', current: false },
  { name: 'About', href: '#about-section', current: false },
  { name: 'Recipe', href: '#recipe-section', current: false },
  { name: 'Gallery', href: '#gallery-section', current: false },
];

// Helper function to conditionally join CSS classes
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// Main Data component
const Data = () => {
  return (
    // Container for the entire component, centered with a maximum width
    <div className="rounded-md max-w-sm w-full mx-auto">
      {/* Flex container with space between elements */}
      <div className="flex-1 space-y-4 py-4">
        <div className="sm:block">
          {/* Container for the navigation links and buttons */}
          <div className="space-y-1 px-5 pt-2 pb-3">
            {/* Iterate over each navigation item and render a link */}
            {navigation.map((item) => (
              <Link
                // Apply conditional CSS classes based on whether the item is current
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-purple' // Active item styles
                    : 'text-black hover:bg-gray-700 hover:text-purple', // Inactive item hover styles
                  'block py-2 rounded-md text-base font-medium' // Common styles for all items
                )}
                aria-current={item.current ? 'page' : undefined} // ARIA attribute for the current page
                key={item.name} // Unique key for each item in the list
                href={item.href} // Link target
              >
                {item.name} {/* Display the name of the navigation item */}
              </Link>
            ))}
            <div>
              {/* Sign In button */}
              <button
                className="flex justify-center text-base w-full font-medium rounded-full bg-bgpink text-pink py-3 px-4 lg:px-8 navbutton hover:bg-bgpink"
              >
                Sign In
              </button>
              {/* Contact Us button */}
              <button
                className="flex mt-4 justify-center text-base w-full font-medium rounded-full border border-bgpink text-pink  py-3 px-4 lg:px-8 navbutton hover:bg-pink hover:text-white"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data; // Export the Data component as the default export
