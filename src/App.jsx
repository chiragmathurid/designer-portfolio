import { useState } from 'react';
import Hero from './Componente/Hero';
import Services from './Componente/Services';
import Experience from './Componente/Experience';
import AboutMe from './Componente/AboutMe';
import FAQ from './Componente/FAQ';
import Footer from './Componente/Footer';
import CaseStudyPage from './Componente/CaseStudyPage';

function App() {
  const [caseStudyProject, setCaseStudyProject] = useState(null);

  if (caseStudyProject) {
    return <CaseStudyPage projectType={caseStudyProject} onBack={() => setCaseStudyProject(null)} />;
  }

  return (
    <>
      <Hero onOpenCaseStudy={setCaseStudyProject} />
      <Services />
      <Experience />
      <AboutMe />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;