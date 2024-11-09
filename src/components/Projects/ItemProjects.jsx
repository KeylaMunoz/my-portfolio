import Item from "./Item"
import './projects.css'

const ItemProjects = ({projects}) => {

   

    return(
        <div className='conteinetProjects'>
            {
                projects.map( (project) => (
                <Item key={project.id} project = {project} />
                ))
            }
        </div>
    )
}
 
export default ItemProjects
