import React from 'react';
import { PortfolioHero } from '../components/portfolio/PortfolioHero';
import { Portfolio } from '../components/sections/Portfolio';
import { CallToAction } from '../components/sections/CallToAction';

export function PortfolioPage() {
  return (
    <div>
      <PortfolioHero />
      <Portfolio />
      <CallToAction />
    </div>
  );
}