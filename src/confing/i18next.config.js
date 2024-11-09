import i18n from "i18next";
import Backend from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";

i18n
.use(Backend)
.use(initReactI18next)
.init({
    fallbackLng: "es",
    backend: {
        loadPath: '/locales/{{lng}}/welcome.json' // Ruta de las traducciones
      },
      interpolation: {
        escapeValue: false, // No escapa valores por seguridad, ya que React se encarga de eso
      },
      debug: true, // Activa el modo debug para ver detalles en consola
    });
  
  export default i18n;