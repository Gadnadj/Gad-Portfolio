import Headers from './components/Headers';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portofolio from './components/Portofolio';
// import Experience from './components/Experience';
import Contact from './Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import SectionDivider from './components/SectionDivider';
import { LanguageProvider } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle';

function App() {
  return (
    <LanguageProvider>
      <div className="overflow-x-hidden">
        <Headers />
        <LanguageToggle />
        <Hero />
        <SectionDivider bgColor="bg-secondary" />
        <About />
        <SectionDivider bgColor="bg-tertiary" />
        <Skills />
        <SectionDivider bgColor="bg-tertiary" />
        <Portofolio />
        <SectionDivider bgColor="bg-tertiary" />
        {/* <Experience /> */}
        <SectionDivider />
        <Contact />
        <Footer />
        <BackToTopButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
