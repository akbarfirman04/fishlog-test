'use client';

import React from 'react';
import Top from './components/top'
import Culture from './components/culture';
import { NextUIProvider } from '@nextui-org/react';

export default function Home() {
  return (
    <NextUIProvider>
      <div className="h-screen w-full">
        <Top/>
        <Culture/>
      </div>

    </NextUIProvider>
  );
}
