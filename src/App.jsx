import NavBar from './components/NavBar/NavBar';
import InfoPersonal from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Tools from './components/Tools/Tools';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';


function Welcome(){
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  };

  return (
    <div>
      <NavBar changeLanguage={changeLanguage} />
      <h1 className='bienvenidos'>{t('bienvenidos')}</h1>
      <div id="aboutMe">
        <InfoPersonal />
      </div>
      <div id="projects">
        <h1 className='tituloSeccion'>{t('proyectos')}</h1>
        <Projects/>
      </div>
      <div id="tools">
        <h1 className='tituloSeccion'>{t('herramientas')}</h1>
        <Tools/>
      </div>
      <div id="contact">
        <h1 className='tituloSeccion' >{t('contacto')}</h1>
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
