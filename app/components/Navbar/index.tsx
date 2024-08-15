"use client"
/* eslint-disable react/no-unescaped-entities */

import React, { Fragment, useEffect } from 'react';
import Navbar from './Navbar';

const Navbarin: React.FC = () => {
useEffect(() => {
  const debounce = (fn: Function) => {
    let frame: number;
    return (...params:any[] ) => {
      if (frame) {
          cancelAnimationFrame(frame);

      }
      frame = requestAnimationFrame(() => {
        fn(...params)
      })
    }
  };
  const storeScroll = () => {
    document.documentElement.dataset.scroil = window.scrollY.toString();
  }
  document.addEventListener('scroll', debounce(storeScroll), {
    passive:true
  }
);
storeScroll();
}, [])
  return (
   <>
    <Navbar />
   </>
  )
}

export default Navbarin;