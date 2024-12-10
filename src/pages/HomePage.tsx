import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/sections/Services';
import { Testimonials } from '../components/sections/Testimonials';
import { Portfolio } from '../components/sections/Portfolio';
import { About } from '../components/sections/About';
import { CallToAction } from '../components/sections/CallToAction';
import { FAQ } from '../components/sections/FAQ';
import { Blog } from '../components/sections/Blog';
import { Contact } from '../components/sections/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <Portfolio />
      <About />
      <CallToAction />
      <FAQ />
      <Blog />
      <Contact />
    </>
  );
}