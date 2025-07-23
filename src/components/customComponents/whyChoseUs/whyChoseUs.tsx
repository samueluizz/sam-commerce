import React from 'react';
import Benefits from './benefits';
import Testimonials from './testimonials';
import Partners from './partners';

export default function WhyChoseUs() {
  return (
    <section
      id='why-choose-us'
      className='relative items-center w-full max-w-7xl py-4'
    >
      <Benefits />
      <Testimonials />
      <Partners />
    </section>
  );
}
