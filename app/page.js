'use client';

import React from 'react';
import Top from './components/top'
import Culture from './components/culture';
import Footer from './components/footer';
import FloatingNavbar from './components/navbar';
import SliderImage from './components/sliderImage';
import SliderTimeline from './components/sliderTimeline';
import { NextUIProvider } from '@nextui-org/react';

export default function Home() {
  return (
    <NextUIProvider>
      <div className="h-screen w-full">
        <FloatingNavbar/>
        <Top/>
        <SliderImage/>
        <Culture/>
        <SliderTimeline/>
        <Footer/>
      </div>

    </NextUIProvider>
  );
}
