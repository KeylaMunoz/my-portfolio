import AppBar from './components/NavBar/ResponsiveAppBar';
import AboutMe from './components/AboutMe/AboutMeMUI';
import Projects from './components/Projects/Projects';
import Tools from './components/Tools/Tools';
import ToolsMUI from './components/Tools/toolsMUI';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { Typography } from '@mui/material';

function Welcome(){
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  };

  return (
    <div>
      <AppBar changeLanguage={changeLanguage} />
      <div id="aboutMe">
        <AboutMe/>
      </div>
      <br />
      <div id="projects">
        <Typography sx={{ml: "5%"}} variant="h1">{t('proyectos')}</Typography>
        <Projects/>
      </div>
      <div id="tools">
        <Typography sx={{ml: "5%"}} variant="h1">{t('herramientas')}</Typography>
        <ToolsMUI/>
      </div>
      <div id="contact">
        <Typography  sx={{ml: "5%"}} variant="h1">{t('contacto')}</Typography>
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

function App() {
  return (
    <Suspense fallback="Cargando traducciones">
      <Welcome/>
    </Suspense>
  )
}

export default App
