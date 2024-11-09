import './toolsAnimation.css';

const Icons = ({tool}) =>  {

    return(
        <>
            <div  className="tools-icon">
                <img src={tool.img} alt={tool.name} className="tools-img"/>
            </div>
        </>
    )
    
}

export default Icons