import Headers from './components/Headers';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portofolio from './components/Portofolio';
import Education from './components/Education';
import Contact from './Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import SectionDivider from './components/SectionDivider';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Headers />
      <Hero />
      <SectionDivider bgColor="bg-secondary" />
      <About />
      <SectionDivider bgColor="bg-tertiary" />
      <Skills />
      <SectionDivider bgColor="bg-tertiary" />
      <Portofolio />
      <SectionDivider bgColor="bg-tertiary" />
      <Education />
      <SectionDivider />
      <Contact />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
