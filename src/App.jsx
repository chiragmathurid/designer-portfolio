import { Routes, Route } from 'react-router-dom';
import Hero from './Componente/Hero';
import Services from './Componente/Services';
import Experience from './Componente/Experience';
import AboutMe from './Componente/AboutMe';
import FAQ from './Componente/FAQ';
import Footer from './Componente/Footer';
import CaseStudyPage from './Componente/CaseStudyPage';
import ContactPage from './Componente/ContactPage';

// Main page - all your sections together
const MainPage = () => (
  <>
    <Hero />
    <Services />
    <Experience />
    <AboutMe />
    <FAQ />
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/case-study/:type" element={<CaseStudyPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  );
}

export default App;