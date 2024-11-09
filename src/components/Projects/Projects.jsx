import ItemProjects from './ItemProjects'
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import data from '../../data/data.js'
import { useTranslation } from 'react-i18next';
import './projects.css'

const Projects = () => { 

    const [projects, setProjects ] = useState ([])
    const { i18n } = useTranslation();

    const getProjects = () =>  {
        const projectsData = collection (data, "projects")
        getDocs(projectsData)
        .then((projectsDb) => {
            const data = projectsDb.docs.map( (project) => {
                
                const projectInfo = project.data(); 

                const title = i18n.language === 'es' ? projectInfo.titulo : projectInfo.title;
                const description = i18n.language === 'es' ? projectInfo.descripcion : projectInfo.description;

                return {
                    id: project.id,
                    title,
                    description,
                    img: projectInfo.image,
                    link: projectInfo.link,
                    skills: projectInfo.skills
                };
            })
            setProjects(data)
        }) 
        .catch((error) => {
            console.log(error)
        })
        .finally(() => console.log("finalizado"))
    }

    useEffect( () => {
        getProjects()
    }, [i18n.language]);


    return (
        <section >
            <div > 
                <ItemProjects projects = {projects} />           
            </div>
      </section>
    )
}
export default Projects