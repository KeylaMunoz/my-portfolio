import { useTranslation, Trans } from 'react-i18next';
import './aboutMe.css'

const InfoPersonal = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className='conteinerAbout' id="aboutMe">
                <img className='imgMe' src="/img/icono2.png" alt="yo" />
                <div className='conteinerName'>
                    <h2 className='name'>{t('nombre')}</h2>
                    <h3 className='developer'>{t('titulo')}</h3>
                </div>
            </div>
            <div className='conteinerDescription'>
                <p className='description'>
                    <Trans i18nKey="descripcion">
                        Hola! Soy Keyla Muñoz, Desarrolladora Web enfocada en crear sitios innovadores y funcionales. Me especializo en <strong>Frontend</strong> con <strong>React.js</strong> y actualmente estoy profundizando mis conocimientos en <strong>Backend</strong> con <strong>Node.js</strong> y bases de datos <strong>NoSQL</strong>. Me apasiona aprender y aplicar nuevas tecnologías, y estoy en búsqueda de oportunidades donde pueda aportar mis habilidades y continuar mi crecimiento profesional.
                    </Trans>
                </p>
                <a href="https://drive.google.com/file/d/1rS3EI7xE9jftrA1XXGRzBy0WKWK55PsP/view?usp=sharing" target="_blank" className='cv'>{t('cv')}</a>
            </div>
        </div>
    )
}

export default InfoPersonal