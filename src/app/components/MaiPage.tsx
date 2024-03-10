'use client';
import About from '../sections/About';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import { Element } from 'react-scroll';

import Career from '../sections/Career';
import Contacts from '../sections/Contacts/Contacts';
import Gallery from '../sections/Gallery';
import Services from '../sections/Services';

export default function MainPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Element name="about">
          <About />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <Element name="career">
          <Career />
        </Element>
        <Element name="gallery">
          <Gallery />
        </Element>
        <Element name="contacts">
          {' '}
          <Contacts />
        </Element>
      </main>
    </>
  );
}
