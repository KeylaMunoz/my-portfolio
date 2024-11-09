import { useTranslation } from 'react-i18next';
import './projects.css'

const Item = ({project}) => {
     const { t } = useTranslation();

    const handleRedirect = (link) => {
        window.open (link, '_blank');
    }

    return (
        <div className='card'>
            <div className='divImage'>
                <img className="imgProyect" src={project.img} alt={project.title}/>  
            </div>
            <h1 className='nameProject'>{project.title}</h1>               
            <div className='divInfo'>
                <p>{project.description}</p>
                <img className="imgTools" src={project.skills} alt="tools" />
                <a href={project.link} target="_blank" className='visitarSitio'>{t('visitarSitio')}</a>
            </div>
        </div>
    )
}

export default Item