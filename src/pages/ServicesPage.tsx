import React from 'react';
import { SolutionsHero } from '../components/solutions/SolutionsHero';
import { Services } from '../components/sections/Services';
import { CallToAction } from '../components/sections/CallToAction';

export function ServicesPage() {
  return (
    <div>
      <SolutionsHero />
      <Services />
      <CallToAction />
    </div>
  );
}