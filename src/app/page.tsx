import About from './sections/About';
import Header from './sections/Header';
import Hero from './sections/Hero';
import OurServices from './sections/Services';
import Career from './sections/Career';
import Contacts from './sections/Contacts/Contacts';
import Gallery from './sections/Gallery';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        {/* <OurServices /> */}
        {/* <Career /> */}
        {/* <Gallery /> */}
        {/* <Contacts /> */}
      </main>
    </>
  );
}
