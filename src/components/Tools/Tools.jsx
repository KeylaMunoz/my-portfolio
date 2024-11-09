import Icons from "./Icons.jsx"
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import data from "../../data/data.js"
import './toolsAnimation.css';

const Tools = () => {

    const [tools, setTools] = useState([])

    const getTools = () => {

        const toolsData = collection (data, "skills")
        getDocs(toolsData)
        .then((toolsDb) => {
            const data = toolsDb.docs.map((tools) => {
                return { id: tools.id, ...tools.data() }
            })
            setTools(data)
        })
        .catch((error) => { 
            console.log(error)
        })
        .finally(() => console.log("finalizado"))
    }

    useEffect( () => {
        getTools()
    }, []);

    return (
        <section className="animation-container">
            <div className="central-image">
                <img src="/img/laptop.png" alt="" className="laptop" />
             </div>
            <div className="orbit">
                {
                    tools.map( (tool) => (
                        <Icons key={tool.id} tool = {tool} />
                        ))
                }
            </div>
        </section>

    )

}

export default Tools