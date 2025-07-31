import { Box } from "@mui/material"
import Item from "./Item"
const ItemProjects = ({projects}) => {

   

    return(
        <Box sx={{  flexWrap: 'wrap', display: "flex", justifyContent: "center" , gap: "5%"}}>
            {
                projects.map( (project) => (
                <Item key={project.id} project = {project} />
                ))
            }
        </Box>
    )
}
 
export default ItemProjects
