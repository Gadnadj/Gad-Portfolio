import Headers from './components/Headers';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import SectionDivider from './components/SectionDivider';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Headers />
      <Hero />
      <About />
      <SectionDivider bgColor="bg-secondary" />
      <Skills />
      <SectionDivider bgColor="bg-secondary" />
      <Portfolio />
      <SectionDivider bgColor="bg-secondary" />
      <Education />
      <SectionDivider />
      <Contact />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
