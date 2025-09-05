'use client';

import React from 'react';

import Header from '@/components/header/header';
import { SectionCards } from '@/components/cards/sectionCards';

const page = () => {
  return (
    <div className="">
      <Header />
      <div className="sm:m-4 my-4">
        <SectionCards />
      </div>
    </div>
  );
};

export default page;
