'use client';

import React from 'react';

import Header from '@/components/header/header';
import { SectionCards } from '@/components/cards/sectionCards';

import BarChartComponent from '@/components/charts/bar-chart';
import LineChartComponent from '@/components/charts/line-chart';
const page = () => {
  return (
    <div className="">
      <Header />
      <div className="sm:m-4 my-4">
        <SectionCards />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:px-6 lg:my-10 px-4 my-4">
          <BarChartComponent />
          <LineChartComponent />
        </div>
      </div>
    </div>
  );
};

export default page;
