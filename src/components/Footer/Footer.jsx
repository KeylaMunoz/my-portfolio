import { useTranslation} from 'react-i18next';
import './footer.css'

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className='containerFooter'>
                <div className='contactoF'>
                    <p>{t('contactame')}</p>
                    <p>keyla.keyla.munoz@gmail.com</p>
                    <p>+54 9 381 3644789</p>
                </div>
                <div className='divImg'>
                    <a href="https://github.com/KeylaMunoz" target="_blank">
                        <img src="/img/github.png" alt="gitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/keyla-abigail-mu%C3%B1oz-1b1755287/" target="_blank">                      
                        <img src="/img/linkedin.png" alt="linkedin" />
                    </a>
                </div>
                <div>
                    <p>{t('marca')}</p>
                    <p>{t('derechos')}</p>
                    <p>Argentina.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer