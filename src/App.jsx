import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <>
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
      <div className="app-container">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;