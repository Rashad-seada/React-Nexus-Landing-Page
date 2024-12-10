import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { About } from '../components/sections/About';
import { Testimonials } from '../components/sections/Testimonials';

export function AboutPage() {
  return (
    <div>
      <AboutHero />
      <About />
      <Testimonials />
    </div>
  );
}