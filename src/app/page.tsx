import About from './sections/About';
import Header from './sections/Header';
import Hero from './sections/Hero';

import Career from './sections/Career';
import Contacts from './sections/Contacts/Contacts';
import Gallery from './sections/Gallery';
import Services from './sections/Services';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        {/* <Career /> */}
        {/* <Gallery /> */}
        {/* <Contacts /> */}
      </main>
    </>
  );
}
