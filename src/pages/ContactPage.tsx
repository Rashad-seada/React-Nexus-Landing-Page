import React from 'react';
import { ContactHero } from '../components/contact/ContactHero';
import { Contact } from '../components/sections/Contact';

export function ContactPage() {
  return (
    <div>
      <ContactHero />
      <Contact />
    </div>
  );
}