import './App.css'
import Header from './components/Header/Header'

import Hero from './layouts/HeroSection/HeroSection'
import AboutMe from './layouts/AboutMeSection/AboutMeSection';
import ProjectsSection from './layouts/ProjectsSection/ProjectsSection';
import ContactSection from './layouts/ContactSection/ContactSection';
import Footer from './layouts/Footer/Footer';

import TitleSection from './components/TitleSection/TitleSection';

function App() {
  return (
    <>
      <Header/>

      <Hero id="home"/>

      <TitleSection  id="about"title='Sobre Mim'/>
      <AboutMe />

      <TitleSection id="projects" title='Projetos'/>
      <ProjectsSection />

      <TitleSection id="contact" title='Contato'/>
      <ContactSection />

      <Footer/>
    </>
  )
}


export default App
